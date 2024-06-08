/*
File: tailwind.config.ts
Description: Defines variables to be used in tailwindcss.
*/

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // root
        "primary": "var(--primary)",
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "primary-unselected": "var(--primary-unselected)",
        "primary-selected": "var(--primary-selected)",
        "secondary": "var(--secondary)",
        "secondary-unselected": "var(--secondary-unselected)",
        "secondary-selected": "var(--secondary-selected)",
        "accent-1": "var(--accent-1)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
        "accent-4": "var(--accent-4)",
        "border": "var(--border)",
        "input": "var(--input)",
        "radius": "var(--radius)",
        "popover": "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        "card": "var(--card)",
        "card-foreground": "var(--card-foreground)",
        "muted": "var(--muted)",
        "muted-foreground": "var(--muted-foreground)"
      },
    },
  },
  plugins: [],
};
export default config;
