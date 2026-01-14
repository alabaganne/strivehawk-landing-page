'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        const card = cardRef.current;
        if (!section || !card) return;

        const ctx = gsap.context(() => {
            // Animate card entrance
            gsap.from(card, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                scale: 0.95,
                y: 60,
                duration: 1.2,
                ease: 'power3.out',
            });

            // Animate content with stagger
            const title = card.querySelector('.cta-title');
            const description = card.querySelector('.cta-description');
            const button = card.querySelector('.cta-button');

            if (title) {
                gsap.from(title, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                    },
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    delay: 0.2,
                    ease: 'power3.out',
                });
            }

            if (description) {
                gsap.from(description, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                    },
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    delay: 0.4,
                    ease: 'power3.out',
                });
            }

            if (button) {
                gsap.from(button, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                    },
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.6,
                    delay: 0.6,
                    ease: 'back.out(1.7)',
                });
            }

            // Parallax effect for background elements (desktop only)
            if (window.innerWidth >= 768) {
                const bgOrbs = card.querySelectorAll('.bg-orb');
                bgOrbs.forEach((orb, index) => {
                    gsap.to(orb, {
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 85%',
                            end: 'bottom 20%',
                            scrub: 1,
                        },
                        y: index % 2 === 0 ? -30 : 30,
                        scale: 1.1,
                        ease: 'none',
                    });
                });
            }
        }, section);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        // Only enable mouse tracking on desktop
        if (window.innerWidth < 768) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!cardRef.current) return;
            
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            setMousePosition({ x, y });
        };

        const card = cardRef.current;
        if (card) {
            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseenter', () => setIsHovered(true));
            card.addEventListener('mouseleave', () => setIsHovered(false));
        }

        return () => {
            if (card) {
                card.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    useEffect(() => {
        if (!cardRef.current || window.innerWidth < 768) return;

        const card = cardRef.current;
        const glow = card.querySelector('.interactive-glow');

        if (glow && isHovered) {
            gsap.to(glow, {
                x: mousePosition.x,
                y: mousePosition.y,
                duration: 0.3,
                ease: 'power2.out',
            });
        }
    }, [mousePosition, isHovered]);

    return (
        <section ref={sectionRef} className="py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-6 bg-background relative overflow-hidden">
            {/* Background gradient - reduced on mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[700px] md:w-[900px] h-[600px] sm:h-[700px] md:h-[900px] bg-gradient-radial from-primary/8 via-primary/5 to-transparent blur-3xl pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div 
                    ref={cardRef}
                    className="relative glass rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-16 lg:p-24 xl:p-32 text-center overflow-hidden isolate border border-glass-border group cursor-default"
                >
                    {/* Interactive glow that follows mouse - hidden on mobile */}
                    <div 
                        className="hidden md:block interactive-glow absolute w-[400px] h-[400px] rounded-full bg-gradient-radial from-primary/20 via-primary/12 to-transparent blur-3xl pointer-events-none transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2"
                        style={{
                            left: `${mousePosition.x}px`,
                            top: `${mousePosition.y}px`,
                            opacity: isHovered ? 0.6 : 0,
                        }}
                    />

                    {/* Animated background orbs */}
                    <div className="bg-orb absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)] -z-10"></div>
                    <div className="bg-orb absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/8 via-primary/4 to-transparent -z-10 opacity-60"></div>
                    
                    {/* Decorative elements - smaller on mobile */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-24 h-24 sm:w-32 md:w-40 sm:h-32 md:h-40 border border-primary/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-20 h-20 sm:w-24 md:w-32 sm:h-24 md:h-32 border border-primary/8 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Title with mobile-optimized sizing */}
                        <h2 className="cta-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground mb-4 sm:mb-5 md:mb-6 lg:mb-8 tracking-tight leading-[1.1] px-2 sm:px-0">
                            Prêt à renforcer vos performances et vos équipes ?
                        </h2>

                        {/* Description with mobile-optimized spacing */}
                        <p className="cta-description text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 leading-relaxed font-light px-4 sm:px-6">
                            Discutons de votre projet et trouvons ensemble la solution la plus adaptée à votre réalité.
                        </p>

                        {/* Enhanced button with mobile-optimized sizing */}
                        <Link
                            ref={buttonRef}
                            href="/contact"
                            className="cta-button group relative inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white bg-primary rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:shadow-2xl w-full sm:w-auto max-w-sm sm:max-w-none"
                        >
                            {/* Button glow effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                            
                            {/* Button background gradient */}
                            <span className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            
                            {/* Ripple effect */}
                            <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"></span>
                            
                            {/* Button content */}
                            <span className="relative z-10 flex items-center gap-2 sm:gap-2.5 text-center">
                                <span className="whitespace-nowrap">Commencer maintenant</span>
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </span>
                            
                            {/* Shine effect on hover */}
                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                        </Link>

                        {/* Trust indicators - mobile optimized */}
                        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6 text-xs sm:text-sm text-muted px-4">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="whitespace-nowrap">Réponse sous 24h</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="whitespace-nowrap">Consultation gratuite</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="whitespace-nowrap">Sans engagement</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
