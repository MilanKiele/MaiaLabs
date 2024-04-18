/*
File: loading.tsx
Description: Always active when switching between pages
*/

import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <p>Loading...</p>
    </div>
  );
}
