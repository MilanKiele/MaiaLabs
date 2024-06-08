/*
File: NavbarOverlay.tsx
Description: The Overlay or Mobile Menu for the Navbar.
*/

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import MultiDropdownMenu from "@/components/base/MultiDropdownMenu";
import { LogoTitle } from "@/components/base/LogoTitle";
import { enterprise, libraryNews, resource, useAI } from "@/constants";

const NavbarOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tabs = [useAI, libraryNews, resource, enterprise];

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className="flex items-center justify-center h-full w-full"
        ref={dropdownRef}
      >
        <button
          className="m-4 text-gray-500 hover:text-gray-700 focus:outline-none z-50 min-w-[20px]"
          onClick={toggleOverlay}
        >
          {isOpen ? (
            <Image
              src="/icons/xmark.svg"
              alt="Close"
              width={20}
              height={20}
              className="svg-icon"
              style={{ width: "20px", height: "20px" }}
            />
          ) : (
            <Image
              src="/icons/menu-bar.svg"
              alt="Open"
              width={20}
              height={20}
              className="svg-icon"
              style={{ width: "20px", height: "20px" }}
            />
          )}
        </button>
        <div
          className={`absolute w-full top-0 left-0 right-0 flex justify-center ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-300`}
        >
          <div className="border-b-2 border-red-500 border-opacity-0 h-24 flex items-center justify-between w-full h-full">
            <div className="w-full z-1 w-full h-full m-2 p-6 bg-white rounded-lg shadow-xl md:px-12">
              <div className="flex justify-between mb-6">
                <a href="/" className="text-3xl font-bold text-black">
                  <LogoTitle />
                </a>
              </div>

              <div className="space-y-6">
                {tabs.map((tab: any, index: number) => (
                  <div className="w-[50%]" key={index}>
                    <MultiDropdownMenu menu={tab} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarOverlay;
