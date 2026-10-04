import Link from "next/link";
import { COMPANY, SERVICES, CLIENTS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* ── Hero — the one orchestrated moment ───────────────── */}
      <section className="sweep" style={{
        background: `linear-gradient(145deg, var(--forest) 0%, #0d2b1a 55%, #142d1e 100%)`,
        padding: "5.5rem 1.5rem 7rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Subtle concentric ring — texture, not decoration */}
        <div aria-hidden style={{ position: "absolute", right: "-10%", top: "5%", width: "600px", height: "600px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.04)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", right: "-18%", top: "-5%", width: "820px", height: "820px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.025)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div className="hero-stagger" style={{ maxWidth: "44rem" }}>
            {/* Location tag — deliberate, not an eyebrow */}
            <p style={{ color: "var(--gold)", fontSize: ".875rem", fontWeight: 500, marginBottom: "1.25rem" }}>
              Seremban &amp; Melaka
            </p>

            {/* Headline — Playfair Display, left-aligned, italic is the character */}
            <h1 className="display" style={{
              fontSize: "clamp(2.625rem, 6vw, 4.25rem)",
              color: "white",
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: "-.02em",
              marginBottom: "1.5rem",
            }}>
              Professional cleaning<br />
              you can <em>rely on.</em>
            </h1>

            <p style={{
              color: "rgba(255,255,255,.6)",
              fontSize: "1.125rem",
              lineHeight: 1.75,
              maxWidth: "34rem",
              marginBottom: "2.25rem",
            }}>
              {COMPANY.mission}
            </p>

            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-gold">Get a Free Quote</Link>
              <a href={`https://wa.me/${COMPANY.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--surface)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 className="display" style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 400, letterSpacing: "-.02em", color: "var(--ink)", marginBottom: ".5rem" }}>
              Our services
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1rem" }}>
              Four core offerings, delivered consistently across {COMPANY.serviceAreas[0].split(",")[0]} and {COMPANY.serviceAreas[1]}.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1.125rem" }}>
            {SERVICES.map(s => (
              <article key={s.slug} className="svc-card">
                <div style={{ fontSize: "1.875rem", marginBottom: "1rem", lineHeight: 1 }}>{s.icon}</div>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 600, color: "var(--ink)", marginBottom: ".5rem" }}>{s.name}</h3>
                <p style={{ fontSize: ".9375rem", color: "var(--body)", lineHeight: 1.65, marginBottom: ".75rem" }}>{s.short}</p>
                <p style={{ fontSize: ".875rem", color: "var(--muted)", lineHeight: 1.6 }}>{s.description}</p>
              </article>
            ))}
          </div>

          <div style={{ marginTop: "2rem" }}>
            <Link href="/services" className="btn btn-ghost">View all services</Link>
          </div>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--sage)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="why-grid">
          <div>
            <h2 className="display" style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 400, letterSpacing: "-.02em", color: "var(--ink)", marginBottom: ".75rem" }}>
              Why WF Uwais?
            </h2>
            <p style={{ color: "var(--body)", lineHeight: 1.75, fontSize: "1rem", maxWidth: "30rem" }}>
              We understand property managers and residence committees need a cleaning partner they can stop thinking about — one that just works, every time.
            </p>
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".75rem" }}>
            {COMPANY.usps.map((usp, i) => (
              <li key={i} className="usp-row">
                <span style={{ flexShrink: 0, width: "1.375rem", height: "1.375rem", background: "var(--moss)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: ".6875rem", fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: ".9375rem", color: "var(--body)", lineHeight: 1.55 }}>{usp}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Clients ──────────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--surface)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h2 className="display" style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 400, letterSpacing: "-.02em", color: "var(--ink)", marginBottom: ".5rem" }}>
              Trusted by
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1rem" }}>Residential estates, retail outlets, and commercial properties.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".625rem" }}>
            {CLIENTS.map(c => (
              <span key={c.name} className="client-badge">{c.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--forest)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center" }} className="cta-grid">
          <div>
            <h2 className="display" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "white", fontWeight: 400, letterSpacing: "-.02em", marginBottom: ".625rem" }}>
              Ready for a cleaner space?
            </h2>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: "1rem" }}>
              Serving {COMPANY.serviceAreas[0]} and {COMPANY.serviceAreas[1]}.
            </p>
          </div>
          <Link href="/contact" className="btn btn-gold" style={{ fontSize: "1rem", padding: ".875rem 2rem", whiteSpace: "nowrap" }}>
            Request a Quote
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.117 1.528 5.845L.057 23.786a.375.375 0 00.459.459l5.955-1.472A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.94-1.347l-.355-.211-3.676.909.924-3.58-.231-.367A9.714 9.714 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
    </svg>
  );
}
