import { Marquee } from "./marquee";
import { Betashares } from "./icon/betashares-icon";
import { ChatBaseIcon } from "./icon/chatbase-icon";
import { GithubIcon } from "./icon/github-icon";
import { HumataIcon } from "./icon/humata-icon";
import { KreaIcon } from "./icon/krea-icon";
import { LoopIcon } from "./icon/loop-icon";
import { MobbinIcon } from "./icon/mobbin-icon";
import { OnePassword } from "./icon/onepassword-icon";
import { Pika } from "./icon/pika-icon";
import { PwcIcon } from "./icon/pwc-icon";
import { ResendIcon } from "./icon/resend-icon";
import { UdioIcon } from "./icon/udio-icon";
import { MozillaIcon } from "./icon/mozilla-icon";

const icons = [
    { component: Betashares, id: 1 },
    { component: ChatBaseIcon, id: 2 },
    { component: GithubIcon, id: 3 },
    { component: HumataIcon, id: 4 },
    { component: KreaIcon, id: 5 },
    { component: LoopIcon, id: 7 },
    { component: MobbinIcon, id: 8 },
    { component: OnePassword, id: 9 },
    { component: Pika, id: 10 },
    { component: PwcIcon, id: 11 },
    { component: ResendIcon, id: 12 },
    { component: UdioIcon, id: 13 },
    { component: MozillaIcon, id: 14 },
];

export default function Partners() {
    return (
        <section id="partners" className="py-20 border-b border-border bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Nos Partenariats
                    </h2>
                    <p className="text-lg text-muted max-w-3xl mx-auto">
                        En tant que filiale de Strivehawk US, nous nous appuyons sur ses partenaires internationaux pour offrir des solutions robustes aux entreprises africaines.
                    </p>
                </div>
                <Marquee className="flex items-center max-w-[70rem] mx-auto overflow-hidden mask-image-custom group">
                    <div className="flex animate-infinite-scroll [--animation-delay:50s] group-hover:[animation-play-state:paused]">
                        {icons.map((icon) => (
                            <div
                                key={icon.id}
                                className="flex items-center mx-8 max-w-none opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 transform hover:scale-110"
                            >
                                <icon.component className="w-auto h-auto text-muted hover:text-foreground transition-colors" />
                            </div>
                        ))}
                        {icons.map((icon) => (
                            <div
                                key={`duplicate-${icon.id}`}
                                className="flex items-center mx-8 max-w-none opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 transform hover:scale-110"
                            >
                                <icon.component className="w-auto h-auto text-muted hover:text-foreground transition-colors" />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
}
