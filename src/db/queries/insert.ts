import { db } from "..";
import { 
	members,
	sessions,
	groups,
	InsertGroup,
	InsertMembers,
	InsertSession
} from "../schema";

export async function createGroup(data: InsertGroup) {
	await db.insert(groups).values(data)
}

export async function createMembers(data: InsertMembers) {
	await db.insert(members).values(data)
}

export async function createSession(data: InsertSession) {
	await db.insert(sessions).values(data)
}
