import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary)",
                    hover: "var(--primary-hover)",
                    glow: "var(--primary-glow)",
                },
                surface: {
                    DEFAULT: "var(--surface)",
                    hover: "var(--surface-hover)",
                },
                border: "var(--border)",
                muted: "var(--muted)",
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
