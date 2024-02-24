import { sql } from "drizzle-orm";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  userType: text("user_type", { enum: ["OWNER", "USER"] }).notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const recipes = sqliteTable("recipe", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const recipeIngredients = sqliteTable("recipe_ingredient", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  recipeId: integer("recipe_id", { mode: "number" })
    .notNull()
    .references(() => recipes.id),
  ingredient: text("ingredient").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const recipeSteps = sqliteTable("recipe_step", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  recipeId: integer("recipe_id", { mode: "number" })
    .notNull()
    .references(() => recipes.id),
  step: text("step").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const recipeTags = sqliteTable("recipe_tag", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  recipeId: integer("recipe_id", { mode: "number" })
    .notNull()
    .references(() => recipes.id),
  tag: text("tag").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const recipeImages = sqliteTable("recipe_image", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  recipeId: integer("recipe_id", { mode: "number" })
    .notNull()
    .references(() => recipes.id),
  url: text("url").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});
