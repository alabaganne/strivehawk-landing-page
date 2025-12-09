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
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
                display: ["var(--font-inter)", "system-ui", "sans-serif"],
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
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "grid-pattern": "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            },
            backgroundSize: {
                "grid-pattern": "50px 50px",
            },
        },
    },
    plugins: [],
};
export default config;
