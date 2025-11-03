import { Container } from "../container";
import { Title } from "../title";

export function VideoShowcase() {
  return (
    <>
      <Container className="py-16 flex flex-col items-center">
        <Title className="mb-10">
          Restez productifs et pilotez vos opérations
          <br />
          <span className="text-secondary-text">
            sans quitter votre tableau de bord Strivehawk
          </span>
        </Title>

        <div className="flex w-fit justify-center border border-transparent-border p-2 rounded-3xl flex-col">
          <div className="flex items-center gap-x-2 mb-2">
            <div className="w-2  h-2 rounded-full bg-secondary-text"></div>
            <div className="w-2  h-2 rounded-full bg-secondary-text"></div>
            <div className="w-2  h-2 rounded-full bg-secondary-text"></div>
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="flex-1 max-w-lg md:max-w-3xl lg:max-w-7xl"
          >
            <source src="/supabase-rls.webm" type="video/webm" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
      </Container>
    </>
  );
}
