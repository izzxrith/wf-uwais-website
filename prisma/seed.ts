// Seeds the database with WF Uwais Enterprise's real services and clients.
// Run with: npx prisma db seed
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { SERVICES, CLIENTS } from "../src/lib/constants";

// Prisma 7 requires a driver adapter. Seeding runs via the CLI, which uses
// DIRECT_URL (see prisma.config.ts) - reuse it here for consistency.
const adapter = new PrismaPg({
  connectionString: process.env.DIRECT_URL,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding services...");
  for (let i = 0; i < SERVICES.length; i++) {
    const s = SERVICES[i];
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: {},
      create: {
        name: s.name,
        slug: s.slug,
        description: s.description,
        sortOrder: i,
      },
    });
  }

  console.log("Seeding client showcase...");
  for (let i = 0; i < CLIENTS.length; i++) {
    const existing = await prisma.clientShowcase.findFirst({
      where: { name: CLIENTS[i] },
    });
    if (!existing) {
      await prisma.clientShowcase.create({
        data: { name: CLIENTS[i], sortOrder: i },
      });
    }
  }

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
