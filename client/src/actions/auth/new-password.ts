/*
File: new-password.ts
Description: Function to update the user's password.
*/

"use server";

import bcrypt from "bcryptjs";

import {
  NewPasswordSchema,
  NewPasswordSchemaData,
} from "@/schemas/auth/auth-schemas";
import { getUserByEmail } from "@/utils/auth/auth-utils";
import prisma from "@/lib/prisma";
import { getPasswordResetTokenByToken } from "@/utils/auth/auth-utils";
import { unstable_update as updateToken } from "@/auth";

export const newPassword = async (
  values: NewPasswordSchemaData,
  token?: string | null
) => {
  if (!token) {
    return { error: "Missing Token!" };
  }

  const validateFields = NewPasswordSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: validateFields.error.message };
  }

  const { password } = validateFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return { error: "Invalid Token!" };
  }

  const hasExpired = new Date() > existingToken.expires;

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "User not found!" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const changedUser = await prisma.user.update({
    where: { id: existingUser.id },
    data: { hashedPassword: hashedPassword },
  });

  // Update Current Token
  updateToken({
    user: {
      name: changedUser.name,
      email: changedUser.email as string,
      isTwoFactorEnabled: changedUser.isTwoFactorEnabled,
    },
  });

  await prisma.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Password updated!" };
};
