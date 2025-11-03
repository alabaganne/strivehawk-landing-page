import { SubTitle, Title } from "../title";
import { Button } from "../button";
import { Container } from "../container";
import { MessageCircle } from "lucide-react";

import { TestimonialMarquee } from "../testimonial-marquee";

export function Testimonial() {
  return (
    <>
      <Container className="py-16">
        <Title>Ils nous font confiance</Title>
        <SubTitle>
          Découvrez les retours de nos clients et partenaires sur leur collaboration avec Strivehawk.
        </SubTitle>

        <div className="space-x-2 flex justify-center mt-8">
          <Button className="flex items-center gap-x-2" variant="secondary">
            Avis Google
            <MessageCircle size={16} className="text-secondary-text" />
          </Button>
          <Button className="flex items-center gap-x-2" variant="secondary">
            Rejoindre la communauté
            <MessageCircle size={16} className="text-secondary-text" />
          </Button>
        </div>
      </Container>

      <TestimonialMarquee />
    </>
  );
}
