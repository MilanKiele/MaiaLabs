/*
File: SocialMediaContainer.tsx
Description: Shows simple Icons to display other social media platforms.
*/

import React from "react";
import Image from "next/image";

import { DiscordLink, TwitchLink, YoutubeLink, GithubLink } from "@/constants";

const SocialMediaContainer = () => {
  const size = 32;

  return (
    <div className="flex justify-center items-center gap-2">
      <span className="rounded-full flex items-center justify-center">
        <div className="p-2 pl-0 rounded-full flex items-center justify-center">
          <div className="rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors min-w-[32px]">
            <a
              href={YoutubeLink}
              className="rounded-full"
              id="youtube-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/logo-youtube.svg"
                alt="YouTube"
                width={size}
                height={size}
                className="svg-icon"
              />
            </a>
          </div>
        </div>
        <div className="p-2 rounded-full flex items-center justify-center">
          <div className="rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors min-w-[32px]">
            <a
              href={DiscordLink}
              className="rounded-full"
              id="discord-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/logo-discord.svg"
                alt="Discord"
                width={size}
                height={size}
                className="svg-icon"
              />
            </a>
          </div>
        </div>
        <div className="p-2 rounded-full flex items-center justify-center">
          <div className="rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors min-w-[32px]">
            <a
              href={TwitchLink}
              className="rounded-full"
              id="twitch-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/logo-twitch.svg"
                alt="Twitch"
                width={size}
                height={size}
                className="svg-icon"
              />
            </a>
          </div>
        </div>
        <div className="p-2 rounded-full flex items-center justify-center">
          <div className="rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors min-w-[32px]">
            <a
              href={GithubLink}
              className="rounded-full"
              id="github-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/logo-github.svg"
                alt="Github"
                width={size}
                height={size}
                className="svg-icon"
              />
            </a>
          </div>
        </div>
      </span>
    </div>
  );
};

export default SocialMediaContainer;
