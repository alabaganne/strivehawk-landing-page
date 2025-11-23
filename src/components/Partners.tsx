const partners = [
    { name: "Acme Corp", logo: "AC" },
    { name: "Global Tech", logo: "GT" },
    { name: "Nebula", logo: "NB" },
    { name: "Vertex", logo: "VX" },
    { name: "Horizon", logo: "HZ" },
    { name: "Elevate", logo: "EL" },
];

export default function Partners() {
    return (
        <section className="py-10 border-b border-white/5 bg-[#030303]">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm text-gray-500 mb-8 font-medium uppercase tracking-widest">
                    Ils nous font confiance
                </p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex items-center gap-2 group cursor-default">
                            <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-white group-hover:bg-primary group-hover:text-black transition-colors">
                                {partner.logo}
                            </div>
                            <span className="text-lg font-semibold text-white/40 group-hover:text-white transition-colors">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
