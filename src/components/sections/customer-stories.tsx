import Link from "next/link";
import { Button } from "../button";
import { Container } from "../container";
import { SubTitle, Title } from "../title";
import { CustomerReview } from "../customer/customer-review";

export const CustomerStories = () => {
  return (
    <Container>
      <div className="flex flex-col space-y-8 lg:flex-row lg:items-end w-full lg:justify-between">
        <div className="space-y-5 text-center lg:text-left">
          <p className="text-sm font-medium text-secondary-text uppercase tracking-wider text-center lg:text-left">
            Témoignages clients
          </p>

          <Title className="text-center lg:text-left">
            Infrastructure
            <span className="text-secondary-text">
              {" "}pour innover et se développer sereinement.
            </span>
          </Title>

          <SubTitle className="text-center lg:text-left">
            Découvrez comment Strivehawk accompagne les entreprises africaines pour accélérer leur croissance, sécuriser leurs opérations et renforcer leurs équipes.
          </SubTitle>
        </div>

        <div className="space-x-3 mt-5 md:mt-0 flex item-center justify-center">
          <Button size="small" asChild>
            <Link href="/services">Voir nos services</Link>
          </Button>
          <Button size="small" variant="secondary" asChild>
            <Link href="/contact">Parler à un expert</Link>
          </Button>
        </div>
      </div>
      <CustomerReview />
    </Container>
  );
};
