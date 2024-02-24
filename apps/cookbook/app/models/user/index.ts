import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { db } from "../../db/db";
import { users, SelectUserSchema, InsertUserSchema } from "../../db/schema/user";


export async function getUserById(
  id: SelectUserSchema["id"],
): Promise<SelectUserSchema | null> {
  const user = await db.select().from(users).where(eq(users.id, id));

  return user[0];
}

export async function getUserByEmail(
  email: SelectUserSchema["email"],
): Promise<SelectUserSchema | null> {
  const user = await db.select().from(users).where(eq(users.email, email));

  return user[0];
}

export async function createUser(data: InsertUserSchema) {
  const existingUser = await getUserByEmail(data.email);

  if (existingUser) return false;

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const userWithHashedPassword = {
    ...data,
    password: hashedPassword,
  };

  await db.insert(users).values(userWithHashedPassword);
}

export async function deleteUserByEmail(email: SelectUserSchema["email"]) {
  await db.delete(users).where(eq(users.email, email));
}

export async function verifyLogin(email: string, password: string) {
  const user = await getUserByEmail(email);

  if (!user) return false;
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _, ...userWithoutPassword } = user;

  return userWithoutPassword;
}
