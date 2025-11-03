import { Button } from "../button";
import { Container } from "../container";
import { SubTitle, Title } from "../title";

const expertises = [
  {
    title: "Cloud & accès sécurisé à distance",
    description: "La flexibilité sans compromis sur la sécurité.",
  },
  {
    title: "Cybersécurité & Conformité",
    description: "Une protection complète pour vos données.",
  },
  {
    title: "Digitalisation & Automatisation",
    description: "Des outils qui travaillent pour vous.",
  },
  {
    title: "Infrastructures & Support IT",
    description: "Une assistance proactive et complète.",
  },
  {
    title: "Développement Web, Mobile & IA",
    description: "Des solutions intelligentes, sur mesure.",
  },
];

export const Expertises = () => {
  return (
    <Container className="py-16">
      <div className="space-y-6 text-center max-w-3xl mx-auto">
        <Title>Des solutions conçues pour faire grandir votre entreprise.</Title>
        <SubTitle>
          De la gestion IT à la cybersécurité, du cloud à la transformation digitale, Strivehawk vous aide à évoluer sereinement, avec des solutions sur mesure et humaines.
        </SubTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {expertises.map((expertise) => (
          <div
            key={expertise.title}
            className="border border-transparent-border rounded-2xl bg-tertiary-color/30 p-6 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h3 className="text-lg font-medium">{expertise.title}</h3>
              <p className="text-sm text-secondary-text">{expertise.description}</p>
            </div>
            <Button
              variant="secondary"
              size="small"
              className="mt-6 w-fit"
              href="/services"
            >
              Découvrir le service
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};
