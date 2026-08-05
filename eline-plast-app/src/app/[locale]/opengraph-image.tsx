import { ImageResponse } from "next/og";

export const alt = "Eline Plast — Irrigation Systems & PVC Pipes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1A2554",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              backgroundColor: "#2395D3",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              backgroundColor: "#8CC63F",
              display: "flex",
            }}
          />
          <div
            style={{
              marginLeft: 10,
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 3,
              color: "white",
            }}
          >
            ELINE PLAST
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "white",
              maxWidth: 920,
            }}
          >
            Reliable Irrigation Systems for Modern Agriculture
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 820,
            }}
          >
            Durable PVC & PEHD pipes, drip irrigation, and fittings.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              height: 8,
              width: 120,
              borderRadius: 999,
              backgroundColor: "#2395D3",
              display: "flex",
            }}
          />
          <div
            style={{
              height: 8,
              width: 60,
              borderRadius: 999,
              backgroundColor: "#8CC63F",
              display: "flex",
            }}
          />
          <div
            style={{
              marginLeft: 10,
              fontSize: 26,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            elineplast.tn
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
