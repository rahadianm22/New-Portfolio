import Image from "next/image";

interface Client {
  name: string;
  logo: string;
  /** Public link to the shipped product. Absent for products with none. */
  url?: string;
}

const clients: Client[] = [
  {
    name: "BRI",
    logo: "/Logo/trimmed/bri.png",
    url: "https://play.google.com/store/apps/details?id=id.co.bri.brimo",
  },
  {
    name: "Qita by BRI",
    logo: "/Logo/trimmed/qita.png",
    url: "https://play.google.com/store/apps/details?id=id.co.bri.brimons",
  },
  {
    name: "BRISPOT",
    logo: "/Logo/trimmed/brispotbaru.png",
    url: "https://play.google.com/store/apps/details?id=id.co.bri.brispotnew",
  },
  {
    name: "BSI",
    logo: "/Logo/trimmed/byond.png",
    url: "https://play.google.com/store/apps/details?id=co.id.bankbsi.superapp",
  },
  {
    name: "Bale by BTN",
    logo: "/Logo/trimmed/bale.png",
    url: "https://play.google.com/store/apps/details?id=id.co.btn.mobilebanking.android",
  },
  { name: "BTN Syariah", logo: "/Logo/trimmed/btnsyariah.png" },
  { name: "CIMB", logo: "/Logo/trimmed/cimb.png", url: "https://www.cimbniaga.co.id/id/home/welcome" },
  { name: "Kotakode", logo: "/Logo/trimmed/kotakode.png", url: "https://labs.kotakode.com/" },
  { name: "Malline", logo: "/Logo/trimmed/malline.png" },
];

/**
 * A full-bleed logo marquee directly under the hero. The list is rendered
 * twice so the track can loop; the second copy is hidden from assistive
 * tech and the tab order. Marks rest in greyscale so nine brand colours
 * don't compete with the page's one accent, and take their colour back on
 * hover or focus, which also pauses the track (globals.css).
 */
export function TrustedBySection() {
  return (
    <section aria-labelledby="shipped-heading" className="bg-surface">
      <div className="max-w-page mx-auto px-6 md:px-12">
        <div className="border-t border-line pt-10">
          <h2 id="shipped-heading" className="text-center text-[15px] font-medium text-ink-3">
            Products I&apos;ve shipped across fintech and banking
          </h2>
        </div>
      </div>

      <div className="marquee mt-8">
        <div className="marquee-track">
          <LogoGroup />
          <LogoGroup copy />
        </div>
      </div>
    </section>
  );
}

function LogoGroup({ copy = false }: { copy?: boolean }) {
  return (
    <ul
      aria-hidden={copy || undefined}
      className={`flex shrink-0 items-center ${copy ? "marquee-copy" : ""}`}
    >
      {clients.map((client) => (
        <li key={client.name} className="w-36 px-5 md:w-44 md:px-7">
          <ClientTile client={client} hidden={copy} />
        </li>
      ))}
    </ul>
  );
}

function ClientTile({ client, hidden = false }: { client: Client; hidden?: boolean }) {
  const mark = (
    <div className="relative h-9 w-full">
      <Image
        src={client.logo}
        alt=""
        aria-hidden="true"
        fill
        sizes="128px"
        className="object-contain grayscale contrast-125 opacity-90 transition duration-300 ease-out
                   group-hover:grayscale-0 group-hover:opacity-100 group-focus-visible:grayscale-0 group-focus-visible:opacity-100"
      />
    </div>
  );

  const base = "group flex h-16 items-center justify-center rounded-md px-2";

  if (!client.url) {
    return (
      <div className={base} role="img" aria-label={client.name} title={client.name}>
        {mark}
      </div>
    );
  }

  return (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${client.name}, open the product`}
      title={client.name}
      tabIndex={hidden ? -1 : undefined}
      className={`${base} no-underline transition duration-300 ease-out hover:-translate-y-0.5`}
    >
      {mark}
    </a>
  );
}
