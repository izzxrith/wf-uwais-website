import { Metadata } from "next";
import Link from "next/link";
import { COMPANY, CLIENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "WF Uwais Enterprise — vision, mission, and why clients across Seremban and Melaka trust us.",
};

export default function AboutPage() {
  return (
    <>
      <section style={{ background: "var(--forest)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <p style={{ color: "var(--gold)", fontSize: ".875rem", fontWeight: 500, marginBottom: "1rem" }}>Who we are</p>
          <h1 className="display" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: "white", fontWeight: 400, letterSpacing: "-.02em", maxWidth: "32rem", lineHeight: 1.15 }}>
            Built on trust. Delivered through consistency.
          </h1>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }} className="two-col">
          <div>
            <p style={{ fontSize: ".75rem", fontWeight: 600, color: "var(--muted)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: ".75rem" }}>Vision</p>
            <h2 className="display" style={{ fontSize: "1.5rem", fontWeight: 400, letterSpacing: "-.01em", marginBottom: "1rem", color: "var(--ink)" }}>
              Where we&apos;re headed
            </h2>
            <p style={{ color: "var(--body)", lineHeight: 1.75 }}>{COMPANY.vision}</p>
          </div>
          <div>
            <p style={{ fontSize: ".75rem", fontWeight: 600, color: "var(--muted)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: ".75rem" }}>Mission</p>
            <h2 className="display" style={{ fontSize: "1.5rem", fontWeight: 400, letterSpacing: "-.01em", marginBottom: "1rem", color: "var(--ink)" }}>
              How we work
            </h2>
            <p style={{ color: "var(--body)", lineHeight: 1.75 }}>{COMPANY.mission}</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "var(--sage)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 className="display" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, letterSpacing: "-.02em", color: "var(--ink)", marginBottom: "2rem" }}>
            What sets us apart
          </h2>
          <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: ".75rem" }}>
            {COMPANY.usps.map((usp, i) => (
              <li key={i} className="usp-row">
                <span style={{ flexShrink: 0, width: "1.375rem", height: "1.375rem", background: "var(--moss)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: ".6875rem", fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: ".9375rem", color: "var(--body)", lineHeight: 1.55 }}>{usp}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 className="display" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, letterSpacing: "-.02em", color: "var(--ink)", marginBottom: ".5rem" }}>
            Clients who trust us
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: "1.75rem" }}>Residential estates, retail spaces, and commercial properties.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".625rem" }}>
            {CLIENTS.map(c => <span key={c.name} className="client-badge">{c.name}</span>)}
          </div>
        </div>
      </section>

      {/* Flow CTA — leads to Contact */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--forest)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center" }} className="cta-grid">
          <div>
            <h2 className="display" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "white", fontWeight: 400, letterSpacing: "-.02em", marginBottom: ".5rem" }}>
              Ready to work with us?
            </h2>
            <p style={{ color: "rgba(255,255,255,.5)" }}>
              {COMPANY.phone} · {COMPANY.email}
            </p>
          </div>
          <Link href="/contact" className="btn btn-gold" style={{ padding: ".875rem 2rem" }}>
            Get a Quote
          </Link>
        </div>
      </section>

      <style>{`
        .two-col { grid-template-columns: 1fr 1fr; }
        .cta-grid { grid-template-columns: 1fr auto; }
        @media (max-width: 640px) {
          .two-col { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
