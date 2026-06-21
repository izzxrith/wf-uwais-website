import Link from "next/link";
import { COMPANY, SERVICES, CLIENTS } from "@/lib/constants";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {COMPANY.name}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            {COMPANY.vision}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-400 transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="rounded-md border border-slate-600 px-6 py-3 text-base font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
            Our Services
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="rounded-lg border border-slate-200 p-6 hover:border-emerald-400 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-slate-50 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Trusted By
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {CLIENTS.map((client) => (
              <span
                key={client}
                className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA footer strip */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          Ready to get your space cleaned?
        </h2>
        <p className="mt-3 text-slate-600">
          Serving {COMPANY.serviceAreas.slice(0, 2).join(" and ")} — and beyond, upon request.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-400 transition-colors"
        >
          Request a Quote
        </Link>
      </section>
    </main>
  );
}
