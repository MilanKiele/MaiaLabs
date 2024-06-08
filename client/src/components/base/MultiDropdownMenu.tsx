/*
File: MultidropdownMenu.tsx
Description: Navbar Selection Navigation.
*/

"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface Item {
  text: string;
  link: string;
}

interface Sub {
  title?: string;
  items: Item[];
}

interface Category {
  categoryTitle: string;
  sub: Sub[];
}

interface Props {
  menu: Category;
}

export default function MultiDropdownMenu({ menu }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="text-black pl-2 font-sans group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-4 cursor-pointer"
      >
        {menu.categoryTitle}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="text-gray-400 ml-1 h-5 w-5 group-hover:text-gray-500 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute md:left-1/2 z-10 mt-3 -translate-x-1 sm:-translate-x-1/2 transform px-2 min-w-[200px] max-w-full">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid gap-6 bg-white p-5 sm:p-8">
              {menu.sub.map((tab, index) => (
                <div key={index} className="min-w-[120px]">
                  {tab.title && (
                    <span className="block font-serif text-xs font-normal text-gray-500 mb-2">
                      {tab.title}
                    </span>
                  )}
                  <div className="space-y-4">
                    {tab.items.map((item, idx) => (
                      <Link key={idx} href={item.link}>
                        <div className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50 cursor-pointer">
                          <div className="inline-flex items-center">
                            <p className="text-base font-medium text-gray-900">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
