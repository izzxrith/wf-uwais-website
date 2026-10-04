"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { COMPANY } from "@/lib/constants";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/gallery",  label: "Gallery"  },
  { href: "/about",    label: "About"    },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const bg = scrolled
    ? "rgba(10,28,18,0.94)"
    : "var(--forest)";

  return (
    <>
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: bg,
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        transition: "background 220ms var(--ease-out)",
      }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem", height: "3.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Wordmark */}
          <Link href="/" onClick={() => setOpen(false)} style={{ textDecoration: "none" }}>
            <span className="display" style={{ color: "white", fontSize: "1.0625rem", fontWeight: 700, letterSpacing: "-.01em", lineHeight: 1 }}>
              WF Uwais
            </span>
            <span style={{ color: "rgba(255,255,255,.35)", fontSize: ".8125rem", marginLeft: ".5rem", fontWeight: 400 }}>
              Enterprise
            </span>
          </Link>

          {/* Desktop */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hide-mobile">
            {LINKS.map(l => (
              <Link key={l.href} href={l.href} style={{
                color: "rgba(255,255,255,.65)", fontSize: ".9375rem", fontWeight: 400,
                textDecoration: "none",
                transition: "color 140ms var(--ease-out)",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "white")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.65)")}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-gold" style={{ padding: ".5rem 1.125rem", fontSize: ".875rem" }}>
              Get a Quote
            </Link>
          </nav>

          {/* Hamburger — animated 3 bars */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
            className="show-mobile"
            style={{ background: "none", border: "none", cursor: "pointer", padding: ".5rem", display: "flex", flexDirection: "column", gap: "5px" }}
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: "block", width: "20px", height: "1.5px", background: "white", borderRadius: "2px",
                transition: "transform 200ms var(--ease-drawer), opacity 200ms var(--ease-out)",
                transform: open
                  ? i === 0 ? "translateY(6.5px) rotate(45deg)"
                  : i === 2 ? "translateY(-6.5px) rotate(-45deg)"
                  : "scaleX(0)"
                  : "none",
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile drawer — ease-drawer curve */}
        <div style={{
          overflow: "hidden",
          maxHeight: open ? "16rem" : "0",
          transition: "max-height 280ms var(--ease-drawer)",
          borderTop: open ? "1px solid rgba(255,255,255,.06)" : "none",
          background: "var(--forest)",
        }}>
          <div style={{ padding: "1rem 1.5rem 1.25rem" }}>
            {LINKS.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                display: "block", padding: ".625rem 0",
                color: "rgba(255,255,255,.75)", textDecoration: "none", fontSize: "1rem",
                borderBottom: "1px solid rgba(255,255,255,.06)",
              }}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-gold" style={{ marginTop: ".875rem", width: "100%", justifyContent: "center" }}>
              Get a Quote
            </Link>
          </div>
        </div>
      </header>

      <style>{`
        .hide-mobile { display: flex !important; }
        .show-mobile { display: none !important; }
        @media (max-width: 767px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
