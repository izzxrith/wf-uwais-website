// Central place for WF Uwais Enterprise's real business info.
// Pulled from the company profile so we don't hardcode it across multiple files.

export const COMPANY = {
  name: "WF Uwais Enterprise",
  address: "No 60, Jalan Baru Bukit Temiang, 70200 Seremban, Negeri Sembilan.",
  phone: "014-9496354",
  whatsappNumber: "60149496354", // international format, no symbols, for wa.me links
  email: "wfuwais9098@gmail.com",
  vision:
    "To be the leading professional cleaning service provider of choice in Negeri Sembilan and Melaka.",
  mission:
    "To deliver quality, consistent, and trustworthy cleaning services for residential, commercial, and industrial clients.",
  serviceAreas: ["Seremban, Negeri Sembilan", "Melaka", "Other areas upon request"],
  usps: [
    "Trained and experienced staff",
    "Company stamp on all reports and documents",
    "Daily updates via WhatsApp for transparency",
    "Competitive pricing",
    "Reliable and punctual service",
  ],
} as const;

// Services offered — also seeded into the database (see prisma/seed.ts),
// kept here too for quick reference in static content.
export const SERVICES = [
  {
    slug: "general-cleaning",
    name: "General Cleaning",
    description:
      "Daily sweeping, mopping, rubbish collection, toilet cleaning, glass wiping, and parking area upkeep.",
  },
  {
    slug: "landscape-maintenance",
    name: "Landscape Maintenance",
    description: "Grass cutting, sweeping, weed and insect spraying.",
  },
  {
    slug: "swimming-pool-cleaning",
    name: "Swimming Pool Cleaning",
    description:
      "Backwash, vacuuming, pH monitoring, chlorine treatment, acid wash, and pressure washing.",
  },
  {
    slug: "commercial-residential-cleaning",
    name: "Commercial & Residential Cleaning",
    description: "Office, retail, and home cleaning solutions.",
  },
] as const;

export const CLIENTS = [
  "MR D.I.Y. Plus Masjid Tanah",
  "Grand Residence, Melaka",
  "Residen Lapan, Melaka",
  "Silverscape Residence, Melaka",
  "Bayu Temiang, Seremban",
] as const;

// Builds a wa.me link with a pre-filled message from a quote submission,
// so the admin doesn't have to re-ask the customer what they already typed.
export function buildWhatsAppLink(params: {
  customerName: string;
  serviceName: string;
  location: string;
  preferredDate?: string;
}) {
  const lines = [
    `Hi WF Uwais Enterprise, I just submitted a quote request.`,
    `Name: ${params.customerName}`,
    `Service: ${params.serviceName}`,
    `Location: ${params.location}`,
  ];
  if (params.preferredDate) {
    lines.push(`Preferred date: ${params.preferredDate}`);
  }
  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${message}`;
}
