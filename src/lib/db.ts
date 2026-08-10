import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "./env";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

function createPrismaClient() {
  const connectionString = env.DATABASE_URL;

  const adapter = new PrismaPg({
    connectionString: `${connectionString}?statement_cache_size=0`,
  });

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });
}

const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export { prisma };