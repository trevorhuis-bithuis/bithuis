import "dotenv/config";
import { resolve } from "node:path";
import { db } from "./db";
import { migrate } from "drizzle-orm/libsql/migrator";

export async function runMigrate() {
  await migrate(db, {
    migrationsFolder: resolve(__dirname, "../../migrations"),
  });
}

(async () => {
  await runMigrate();
})();
