'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Footer() {
    return (
        <footer className="bg-[#f5f5f5] pt-32 pb-12 px-6 border-t border-black/5">
            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
                        {/* Brand Column */}
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
                                <p className="text-gray-600 leading-relaxed">
                                    Nous développons une formule gagnante combinée à des designs pilotés par les données pour augmenter votre taux de conversion et optimiser vos funnels.
                                </p>
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                            <div className="space-y-8">
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider opacity-50">Pages</h4>
                                <ul className="space-y-4">
                                    <li><Link href="/#services" className="text-gray-600 hover:text-foreground transition-colors">Services</Link></li>
                                    <li><Link href="/#portfolio" className="text-gray-600 hover:text-foreground transition-colors">Portfolio</Link></li>
                                    <li><Link href="/about" className="text-gray-600 hover:text-foreground transition-colors">À propos</Link></li>
                                    <li><Link href="/contact" className="text-gray-600 hover:text-foreground transition-colors">Contact</Link></li>
                                </ul>
                            </div>

                            <div className="space-y-8">
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider opacity-50">Information</h4>
                                <ul className="space-y-4">
                                    <li><Link href="/#faq" className="text-gray-600 hover:text-foreground transition-colors">FAQ</Link></li>
                                    <li><Link href="/legal" className="text-gray-600 hover:text-foreground transition-colors">Mentions Légales</Link></li>
                                    <li><Link href="/privacy" className="text-gray-600 hover:text-foreground transition-colors">Confidentialité</Link></li>
                                </ul>
                            </div>

                            <div className="space-y-8">
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider opacity-50">Réseaux</h4>
                                <ul className="space-y-4">
                                    <li><Link href="#" className="text-gray-600 hover:text-foreground transition-colors">Twitter</Link></li>
                                    <li><Link href="#" className="text-gray-600 hover:text-foreground transition-colors">LinkedIn</Link></li>
                                    <li><Link href="#" className="text-gray-600 hover:text-foreground transition-colors">Instagram</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-black/5 text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} Strivehawk Agency - Fait avec <span className="text-primary">♥</span> depuis partout dans le monde</p>
                        <div className="flex gap-8">
                            <Link href="#" className="hover:text-foreground transition-colors">Plan du site</Link>
                            <Link href="#" className="hover:text-foreground transition-colors">Accessibilité</Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
}
