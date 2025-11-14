import { icons } from "@/utils/constant";
import { Container } from "../container";
import { SubTitle, Title } from "../title";

export const Partnerships = () => {
  return (
    <Container className="py-16" id="partenariats">
      <div className="space-y-6 text-center max-w-4xl mx-auto">
        <Title>
          Un écosystème technologique complet pour accompagner votre croissance digitale et garantir des solutions performantes à chaque projet.
        </Title>
        <SubTitle>
          Nous intégrons les meilleures plateformes du marché pour offrir des services cloud, sécurité et développement de classe mondiale adaptés aux réalités africaines.
        </SubTitle>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12 items-center">
        {icons.slice(0, 6).map((icon) => (
          <div
            key={icon.id}
            className="flex items-center justify-center border border-transparent-border rounded-xl p-6 bg-tertiary-color/30"
          >
            <icon.component className="w-full h-auto text-secondary-text" />
          </div>
        ))}
      </div>
    </Container>
  );
};
