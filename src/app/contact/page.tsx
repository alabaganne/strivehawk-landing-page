'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'lome@strivehawk.com',
    href: 'mailto:lome@strivehawk.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Téléphone',
    value: '+228 70 75 88 04',
    href: 'tel:+22870758804',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Adresse',
    value: 'Lomé, Togo — Afrique de l\'Ouest',
    href: '#',
  },
];

export default function ContactPage() {
    const pageRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const contactInfoRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        const ctx = gsap.context(() => {
            if (prefersReducedMotion) {
                if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0 });
                if (formRef.current) {
                    const inputs = formRef.current.querySelectorAll('input, textarea, button');
                    inputs.forEach((input) => gsap.set(input, { opacity: 1, y: 0 }));
                }
                if (contactInfoRef.current) {
                    const cards = contactInfoRef.current.querySelectorAll('.contact-card, .office-card');
                    cards.forEach((card) => gsap.set(card, { opacity: 1, y: 0 }));
                }
                return;
            }

            if (titleRef.current) {
                gsap.from(titleRef.current, {
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    },
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    ease: 'power2.out',
                });
            }

            if (formRef.current) {
                const formContainer = formRef.current.parentElement;
                const inputs = formRef.current.querySelectorAll('input, textarea, button');
                
                inputs.forEach((input) => {
                    gsap.set(input, { opacity: 1, y: 0 });
                });

                gsap.from(inputs, {
                    scrollTrigger: {
                        trigger: formContainer,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                    stagger: 0.06,
                    ease: 'power2.out',
                });
            }

            if (contactInfoRef.current) {
                const cards = contactInfoRef.current.querySelectorAll('.contact-card, .office-card');
                
                cards.forEach((card) => {
                    gsap.set(card, { opacity: 1, y: 0, scale: 1 });
                });

                cards.forEach((card, index) => {
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse',
                        },
                        opacity: 0,
                        y: 25,
                        scale: 0.98,
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: 'power2.out',
                    });
                });
            }

            if (window.innerWidth >= 768) {
                const orbs = pageRef.current?.querySelectorAll('.gradient-orb');
                if (orbs) {
                    orbs.forEach((orb, index) => {
                        gsap.to(orb, {
                            x: index === 0 ? 30 : -30,
                            y: index === 0 ? -20 : 20,
                            scale: 1.05,
                            duration: 30,
                            repeat: -1,
                            yoyo: true,
                            ease: 'sine.inOut',
                            delay: index * 15,
                        });
                    });
                }
            }
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <main ref={pageRef} className="min-h-screen bg-background flex flex-col relative overflow-hidden">
            <Navbar />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="gradient-orb absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/20 via-primary/10 to-transparent blur-[120px] -top-[200px] -left-[100px] opacity-40" />
                <div className="gradient-orb absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary/15 via-primary/8 to-transparent blur-[100px] -bottom-[150px] -right-[100px] opacity-35" />
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
            </div>

            <div className="flex-grow pt-32 pb-20 px-6 md:px-12 lg:px-16 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-20">
                        <h1
                            ref={titleRef}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
                            style={{ opacity: 1 }}
                        >
                            Parlez-nous de{' '}
                            <span className="gradient-text">votre projet</span>
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-muted max-w-3xl mx-auto leading-relaxed">
                            Notre équipe vous répond sous 24h pour définir la solution la plus adaptée à vos besoins.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <div ref={contactInfoRef} className="space-y-6">
                            <div className="glass rounded-2xl p-8 md:p-10 backdrop-blur-xl border border-glass-border shadow-lg">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                                    Informations de contact
                                </h2>
                                <div className="space-y-4">
                                    {contactMethods.map((method, index) => (
                                        <a
                                            key={index}
                                            href={method.href}
                                            className="contact-card group flex items-center gap-4 p-5 rounded-xl bg-surface/60 hover:bg-surface/80 border-2 border-border/70 hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                                            style={{ opacity: 1 }}
                                        >
                                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 flex-shrink-0 shadow-md border border-primary/30">
                                                {method.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-xs md:text-sm font-semibold text-muted mb-1 uppercase tracking-wider group-hover:text-foreground/80 transition-colors">
                                                    {method.label}
                                                </div>
                                                <div className="text-sm md:text-base lg:text-lg font-bold text-foreground group-hover:text-primary transition-colors break-words">
                                                    {method.value}
                                                </div>
                                            </div>
                                            <svg className="w-4 h-4 md:w-5 md:h-5 text-muted/60 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="office-card glass rounded-2xl p-8 md:p-10 backdrop-blur-xl border border-glass-border shadow-lg" style={{ opacity: 1 }}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                        Notre bureau
                                    </h3>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">
                                        198 rue de l'hôpital Tokoin hôpital
                                    </p>
                                    <p className="text-base md:text-lg text-muted leading-relaxed">
                                        Face entrée CHU-SO de Tokoin
                                    </p>
                                </div>
                            </div>
                        </div>
                                        
                        <div className="glass rounded-2xl p-8 md:p-10 lg:p-12 backdrop-blur-xl border border-glass-border relative overflow-hidden shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50 -z-10"></div>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-foreground block">
                                            Nom complet *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full glass border-2 border-border/70 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted/60"
                                            placeholder="Votre nom complet"
                                            style={{ opacity: 1 }}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-foreground block">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full glass border-2 border-border/70 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted/60"
                                            placeholder="votre@email.com"
                                            style={{ opacity: 1 }}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-semibold text-foreground block">
                                            Téléphone *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            className="w-full glass border-2 border-border/70 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted/60"
                                            placeholder="+228 XX XX XX XX"
                                            style={{ opacity: 1 }}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-semibold text-foreground block">
                                            Entreprise
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            className="w-full glass border-2 border-border/70 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted/60"
                                            placeholder="Nom de votre entreprise"
                                            style={{ opacity: 1 }}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-foreground block">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={6}
                                        className="w-full glass border-2 border-border/70 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-muted/60"
                                        placeholder="Détaillez votre projet, vos besoins et vos objectifs..."
                                        style={{ opacity: 1 }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full group relative px-8 py-4 bg-primary text-white font-bold text-lg rounded-xl overflow-hidden transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/30 hover:shadow-primary/50"
                                    style={{ opacity: 1 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-500/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Envoi en cours...
                                            </>
                                        ) : (
                                            <>
                                                Envoyer ma demande
                                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </>
                                        )}
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
