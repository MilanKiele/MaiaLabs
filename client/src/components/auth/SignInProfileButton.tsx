/*
File: SignInProfileButton.tsx
Description: Simple Button Function to login.
*/

import Link from "next/link";

import { redirectLoginPage } from "@/utils/auth/auth-utils";
import { auth } from "@/auth";

export default async function SignInProfileButton() {
  const session = await auth();

  return (
    <>
      {session ? (
        // If the user is logged in, display a link to the profile settings
        <Link className="" href="/auth/settings">
          Profile
        </Link>
      ) : (
        // If the user is not logged in, display a sign-in button
        <Link className="" href={redirectLoginPage}>
          Sign in
        </Link>
      )}
    </>
  );
}
