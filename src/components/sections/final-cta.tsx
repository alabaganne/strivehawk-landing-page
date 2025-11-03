import { Button } from "../button";
import { Container } from "../container";

export const FinalCTA = () => {
  return (
    <section className="py-20">
      <Container className="rounded-3xl border border-transparent-border bg-gradient-to-br from-emerald-500/10 via-black to-black p-12 text-center shadow-xl shadow-emerald-500/10">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Prêt à renforcer vos performances et vos équipes ?
        </h2>
        <p className="mt-6 text-lg text-secondary-text max-w-2xl mx-auto leading-relaxed">
          Discutons de votre projet et trouvons ensemble la solution la plus
          adaptée à votre réalité.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="medium" href="/contact">
            Commencer maintenant
          </Button>
        </div>
      </Container>
    </section>
  );
};
