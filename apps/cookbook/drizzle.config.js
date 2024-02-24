import "dotenv/config";

/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./app/db/schema.server.ts",
  out: "./migrations",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
};
