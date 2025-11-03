import Link from "next/link";
import { Button, Highlight } from "../button";
import { Container } from "../container";
import { Hero, HerosubTitle, HeroTitle } from "../home-pageHero";
import { ArrowRight } from "../icon/arrow-right";
import { Marquee } from "../marquee";
import { icons } from "@/utils/constant";

export const HeroSection = () => {
  return (
    <div>
      <Container className="py-[12rem]">
        <Hero className="pt-[2rem]">
          <Button
            variant="quaternary"
            size="cta"
            className="space-x-2 group mb-8"
          >
            <Highlight>Strivehawk Afrique</Highlight>
            <p className="pr-3 flex items-center gap-3 text-xs md:text-base">
              Lien direct avec Strivehawk US
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200" />
            </p>
          </Button>

          <HeroTitle className="tracking-normal">
            La technologie au service de l’humain et de la performance.
          </HeroTitle>

          <HerosubTitle className="my-3 lg:mb-0">
            Strivehawk accompagne les entreprises d’Afrique de l’Ouest dans leur
            croissance digitale grâce à des solutions IT, Cloud et de
            cybersécurité fiables, accessibles et centrées sur l’humain.
          </HerosubTitle>

          <div className="flex items-center justify-center space-x-2 mt-5 mb-18">
            <Button size="medium" className="hidden md:block" asChild>
              <Link href="/services">Découvrir nos services</Link>
            </Button>
            <Button
              size="medium"
              variant="secondary"
              className="hidden md:block"
              asChild
            >
              <Link href="/contact">Démarrer votre projet</Link>
            </Button>

            <Button size="small" className="md:hidden" asChild>
              <Link href="/services">Découvrir nos services</Link>
            </Button>
            <Button size="small" variant="secondary" className="md:hidden" asChild>
              <Link href="/contact">Démarrer votre projet</Link>
            </Button>
          </div>

          <Marquee className="flex items-center max-w-[70rem] mx-auto my-5 overflow-hidden  mask-image-custom group">
            <div className="flex animate-infinite-scroll [--animation-delay:50s] group-hover:[animation-play-state:paused]">
              {icons.map((icon) => (
                <div
                  key={icon.id}
                  className=" flex items-center mx-8 max-w-none"
                >
                  <icon.component className="w-auto h-auto" />
                </div>
              ))}
              {icons.map((icon) => (
                <div
                  key={icon.id}
                  className=" flex items-center mx-8 max-w-none"
                >
                  <icon.component className="w-auto h-auto" />
                </div>
              ))}
            </div>
          </Marquee>

          <p className="text-sm text-secondary-text">
            Trusted by fast-growing companies worldwide
          </p>
        </Hero>
      </Container>
    </div>
  );
};
