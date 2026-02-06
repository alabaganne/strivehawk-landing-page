'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
  {
    id: 'accessibilite',
    title: "Déclaration d'Accessibilité",
    content: (
      <>
        <p>
          Chez Strivehawk, nous nous engageons à rendre nos services accessibles à tous.
        </p>
        <p>
          Si vous avez des questions ou rencontrez des difficultés d'accessibilité lors de l'utilisation de notre site web, veuillez nous contacter à l'adresse suivante&nbsp;: <a href="mailto:contact@strivehawk.com" className="text-primary hover:underline">contact@strivehawk.com</a>.
        </p>
      </>
    ),
  },
  {
    id: 'confidentialite',
    title: "Déclaration de Confidentialité",
    content: (
      <>
        <p className="text-sm text-muted mb-4">Date d&apos;entrée en vigueur&nbsp;: 7 Décembre 2024</p>
        <p>
          La protection de votre vie privée est une priorité pour nous.
          Cette politique explique de manière transparente comment nous collectons, utilisons et protégeons vos informations personnelles.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Informations que nous collectons</h3>
        <p><strong>Informations personnelles&nbsp;:</strong> Nom, adresse email, numéro de téléphone, informations de paiement (le cas échéant).</p>
        <p><strong>Données techniques&nbsp;:</strong> Adresse IP, type de navigateur, informations liées aux cookies et à la navigation sur notre site.</p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Utilisation de vos données</h3>
        <p>Nous utilisons vos informations afin de&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Fournir, gérer et améliorer continuellement nos services</li>
          <li>Communiquer avec vous concernant des mises à jour, offres ou informations pertinentes (avec votre consentement)</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Sécurité des données</h3>
        <p>
          Nous mettons en place des mesures de sécurité renforcées, incluant le chiffrement et des serveurs sécurisés, afin de protéger vos informations contre tout accès non autorisé.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Vos droits</h3>
        <p>Vous disposez du droit&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>d&apos;accéder à vos données personnelles,</li>
          <li>de les modifier,</li>
          <li>ou de demander leur suppression.</li>
        </ul>
        <p className="mt-2">
          Pour exercer ces droits, contactez-nous à <a href="mailto:contact@strivehawk.com" className="text-primary hover:underline">contact@strivehawk.com</a>.
        </p>
      </>
    ),
  },
  {
    id: 'cgv',
    title: "Conditions Générales de Vente",
    content: (
      <>
        <p className="text-sm text-muted mb-4">Date d&apos;entrée en vigueur&nbsp;: 7 décembre 2024</p>
        <p>
          En achetant un produit ou un service auprès de Strivehawk, vous acceptez les conditions suivantes&nbsp;:
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Conditions de paiement</h3>
        <p>
          Tous les paiements sont exigibles à réception de la facture, sauf accord écrit contraire.
          Des frais de retard de 30&nbsp;% peuvent être appliqués aux soldes impayés après la période de grâce convenue.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Politique de remboursement</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Les remboursements sont accordés uniquement pour les services non fournis ou les produits défectueux.</li>
          <li>Les services par abonnement ne sont pas remboursables une fois activés.</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Limitation de responsabilité</h3>
        <p>
          Strivehawk ne pourra être tenue responsable des dommages indirects, accessoires ou consécutifs résultant de l&apos;utilisation de ses services.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Garanties produits et services</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Les garanties matérielles sont assurées par les fabricants concernés.</li>
          <li>Pour les services, Strivehawk s&apos;engage à respecter les livrables définis et validés contractuellement.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'conditions-utilisation',
    title: "Conditions d'Utilisation",
    content: (
      <>
        <p className="text-sm text-muted mb-4">Date d&apos;entrée en vigueur&nbsp;: 7 décembre 2024</p>
        <p>
          En accédant au site web de Strivehawk, vous acceptez les conditions suivantes&nbsp;:
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Licence d&apos;utilisation du site</h3>
        <p>
          Une licence limitée, non exclusive et non transférable vous est accordée pour consulter et utiliser le contenu du site à des fins personnelles ou professionnelles.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Restrictions</h3>
        <p>Il est strictement interdit de&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>introduire des virus ou tout code malveillant,</li>
          <li>copier, modifier ou exploiter le contenu sans autorisation écrite,</li>
          <li>tenter d&apos;analyser ou de reproduire la structure technique du site.</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Exclusion de garanties</h3>
        <p>
          Le site et les services sont fournis &quot;en l&apos;état&quot;, sans garantie d&apos;absence d&apos;erreurs, d&apos;interruptions ou de disponibilité permanente.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Droit applicable</h3>
        <p>
          Ces conditions sont régies par les lois de l&apos;État de Washington, États-Unis.
        </p>
      </>
    ),
  },
  {
    id: 'ne-pas-vendre',
    title: "Ne pas vendre ou partager mes informations",
    content: (
      <>
        <p className="text-sm text-muted mb-4">Date d&apos;entrée en vigueur&nbsp;: 7 décembre 2024</p>
        <p>
          Strivehawk respecte votre vie privée et ne vend ni ne partage vos données personnelles à des fins marketing avec des tiers.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Exceptions</h3>
        <p>Le partage de données peut avoir lieu uniquement dans les cas suivants&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>avec des partenaires technologiques (ex.&nbsp;: Pax8, Zoho) strictement nécessaires à la fourniture des services achetés,</li>
          <li>lorsque la loi l&apos;exige (demande légale, autorités judiciaires ou forces de l&apos;ordre).</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Opposition (Opt-out)</h3>
        <p>
          Pour vous opposer au partage de vos données, veuillez nous écrire à <a href="mailto:contact@strivehawk.com" className="text-primary hover:underline">contact@strivehawk.com</a>.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: "Gestion des Cookies",
    content: (
      <>
        <p className="text-sm text-muted mb-4">Date d&apos;entrée en vigueur&nbsp;: 7 décembre 2024</p>
        <p>
          Strivehawk utilise des cookies afin d&apos;améliorer votre expérience de navigation et d&apos;analyser l&apos;utilisation du site.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Types de cookies utilisés</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><strong>Cookies essentiels&nbsp;:</strong> nécessaires au bon fonctionnement du site</li>
          <li><strong>Cookies de performance&nbsp;:</strong> permettent d&apos;analyser le comportement des utilisateurs pour améliorer le site</li>
          <li><strong>Cookies marketing&nbsp;:</strong> utilisés pour proposer des contenus ou publicités ciblés</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Gestion des cookies</h3>
        <p>
          Vous pouvez gérer vos préférences de cookies ou refuser les cookies non essentiels via notre outil de gestion des cookies.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Cookies tiers</h3>
        <p>
          Nous utilisons des services tiers (ex.&nbsp;: Google Analytics) pour analyser et améliorer les performances du site.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Désactivation des cookies</h3>
        <p>
          Vous pouvez désactiver les cookies via les paramètres de votre navigateur.
          Veuillez noter que certaines fonctionnalités du site peuvent être limitées si les cookies sont désactivés.
        </p>
      </>
    ),
  },
];

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Politique de <span className="gradient-text">Confidentialité</span>
          </h1>
          <p className="text-lg text-muted mb-12">
            Informations légales, conditions d&apos;utilisation et politique de confidentialité de Strivehawk.
          </p>

          {/* Table of contents */}
          <nav className="bg-surface border border-border rounded-2xl p-6 mb-12">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Sommaire</h2>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="space-y-16">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  {section.title}
                </h2>
                <div className="prose-legal text-muted leading-relaxed space-y-4">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href="/"
              className="text-primary hover:underline text-sm"
            >
              &larr; Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
