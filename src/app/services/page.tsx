import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/header";
import { Container } from "@/components/container";
import { SubTitle, Title } from "@/components/title";

const services = [
  {
    title: "Solution cloud avec accès à distance sécurisé",
    intro: "Flexibilité, mobilité, sécurité.",
    points: [
      "Microsoft 365 & Azure Virtual Desktop",
      "VPN & accès sécurisé",
      "Sauvegardes & reprise après sinistre",
      "Gestion des licences et stockage cloud",
    ],
  },
  {
    title: "Infrastructures & Support IT",
    intro: "Une assistance proactive, un système toujours disponible.",
    points: [
      "Supervision & help desk",
      "Gestion d’appareils, imprimantes et Wi-Fi",
      "Mises à jour & maintenance Windows",
      "Dépannage sur site et à distance",
    ],
  },
  {
    title: "Cybersécurité & Conformité",
    intro: "Prévenir les menaces. Protéger la confiance.",
    points: [
      "Firewalls, antivirus & sécurité endpoint",
      "Protection email & prévention phishing",
      "Conformité HIPAA, PCI-DSS, RGPD",
      "Audit & formation sécurité",
    ],
  },
  {
    title: "Digitalisation & Automatisation",
    intro: "Simplifiez vos processus et gagnez du temps.",
    points: [
      "Création de sites & identité de marque",
      "Automatisation CRM & email marketing",
      "Intégrations (Zoho, QuickBooks, Shopify...)",
      "Optimisation des workflows internes",
    ],
  },
  {
    title: "Développement Web, Mobile & IA",
    intro: "Des solutions intelligentes et évolutives.",
    points: [
      "Applications web & mobiles",
      "Landing pages & bases de données",
      "Intégration de chatbots IA",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 space-y-16">
        <Container className="space-y-6 text-center max-w-3xl mx-auto">
          <Title>Nos solutions technologiques, pensées pour vous.</Title>
          <SubTitle>
            Chaque entreprise a ses défis. Chez Strivehawk, nous concevons des solutions sur mesure pour simplifier, sécuriser et accélérer votre croissance.
          </SubTitle>
        </Container>

        <Container className="space-y-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-transparent-border rounded-2xl p-6 bg-tertiary-color/30 space-y-4"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="text-secondary-text text-sm md:text-base">{service.intro}</p>
              </div>
              <ul className="grid gap-2 text-sm md:text-base text-secondary-text list-disc list-inside">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </Container>

        <Container className="space-y-6 text-center">
          <Title>Ce sont nos clients qui en parlent le mieux.</Title>
          <SubTitle>
            Des retours concrets d’organisations qui ont confié leur transformation numérique à Strivehawk.
          </SubTitle>
        </Container>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
