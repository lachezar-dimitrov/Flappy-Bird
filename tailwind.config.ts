import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            },
            margin: {
                "6": "1.5rem",
            },
            backgroundSize: {
                contain: "contain",
                "repeat-round": "repeat-round",
            },
            zIndex: {
                "1": "1",
            },
        },
    },
    plugins: [],
};

export default config;
