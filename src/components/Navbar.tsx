"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';

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

function MenuIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
    );
}

function XIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle hash scrolling on page load
    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [pathname]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push(`/#${sectionId}`);
        }
    };

    const navLinks = [
        { href: '/#services', id: 'services', label: 'Services' },
        { href: '/#portfolio', id: 'portfolio', label: 'Portfolio' },
        { href: '/#faq', id: 'faq', label: 'FAQ' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-6 md:px-8 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
                        : 'bg-background/80 backdrop-blur-sm'
                }`}
            >
                <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-bold text-foreground flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                        <span className="text-primary">Strivehawk</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.id)}
                                className="text-muted text-sm hover:text-foreground transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-md border border-border glass hover:bg-foreground/10 text-foreground transition-all"
                            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                        >
                            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                        </button>
                        <Link
                            href="/contact"
                            className="hidden md:block px-4 py-2 glass border border-border rounded-md text-foreground text-sm hover:border-primary hover:text-primary transition-all"
                        >
                            Commencer
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-md border border-border glass hover:bg-foreground/10 text-foreground transition-all"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 top-20 bg-background/95 backdrop-blur-md z-40 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="flex flex-col gap-4 p-6"
                        >
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.id}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.id)}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-xl font-semibold text-foreground py-3 border-b border-border"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                                className="pt-4"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full px-6 py-3 bg-primary text-white text-center font-bold rounded-full hover:scale-105 transition-transform"
                                >
                                    Commencer
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
