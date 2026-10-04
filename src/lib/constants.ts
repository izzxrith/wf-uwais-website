export const COMPANY = {
  name:            "WF Uwais Enterprise",
  address:         "No 60, Jalan Baru Bukit Temiang, 70200 Seremban, Negeri Sembilan.",
  phone:           "014-9496354",
  whatsappNumber:  "60149496354",
  email:           "wfuwais9098@gmail.com",
  vision:          "To be the leading professional cleaning service provider of choice in Negeri Sembilan and Melaka.",
  mission:         "To deliver quality, consistent, and trustworthy cleaning services for residential, commercial, and industrial clients.",
  serviceAreas:    ["Seremban, Negeri Sembilan", "Melaka", "Other areas upon request"],
  usps: [
    "Trained and experienced staff",
    "Company stamp on all reports and documents",
    "Daily WhatsApp updates for full transparency",
    "Competitive pricing",
    "Reliable and punctual — every time",
  ],
} as const;

export const SERVICES = [
  {
    slug:        "general-cleaning",
    name:        "General Cleaning",
    icon:        "🧹",
    short:       "Daily sweeping, mopping, rubbish collection, toilet cleaning, glass wiping, and parking area upkeep.",
    description: "Consistent day-to-day cleaning that keeps your space presentable and hygienic without you having to think about it.",
  },
  {
    slug:        "landscape-maintenance",
    name:        "Landscape Maintenance",
    icon:        "🌿",
    short:       "Grass cutting, sweeping, weed control, and insect spraying.",
    description: "Regular upkeep of outdoor areas so your grounds stay neat, safe, and pest-free year round.",
  },
  {
    slug:        "swimming-pool-cleaning",
    name:        "Swimming Pool Cleaning",
    icon:        "🏊",
    short:       "Backwash, vacuuming, pH monitoring, chlorine treatment, acid wash, and pressure washing.",
    description: "Full-spectrum pool maintenance: balanced chemistry, clean walls, and water that stays clear and safe for residents.",
  },
  {
    slug:        "commercial-residential-cleaning",
    name:        "Commercial & Residential",
    icon:        "🏢",
    short:       "Office, retail, and home cleaning solutions.",
    description: "Tailored cleaning programs for offices, retail outlets, and homes — flexible scheduling, consistent results.",
  },
] as const;

export const CLIENTS = [
  { name: "MR D.I.Y. Plus Masjid Tanah", type: "Retail" },
  { name: "Grand Residence, Melaka",       type: "Residence" },
  { name: "Residen Lapan, Melaka",         type: "Residence" },
  { name: "Silverscape Residence, Melaka", type: "Residence" },
  { name: "Bayu Temiang, Seremban",        type: "Residence" },
] as const;

export function buildWhatsAppLink(p: {
  customerName: string;
  serviceName:  string;
  location:     string;
  preferredDate?: string;
}) {
  const msg = [
    `Salam, saya baru hantar quote request melalui website WF Uwais.`,
    `Nama: ${p.customerName}`,
    `Perkhidmatan: ${p.serviceName}`,
    `Lokasi: ${p.location}`,
    p.preferredDate ? `Tarikh pilihan: ${p.preferredDate}` : null,
    `Mohon hubungi saya. Terima kasih.`,
  ].filter(Boolean).join("\n");
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}
