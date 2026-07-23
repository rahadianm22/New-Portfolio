"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionLabel } from "./ExperienceSection";

interface Client {
  name: string;
  subtitle?: string;
  color: string; // brand accent color, used as hover border/bg tint
  // Preferred: path to a real logo file in /public (e.g. "/logos/bri.png").
  // If omitted, falls back to the generic `icon` SVG below.
  logo?: string;
  icon?: React.ReactNode;
  // Play Store (or app/website) link. Card becomes clickable when set.
  url?: string;
}

const clients: Client[] = [
  {
    name: "BRI",
    color: "#00529C",
    logo: "/Logo/BRI.png",
    url: "https://play.google.com/store/apps/details?id=id.co.bri.brimo",
  },
   {
    name: "Qita by BRI",
    color: "#00529C",
    logo: "/Logo/qita.png",
    url: "https://play.google.com/store/apps/details?id=id.co.bri.brimons&hl=en&pli=1", // TODO: isi link Play Store QITA di sini
  },
  {
    name: "BRISPOT",
    color: "#00529C",
    logo: "/Logo/brispotbaru.png",
    // BRISPOT itu internal tool, biasanya nggak ada di Play Store publik —
    // biarkan kosong (card jadi nggak bisa diklik) kecuali kamu punya link lain.
    url: "https://play.google.com/store/apps/details?id=id.co.bri.brispotnew"
  },
  {
    name: "BSI",
    // subtitle: "Islamic Bank",
    color: "#00A651",
    logo: "/Logo/byond.png",
    url: "https://play.google.com/store/apps/details?id=co.id.bankbsi.superapp",
  },
  {
    name: "Bale by BTN",
    color: "#F7941E",
    logo: "/Logo/bale.png",
    url: "https://play.google.com/store/apps/details?id=id.co.btn.mobilebanking.android", // TODO: isi link Play Store BTN Mobile / Bale
  },
  {
    name: "BTN Syariah",
    color: "#F7941E",
    logo: "/Logo/btnsyariah.png",
    url: "", // TODO: isi link Play Store BTN Syariah
  },
  {
    name: "CIMB",
    color: "#7A1E2C",
    logo: "/Logo/cimb.png",
    url: "https://www.cimbniaga.co.id/id/home/welcome", // TODO: isi link Play Store OCTO Mobile CIMB
  },
  {
    name: "Kotakode",
    color: "#7A1E2C",
    logo: "/Logo/kotakode.png",
    url: "https://labs.kotakode.com/", // TODO: isi link Play Store / website Kotakode
  },
  {
    name: "Malline",
    color: "#12151C",
    logo: "/Logo/Malline.png",
    url: "", // TODO: isi link website Malline (kemungkinan bukan app, jadi bisa link ke situsnya)
  },
];

const VISIBLE_COUNT = 4;

export function TrustedBySection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visibleClients = showAll ? clients : clients.slice(0, VISIBLE_COUNT);

  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: "#F5F6FA" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Label row */}
        <div className="mb-8">
          <SectionLabel label="// Projects Handled" meta={`count: ${clients.length}`} />
        </div>

        <h2
          className="text-3xl md:text-4xl mb-10"
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: 700,
            color: "#12151C",
            letterSpacing: "-0.02em",
          }}
        >
          Featured works and digital products.
        </h2>

        {/* Logo grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {visibleClients.map((client, i) => {
            const isHovered = hovered === i;
            const hasUrl = Boolean(client.url);
            const CardTag = hasUrl ? "a" : "div";
            return (
              <CardTag
                key={client.name}
                {...(hasUrl
                  ? { href: client.url, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="flex flex-col items-center justify-center gap-3 py-8 px-4 transition-all duration-200"
                style={{
                  width: "150px",
                  backgroundColor: isHovered ? "rgba(43, 78, 255, 0.06)" : "#FFFFFF",
                  border: isHovered ? "1px solid #2B4EFF" : "1px solid rgba(18, 21, 28, 0.08)",
                  borderRadius: "12px",
                  textDecoration: "none",
                  cursor: hasUrl ? "pointer" : "default",
                }}
              >
                <div
                  className="relative flex items-center justify-center transition-all duration-200"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    backgroundColor: client.logo ? "transparent" : isHovered ? "transparent" : "#D1D5DB",
                    color: isHovered ? client.color : "#9CA3AF",
                  }}
                >
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="40px"
                      style={{
                        objectFit: "contain",
                        filter: isHovered ? "grayscale(0)" : "grayscale(1)",
                        opacity: isHovered ? 1 : 0.5,
                        transition: "filter 0.2s ease, opacity 0.2s ease",
                      }}
                    />
                  ) : (
                    client.icon
                  )}
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span
                    className="text-xs tracking-wider uppercase transition-opacity duration-200"
                    style={{
                      fontFamily: "'Urbanist', sans-serif",
                      fontWeight: 700,
                      color: "#12151C",
                      opacity: isHovered ? 1 : 0.6,
                    }}
                  >
                    {client.name}
                  </span>
                  {client.subtitle && (
                    <span
                      className="text-[10px] tracking-wider uppercase transition-opacity duration-200"
                      style={{
                        fontFamily: "'Urbanist', sans-serif",
                        color: "#2B4EFF",
                        opacity: isHovered ? 1 : 0,
                        height: isHovered ? "auto" : 0,
                      }}
                    >
                      {client.subtitle}
                    </span>
                  )}
                </div>
              </CardTag>
            );
          })}
        </div>

        {/* See more / show less toggle */}
        {clients.length > VISIBLE_COUNT && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="flex items-center gap-2 px-5 py-2.5 transition-colors duration-200"
              style={{ border: "1px dashed rgba(43, 78, 255, 0.3)", borderRadius: "8px" }}
            >
              <span style={{ color: "#2B4EFF" }}>{showAll ? "−" : "+"}</span>
              <span
                className="text-[10px] tracking-wider uppercase"
                style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", opacity: 0.8 }}
              >
                {showAll ? "Show Less" : `${clients.length - VISIBLE_COUNT} More`}
              </span>
            </button>
          </div>
        )}

        <p
          className="mt-6 text-[10px] tracking-wide text-center"
          style={{ fontFamily: "'Urbanist', sans-serif", color: "#9CA3AF" }}
        >
          hover to reveal — token: --logo-grayscale-default
        </p>
      </div>
    </section>
  );
}