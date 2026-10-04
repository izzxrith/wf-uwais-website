import { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a free quote from WF Uwais Enterprise. We follow up via WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <section style={{ background: "var(--forest)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <p style={{ color: "var(--gold)", fontSize: ".875rem", fontWeight: 500, marginBottom: "1rem" }}>Free quote</p>
          <h1 className="display" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: "white", fontWeight: 400, letterSpacing: "-.02em", lineHeight: 1.15, maxWidth: "28rem" }}>
            Let&apos;s get your space cleaned.
          </h1>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 360px", gap: "4rem", alignItems: "start" }} className="contact-grid">
          <QuoteForm />

          <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ padding: "1.75rem", background: "var(--sage)", borderRadius: ".5rem" }}>
              <p style={{ fontSize: ".75rem", fontWeight: 600, color: "var(--muted)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: "1rem" }}>Contact details</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.125rem" }}>
                {[
                  { label: "Phone / WhatsApp", value: COMPANY.phone, href: `https://wa.me/${COMPANY.whatsappNumber}` },
                  { label: "Email",            value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                  { label: "Address",          value: COMPANY.address, href: null },
                ].map(item => (
                  <li key={item.label}>
                    <p style={{ fontSize: ".75rem", fontWeight: 600, color: "var(--muted)", marginBottom: ".2rem" }}>{item.label}</p>
                    {item.href
                      ? <a href={item.href} style={{ color: "var(--moss)", fontSize: ".9375rem", textDecoration: "none", fontWeight: 500 }}>{item.value}</a>
                      : <p style={{ color: "var(--body)", fontSize: ".9375rem", lineHeight: 1.6 }}>{item.value}</p>
                    }
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ padding: "1.75rem", background: "var(--sage)", borderRadius: ".5rem" }}>
              <p style={{ fontSize: ".75rem", fontWeight: 600, color: "var(--muted)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: "1rem" }}>Service areas</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".5rem" }}>
                {COMPANY.serviceAreas.map(a => (
                  <li key={a} style={{ display: "flex", alignItems: "center", gap: ".625rem", fontSize: ".9375rem", color: "var(--body)" }}>
                    <span style={{ width: "6px", height: "6px", background: "var(--moss)", borderRadius: "50%", flexShrink: 0 }} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
