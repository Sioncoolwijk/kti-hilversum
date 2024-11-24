import stockDentalImage from "../assets/dental-stock.jpg";
import { teammember } from "../assets";
import { linkedin, instagram, facebook } from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Informatie",
    url: "/informatie",
    // Subitems for 'Behandelingen' section
    subItems: [
      { id: "0-1", title: "Behandeling", url: "/behandeling" },
      { id: "0-2", title: "Preventie", url: "/preventie" },
      { id: "0-3", title: "Kwaliteit", url: "/kwaliteit" },
      { id: "0-4", title: "Tarieven", url: "/tarieven" },
    ],
  },
  {
    id: "1",
    title: "Onze praktijk",
    url: "/de-praktijk",
    subItems: [
      { id: "2-1", title: "Team", url: "/team" },
      { id: "2-2", title: "Afspraak maken", url: "/afspraak-maken" },
    ],
  },
  {
    id: "2",
    title: "Contact",
    url: "/contact",
    subItems: [
      { id: "3-1", title: "Bereikbaarheid", url: "/bereikbaarheid" },
      { id: "3-2", title: "Spoed", url: "/spoed" },
      { id: "3-3", title: "Openingstijden", url: "/openingstijden" },
      { id: "3-4", title: "Routebeschrijving", url: "/routebeschrijving" },
    ],
  },
];

export const hero_text = {
  title: "Uw tandartspraktijk in Hilversum",
  description: `Wij werken volgens de nieuwste inzichten en combineren dat met een grote gastvrijheid, het team heet u van harte welkom. In onze tandartskliniek wordt iedere patiënt door zijn/haar vaste tandarts geholpen. Verder zijn wij een verwijspraktijk voor implantologie en beschikken wij over het KRT keurmerk (Kwaliteitsregister Tandartsen). Als u vragen heeft of een afspraak wilt maken kunt u contact met ons opnemen.`,
};

export const mogelijkheden = [
  {
    title: "Implantologie",
    description:
      "Implantologie is de behandeling waarbij een kunstwortel in de kaak wordt geplaatst om een verloren tand of kies te vervangen. Deze methode biedt een duurzame en natuurlijke oplossing voor ontbrekende tanden. De behandeling wordt nauwkeurig uitgevoerd, zodat het implantaat stevig in de kaak vastzit en optimaal kan functioneren.",
    image: stockDentalImage,
    link: "/",
  },
  {
    title: "Mondgezondheid",
    description:
      "Een goede mondgezondheid vormt de basis voor een stralende glimlach en voorkomt problemen zoals tandvleesontstekingen en gaatjes. Door regelmatige controles en professionele reinigingen kunnen problemen vroegtijdig worden opgespoord en aangepakt. Het behoud van een gezonde mond is essentieel voor zowel esthetiek als algehele gezondheid.",
    image: stockDentalImage,
    link: "/",
  },
  {
    title: "Endodontologie",
    description:
      "Een wortelkanaalbehandeling wordt in vaktermen een endodontische behandeling genoemd. Hierover worden vaak vervelende en pijnlijke verhalen verteld. Gelukkig is dit tegenwoordig bijna nooit meer terecht. Echter een wortelkanaalbehandeling is het laatste redmiddel voor een tand of kies en zal daardoor altijd zeer nauwkeurig uitgevoerd moeten worden.",
    image: stockDentalImage,
    link: "/",
  },
];

export const vervoer = [
  {
    key: 0,
    title: "Openbaar vervoer",
    description: `Vanaf station Hilversum bus 58 (richting Zeist) nemen. 
    
    Uitstappen halte Plataanweg.

    Vanaf hier is het nog 1 minuut lopen.
    `,
  },
  {
    key: 1,
    title: "Auto vanuit Amsterdam",
    description: `Op de A1 bij aansluiting Eemnes schuin rechts aanhouden naar A27 (richting Hilversum-Utrecht-Almere).

      Op A1 na 1000 meter rechts aanhouden op A27 (richting Hilversum-Utrecht).

      Zie verder *`,
  },
  {
    key: 2,
    title: "Auto vanuit Almere",
    description: `A6 (richting Amsterdam-Hilversum).

      Bij aansluiting Eemnes schuin rechts aanhouden naar A27 (richting Hilversum-Utrecht-Almere).

      Zie verder *`,
  },
  {
    key: 3,
    title: "Auto vanuit Utrecht",
    description: `A27 (richting Hilversum).

    Zie verder *`,
  },
];

export const teamMembers = [
  {
    name: "Harold van der Burg",
    role: "Tandarts-Implantoloog (erkend door NVOI)",
    image: teammember,
  },
  {
    name: "Puk Verwijmeren",
    role: "Tandarts",
    image: teammember,
  },
  {
    name: "Chloë Vieveen",
    role: "Mondhygiënist",
    image: teammember,
  },
  {
    name: "Melanie Lesmeister",
    role: "Paro-preventie assistente",
    image: teammember,
  },
  {
    name: "Evelyn Kieft",
    role: "Paro assistente",
    image: teammember,
  },
  {
    name: "Claudia de Hoop",
    role: "Assistente",
    image: teammember,
  },
  {
    name: "Jolanda van Zanten",
    role: "Assistente",
    image: teammember,
  },
  {
    name: "Davine Coolwijk",
    role: "Assistente",
    image: teammember,
  },
  {
    name: "Marjolein van der Meer",
    role: "Assistente",
    image: teammember,
  },
  {
    name: "Puck van Leur",
    role: "Assistente",
    image: teammember,
  },
];

export const socials = [
  {
    id: "0",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/",
  },
  {
    id: "1",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/",
  },
];
