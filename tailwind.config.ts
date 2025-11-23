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
                background: "#030303",
                foreground: "#ededed",
                primary: {
                    DEFAULT: "#3ecf8e",
                    hover: "#34b27b",
                    glow: "rgba(62, 207, 142, 0.5)",
                },
                surface: {
                    DEFAULT: "#121212",
                    hover: "#1a1a1a",
                },
                border: "#2a2a2a",
            },
            fontFamily: {
                sans: ["var(--font-jetbrains-mono)", "monospace"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
            },
        },
    },
    plugins: [],
};
export default config;
