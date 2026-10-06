import Link from "next/link";
import { COMPANY, SERVICES, CLIENTS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="sweep" style={{
        background: `linear-gradient(150deg, #0a1d10 0%, var(--forest) 50%, #112a1a 100%)`,
        padding: "6rem 1.5rem 7rem",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Watermark — the signature element, visible on desktop */}
        <div aria-hidden style={{
          position: "absolute",
          right: "-2%",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(8rem, 20vw, 18rem)",
          fontWeight: 700,
          fontStyle: "italic",
          color: "rgba(255,255,255,0.035)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          letterSpacing: "-.04em",
        }}>
          CLEAN
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative" }}>
          <div className="hero-stagger" style={{ maxWidth: "42rem" }}>
            <p style={{
              color: "var(--gold)",
              fontSize: ".8125rem",
              fontWeight: 600,
              letterSpacing: ".08em",
              marginBottom: "1.5rem",
            }}>
              Seremban &amp; Melaka
            </p>

            <h1 className="display" style={{
              fontSize: "clamp(3rem, 7vw, 5rem)",
              color: "white",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-.025em",
              marginBottom: "1.625rem",
            }}>
              Professional cleaning<br />
              you can <em>rely on.</em>
            </h1>

            <p style={{
              color: "rgba(255,255,255,.58)",
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              maxWidth: "32rem",
              marginBottom: "2.25rem",
            }}>
              {COMPANY.mission}
            </p>

            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-gold">Get a Free Quote</Link>
              <a
                href={`https://wa.me/${COMPANY.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ maxWidth: "72rem", margin: "3.5rem auto 0", position: "relative" }}>
          <div className="stat-strip">
            {[
              { value: "5+",   label: "Clients served" },
              { value: "4",    label: "Core services" },
              { value: "2",    label: "States covered" },
              { value: "Daily", label: "WhatsApp updates" },
            ].map(s => (
              <div key={s.label} className="stat-strip-item">
                <p style={{ color: "white", fontSize: "1.375rem", fontWeight: 600, fontFamily: "'Playfair Display', serif", lineHeight: 1, marginBottom: ".25rem" }}>{s.value}</p>
                <p style={{ color: "rgba(255,255,255,.4)", fontSize: ".8125rem" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section style={{ padding: "5.5rem 1.5rem", background: "var(--surface)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, letterSpacing: "-.025em", color: "var(--ink)", lineHeight: 1.1 }}>
                Our services
              </h2>
              <p style={{ color: "var(--muted)", fontSize: ".9375rem", marginTop: ".5rem" }}>
                Four offerings. Consistently delivered.
              </p>
            </div>
            <Link href="/services" className="btn btn-ghost" style={{ fontSize: ".875rem" }}>
              All services
            </Link>
          </div>

          {/* 2+2 grid with numbered indicators */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {SERVICES.map((s, i) => (
              <article key={s.slug} className="svc-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                  <div style={{ fontSize: "1.75rem", lineHeight: 1 }}>{s.icon}</div>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "rgba(14,35,24,.06)",
                    lineHeight: 1,
                    letterSpacing: "-.04em",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginBottom: ".5rem", letterSpacing: "-.01em" }}>{s.name}</h3>
                <p style={{ fontSize: ".9375rem", color: "var(--body)", lineHeight: 1.65, marginBottom: ".75rem" }}>{s.short}</p>
                <p style={{ fontSize: ".875rem", color: "var(--muted)", lineHeight: 1.6 }}>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us — horizontal strip ─────────────────────────── */}
      <section style={{ padding: "5.5rem 1.5rem", background: "var(--forest)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, letterSpacing: "-.025em", color: "white", lineHeight: 1.1 }}>
              Why WF Uwais?
            </h2>
            <p style={{ color: "rgba(255,255,255,.45)", marginTop: ".5rem", fontSize: ".9375rem", maxWidth: "32rem" }}>
              Property managers and residence committees need a cleaning partner they can stop thinking about.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.08)", borderRadius: ".375rem", overflow: "hidden" }}>
            {COMPANY.usps.map((usp, i) => (
              <div key={i} style={{ padding: "1.625rem 1.5rem", background: "var(--forest)" }}>
                <div style={{ width: "1.5rem", height: "1.5rem", background: "var(--moss)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <span style={{ color: "white", fontSize: ".625rem", fontWeight: 700 }}>✓</span>
                </div>
                <p style={{ fontSize: ".9375rem", color: "rgba(255,255,255,.75)", lineHeight: 1.6 }}>{usp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients — editorial list ──────────────────────────── */}
      <section style={{ padding: "5.5rem 1.5rem", background: "var(--surface)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, letterSpacing: "-.025em", color: "var(--ink)", lineHeight: 1.1 }}>
              Trusted by
            </h2>
            <p style={{ color: "var(--muted)", fontSize: ".875rem" }}>Residences · Retail · Commercial</p>
          </div>

          <div style={{ borderTop: "1px solid var(--border)" }}>
            {CLIENTS.map((c, i) => (
              <div key={c.name} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.125rem 0",
                borderBottom: "1px solid var(--border)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1rem",
                    color: "rgba(14,35,24,.12)",
                    fontWeight: 700,
                    minWidth: "2rem",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "1rem", color: "var(--ink)", fontWeight: 450 }}>{c.name}</span>
                </div>
                <span style={{ fontSize: ".8125rem", color: "var(--muted)", fontWeight: 500 }}>{c.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ padding: "5.5rem 1.5rem", background: "var(--forest)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center" }} className="cta-grid">
            <div>
              <h2 className="display" style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", color: "white", fontWeight: 400, letterSpacing: "-.025em", lineHeight: 1.1, marginBottom: ".75rem" }}>
                Ready for a cleaner space?
              </h2>
              <p style={{ color: "rgba(255,255,255,.45)", fontSize: ".9375rem" }}>
                Serving {COMPANY.serviceAreas[0]} and {COMPANY.serviceAreas[1]}.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: ".625rem", alignItems: "flex-end" }}>
              <Link href="/contact" className="btn btn-gold" style={{ fontSize: "1rem", padding: ".875rem 2rem" }}>
                Request a Quote
              </Link>
              <a href={`tel:${COMPANY.phone}`} style={{ color: "rgba(255,255,255,.4)", fontSize: ".8125rem", textDecoration: "none", textAlign: "center" }}>
                or call {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .cta-grid { grid-template-columns: 1fr !important; }
          .cta-grid > div:last-child { align-items: flex-start !important; }
          .stat-strip { flex-wrap: wrap; }
          .stat-strip-item { min-width: 50%; border-bottom: 1px solid rgba(255,255,255,.08); }
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
