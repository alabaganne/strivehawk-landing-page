import { footerLinks } from "@/utils/constant";
import { Container } from "../container";
import { Discord } from "../icon/discord";
import { Github } from "../icon/github";
import { Logo } from "../icon/logo";
import { X } from "../icon/x";
import { Youtube } from "../icon/youtube";

export const Footer = () => {
  return (
    <footer className="border-t border-b border-transparent-border bg-black">
      <Container className="flex flex-col md:flex-row justify-between py-20 gap-10">
        <div className="max-w-xs space-y-4">
          <Logo />
          <p className="text-sm text-secondary-text">
            Strivehawk Afrique accompagne les organisations d’Afrique de l’Ouest dans leur transformation digitale avec des solutions fiables et humaines.
          </p>

          <div className="[&_svg]:h-[2.2rem] [&_svg]:w-[2.2rem] flex items-center gap-x-5 text-secondary-text pt-4">
            <X className="hover:text-offWhite" />
            <Github className="hover:text-offWhite" />
            <Discord className="hover:text-offWhite" />
            <Youtube className="hover:text-offWhite" />
          </div>
        </div>

        <div className="flex flex-wrap gap-8 md:gap-12">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="min-w-[50%] lg:min-w-[18rem]"
            >
              <h3 className="text-md mb-3">{link.title}</h3>

              <ul>
                {link.subtitles.map((sublinks) => (
                  <li
                    key={sublinks}
                    className="text-sm mb-2 last:mb-0 text-secondary-text hover:text-offWhite transition-colors"
                  >
                    {sublinks}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <Container className="py-10 border-t border-transparent-border">
        <p className="text-secondary-text">
          © {new Date().getFullYear()} Strivehawk Afrique – Filiale de Strivehawk US
        </p>
      </Container>
    </footer>
  );
};
