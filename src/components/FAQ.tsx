'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';

const faqs = [
    {
        question: "Combien de temps faut-il pour réaliser un projet web ?",
        answer: "Le délai varie selon la complexité, mais nous visons généralement à livrer une landing page entièrement fonctionnelle en 2 à 4 semaines, en garantissant rapidité et performance."
    },
    {
        question: "Qu'est-ce qu'un audit de funnel et pourquoi est-ce important ?",
        answer: "Un audit de funnel analyse votre parcours client actuel pour identifier les points de friction. C'est crucial pour optimiser vos conversions et maximiser votre retour sur investissement."
    },
    {
        question: "Comment garantissez-vous des sites à haute conversion ?",
        answer: "Nous combinons design psychologique, copywriting persuasif et performance technique ultra-rapide. Chaque élément est testé et optimisé pour guider l'utilisateur vers l'action."
    },
    {
        question: "Proposez-vous un support après la mise en ligne ?",
        answer: "Absolument. Nous ne vous laissons pas seul. Nous proposons des forfaits de maintenance et d'optimisation continue pour assurer que votre site reste performant et sécurisé."
    },
    {
        question: "Gérez-vous les révisions pendant le projet ?",
        answer: "Oui, nous travaillons en itérations. Vous êtes impliqué à chaque étape clé (wireframe, design, développement) pour valider la direction et assurer que le résultat final dépasse vos attentes."
    },
    {
        question: "Pouvez-vous intégrer des outils tiers ?",
        answer: "Oui, nous sommes experts en intégration d'API. CRM, outils d'emailing, passerelles de paiement ou solutions d'IA personnalisées, nous connectons tout votre écosystème."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-32 px-6 bg-[#fafafa]">
            <div className="max-w-3xl mx-auto">
                <FadeIn>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "group bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm",
                                    openIndex === index ? "border-black/10 bg-white" : "border-black/5 hover:border-black/10"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                                >
                                    <span className="text-lg md:text-xl font-medium text-foreground pr-8">
                                        {faq.question}
                                    </span>
                                    <div className="relative flex items-center justify-center w-6 h-6 shrink-0">
                                        {/* Red dot from screenshot style if needed, or just the plus */}
                                        {index === 0 && openIndex !== 0 && (
                                            <span className="absolute -top-2 -right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                        )}

                                        <motion.span
                                            animate={{ rotate: openIndex === index ? 45 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="text-black/50 group-hover:text-foreground transition-colors"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                            </svg>
                                        </motion.span>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="p-6 md:p-8 pt-0 text-gray-600 leading-relaxed text-base md:text-lg border-t border-black/5 mt-2">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
