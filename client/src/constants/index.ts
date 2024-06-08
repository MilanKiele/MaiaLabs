/*
File: constants.ts 
Description: This file contains general variables and constants used throughout the application.
Contains:
- Footer
- Navbar
- Social Media Links
- Buttons
- Logo
*/

// General
export const webName = "MaiaLabs";
export const copyRight = "@2024 MaiaLabs. All Rights Reserved";
export const LogoSVG = "/logo.svg";

// Referal - Social Media Links
const DiscordLink = "https://discord.com";
const TwitchLink = "https://twitch.com";
const YoutubeLink = "https://youtube.com";
const GithubLink = "https://github.com";
export { DiscordLink, TwitchLink, YoutubeLink, GithubLink };
export const socialLinks = [DiscordLink, TwitchLink, YoutubeLink, GithubLink];

// Navigation buttons data
export const buttonsNavbar = [
  { title: "SignIn", link: "#" },
  { title: "SignOut", link: "#" },
];

// Voice library navigation data
export const voiceLibrary = {
  title: "Voice Library",
  items: [
    { link: "/train-voiecs", text: "Train Voices" },
    { link: "/voice-collection", text: "Voice Collection" },
  ],
};

// Speech AI navigation data
export const speechAI = {
  title: "Speech AI",
  items: [
    { link: "/text-to-speech", text: "Text to Speech" },
    { link: "/translation", text: "Speech Translation" },
    { link: "/realtime-translation", text: "Realtime Translation" },
    { link: "/dubbing", text: "Dubbing" },
  ],
};

// Research navigation data
export const research = {
  title: "Research",
  items: [
    { link: "/projects", text: "Projects" },
    { link: "/ethics", text: "Ethics" },
  ],
};

// Company navigation data
export const company = {
  title: "Company",
  items: [
    { link: "/values", text: "Values" },
    { link: "/community", text: "Community" },
    { link: "/roadmap", text: "Roadmap" },
  ],
};

// Support navigation data
export const support = {
  title: "Company",
  items: [
    { link: "/guides", text: "Guides" },
    { link: "/help", text: "Help Center" },
  ],
};

// Resources navigation data
export const resources = {
  title: "Resources",
  items: [
    { link: "/earnings", text: "Earnings" },
    { link: "/voice Market", text: "Voice Market" },
    { link: "/projects", text: "Projects" },
  ],
};

// Pricing navigation data
export const pricing = { title: "Pricing", link: "/pricing" };

export const useAI = {
  categoryTitle: "Use AI",
  sub: [
    speechAI,
    {
      title: "Title 2",
      items: [
        { text: "Item 3", link: "/item3" },
        { text: "Item 4", link: "/item4" },
      ],
    },
  ],
};

export const libraryNews = {
  categoryTitle: "Library & News",
  sub: [
    voiceLibrary,
    research,
    {
      title: "Title 2",
      items: [
        { text: "Item 3", link: "/item3" },
        { text: "Item 4", link: "/item4" },
      ],
    },
  ],
};

export const enterprise = {
  categoryTitle: "Enterprise",
  sub: [
    company,
    support,
    {
      title: "Title 2",
      items: [
        { text: "Item 3", link: "/item3" },
        { text: "Item 4", link: "/item4" },
      ],
    },
  ],
};

export const resource = {
  categoryTitle: "Resources",
  sub: [
    resources,
    {
      title: "Title 2",
      items: [
        { text: "Item 3", link: "/item3" },
        { text: "Item 4", link: "/item4" },
      ],
    },
  ],
};

//________ Footer
export const footerLinks = [
  speechAI,
  voiceLibrary,
  support,
  company,
  resources,
];
