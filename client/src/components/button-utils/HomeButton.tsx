/*
File: HomeButton.tsx
Description: Redirects to home page
*/

import Link from "next/link";

const HomeButton = () => (
  <Link
    href="/"
    className="mt-6 px-6 py-3 text-black bg-accent-4 rounded-lg transform hover:scale-110 hover:bg-accent-3 transition-transform duration-300 ease-in-out"
  >
    Go to Home
  </Link>
);

export default HomeButton;
