"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useTheme } from './ThemeProvider';

function SunIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
    );
}

function MoonIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    );
}

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();
    const router = useRouter();

    // Handle hash scrolling on page load (for cross-page navigation)
    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            // Small delay to ensure the page is fully rendered
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [pathname]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();

        if (pathname === '/') {
            // Already on home page, just scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to home page with hash
            router.push(`/#${sectionId}`);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-8 bg-background/80 backdrop-blur-md border-b border-border z-50">
            <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <span className="text-primary">Strivehawk</span>
                </Link>

                <div className="hidden md:flex gap-8">
                    <a
                        href="/#services"
                        onClick={(e) => scrollToSection(e, 'services')}
                        className="text-muted text-sm hover:text-foreground transition-colors cursor-pointer"
                    >
                        Services
                    </a>
                    <a
                        href="/#portfolio"
                        onClick={(e) => scrollToSection(e, 'portfolio')}
                        className="text-muted text-sm hover:text-foreground transition-colors cursor-pointer"
                    >
                        Portfolio
                    </a>
                    <a
                        href="/#faq"
                        onClick={(e) => scrollToSection(e, 'faq')}
                        className="text-muted text-sm hover:text-foreground transition-colors cursor-pointer"
                    >
                        FAQ
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md border border-border bg-surface hover:bg-surface-hover text-foreground transition-all"
                        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                    >
                        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                    </button>
                    <Link href="/contact" className="px-4 py-2 bg-surface border border-border rounded-md text-foreground text-sm hover:border-primary hover:text-primary transition-all">
                        Commencer
                    </Link>
                </div>
            </div>
        </nav>
    );
}
