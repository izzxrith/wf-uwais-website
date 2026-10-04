"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const f = e.currentTarget;
    const email    = (f.elements.namedItem("email") as HTMLInputElement).value;
    const password = (f.elements.namedItem("password") as HTMLInputElement).value;
    const res = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
    const data = await res.json();
    if (!res.ok) { setError(data.message ?? "Login failed."); setLoading(false); return; }
    router.push("/admin/dashboard");
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", background: "var(--forest)" }}>
      <div style={{ width: "100%", maxWidth: "22rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <p className="display" style={{ color: "white", fontSize: "1.375rem", fontWeight: 400, marginBottom: ".25rem" }}>WF Uwais Enterprise</p>
          <p style={{ color: "rgba(255,255,255,.4)", fontSize: ".875rem" }}>Admin — sign in to continue</p>
        </div>

        {/* Card */}
        <div style={{ background: "white", borderRadius: ".625rem", padding: "2rem", boxShadow: "0 20px 40px rgba(0,0,0,.35)" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="admin@wfuwais.com" />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" required autoComplete="current-password" />
            </div>

            {error && (
              <div style={{ background: "#fef2f2", border: "1.5px solid #fecaca", borderRadius: ".375rem", padding: ".75rem 1rem", color: "#dc2626", fontSize: ".875rem" }}>
                {error}
              </div>
            )}

            <button type="submit" disabled={loading} className="btn btn-moss" style={{ justifyContent: "center", padding: ".75rem", marginTop: ".25rem" }}>
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
