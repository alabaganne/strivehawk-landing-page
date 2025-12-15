'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Footer() {
    return (
        <footer className="bg-surface pt-32 pb-12 px-6 border-t border-border">
            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
                        <div className="lg:col-span-5 space-y-8">
                            <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-foreground group">
                                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                Strivehawk Agency
                            </Link>

                            <div className="space-y-4 max-w-md">
                                <h3 className="text-xl font-medium text-foreground">Prêt ? Partez, Croissez !</h3>
                                <p className="text-muted leading-relaxed">
                                    Nous développons une formule gagnante combinée à des designs pilotés par les données pour augmenter votre taux de conversion et optimiser vos funnels.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                            <div className="space-y-8">
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider opacity-50">Liens rapides</h4>
                                <ul className="space-y-4">
                                    <li><Link href="/" className="text-muted hover:text-foreground transition-colors">Accueil</Link></li>
                                    <li><Link href="/#process" className="text-muted hover:text-foreground transition-colors">À propos</Link></li>
                                    <li><Link href="/#services" className="text-muted hover:text-foreground transition-colors">Services</Link></li>
                                    <li><Link href="/#partners" className="text-muted hover:text-foreground transition-colors">Partenaires</Link></li>
                                    <li><Link href="/contact" className="text-muted hover:text-foreground transition-colors">Contact</Link></li>
                                </ul>
                            </div>

                            <div className="space-y-8">
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider opacity-50">Contact</h4>
                                <ul className="space-y-4 cursor-default">
                                    <li className='flex items-center gap-2 text-muted'>
                                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <a href="mailto:lome@strivehawk.com" className="hover:text-foreground transition-colors cursor-pointer">
                                            lome@strivehawk.com
                                        </a>
                                    </li>
                                    <li className='flex items-center gap-2 text-muted'>
                                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <a href="tel:+22870758804" className="hover:text-foreground transition-colors cursor-pointer">
                                            +228 70 75 88 04
                                        </a>
                                    </li>
                                    <li className='flex items-center gap-2 text-muted'>
                                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Lomé, Togo — Afrique de l'Ouest</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-8">
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider opacity-50">Réseaux</h4>
                                <ul className="space-y-4">
                                    <li><Link href="#" className="text-muted hover:text-foreground transition-colors">Twitter</Link></li>
                                    <li><Link href="#" className="text-muted hover:text-foreground transition-colors">LinkedIn</Link></li>
                                    <li><Link href="#" className="text-muted hover:text-foreground transition-colors">Instagram</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-sm text-muted">
                        <p>© {new Date().getFullYear()} Strivehawk Agency - Fait avec <span className="text-primary">♥</span> depuis partout dans le monde</p>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
}
