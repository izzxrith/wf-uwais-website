"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

type QS = "NEW" | "CONTACTED" | "DONE" | "ARCHIVED";
type Quote = {
  id: string; customerName: string; phone: string; email: string | null;
  location: string; propertyType: string | null; preferredDate: string | null;
  notes: string | null; status: QS; adminNote: string | null;
  createdAt: string; service: { name: string };
};

const LABELS: Record<QS, string> = { NEW: "New", CONTACTED: "Contacted", DONE: "Done", ARCHIVED: "Archived" };
const STATUS_STYLE: Record<QS, { bg: string; color: string }> = {
  NEW:       { bg: "rgba(201,148,58,.12)",  color: "#92600e" },
  CONTACTED: { bg: "rgba(28,92,53,.12)",    color: "var(--moss)" },
  DONE:      { bg: "rgba(100,116,139,.1)",  color: "#475569" },
  ARCHIVED:  { bg: "rgba(148,163,184,.1)",  color: "#94a3b8" },
};

export default function AdminDashboard() {
  const router = useRouter();
  const [quotes,   setQuotes]   = useState<Quote[]>([]);
  const [filter,   setFilter]   = useState<QS | "ALL">("ALL");
  const [loading,  setLoading]  = useState(true);
  const [modal,    setModal]    = useState<{ id: string; note: string } | null>(null);
  const [draft,    setDraft]    = useState("");
  const [saving,   setSaving]   = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch(filter === "ALL" ? "/api/admin/quotes" : `/api/admin/quotes?status=${filter}`);
    if (res.status === 401) { router.push("/admin/login"); return; }
    setQuotes(await res.json());
    setLoading(false);
  }, [filter, router]);

  useEffect(() => { load(); }, [load]);

  const patch = async (id: string, body: object) => {
    await fetch(`/api/admin/quotes/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    load();
  };

  const archive = async (id: string) => {
    if (!confirm("Archive this quote request?")) return;
    await fetch(`/api/admin/quotes/${id}`, { method: "DELETE" });
    load();
  };

  const logout = async () => { await fetch("/api/admin/logout", { method: "POST" }); router.push("/admin/login"); };

  const active    = quotes.filter(q => q.status !== "ARCHIVED");
  const displayed = filter === "ALL" ? active : quotes.filter(q => q.status === filter);

  return (
    <div style={{ minHeight: "100vh", background: "#f0f4f1" }}>

      {/* Topbar */}
      <header style={{ background: "var(--forest)", padding: "0 1.5rem", height: "3.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <p className="display" style={{ color: "white", fontSize: "1rem", fontWeight: 700, lineHeight: 1 }}>WF Uwais</p>
          <span style={{ color: "rgba(255,255,255,.25)", fontSize: ".8125rem" }}>Admin</span>
        </div>
        <button onClick={logout} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,.45)", fontSize: ".875rem", transition: "color 140ms var(--ease-out)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "white")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.45)")}>
          Sign out
        </button>
      </header>

      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "1.75rem 1.5rem" }}>

        {/* Stat tabs */}
        <div style={{ display: "flex", gap: ".625rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {(["ALL", "NEW", "CONTACTED", "DONE"] as const).map(s => {
            const count = s === "ALL" ? active.length : quotes.filter(q => q.status === s).length;
            const active_ = filter === s;
            return (
              <button key={s} onClick={() => setFilter(s)} style={{
                padding: ".625rem 1.25rem",
                borderRadius: ".375rem",
                border: `1.5px solid ${active_ ? "var(--moss)" : "var(--border)"}`,
                background: active_ ? "var(--moss)" : "white",
                color: active_ ? "white" : "var(--body)",
                fontSize: ".875rem",
                fontWeight: active_ ? 600 : 400,
                cursor: "pointer",
                transition: "background 150ms var(--ease-out), border-color 150ms var(--ease-out), color 150ms var(--ease-out)",
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
              }}>
                {s === "ALL" ? "All active" : LABELS[s]}
                <span style={{ background: active_ ? "rgba(255,255,255,.2)" : "var(--sage)", color: active_ ? "white" : "var(--moss)", borderRadius: "1rem", padding: ".125rem .5rem", fontSize: ".75rem", fontWeight: 600 }}>
                  {count}
                </span>
              </button>
            );
          })}
          <button onClick={load} style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "var(--muted)", fontSize: ".875rem", padding: ".625rem", transition: "color 140ms var(--ease-out)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
            ↻ Refresh
          </button>
        </div>

        {/* Table card */}
        <div style={{ background: "white", borderRadius: ".5rem", border: "1.5px solid var(--border)", overflow: "hidden" }}>
          {loading ? (
            <div style={{ padding: "3rem", textAlign: "center", color: "var(--muted)", fontSize: ".9375rem" }}>Loading…</div>
          ) : displayed.length === 0 ? (
            <div style={{ padding: "3rem", textAlign: "center", color: "var(--muted)", fontSize: ".9375rem" }}>No requests found.</div>
          ) : (
            <>
              {/* Desktop table */}
              <div className="dt-table" style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".9375rem" }}>
                  <thead>
                    <tr style={{ borderBottom: "1.5px solid var(--border)" }}>
                      {["Customer", "Service", "Location", "Date", "Status", "Actions"].map(h => (
                        <th key={h} style={{ padding: ".75rem 1.25rem", textAlign: "left", fontSize: ".75rem", fontWeight: 600, color: "var(--muted)", letterSpacing: ".05em", whiteSpace: "nowrap" }}>
                          {h.toUpperCase()}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {displayed.map(q => (
                      <tr key={q.id} style={{ borderBottom: "1px solid var(--border)", transition: "background 120ms var(--ease-out)" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#fafcfb")}
                        onMouseLeave={e => (e.currentTarget.style.background = "white")}>
                        <td style={{ padding: "1rem 1.25rem" }}>
                          <p style={{ fontWeight: 500, color: "var(--ink)", marginBottom: ".125rem" }}>{q.customerName}</p>
                          <a href={`https://wa.me/${q.phone.replace(/\D/g,"")}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: ".8125rem", color: "var(--moss)", textDecoration: "none" }}>{q.phone}</a>
                          {q.email && <p style={{ fontSize: ".75rem", color: "var(--muted)", marginTop: ".125rem" }}>{q.email}</p>}
                        </td>
                        <td style={{ padding: "1rem 1.25rem", color: "var(--body)", whiteSpace: "nowrap" }}>{q.service.name}</td>
                        <td style={{ padding: "1rem 1.25rem", color: "var(--body)" }}>{q.location}{q.propertyType && <p style={{ fontSize: ".8125rem", color: "var(--muted)" }}>{q.propertyType}</p>}</td>
                        <td style={{ padding: "1rem 1.25rem", color: "var(--muted)", fontSize: ".8125rem", whiteSpace: "nowrap" }}>
                          {new Date(q.createdAt).toLocaleDateString("en-MY")}
                          {q.preferredDate && <p style={{ color: "var(--body)" }}>Pref: {new Date(q.preferredDate).toLocaleDateString("en-MY")}</p>}
                        </td>
                        <td style={{ padding: "1rem 1.25rem" }}>
                          <select value={q.status} onChange={e => patch(q.id, { status: e.target.value })} style={{ border: "none", borderRadius: "1.5rem", padding: ".2rem .75rem", fontSize: ".8125rem", fontWeight: 600, cursor: "pointer", appearance: "none", background: STATUS_STYLE[q.status].bg, color: STATUS_STYLE[q.status].color, transition: "background 150ms var(--ease-out)" }}>
                            {(Object.keys(LABELS) as QS[]).map(s => <option key={s} value={s}>{LABELS[s]}</option>)}
                          </select>
                        </td>
                        <td style={{ padding: "1rem 1.25rem" }}>
                          <div style={{ display: "flex", gap: "1rem" }}>
                            <button onClick={() => { setModal({ id: q.id, note: q.adminNote ?? "" }); setDraft(q.adminNote ?? ""); }}
                              style={{ background: "none", border: "none", cursor: "pointer", fontSize: ".8125rem", color: "var(--moss)", fontWeight: 500, padding: 0 }}>
                              {q.adminNote ? "Edit note" : "Add note"}
                            </button>
                            <button onClick={() => archive(q.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: ".8125rem", color: "#ef4444", padding: 0 }}>
                              Archive
                            </button>
                          </div>
                          {q.adminNote && <p style={{ fontSize: ".75rem", color: "var(--muted)", marginTop: ".25rem", maxWidth: "14rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{q.adminNote}</p>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="mobile-cards" style={{ display: "none" }}>
                {displayed.map(q => (
                  <div key={q.id} style={{ borderBottom: "1px solid var(--border)", padding: "1.125rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: ".75rem" }}>
                      <div>
                        <p style={{ fontWeight: 600, color: "var(--ink)" }}>{q.customerName}</p>
                        <a href={`https://wa.me/${q.phone.replace(/\D/g,"")}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: ".875rem", color: "var(--moss)", textDecoration: "none" }}>{q.phone}</a>
                      </div>
                      <span style={{ borderRadius: "1.5rem", padding: ".2rem .75rem", fontSize: ".8125rem", fontWeight: 600, background: STATUS_STYLE[q.status].bg, color: STATUS_STYLE[q.status].color }}>
                        {LABELS[q.status]}
                      </span>
                    </div>
                    <p style={{ fontSize: ".875rem", color: "var(--body)", marginBottom: ".5rem" }}>{q.service.name} · {q.location}</p>
                    <p style={{ fontSize: ".8125rem", color: "var(--muted)", marginBottom: ".75rem" }}>{new Date(q.createdAt).toLocaleDateString("en-MY")}</p>
                    <button onClick={() => setExpanded(expanded === q.id ? null : q.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: ".8125rem", color: "var(--moss)", padding: 0, fontWeight: 500 }}>
                      {expanded === q.id ? "Less" : "More"} options
                    </button>
                    {expanded === q.id && (
                      <div style={{ marginTop: ".75rem", display: "flex", flexDirection: "column", gap: ".625rem" }}>
                        <select value={q.status} onChange={e => patch(q.id, { status: e.target.value })} className="field" style={{ fontSize: ".875rem" }}>
                          {(Object.keys(LABELS) as QS[]).map(s => <option key={s} value={s}>{LABELS[s]}</option>)}
                        </select>
                        <div style={{ display: "flex", gap: "1rem" }}>
                          <button onClick={() => { setModal({ id: q.id, note: q.adminNote ?? "" }); setDraft(q.adminNote ?? ""); }} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--moss)", fontSize: ".875rem", fontWeight: 500, padding: 0 }}>
                            {q.adminNote ? "Edit note" : "Add note"}
                          </button>
                          <button onClick={() => archive(q.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#ef4444", fontSize: ".875rem", padding: 0 }}>
                            Archive
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Note modal */}
      {modal && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "1.5rem",
            animation: "riseIn 200ms var(--ease-out) forwards" }}
          onClick={e => { if (e.target === e.currentTarget) setModal(null); }}
        >
          <div style={{ background: "white", borderRadius: ".625rem", padding: "1.75rem", width: "100%", maxWidth: "28rem", boxShadow: "0 20px 40px rgba(0,0,0,.2)" }}>
            <h3 style={{ fontWeight: 600, marginBottom: "1rem", color: "var(--ink)" }}>Admin Note</h3>
            <div className="field" style={{ marginBottom: "1.125rem" }}>
              <label htmlFor="note-text">Note</label>
              <textarea id="note-text" value={draft} onChange={e => setDraft(e.target.value)} placeholder="Add an internal note about this request…" style={{ minHeight: "7rem" }} />
            </div>
            <div style={{ display: "flex", gap: ".75rem", justifyContent: "flex-end" }}>
              <button onClick={() => setModal(null)} className="btn btn-ghost" style={{ padding: ".5rem 1rem" }}>Cancel</button>
              <button onClick={async () => { setSaving(true); await patch(modal.id, { adminNote: draft }); setSaving(false); setModal(null); }} disabled={saving} className="btn btn-moss" style={{ padding: ".5rem 1.25rem" }}>
                {saving ? "Saving…" : "Save Note"}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .dt-table { display: none !important; }
          .mobile-cards { display: block !important; }
        }
      `}</style>
    </div>
  );
}
