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
        <section className="py-10 border-b border-black/5 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm text-gray-500 mb-8 font-medium uppercase tracking-widest">
                    Ils nous font confiance
                </p>
                <Marquee className="flex items-center max-w-[70rem] mx-auto my-5 overflow-hidden mask-image-custom group">
                    <div className="flex animate-infinite-scroll [--animation-delay:50s] group-hover:[animation-play-state:paused]">
                        {icons.map((icon) => (
                            <div
                                key={icon.id}
                                className="flex items-center mx-8 max-w-none"
                            >
                                <icon.component className="w-auto h-auto" />
                            </div>
                        ))}
                        {icons.map((icon) => (
                            <div
                                key={`duplicate-${icon.id}`}
                                className="flex items-center mx-8 max-w-none"
                            >
                                <icon.component className="w-auto h-auto" />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
}
