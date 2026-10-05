import { Metadata } from "next";
import Link from "next/link";
import { SERVICES, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: "General cleaning, landscape maintenance, swimming pool cleaning, and commercial & residential cleaning across Seremban and Melaka.",
};

export default function ServicesPage() {
  return (
    <>
      <section style={{ background: "var(--forest)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <p style={{ color: "var(--gold)", fontSize: ".875rem", fontWeight: 500, marginBottom: "1rem" }}>What we offer</p>
          <h1 className="display" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: "white", fontWeight: 400, letterSpacing: "-.02em", maxWidth: "28rem", lineHeight: 1.15 }}>
            Four services. Consistent results.
          </h1>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {SERVICES.map(s => (
            <article key={s.slug} style={{
              padding: "2rem",
              border: "1.5px solid var(--border)",
              borderTop: "3px solid var(--moss)",
              borderRadius: ".5rem",
              background: "white",
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "1.125rem", lineHeight: 1 }}>{s.icon}</div>
              <h2 className="display" style={{ fontSize: "1.375rem", fontWeight: 400, letterSpacing: "-.01em", marginBottom: ".625rem", color: "var(--ink)" }}>{s.name}</h2>
              <p style={{ color: "var(--body)", lineHeight: 1.7, marginBottom: ".75rem" }}>{s.short}</p>
              <p style={{ color: "var(--muted)", fontSize: ".9375rem", lineHeight: 1.65 }}>{s.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: "3.5rem 1.5rem", background: "var(--sage)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ fontWeight: 600, color: "var(--ink)", marginBottom: ".375rem" }}>Service areas</p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              {COMPANY.serviceAreas.map(a => (
                <span key={a} style={{ padding: ".375rem .875rem", background: "var(--moss)", color: "white", borderRadius: ".25rem", fontSize: ".875rem", fontWeight: 500 }}>{a}</span>
              ))}
            </div>
          </div>
          <Link href="/contact" className="btn btn-gold">Get a Quote</Link>
        </div>
      </section>

      {/* Flow CTA — leads to Gallery */}
      <section style={{ padding: "3.5rem 1.5rem", background: "var(--surface)", textAlign: "center", borderTop: "1.5px solid var(--border)" }}>
        <p style={{ color: "var(--muted)", fontSize: ".9375rem", marginBottom: ".75rem" }}>Want to see the results for yourself?</p>
        <Link href="/gallery" className="btn btn-ghost" style={{ color: "var(--moss)", borderColor: "var(--moss)" }}>
          See our work →
        </Link>
      </section>
    </>
  );
}
