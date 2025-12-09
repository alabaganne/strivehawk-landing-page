"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./LoadingScreen";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark"); // Default to dark mode
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Check localStorage first, then default to dark
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to dark mode for premium look
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Update document class and localStorage
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Prevent flash of wrong theme - show loading screen background color
  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-background" />
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isLoading ? 0 : 1,
          y: isLoading ? 20 : 0
        }}
        transition={{
          duration: 0.8,
          ease: [0.21, 0.47, 0.32, 0.98],
          delay: isLoading ? 0 : 0.2
        }}
      >
        {children}
      </motion.div>
    </ThemeContext.Provider>
  );
}
