/*
File: AuthSettings.tsx
Description: Settings page for authenticated users. Shows all users Data.
*/

import { auth } from "@/auth";
import FormWrapper from "@/components/FormTemplate/FormWrapper";
import SignOutButton from "@/components/auth/SignOutButton";

const AuthSettings = async () => {
  const session = await auth();

  return (
    <FormWrapper>
      <h1>Settings Page</h1>
      <div className="w-full flex overflow-x-auto">
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
      <SignOutButton />
    </FormWrapper>
  );
};

export default AuthSettings;
