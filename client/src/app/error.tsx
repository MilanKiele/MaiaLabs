/*
File: error.tsx
Description: Always active when error occurs
*/

"use client";

import HomeButton from "@/components/button-utils/HomeButton";

export default function Error() {
  return (
    <main className="error-page">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="font-bold text-6xl bg-gradient-to-t from-accent-3 to-accent-1 text-transparent bg-clip-text">
              Error
            </h1>
            <h1 className="font-bold text-4xl bg-gradient-to-t from-accent-3 to-accent-1 text-transparent bg-clip-text">
              Oops an error occurred!
            </h1>
          </div>
          <HomeButton />
        </div>
      </div>
    </main>
  );
}
