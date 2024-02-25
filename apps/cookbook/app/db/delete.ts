import "dotenv/config";
import { db } from "./db";
import { users } from "./schema/user";
import { recipes } from "./schema/recipe";
import { sql } from "drizzle-orm";

export async function runDelete() {
  await db.delete(users);
  await db.delete(recipes);
  await db.run(sql`delete from recipe_search;`);
}

(async () => {
  await runDelete();
})();
