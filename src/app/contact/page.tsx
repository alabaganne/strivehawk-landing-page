'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'lome@strivehawk.com',
    href: 'mailto:lome@strivehawk.com',
  },
  {
    icon: '📞',
    label: 'Téléphone',
    value: '+228 70 75 88 04',
    href: 'tel:+22870758804',
  },
  {
    icon: '📍',
    label: 'Adresse',
    value: 'Lomé, Togo',
    href: '#',
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

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
        headers: { 'Content-Type': 'application/json' },
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
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l'accueil
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="gradient-text">Parlons</span> de votre projet
            </h1>
            <p className="text-lg text-muted max-w-xl mx-auto">
              Notre équipe vous répond sous 24h pour définir la meilleure solution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-muted uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}

              {/* Office info */}
              <div className="p-4 bg-surface border border-border rounded-xl mt-6">
                <h3 className="font-semibold text-foreground mb-2">Notre bureau</h3>
                <p className="text-sm text-muted">
                  198 rue de l'hôpital Tokoin
                  <br />
                  Face entrée CHU-SO de Tokoin
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-surface border border-border rounded-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-xl text-sm font-medium ${
                      submitStatus.type === 'success'
                        ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                        : 'bg-red-500/10 text-red-500 border border-red-500/20'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                      placeholder="+228 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
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
