'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiShieldCheck, HiCloud, HiCode, HiFilm } from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    icon: HiCloud,
    gradient: 'from-blue-500 to-cyan-400',
    technologies: [
      { name: 'AWS', emoji: '☁️' },
      { name: 'Azure', emoji: '🔷' },
      { name: 'Docker', emoji: '🐳' },
      { name: 'Kubernetes', emoji: '☸️' },
    ],
  },
  {
    id: 'security',
    title: 'Cybersécurité',
    icon: HiShieldCheck,
    gradient: 'from-emerald-500 to-green-400',
    technologies: [
      { name: 'Linux', emoji: '🐧' },
      { name: 'Python', emoji: '🐍' },
      { name: 'Firewalls', emoji: '🔥' },
      { name: 'Encryption', emoji: '🔐' },
    ],
  },
  {
    id: 'web',
    title: 'Web & Applications',
    icon: HiCode,
    gradient: 'from-violet-500 to-purple-400',
    technologies: [
      { name: 'React', emoji: '⚛️' },
      { name: 'Next.js', emoji: '▲' },
      { name: 'TypeScript', emoji: '📘' },
      { name: 'Node.js', emoji: '💚' },
    ],
  },
  {
    id: 'design',
    title: 'Design & Vidéo',
    icon: HiFilm,
    gradient: 'from-orange-500 to-amber-400',
    technologies: [
      { name: 'Premiere', emoji: '🎬' },
      { name: 'After Effects', emoji: '✨' },
      { name: 'Figma', emoji: '🎨' },
      { name: 'Motion', emoji: '🔮' },
    ],
  },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.tech-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power3.out',
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Stack Technique
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="gradient-text">Technologies</span> que nous maîtrisons
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Des outils modernes et performants pour chaque domaine d'expertise.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.id}
                className="tech-card group bg-background border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                    <CategoryIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Technologies grid */}
                <div className="grid grid-cols-4 gap-3">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-surface transition-colors group/tech cursor-default"
                    >
                      <span className="text-3xl group-hover/tech:scale-125 transition-transform duration-300">
                        {tech.emoji}
                      </span>
                      <span className="text-xs text-muted text-center font-medium leading-tight">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
