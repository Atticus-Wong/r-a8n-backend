import { 
	pgTable, 
	text,
	doublePrecision, 
	timestamp, 
	boolean, 
	integer, 
	jsonb,
	uuid
} from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

export const members = pgTable('members', {
	id: uuid('id').defaultRandom().primaryKey(),
	group_id: uuid('group_id')
		.notNull()
		.references(() => groups.group_id, { onDelete: 'cascade'}),
	latitude: doublePrecision('latitude').notNull(),
	longitude: doublePrecision('longitude').notNull(),
	name: text('name').notNull(),
	is_driver: boolean('is_driver'),
	available_seats: integer('available_seats'),
	contact_info: jsonb('contact_info')
})

export const sessions = pgTable('sessions', {
	session_id: uuid('id').defaultRandom().primaryKey(),
	group_id: uuid('group_id')
		.notNull()
		.references(() => groups.group_id, { onDelete: 'cascade'}),
	created_at: timestamp('created_at').defaultNow().notNull(),
	session_name: text('session_name'),
	is_favorite: boolean('is_favorite'),
	info: jsonb('info').notNull(), // stores all necessary information for recreating the session
})

export const groups = pgTable('groups', {
	group_id: uuid('group_id').defaultRandom().primaryKey().notNull(),
	name: text('name').notNull(),
	latitude: doublePrecision('latitude').notNull(),
	longitude: doublePrecision('longitude').notNull(),
})

export type InsertGroup = InferInsertModel<typeof groups>;
export type InsertSession = InferInsertModel<typeof sessions>;
export type InsertMembers= InferInsertModel<typeof members>;
