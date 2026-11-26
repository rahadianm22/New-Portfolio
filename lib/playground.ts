/**
 * Sites I built and shipped myself, shown in the homepage Playground.
 * Screens are 1440×900 captures of the live sites in /public/playground.
 * `featured` ones get the large tiles.
 */
export type PlaygroundItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  /** The URL as shown on the card, without the protocol. */
  domain: string;
  image: string;
  imageAlt: string;
  tags: string[];
  featured?: boolean;
  /** Left off the homepage; still listed on /playground. */
  hideOnHome?: boolean;
};

export const PLAYGROUND: PlaygroundItem[] = [
  {
    id: "asuka-jetto",
    title: "Asuka Jetto",
    description:
      "The official site for Asuka Cheeda Jetto, a virtual vet: her profile, song covers, VETTALK and every official account on one page.",
    url: "https://asukajetto.my.id/",
    domain: "asukajetto.my.id",
    image: "/playground/asuka.jpg",
    imageAlt: "The Asuka Jetto site: a full-screen illustration of Asuka in a field of flowers under the name JETTO",
    tags: ["Personal site", "Illustration-led"],
    featured: true,
  },
  {
    id: "natuna-digilab",
    title: "Natuna Digilab",
    description:
      "The documentation site for my design system: components, tokens and usage rules, designed in Figma and built in React.",
    url: "https://natunadigilab.vercel.app/",
    domain: "natunadigilab.vercel.app",
    image: "/playground/natuna.jpg",
    imageAlt: "The Natuna Digilab docs home: One system, designed in Figma, built in React, beside live bill-payment and button-state components",
    tags: ["Design system", "React"],
    featured: true,
  },
  {
    id: "natuna-hq",
    title: "Natuna HQ",
    description: "A virtual office for Natuna Digilab: 30 AI agents at work in a five-floor isometric voxel building.",
    url: "https://3d-kantor-baru.vercel.app/",
    domain: "3d-kantor-baru.vercel.app",
    image: "/playground/natuna-hq.jpg",
    imageAlt: "Natuna HQ: an isometric five-floor office building, with the floor list on the left and a live agent activity log on the right",
    tags: ["3D", "AI agents"],
    hideOnHome: true,
  },
  {
    id: "markas-cari-cuan",
    title: "Markas Cari Cuan",
    description: "An interactive 3D office for the job hunt: a war room for applications, a freelance desk and a showcase of past work.",
    url: "https://markas-cari-cuan-rahadianm22.vercel.app/",
    domain: "markas-cari-cuan-rahadianm22.vercel.app",
    image: "/playground/markas-cari-cuan.jpg",
    imageAlt: "Markas Cari Cuan: a 3D room with client boards for BRI, BSI, Infosys and Malline, a job hunt board and agents at their desks",
    tags: ["3D", "Job hunt"],
    hideOnHome: true,
  },
  {
    id: "lokerku",
    title: "Lokerku",
    description:
      "Paste a job link from LinkedIn, JobStreet, Glints or a careers page, and it tidies the details into a table in your own Google Sheet.",
    url: "https://lokerkusendiri.vercel.app/",
    domain: "lokerkusendiri.vercel.app",
    image: "/playground/lokerku.jpg",
    imageAlt: "Lokerku: Semua loker yang kamu incar, rapi di satu tabel, beside a job link parsed into company, role, location and deadline",
    tags: ["Tool", "Google Sheets"],
  },
  {
    id: "random-generator",
    title: "Random Generator",
    description: "Draws a practice design brief, who it is for and how it should look, then writes the full brief to hand to an AI.",
    url: "https://randomgenrm22.vercel.app/",
    domain: "randomgenrm22.vercel.app",
    image: "/playground/randomgen.jpg",
    imageAlt: "Random Generator: Stop choosing what to practise, above a drawn ticket for a meditation habit app",
    tags: ["Tool", "Design practice"],
    hideOnHome: true,
  },
];

/** What the homepage section shows. /playground lists everything. */
export const HOME_PLAYGROUND = PLAYGROUND.filter((p) => !p.hideOnHome);
