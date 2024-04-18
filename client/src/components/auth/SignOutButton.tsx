/*
File: SignOutButton.tsx
Description: Simple Button Function to sign out.
*/

import { auth, signOut } from "@/auth";

const SignOutButton = async () => {
  const session = await auth();

  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </>
  );
};

export default SignOutButton;
