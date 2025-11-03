import { Container } from "../container";
import { SubTitle, Title } from "../title";

const pillars = [
  {
    title: "Fiabilité",
    description: "Nous restons à vos côtés à chaque étape.",
  },
  {
    title: "Innovation",
    description: "Nous optimisons vos performances dans la durée.",
  },
  {
    title: "Résilience",
    description: "Vos systèmes et vos équipes restent solides face aux imprévus.",
  },
];

export const WhyStrivehawk = () => {
  return (
    <Container className="py-16">
      <div className="space-y-6 text-center max-w-4xl mx-auto">
        <Title>La technologie est puissante. Mais c’est l’humain qui fait la différence.</Title>
        <SubTitle>
          Chez Strivehawk, nous croyons que la technologie ne vaut que si elle améliore la vie, simplifie le travail et renforce les relations humaines. C’est pourquoi nous développons des solutions centrées sur vos équipes, vos défis et votre réalité.
        </SubTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="border border-transparent-border rounded-2xl p-6 text-left bg-tertiary-color/30"
          >
            <h3 className="text-lg font-medium mb-3">{pillar.title}</h3>
            <p className="text-sm text-secondary-text">{pillar.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
