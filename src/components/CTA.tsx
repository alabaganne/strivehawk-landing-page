'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.cta-content', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 px-4 md:px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="relative glass rounded-[3rem] p-12 md:p-32 text-center overflow-hidden isolate">
                    {/* Animated Gradient Background */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] -z-10" />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent -z-10 opacity-50" />

                    <div className="cta-content relative z-10 flex flex-col items-center">
                        <h2 className="text-5xl md:text-7xl md:leading-tight font-bold text-foreground mb-8 tracking-tight">
                            Prêt à <span className="gradient-text">transformer</span> votre infrastructure ?
                        </h2>

                        <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-16 leading-relaxed font-light">
                            Discutons de votre projet et découvrez comment nos solutions peuvent créer un impact mesurable pour votre entreprise.
                        </p>

                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-white bg-primary rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/30"
                        >
                            <span className="relative z-10">Discutons de votre projet</span>
                            <svg
                                className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                            <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
