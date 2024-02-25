import { beforeEach } from "vitest"
import { runDelete } from "../app/db/delete"
  
beforeEach(async () => {
    await runDelete();
})