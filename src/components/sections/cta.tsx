import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "../container";
import { Title } from "../title";
import { Button } from "../button";

export function CTA() {
  return (
    <>
      <Container className="flex flex-col justify-between mb-5 space-y-10 py-10">
        <div className="space-y-4 text-center">
          <Title>Prêt à renforcer vos performances et vos équipes ?</Title>
          <p className="text-secondary-text max-w-2xl mx-auto">
            Discutons de votre projet et trouvons ensemble la solution la plus adaptée à votre réalité.
          </p>
        </div>

        <div className="space-x-2 mt-5 mb-18 flex justify-center">
          <Button size="medium" className="hidden md:block" asChild>
            <Link href="/contact">Commencer maintenant</Link>
          </Button>
          <Button size="medium" className="hidden md:block" variant="secondary" asChild>
            <Link href="/services">Découvrir nos services</Link>
          </Button>
          <Button size="small" className="md:hidden" asChild>
            <Link href="/contact">Commencer maintenant</Link>
          </Button>
          <Button size="small" className="md:hidden" variant="secondary" asChild>
            <Link href="/services">Découvrir nos services</Link>
          </Button>
        </div>
      </Container>

      <div className="bg-black w-full text-center p-5 md:flex  items-center justify-center gap-20 py-10 space-y-4 md:space-y-0">
        <p className="text-sm">
          Nous protégeons vos données.
          <span className="text-brand"> En savoir plus sur notre sécurité</span>
        </p>

        <p className="flex items-center gap-x-3 text-sm justify-center">
          <Check size={16} />
          Engagement conformité HIPAA &amp; RGPD
        </p>

        <p className="flex items-center gap-x-3 text-sm justify-center">
          <Check size={16} />
          Support local et international 24/7
        </p>
      </div>
    </>
  );
}
