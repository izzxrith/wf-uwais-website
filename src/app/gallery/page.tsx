"use client";
import Link from "next/link";
import Image from "next/image";

const PHOTOS = [
  { src: "/gallery/general-cleaning-1.jpeg",  label: "General Cleaning",        alt: "General cleaning service by WF Uwais Enterprise" },
  { src: "/gallery/general-cleaning-2.jpeg",  label: "General Cleaning",        alt: "Office cleaning by WF Uwais Enterprise" },
  { src: "/gallery/landscape-1.jpeg",         label: "Landscape Maintenance",   alt: "Grass cutting and landscape maintenance" },
  { src: "/gallery/landscape-2.jpeg",         label: "Landscape Maintenance",   alt: "Garden upkeep and weed control" },
  { src: "/gallery/pool-cleaning-1.jpeg",     label: "Swimming Pool Cleaning",  alt: "Pool cleaning and chemical treatment" },
  { src: "/gallery/pool-cleaning-2.jpeg",     label: "Swimming Pool Cleaning",  alt: "Pool vacuuming and maintenance" },
  { src: "/gallery/comm-1.jpeg",              label: "Commercial Cleaning",     alt: "Commercial space cleaning by WF Uwais" },
  { src: "/gallery/comm-2.jpeg",              label: "Commercial Cleaning",     alt: "Commercial space cleaning by WF Uwais" },
  { src: "/gallery/residential-1.jpeg",       label: "Residential Cleaning",    alt: "Home cleaning service by WF Uwais Enterprise" },
];

export default function GalleryPage() {
  return (
    <>
      <section style={{ background: "var(--forest)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <p style={{ color: "var(--gold)", fontSize: ".875rem", fontWeight: 600, letterSpacing: ".08em", marginBottom: "1rem" }}>
            Our work
          </p>
          <h1 className="display" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: "white", fontWeight: 400, letterSpacing: "-.025em", lineHeight: 1.12 }}>
            Spaces we&apos;ve cleaned<br />and maintained.
          </h1>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "var(--surface)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
          }}>
            {PHOTOS.map((photo, i) => (
              <div key={i} style={{
                borderRadius: ".375rem",
                overflow: "hidden",
                border: "1.5px solid var(--border)",
                background: "var(--white)",
                transition: "box-shadow 180ms var(--ease-out), transform 180ms var(--ease-out)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(14,35,24,.1)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}>
                <div style={{ position: "relative", width: "100%", height: "220px" }}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div style={{ padding: ".75rem 1rem" }}>
                  <span style={{
                    fontSize: ".8125rem",
                    fontWeight: 600,
                    color: "var(--moss)",
                    background: "var(--sage)",
                    padding: ".25rem .625rem",
                    borderRadius: ".25rem",
                  }}>
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow CTA */}
      <section style={{ padding: "4rem 1.5rem", background: "var(--forest)", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,.45)", fontSize: ".9375rem", marginBottom: ".5rem" }}>
          Curious about who we are?
        </p>
        <h2 className="display" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, marginBottom: "1.5rem", color: "white", letterSpacing: "-.02em" }}>
          Meet the team behind the work.
        </h2>
        <div style={{ display: "flex", gap: ".75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/about" className="btn btn-gold">About Us</Link>
          <Link href="/contact" className="btn btn-outline">Get a Quote</Link>
        </div>
      </section>
    </>
  );
}
