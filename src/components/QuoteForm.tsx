"use client";
import { useState } from "react";
import { SERVICES } from "@/lib/constants";

type State = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError("");
    const f = e.currentTarget;
    const v = (n: string) => (f.elements.namedItem(n) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)?.value ?? "";
    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerName: v("customerName"), phone: v("phone"), email: v("email"), serviceId: v("serviceId"), location: v("location"), propertyType: v("propertyType"), preferredDate: v("preferredDate"), notes: v("notes"), website: v("website") }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message ?? "Something went wrong.");
      setState("success");
      setTimeout(() => { window.location.href = json.whatsappUrl; }, 1500);
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "success") {
    return (
      <div style={{ padding: "3rem 2rem", background: "var(--sage)", borderRadius: ".5rem", textAlign: "center", border: "1.5px solid var(--sage-dk)" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
        <h2 className="display" style={{ fontSize: "1.5rem", fontWeight: 400, marginBottom: ".5rem", color: "var(--ink)" }}>Request received.</h2>
        <p style={{ color: "var(--muted)", fontSize: ".9375rem" }}>Redirecting you to WhatsApp to continue the conversation…</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
      <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-2col">
        <div className="field">
          <label htmlFor="customerName">Full Name <span style={{ color: "#dc2626" }}>*</span></label>
          <input id="customerName" name="customerName" type="text" required placeholder="Your full name" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone / WhatsApp <span style={{ color: "#dc2626" }}>*</span></label>
          <input id="phone" name="phone" type="tel" required placeholder="01X-XXXXXXX" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">Email <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span></label>
        <input id="email" name="email" type="email" placeholder="your@email.com" />
      </div>

      <div className="field">
        <label htmlFor="serviceId">Service Required <span style={{ color: "#dc2626" }}>*</span></label>
        <select id="serviceId" name="serviceId" required style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237a9484' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right .875rem center", paddingRight: "2.5rem" }}>
          <option value="">Select a service…</option>
          {SERVICES.map(s => <option key={s.slug} value={s.slug}>{s.name}</option>)}
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-2col">
        <div className="field">
          <label htmlFor="location">Location <span style={{ color: "#dc2626" }}>*</span></label>
          <input id="location" name="location" type="text" required placeholder="Seremban, Melaka, Nilai…" />
        </div>
        <div className="field">
          <label htmlFor="propertyType">Property Type <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span></label>
          <input id="propertyType" name="propertyType" type="text" placeholder="Condo, Office, Factory…" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="preferredDate">Preferred Date <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span></label>
        <input id="preferredDate" name="preferredDate" type="date" min={new Date().toISOString().split("T")[0]} />
      </div>

      <div className="field">
        <label htmlFor="notes">Notes <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span></label>
        <textarea id="notes" name="notes" placeholder="Frequency, area size, specific requirements…" />
      </div>

      {state === "error" && (
        <div style={{ background: "#fef2f2", border: "1.5px solid #fecaca", borderRadius: ".375rem", padding: ".75rem 1rem", color: "#dc2626", fontSize: ".9375rem" }}>
          {error}
        </div>
      )}

      <button type="submit" disabled={state === "submitting"} className="btn btn-moss" style={{ justifyContent: "center", padding: ".875rem", fontSize: "1rem" }}>
        {state === "submitting" ? "Submitting…" : "Submit Request"}
      </button>

      <p style={{ color: "var(--muted)", fontSize: ".8125rem", lineHeight: 1.6 }}>
        After submitting you&apos;ll be redirected to WhatsApp where our team will follow up directly.
      </p>

      <style>{`
        @media (max-width: 560px) {
          .form-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
