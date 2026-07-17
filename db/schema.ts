import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const leads = sqliteTable("leads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),
  skillSlug: text("skill_slug").notNull(),
  source: text("source").notNull().default("skill-landing-page"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
