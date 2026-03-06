import { pgTable, uuid, varchar, text, integer, date } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const users = pgTable("users", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	email: text().notNull(),
	password: text().notNull(),
});

export const invoices = pgTable("invoices", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	customerId: uuid("customer_id").notNull(),
	amount: integer().notNull(),
	status: varchar({ length: 20 }).notNull(),
	date: date().notNull(),
});

export const customers = pgTable("customers", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	email: text().notNull(),
	imageUrl: text("image_url"),
});
export const revenue = pgTable("revenue", {
  month: varchar({ length: 4 }).notNull().unique(),
  revenue: integer().notNull(),
});