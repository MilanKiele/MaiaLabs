/*
File: FormWrapper.tsx
Description: Wraps a form.
*/

import React, { ReactNode } from "react";

const FormWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      {children}
    </div>
  );
};

export default FormWrapper;
