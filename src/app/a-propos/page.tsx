import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/header";
import { Container } from "@/components/container";
import { SubTitle, Title } from "@/components/title";

const valeurs = [
  {
    title: "Résilience",
    description: "Nous anticipons, adaptons et assurons la continuité de vos opérations critiques.",
  },
  {
    title: "Innovation",
    description: "Chaque projet est une opportunité de créer des solutions qui vous font avancer.",
  },
  {
    title: "Fiabilité",
    description: "Nous bâtissons des relations durables basées sur la confiance et la transparence.",
  },
];

export default function AproposPage() {
  return (
    <>
      <Header />
      <main className="pt-32 space-y-16">
        <Container className="space-y-6 text-center max-w-3xl mx-auto">
          <Title>Une équipe de passionnés, dédiée à votre réussite.</Title>
          <SubTitle>
            Strivehawk Afrique est une filiale du groupe Strivehawk, née de la volonté d’offrir aux entreprises africaines des solutions technologiques de niveau international, tout en respectant leurs spécificités locales.
          </SubTitle>
          <p className="text-secondary-text text-sm md:text-base">
            Nous unissons l’expertise américaine et la connaissance du terrain africain pour concevoir des solutions concrètes, humaines et durables.
          </p>
        </Container>

        <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Vision</h2>
            <p className="text-secondary-text text-sm md:text-base">
              Bâtir un écosystème numérique africain solide, collaboratif et inclusif, où la technologie soutient le potentiel humain.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="text-secondary-text text-sm md:text-base">
              Accompagner les entreprises d’Afrique de l’Ouest dans leur transformation digitale grâce à des solutions fiables, accessibles et centrées sur les personnes.
            </p>
          </div>
        </Container>

        <Container className="space-y-8">
          <Title className="text-center">Nos trois piliers fondamentaux.</Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valeurs.map((valeur) => (
              <div
                key={valeur.title}
                className="border border-transparent-border rounded-2xl p-6 bg-tertiary-color/30"
              >
                <h3 className="text-lg font-medium mb-3">{valeur.title}</h3>
                <p className="text-sm text-secondary-text">{valeur.description}</p>
              </div>
            ))}
          </div>
          <p className="text-secondary-text text-center text-sm md:text-base">
            Chez Strivehawk, chaque solution commence par une écoute. Parce qu’avant les ordinateurs, il y a des personnes.
          </p>
        </Container>

        <Container className="space-y-6" id="partenariats">
          <Title className="text-center">Une force mondiale au service de vos ambitions.</Title>
          <SubTitle className="text-center">
            Portée par l’expertise internationale de Strivehawk et ses partenaires technologiques, notre équipe locale met à votre disposition des solutions reconnues pour leur fiabilité et leur performance.
          </SubTitle>
        </Container>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
