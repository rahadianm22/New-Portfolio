import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * Shared renderer for app/opengraph-image.tsx and app/twitter-image.tsx.
 * Colors are the tokens from app/globals.css (Satori cannot read CSS
 * variables, so the values are copied, not invented). Urbanist is loaded
 * as static woff because Satori supports neither woff2 nor variable fonts.
 *
 * Text sits in the left-centre band: WhatsApp's square thumbnail crops
 * the middle of the card, so the name has to survive that crop.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT = "Rahadian Maulana, Senior Product Designer";

const TOKENS = {
  surfaceInk: "#12151c",
  surface: "#ffffff",
  inkOnDark: "#a8afbd",
  accentOnDark: "#8fa6ff",
  lineOnDark: "rgba(255, 255, 255, 0.14)",
};

const root = process.cwd();

async function asset(path: string) {
  return readFile(join(root, path));
}

async function dataUri(path: string, mime: string) {
  const buf = await asset(path);
  return `data:${mime};base64,${buf.toString("base64")}`;
}

// The PIN screen is cropped out of the BSI cover so its logo never shows.
const PIN_SOURCE = { width: 1800, height: 986 };
const PIN_PHONE = { x: 1328, y: 32, width: 394, height: 864 };
const PIN_SCALE = 0.5;

export async function renderOgImage() {
  const [urbanist500, urbanist700, brispot, pin] = await Promise.all([
    asset("assets/fonts/urbanist-latin-500-normal.woff"),
    asset("assets/fonts/urbanist-latin-700-normal.woff"),
    dataUri("public/case-studies/brispot/brispot-web-login.png", "image/png"),
    dataUri("public/case-studies/bsi/bsi-pin-confirmation.jpg", "image/jpeg"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: TOKENS.surfaceInk,
          fontFamily: "Urbanist",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 88,
            width: 624,
            height: "100%",
          }}
        >
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              color: TOKENS.surface,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
            }}
          >
            Rahadian Maulana
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 38,
              fontWeight: 500,
              color: TOKENS.surface,
              lineHeight: 1.2,
            }}
          >
            Senior Product Designer
          </div>
          <div
            style={{
              marginTop: 28,
              paddingTop: 24,
              borderTop: `1px solid ${TOKENS.lineOnDark}`,
              fontSize: 23,
              fontWeight: 500,
              color: TOKENS.inkOnDark,
            }}
          >
            Fintech & banking · Design Systems · Lending
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 24,
              fontWeight: 500,
              color: TOKENS.accentOnDark,
            }}
          >
            rahadianm22.my.id
          </div>
        </div>

        <img
          src={brispot}
          width={400}
          height={439}
          style={{
            position: "absolute",
            left: 764,
            top: 64,
            borderRadius: 24,
            boxShadow: "0 28px 56px -12px rgba(0, 0, 0, 0.55)",
          }}
        />

        <div
          style={{
            display: "flex",
            position: "absolute",
            left: 684,
            top: 172,
            width: PIN_PHONE.width * PIN_SCALE,
            height: PIN_PHONE.height * PIN_SCALE,
            borderRadius: 27,
            boxShadow: "0 28px 56px -12px rgba(0, 0, 0, 0.6)",
            // A background, not an <img>: Satori clips backgrounds to the
            // border radius but not absolutely positioned children.
            backgroundImage: `url(${pin})`,
            backgroundSize: `${PIN_SOURCE.width * PIN_SCALE}px ${PIN_SOURCE.height * PIN_SCALE}px`,
            backgroundPosition: `${-PIN_PHONE.x * PIN_SCALE}px ${-PIN_PHONE.y * PIN_SCALE}px`,
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Urbanist", data: urbanist500, weight: 500, style: "normal" },
        { name: "Urbanist", data: urbanist700, weight: 700, style: "normal" },
      ],
    },
  );
}
