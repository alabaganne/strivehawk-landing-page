'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    const titleRef = useRef(null);
    const contactInfoRef = useRef(null);
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
    const contactInView = useInView(contactInfoRef, { once: true, margin: "-100px" });
    const formInView = useInView(formRef, { once: true, margin: "-100px" });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            company: formData.get('company') as string,
            message: formData.get('message') as string,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Une erreur est survenue');
            }

            setSubmitStatus({
                type: 'success',
                message: result.message || 'Votre message a été envoyé avec succès !',
            });

            e.currentTarget.reset();
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-background flex flex-col relative overflow-hidden">
            <Navbar />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="gradient-orb absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/20 via-primary/10 to-transparent blur-[120px] -top-[200px] -left-[100px] opacity-40" />
                <div className="gradient-orb absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary/15 via-primary/8 to-transparent blur-[100px] -bottom-[150px] -right-[100px] opacity-35" />
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
            </div>

            <div className="flex-grow pt-32 pb-20 px-6 md:px-12 lg:px-16 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        ref={titleRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="text-center mb-16 md:mb-20"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                            Parlez-nous de{' '}
                            <span className="gradient-text">votre projet</span>
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-muted max-w-3xl mx-auto leading-relaxed">
                            Notre équipe vous répond sous 24h pour définir la solution la plus adaptée à vos besoins.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <motion.div
                            ref={contactInfoRef}
                            initial={{ opacity: 0, y: 25 }}
                            animate={contactInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="space-y-6"
                        >
                            <div className="rounded-2xl p-8 md:p-10 bg-surface/50 border border-border/50">
                                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                                    Informations de contact
                                </h2>
                                <div className="space-y-3">
                                    {contactMethods.map((method, index) => (
                                        <motion.a
                                            key={index}
                                            href={method.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={contactInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                            className="group flex items-center gap-4 p-4 rounded-xl hover:bg-surface/80 border border-transparent hover:border-border/50 transition-all duration-300 cursor-pointer"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                                                {method.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-xs text-muted mb-0.5 uppercase tracking-wider">
                                                    {method.label}
                                                </div>
                                                <div className="text-sm md:text-base text-foreground group-hover:text-primary transition-colors break-words">
                                                    {method.value}
                                                </div>
                                            </div>
                                            <svg className="w-4 h-4 text-muted/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                animate={contactInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="rounded-2xl p-8 md:p-10 bg-surface/50 border border-border/50"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                                        Notre bureau
                                    </h3>
                                </div>
                                <div className="space-y-1 pl-11">
                                    <p className="text-sm md:text-base text-foreground leading-relaxed">
                                        198 rue de l'hôpital Tokoin hôpital
                                    </p>
                                    <p className="text-sm md:text-base text-muted leading-relaxed">
                                        Face entrée CHU-SO de Tokoin
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                                        
                        <motion.div
                            ref={formRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={formInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="rounded-2xl p-8 md:p-10 lg:p-12 bg-surface/50 border border-border/50"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {submitStatus.type && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-4 rounded-xl border-2 ${
                                            submitStatus.type === 'success'
                                                ? 'bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400'
                                                : 'bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            {submitStatus.type === 'success' ? (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            )}
                                            <span className="text-sm font-semibold">{submitStatus.message}</span>
                                        </div>
                                    </motion.div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm text-muted block">
                                            Nom complet *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full bg-background border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50"
                                            placeholder="Votre nom complet"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm text-muted block">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full bg-background border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50"
                                            placeholder="votre@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm text-muted block">
                                            Téléphone *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            className="w-full bg-background border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50"
                                            placeholder="+228 XX XX XX XX"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm text-muted block">
                                            Entreprise
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="w-full bg-background border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50"
                                            placeholder="Nom de votre entreprise"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm text-muted block">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        className="w-full bg-background border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted/50"
                                        placeholder="Détaillez votre projet, vos besoins et vos objectifs..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full group px-8 py-3.5 bg-primary text-white font-medium rounded-lg transition-all hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="flex items-center justify-center gap-2">
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
                                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </>
                                        )}
                                    </span>
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
