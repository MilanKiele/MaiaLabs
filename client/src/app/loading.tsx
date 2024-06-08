/*
File: loading.tsx
Description: Always active when switching between pages
*/

import React from "react";

export default function Loading() {
  return (
    <main className="loading-page flex justify-center items-center">
      <div className="flex justify-center items-center h-full h-full">
        <p>Loading...</p>
      </div>
    </main>
  );
}
