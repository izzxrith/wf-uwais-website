import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description: "See WF Uwais Enterprise work — general cleaning, landscape maintenance, pool cleaning, and commercial spaces.",
};

const SLOTS = [
  "General Cleaning", "General Cleaning",
  "Landscape Maintenance", "Landscape Maintenance",
  "Swimming Pool Cleaning", "Swimming Pool Cleaning",
  "Commercial Cleaning", "Residential Cleaning",
];

export default function GalleryPage() {
  return (
    <>
      <section style={{ background: "var(--forest)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <p style={{ color: "var(--gold)", fontSize: ".875rem", fontWeight: 500, marginBottom: "1rem" }}>Our work</p>
          <h1 className="display" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: "white", fontWeight: 400, letterSpacing: "-.02em", lineHeight: 1.15 }}>
            Spaces we&apos;ve cleaned<br />and maintained.
          </h1>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{
            borderRadius: ".5rem",
            border: "1.5px dashed var(--sage-dk)",
            background: "var(--sage)",
            padding: "1.5rem",
            marginBottom: "2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 600, color: "var(--ink)", marginBottom: ".25rem" }}>Photos coming soon</p>
              <p style={{ color: "var(--muted)", fontSize: ".9375rem" }}>
                Real photos of our work will be added here.{" "}
                <Link href="/contact" style={{ color: "var(--moss)", textDecoration: "underline" }}>Get in touch</Link>
                {" "}and we&apos;ll share examples directly.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "1rem" }}>
            {SLOTS.map((label, i) => (
              <div key={i} style={{ borderRadius: ".5rem", overflow: "hidden", border: "1.5px solid var(--border)" }}>
                <div style={{ height: "11rem", background: "var(--sage)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", fontSize: ".875rem" }}>
                  Photo
                </div>
                <div style={{ padding: ".625rem .875rem", background: "white" }}>
                  <span style={{ fontSize: ".8125rem", fontWeight: 600, color: "var(--moss)", background: "var(--sage)", padding: ".2rem .6rem", borderRadius: ".25rem" }}>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "var(--sage)", textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: "1.875rem", fontWeight: 400, marginBottom: "1.25rem", color: "var(--ink)" }}>Want results like these?</h2>
        <Link href="/contact" className="btn btn-moss">Request a Quote</Link>
      </section>
    </>
  );
}
