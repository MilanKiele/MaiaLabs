/*
File: Footer.tsx
Description: Footer Navigation for the application.
*/

import React from "react";
import Link from "next/link";

import { footerLinks, copyRight } from "@/constants";
import SocialMediaContainer from "@/components/base/SocialMediaContainer";
import { LogoTitle } from "@/components/base/LogoTitle";

const Footer = () => {
  return (
    <footer className="footer w-full flex justify-center">
      <div className="w-full max-w-[1920px] md:px-20">
        {/* Base */}
        <div className="linking">
          <div className="flex max-md:flex-col flex-wrap justify-between gap-5 px-4 md:px-12 pt-14 pb-2">
            <div className="flex flex-col justify-center gap-6 sm:items-center sm:flex-row">
              <div className="flex flex-start font-bold w-full">
                <div>
                  <Link
                    href="/"
                    className="flex items-center text-3xl flex-col"
                  >
                    <div className="flex flex-start justify-left w-full">
                      <LogoTitle />
                    </div>
                  </Link>
                  <div className="flex flex-start justify-left w-full py-4">
                    <SocialMediaContainer />
                  </div>
                </div>
              </div>
            </div>
            {/* Links Header */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              {footerLinks.map((sec, index) => (
                <div key={index} className="mr-4">
                  <p className="font-bold">{sec.title}</p>
                  <ul className="list-none py-2">
                    {sec.items.map((item) => (
                      <li key={item.text} className="mb-2 md:mb-1">
                        <Link href={item.link} className="selection-underline">
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Legal */}
        <div className="legal">
          <div className="mt-10 pb-6 border-t border-gray-500 md:px-12">
            <div className="content-wrapper content-horizontal-padding">
              <div className="flex justify-between items-center flex-wrap pt-4 pb-2 gap-4">
                <p className="text-xs select-none">{copyRight}</p>
                <Link href="/legal" className="text-xs">
                  Legal Informations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
