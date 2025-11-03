import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/header";
import { Container } from "@/components/container";
import { Title } from "@/components/title";
import { Button } from "@/components/button";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-32 space-y-16">
        <Container className="space-y-4 text-center max-w-2xl mx-auto">
          <Title>Parlez-nous de votre projet.</Title>
          <p className="text-secondary-text text-sm md:text-base">
            Notre équipe vous répond sous 24h pour définir la solution la plus adaptée à vos besoins.
          </p>
        </Container>

        <Container className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <form className="lg:col-span-2 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col text-left text-sm space-y-2">
                <span>Nom complet</span>
                <input
                  type="text"
                  className="bg-transparent border border-transparent-border rounded-lg px-4 py-3 focus:outline-none focus:border-green"
                  placeholder="Votre nom"
                />
              </label>
              <label className="flex flex-col text-left text-sm space-y-2">
                <span>Email</span>
                <input
                  type="email"
                  className="bg-transparent border border-transparent-border rounded-lg px-4 py-3 focus:outline-none focus:border-green"
                  placeholder="vous@entreprise.com"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col text-left text-sm space-y-2">
                <span>Téléphone</span>
                <input
                  type="tel"
                  className="bg-transparent border border-transparent-border rounded-lg px-4 py-3 focus:outline-none focus:border-green"
                  placeholder="+228 00 00 00 00"
                />
              </label>
              <label className="flex flex-col text-left text-sm space-y-2">
                <span>Entreprise</span>
                <input
                  type="text"
                  className="bg-transparent border border-transparent-border rounded-lg px-4 py-3 focus:outline-none focus:border-green"
                  placeholder="Nom de l’entreprise"
                />
              </label>
            </div>

            <label className="flex flex-col text-left text-sm space-y-2">
              <span>Message</span>
              <textarea
                className="bg-transparent border border-transparent-border rounded-lg px-4 py-3 h-40 focus:outline-none focus:border-green"
                placeholder="Décrivez vos besoins..."
              />
            </label>

            <Button size="medium">Envoyer ma demande</Button>
          </form>

          <div className="space-y-6 border border-transparent-border rounded-2xl p-6 bg-tertiary-color/30">
            <h2 className="text-xl font-semibold">Contact direct</h2>
            <div className="space-y-3 text-sm text-secondary-text">
              <p>
                Email :
                <br />
                <a href="mailto:lome@strivehawk.com" className="text-offWhite hover:text-green">
                  lome@strivehawk.com
                </a>
              </p>
              <p>
                Téléphone :
                <br />
                <a href="tel:+22870758804" className="text-offWhite hover:text-green">
                  +228 70 75 88 04
                </a>
              </p>
              <p>
                Adresse :
                <br />198 rue de l&apos;hôpital Tokoin hôpital
                <br />Face entrée CHU-SO de Tokoin
                <br />Lomé, Togo — Afrique de l’Ouest
              </p>
            </div>
          </div>
        </Container>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
