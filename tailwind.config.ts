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
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "accent-1": "#769656",
                "accent-2": "#baca4460",
                "accent-3": "#e9e9d5",
                "accent-4": "#eefed3",
                positive: "#ffffff",
                negative: "#000000",
                "negative-1": "#8a8a8aa6",
                "negative-2": "#000000de",
                "text-1": "#d7a62f",
                "primary-background": "#b9b0b0",
                "board-background": "#d9ecd0",
                "box-background": "#77a8a8",
                "primary-border": "#2c3e50",
            },
            spacing: {
                "body-height": "100vh",
                "game-height": "calc(100vh - 20vh)",
                "game-width": "90%",
                "board-height": "60vh",
                "box-width": "calc(60vh / 3)",
                "box-height": "calc(60vh / 3)",
                "symbols-font-size": "calc((60vh / 3) * 0.75)",
            },
        },
    },
    plugins: [],
};

export default config;
