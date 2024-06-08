/*
File: Navbar.tsx
Description: Main Navigation components.
*/

import Link from "next/link";
import { LogoTitle } from "./LogoTitle";
import SignInProfileButton from "../auth/SignInProfileButton";
import MultiDropdownMenu from "./MultiDropdownMenu";
import { enterprise, libraryNews, resource, useAI } from "@/constants";
import NavbarOverlay from "./NavbarOverlay";

export default function Navbar() {
  const tabs = [useAI, libraryNews, resource, enterprise];

  const click = () => {
    console.log("click");
  };

  return (
    <nav className="navbar">
      <div className="bg-white border-b-2 border-red-500 border-opacity-0 mb-1 h-24 flex items-center justify-between py-2 px-2 md:px-12">
        <div className="w-full max-w-[1920px] h-full flex items-center justify-center justify-between">
          {/* Logo */}
          <div className="h-full flex items-center justify-left">
            <Link
              href="/"
              className="block font-sans text-3xl font-bold text-gray-800 tracking-tight text-start p-2"
            >
              <LogoTitle />
            </Link>
          </div>
          {/* Navbar Elements */}
          <div className="h-full flex items-center justify-center gap-12">
            <div className="canvas-desktop">
              <div className="flex gap-4">
                <MultiDropdownMenu menu={useAI} />
                <MultiDropdownMenu menu={libraryNews} />
                {/* <Link href={cat.link || "/"}>{cat.title}</Link> */}
                <MultiDropdownMenu menu={resource} />
                <MultiDropdownMenu menu={enterprise} />
              </div>
            </div>
          </div>
          {/* Profile Button */}
          <div className="canvas-desktop">
            <SignInProfileButton />
          </div>
          {/* Navbar Overlay */}
          <div className="canvas-mobile">
            <NavbarOverlay />
          </div>
        </div>
      </div>
    </nav>
  );
}
