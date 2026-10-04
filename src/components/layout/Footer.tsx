import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ background: "var(--forest)", color: "white" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", paddingBottom: "2.5rem", borderBottom: "1px solid rgba(255,255,255,.08)" }} className="footer-grid">

          {/* Brand */}
          <div>
            <p className="display" style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: ".625rem" }}>WF Uwais Enterprise</p>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: ".9375rem", lineHeight: 1.7, maxWidth: "22rem", marginBottom: "1.5rem" }}>
              {COMPANY.mission}
            </p>
            <div style={{ display: "flex", gap: ".625rem", flexWrap: "wrap" }}>
              <a href={`https://wa.me/${COMPANY.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ fontSize: ".8125rem", padding: ".5rem 1rem" }}>
                WhatsApp
              </a>
              <a href={`mailto:${COMPANY.email}`} className="btn btn-outline" style={{ fontSize: ".8125rem", padding: ".5rem 1rem" }}>
                Email Us
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: ".75rem", fontWeight: 600, color: "rgba(255,255,255,.35)", letterSpacing: ".06em", marginBottom: ".875rem" }}>Services</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".5rem" }}>
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href="/services" style={{ color: "rgba(255,255,255,.6)", fontSize: ".9375rem", textDecoration: "none", transition: "color 140ms var(--ease-out)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "white")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.6)")}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: ".75rem", fontWeight: 600, color: "rgba(255,255,255,.35)", letterSpacing: ".06em", marginBottom: ".875rem" }}>Contact</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".875rem", fontSize: ".9rem" }}>
              <li>
                <p style={{ color: "rgba(255,255,255,.35)", fontSize: ".7rem", marginBottom: ".125rem" }}>Phone / WhatsApp</p>
                <a href={`tel:${COMPANY.phone}`} style={{ color: "rgba(255,255,255,.75)", textDecoration: "none" }}>{COMPANY.phone}</a>
              </li>
              <li>
                <p style={{ color: "rgba(255,255,255,.35)", fontSize: ".7rem", marginBottom: ".125rem" }}>Email</p>
                <a href={`mailto:${COMPANY.email}`} style={{ color: "rgba(255,255,255,.75)", textDecoration: "none", wordBreak: "break-all" }}>{COMPANY.email}</a>
              </li>
              <li>
                <p style={{ color: "rgba(255,255,255,.35)", fontSize: ".7rem", marginBottom: ".125rem" }}>Address</p>
                <p style={{ color: "rgba(255,255,255,.6)", lineHeight: 1.55 }}>{COMPANY.address}</p>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: ".5rem", padding: "1.25rem 0" }}>
          <p style={{ color: "rgba(255,255,255,.25)", fontSize: ".8125rem" }}>© {new Date().getFullYear()} WF Uwais Enterprise</p>
          <p style={{ color: "rgba(255,255,255,.25)", fontSize: ".8125rem" }}>Seremban · Melaka · and beyond</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
