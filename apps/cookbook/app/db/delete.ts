import "dotenv/config";
import { db } from "./db";
import { users } from "./schema/user";

(async () => {
  await db.delete(users);
})();