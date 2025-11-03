import { Betashares } from "@/components/icon/betashares-icon";
import { ChatBaseIcon } from "@/components/icon/chatbase-icon";
import { GithubIcon } from "@/components/icon/github-icon";
import { HumataIcon } from "@/components/icon/humata-icon";
import { KreaIcon } from "@/components/icon/krea-icon";
import { LoopIcon } from "@/components/icon/loop-icon";
import { MobbinIcon } from "@/components/icon/mobbin-icon";
import { OnePassword } from "@/components/icon/onepassword-icon";
import { Pika } from "@/components/icon/pika-icon";
import { PwcIcon } from "@/components/icon/pwc-icon";
import { ResendIcon } from "@/components/icon/resend-icon";
import { UdioIcon } from "@/components/icon/udio-icon";
import { MozillaIcon } from "@/components/icon/mozilla-icon";
import { ReactIcon } from "@/components/icon/react-icon";
import { NextJsIcon } from "@/components/icon/nextjs-icon";
import { AnyFrameworkIcon } from "@/components/icon/any-framework-icon";
import { FlutterIcon } from "@/components/icon/flutter-icon";
import { KotlinIcon } from "@/components/icon/kotlin-icon";
import { SvelteIcon } from "@/components/icon/svelte-icon";
import { SolidJs } from "@/components/icon/solidjs-icon";
import { VueIcon } from "@/components/icon/vue-icons";
import { NuxtIcon } from "@/components/icon/nuxt-icon";
import { RefineIcon } from "@/components/icon/refine-icon";
import { Stripe } from "@/components/icon/stripe";
import { Triangle } from "@/components/icon/triangle";
import { ChatGpt } from "@/components/icon/chat-gpt";
import { LangChain } from "@/components/icon/langchain";
import { Expo } from "@/components/icon/expo";
import { Database, Fingerprint, RefreshCw } from "lucide-react";

interface NavItem {
  title: string;
  href?: string;
  desc?: string;
  icon?: React.ElementType;
}

interface NavColumn {
  heading: string;
  items: NavItem[];
}

interface NavLink {
  title: string;
  href?: string;
  megaMenu?: { columns: NavColumn[] };
}

import {
  CalendarClock,
  SendHorizonal,
  Sparkles,
  BookOpen,
  Puzzle,
  Layout,
  LifeBuoy,
  Code2,
  Github,
  Users,
  Briefcase,
  Calendar,
  FileText,
  Building2,
} from "lucide-react";

export const navLinks: NavLink[] = [
  {
    title: "Solutions",
    megaMenu: {
      columns: [
        {
          heading: "Cloud & Infrastructure",
          items: [
            {
              title: "Cloud sécurisé",
              desc: "Microsoft 365, Azure Virtual Desktop",
              icon: Database,
            },
            {
              title: "Accès distant",
              desc: "VPN, sauvegardes & reprise",
              icon: RefreshCw,
            },
            {
              title: "Support IT",
              desc: "Supervision, help desk & maintenance",
              icon: LifeBuoy,
            },
          ],
        },
        {
          heading: "Cybersécurité",
          items: [
            {
              title: "Protection totale",
              desc: "Firewall, endpoint & anti-phishing",
              icon: Fingerprint,
            },
            {
              title: "Conformité",
              desc: "HIPAA, PCI-DSS, RGPD",
              icon: FileText,
            },
            {
              title: "Audit & formation",
              desc: "Sensibilisation et plans d’action",
              icon: BookOpen,
            },
          ],
        },
        {
          heading: "Innovation",
          items: [
            {
              title: "Digitalisation",
              desc: "CRM, automatisation & intégrations",
              icon: Sparkles,
            },
            {
              title: "Développement",
              desc: "Web, mobile & IA sur mesure",
              icon: Code2,
            },
            {
              title: "Conseil",
              desc: "Vision stratégique & accompagnement",
              icon: Users,
            },
          ],
        },
      ],
    },
  },
  {
    title: "Entreprise",
    megaMenu: {
      columns: [
        {
          heading: "Strivehawk Afrique",
          items: [
            { title: "À propos", href: "/a-propos", icon: Building2 },
            { title: "Notre équipe", href: "/a-propos", icon: Users },
            { title: "Mission & Vision", href: "/a-propos", icon: Trophy },
          ],
        },
        {
          heading: "Ressources",
          items: [
            { title: "Études de cas", href: "/services", icon: Layout },
            { title: "Partenariats", href: "#partenariats", icon: Briefcase },
            { title: "Actualités", icon: Calendar },
          ],
        },
      ],
    },
  },
  {
    title: "Ressources",
    megaMenu: {
      columns: [
        {
          heading: "Guides",
          items: [
            { title: "Livres blancs", icon: BookOpen },
            { title: "Checklists IT", icon: Puzzle },
            { title: "Webinaires", icon: CalendarClock },
          ],
        },
        {
          heading: "Communauté",
          items: [
            { title: "Support", icon: LifeBuoy },
            { title: "Open source", icon: Github },
            { title: "Partenaires", icon: Briefcase },
          ],
        },
        {
          heading: "Outils",
          items: [
            { title: "Templates", icon: Layout },
            { title: "API & intégrations", icon: SendHorizonal },
            { title: "Blog", icon: FileText },
          ],
        },
      ],
    },
  },
  { title: "À propos", href: "/a-propos" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

export const footerLinks = [
  {
    title: "Liens rapides",
    subtitles: ["Accueil", "À propos", "Services", "Partenaires", "Contact"],
  },
  {
    title: "Contact",
    subtitles: [
      "Email : lome@strivehawk.com",
      "Téléphone : +228 70 75 88 04",
      "Adresse : Lomé, Togo",
    ],
  },
  {
    title: "Liens légaux",
    subtitles: [
      "Mentions légales",
      "Politique de confidentialité",
      "Conditions générales",
    ],
  },
];

export const icons = [
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

export const frameworkIcons = [
  { component: ReactIcon, id: 1, title: "React" },
  { component: NextJsIcon, id: 2, title: "Next.js" },
  { component: AnyFrameworkIcon, id: 3, title: "RedwoodJS" },
  { component: FlutterIcon, id: 4, title: "Flutter" },
  { component: KotlinIcon, id: 5, title: "Kotlin" },
  { component: SvelteIcon, id: 6, title: "Svelte" },
  { component: SolidJs, id: 7, title: "SolidJS" },
  { component: VueIcon, id: 8, title: "Vue" },
  { component: NuxtIcon, id: 9, title: "Nuxt" },
  { component: RefineIcon, id: 10, title: "Refine" },
];

export const starterKit = [
  {
    title: "Kit de migration Cloud",
    description:
      "Planifiez la modernisation de votre infrastructure avec un guide complet pour Azure et Microsoft 365.",
    image: [NextJsIcon, Stripe, Triangle],
    link: "Voir la ressource",
  },
  {
    title: "Checklist cybersécurité",
    description:
      "Assurez la conformité HIPAA, PCI-DSS et RGPD grâce à une feuille de route pratique pour vos équipes.",
    image: [NextJsIcon, Triangle],
    link: "Télécharger",
  },
  {
    title: "Automatisation marketing",
    description:
      "Découvrez comment connecter vos outils CRM et marketing pour gagner en efficacité.",
    image: [NextJsIcon, ChatGpt, Triangle],
    link: "Voir la ressource",
  },
  {
    title: "Guide intégrations métiers",
    description:
      "Intégrez Zoho, QuickBooks ou Shopify à vos workflows sans interrompre vos opérations.",
    image: [LangChain, NextJsIcon],
    link: "Voir la ressource",
  },
  {
    title: "Support IT proactif",
    description:
      "Mettez en place un help desk hybride et une supervision continue pour vos équipes.",
    image: [FlutterIcon],
    link: "Découvrir",
  },
  {
    title: "Starter IA conversationnelle",
    description:
      "Déployez un assistant intelligent adapté à vos processus internes et à votre service client.",
    image: [Expo],
    link: "Voir la ressource",
  },
];

export const testimonials = [
  {
    id: "1",
    username: "abena_k",
    displayName: "Abena K.",
    content:
      "« Grâce à Strivehawk, nous avons sécurisé nos accès distants en moins d’un mois. Nos équipes peuvent travailler partout sans craindre pour les données sensibles. »",
    timestamp: "2024-03-12T10:00:00Z",
    likes: 120,
    retweets: 18,
  },
  {
    id: "2",
    username: "yves_tech",
    displayName: "Yves T.",
    content:
      "« Leur support est réellement proactif. Strivehawk détecte les incidents avant nous et nous informe des actions menées. »",
    timestamp: "2024-05-04T09:30:00Z",
    likes: 95,
    retweets: 12,
  },
  {
    id: "3",
    username: "amina_ops",
    displayName: "Amina O.",
    content:
      "« Nous avons automatisé notre CRM et gagné deux jours de production par semaine. L’équipe Strivehawk maîtrise vraiment nos enjeux. »",
    timestamp: "2024-06-20T14:15:00Z",
    likes: 140,
    retweets: 22,
  },
  {
    id: "4",
    username: "koffi_enterprise",
    displayName: "Koffi E.",
    content:
      "« Le déploiement du VPN et des sauvegardes cloud nous a permis de poursuivre nos activités même pendant les coupures réseau. »",
    timestamp: "2024-07-08T11:05:00Z",
    likes: 160,
    retweets: 28,
  },
  {
    id: "5",
    username: "selma_finance",
    displayName: "Selma F.",
    content:
      "« L’audit de conformité Strivehawk nous a aidés à répondre aux exigences de nos partenaires internationaux. »",
    timestamp: "2024-08-14T08:45:00Z",
    likes: 110,
    retweets: 16,
  },
  {
    id: "6",
    username: "marc_digital",
    displayName: "Marc D.",
    content:
      "« Leur équipe locale comprend parfaitement les réalités du terrain. Nous recommandons Strivehawk à tous nos partenaires. »",
    timestamp: "2024-09-02T16:20:00Z",
    likes: 180,
    retweets: 24,
  },
];

export const customerStories = [
  {
    main: {
      img: ChatBaseIcon,
      text: "Banque régionale : continuité d’activité garantie avec une infrastructure hybride sécurisée.",
    },

    side: {
      image1: Betashares,
      image2: LoopIcon,
    },
  },
  {
    main: {
      img: Expo,
      text: "Groupe de santé : 7 000 dossiers patients protégés grâce au monitoring Strivehawk 24/7.",
    },

    side: {
      image1: LoopIcon,
      image2: MozillaIcon,
    },
  },
  {
    main: {
      img: KreaIcon,
      text: "Retail panafricain : automatisation des flux e-commerce et intégration Shopify x ERP.",
    },

    side: {
      image1: ChatGpt,
      image2: PwcIcon,
    },
  },
];
