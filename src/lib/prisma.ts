// Prisma client singleton.
// In development, Next.js hot-reloads files, which would otherwise create
// a new PrismaClient on every reload and exhaust database connections.
// This pattern reuses one client across reloads.
//
// Prisma 7 requires a driver adapter instead of a bare `new PrismaClient()`.
// We use @prisma/adapter-pg here, pointed at the pooled DATABASE_URL
// (the app's runtime queries go through the pgbouncer transaction pooler;
// only CLI/migrations use DIRECT_URL, configured separately in prisma.config.ts).
// Docs: https://pris.ly/d/prisma7-client-config

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
