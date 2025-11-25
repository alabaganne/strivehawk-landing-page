import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#fafafa",
                foreground: "#171717",
                primary: {
                    DEFAULT: "#16a34a",
                    hover: "#15803d",
                    glow: "rgba(22, 163, 74, 0.3)",
                },
                surface: {
                    DEFAULT: "#ffffff",
                    hover: "#f5f5f5",
                },
                border: "#e5e5e5",
            },
            fontFamily: {
                sans: ["var(--font-jetbrains-mono)", "monospace"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
            },
            animation: {
                "infinite-scroll": "infinite-scroll var(--animation-delay) linear infinite forwards",
            },
            keyframes: {
                "infinite-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-50%)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
