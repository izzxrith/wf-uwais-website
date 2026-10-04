import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { SERVICES, CLIENTS } from "../src/lib/constants";

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DIRECT_URL }) });

async function main() {
  console.log("Seeding services…");
  for (let i = 0; i < SERVICES.length; i++) {
    const s = SERVICES[i];
    await prisma.service.upsert({ where: { slug: s.slug }, update: {}, create: { name: s.name, slug: s.slug, description: s.short, sortOrder: i } });
  }
  console.log("Seeding clients…");
  for (let i = 0; i < CLIENTS.length; i++) {
    const exists = await prisma.clientShowcase.findFirst({ where: { name: CLIENTS[i].name } });
    if (!exists) await prisma.clientShowcase.create({ data: { name: CLIENTS[i].name, sortOrder: i } });
  }
  console.log("Seeding admin…");
  const email = process.env.ADMIN_EMAIL ?? "admin@wfuwais.com";
  const pass  = process.env.ADMIN_PASSWORD ?? "admin123";
  await prisma.adminUser.upsert({ where: { email }, update: {}, create: { email, passwordHash: await bcrypt.hash(pass, 12), name: "WF Uwais Admin" } });
  console.log("Done.");
}

main().catch(e => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
