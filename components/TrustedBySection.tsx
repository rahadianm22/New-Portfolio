"use client";

import { useState } from "react";
import Image from "next/image";

interface Client {
  name: string;
  subtitle?: string;
  color: string; // brand accent color, used as hover border/bg tint
  // Preferred: path to a real logo file in /public (e.g. "/logos/bri.png").
  // If omitted, falls back to the generic `icon` SVG below.
  logo?: string;
  icon?: React.ReactNode;
}

const clients: Client[] = [
  {
    name: "BRI",
    color: "#00529C",
    logo: "/Logo/BRI.png",
  },
   {
    name: "Qita by BRI",
    color: "#00529C",
    logo: "/Logo/qita.png",
  },
  {
    name: "BRISPOT",
    color: "#00529C",
    logo: "/Logo/brispot.png",
  },
  {
    name: "BSI",
    // subtitle: "Islamic Bank",
    color: "#00A651",
    logo: "/Logo/byondbsi.png",
  },
  {
    name: "Bale by BTN",
    color: "#F7941E",
    logo: "/Logo/balebtn.png",
  },
  {
    name: "BTN Syariah",
    color: "#F7941E",
    logo: "/Logo/btnsyariah.jpg",
  },
  {
    name: "CIMB",
    color: "#7A1E2C",
    logo: "/Logo/cimb.jpg",
  },
  {
    name: "Kotakode",
    color: "#7A1E2C",
    logo: "/Logo/kotakode.png",
  },
  {
    name: "Malline",
    color: "#12151C",
    logo: "/Logo/Malline.png",
  },
];

export function TrustedBySection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: "#EDEFF5" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Label row */}
        <div className="flex items-center gap-3 mb-8">
          <span
            className="text-xs tracking-widest uppercase whitespace-nowrap"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2B4EFF", letterSpacing: "0.15em" }}
          >
            // Projects — Financial Institutions
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(43, 78, 255, 0.2)" }} />
          <span
            className="text-xs whitespace-nowrap"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2B4EFF" }}
          >
            count: {clients.length}
          </span>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {clients.map((client, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={client.name}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="flex flex-col items-center justify-center gap-3 py-8 px-4 transition-all duration-200 cursor-default"
                style={{
                  backgroundColor: isHovered ? "rgba(43, 78, 255, 0.06)" : "#FFFFFF",
                  border: isHovered ? "1px solid #2B4EFF" : "1px solid rgba(18, 21, 28, 0.08)",
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
                      fontFamily: "'JetBrains Mono', monospace",
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
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#2B4EFF",
                        opacity: isHovered ? 1 : 0,
                        height: isHovered ? "auto" : 0,
                      }}
                    >
                      {client.subtitle}
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          {/* "More" placeholder card */}
          {/* <div
            className="flex flex-col items-center justify-center gap-2 py-8 px-4"
            style={{ border: "1px dashed rgba(43, 78, 255, 0.3)" }}
          >
            <span className="text-lg" style={{ color: "#2B4EFF" }}>
              +
            </span>
            <span
              className="text-[10px] tracking-wider uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2B4EFF", opacity: 0.6 }}
            >
              More
            </span>
          </div> */}
        </div>

        <p
          className="mt-6 text-[10px] tracking-wide"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "#9CA3AF" }}
        >
          hover to reveal — token: --logo-grayscale-default
        </p>
      </div>
    </section>
  );
}
