import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Arnaud Malanda — Product-Focused Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const portraitData = await readFile(join(process.cwd(), "public/Ras.jpg"), "base64");
  const portraitSrc = `data:image/jpeg;base64,${portraitData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#081A2F",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "72px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#F2A93B",
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Product-Focused Developer · Dubai, UAE
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              color: "#FFFFFF",
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 620,
            }}
          >
            I turn digital products into experiences people love to use.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 36,
              fontSize: 24,
              color: "#F2A93B",
              fontWeight: 700,
            }}
          >
            Arnaud Malanda
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 420,
            height: "100%",
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            src={portraitSrc}
            alt=""
            width={420}
            height={630}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
