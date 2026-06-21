// Prisma 7 moved connection URLs and CLI settings out of schema.prisma
// and into this config file. This is used by the Prisma CLI for
// commands like `prisma db push`, `prisma db seed`, and `prisma studio`.
// Docs: https://pris.ly/d/config-datasource

import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    // DIRECT_URL is used here because CLI operations (migrations, db push)
    // need a direct connection, not the pgbouncer transaction pooler.
    url: env("DIRECT_URL"),
  },
});
