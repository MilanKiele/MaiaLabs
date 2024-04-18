/*
File: auth.ts
Description: Defines authentication configurations and handlers using NextAuth.
Sets email always to lowercase!
*/

import NextAuth, { DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import prisma from "@/lib/prisma";
import authConfig from "@/auth.config";
import { getUserById } from "@/utils/auth/auth-utils";
import { getTwoFactorConfirmationByUserId } from "@/utils/auth/auth-utils";

// Fixing Session type for typescript
export type ExtendedUser = DefaultSession["user"] & {
  id: string;
  email: string;
  isTwoFactorEnabled: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn, // export signIn
  signOut,
  unstable_update,
} = NextAuth({
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    // error: "/auth/error", -> default
    // verifyRequest: "/auth/verify-request",
    // newUser: "/auth/new-user",
  },
  events: {
    async linkAccount({ user }) {
      // Logic to update user data on linking account
      await prisma.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Handle sign-in logic
      if (account?.provider !== "credentials") return true;

      // Prevent signin without email verification
      const existingUser = await getUserById(user.id as string);
      if (!existingUser?.emailVerified) return false;

      // Two-factor authentication logic 2FA
      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );

        if (!twoFactorConfirmation) return false;

        await prisma.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }

      // Else, allow signin
      return true;
    },
    async session({ session, token }) {
      // Update session data
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }

      if (session.user && token.isTwoFactorEnabled) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email?.toLowerCase() as string;
      }

      return session;
    },
    async jwt({ token }) {
      // Update JWT token
      if (!token.sub) return token;

      const existingUser = (await getUserById(token.sub)) || null;
      if (!existingUser) return token;

      token.name = existingUser.name;
      token.email = existingUser.email?.toLowerCase();
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token;
    },
  },
  adapter: PrismaAdapter(prisma), // Use PrismaAdapter for NextAuth
  session: { strategy: "jwt" }, // Use JWT strategy for sessions
  ...authConfig, // Additional authentication configurations
});
