'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';

export default function CTA() {
    return (
        <section className="py-32 px-4 md:px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                <FadeIn>
                    <div className="relative bg-surface border border-border rounded-[3rem] p-12 md:p-32 text-center overflow-hidden isolate shadow-lg dark:shadow-none">
                        {/* Subtle Gradient Mesh */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(77,170,221,0.08)_0%,transparent_70%)] -z-10" />
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent -z-10 opacity-50" />

                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-5xl md:text-7xl md:leading-tight font-bold text-foreground mb-8 tracking-tight">
                                Prêt à propulser votre marque <br />
                                <span className="font-serif italic text-foreground/90">vers de nouveaux sommets ?</span>
                            </h2>

                            <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-16 leading-relaxed font-light">
                                Si vous souhaitez obtenir une croissance révolutionnaire grâce à un design web performant et des solutions IA, vous êtes au bon endroit.
                            </p>

                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-primary rounded-xl overflow-hidden transition-transform hover:scale-105 active:scale-95"
                            >
                                <span className="relative z-10">Réserver un appel</span>
                                <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
