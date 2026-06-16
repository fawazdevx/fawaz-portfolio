import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = "Fawaz Oyebode — Backend & Web3 Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(1200px 630px at 75% -10%, #1a1030 0%, #0a0a0f 55%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.10) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* top: terminal handle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            color: "#8b8ba7",
          }}
        >
          <span style={{ color: "#22d3ee" }}>~/</span>
          <span style={{ color: "#e6e6f0" }}>fawaz_oyebode</span>
          <span style={{ color: "#8b5cf6" }}>_</span>
        </div>

        {/* middle: name + role */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            <span style={{ color: "#ffffff" }}>Fawaz&nbsp;</span>
            <span
              style={{
                background: "linear-gradient(120deg, #a78bfa, #22d3ee)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Oyebode
            </span>
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#a78bfa" }}>
            <span style={{ color: "#8b8ba7" }}>&gt;&nbsp;</span>
            Backend &amp; Web3 Developer
          </div>
        </div>

        {/* bottom: stack pills + url */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "14px" }}>
            {["Solidity", "Motoko", "Python", "TypeScript", "React"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  fontSize: 24,
                  color: "#c4b5fd",
                  border: "1px solid rgba(139,92,246,0.4)",
                  background: "rgba(139,92,246,0.10)",
                  borderRadius: "9999px",
                  padding: "8px 22px",
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#22d3ee" }}>
            {profile.githubUser ? "fawazoyebode.vercel.app" : ""}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
