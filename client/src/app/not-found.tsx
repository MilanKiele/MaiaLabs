/*
File: not-found.tsx
Description: Active when no page was found.
*/

import HomeButton from "@/components/button-utils/HomeButton";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="font-bold text-6xl bg-gradient-to-t from-accent-3 to-accent-1 text-black bg-clip-text">
              404.
            </h1>
            <h1 className="font-bold text-4xl bg-gradient-to-t from-accent-3 to-accent-1 text-black bg-clip-text">
              Page not found!
            </h1>
          </div>
          <HomeButton />
        </div>
      </div>
    </main>
  );
}
