import { Injectable, Logger } from '@nestjs/common';
import { DrizzleService } from '../drizzle.service';
import { groups, members } from '../schema';
import { CreateGroupDTO, CreateMemberDTO } from 'src/utils/types';

@Injectable()
export class InsertsService {
	private readonly logger = new Logger(InsertsService.name);
	constructor(private readonly drizzle: DrizzleService) {}

	async insertGroup(data: CreateGroupDTO) {
		try {
			const [created] = await this.drizzle.db
				.insert(groups)
				.values({
					name: data.name,
					latitude: data.latitude,
					longitude: data.longitude,
				})
				.returning();

			return created;
		} catch (error) {
			this.logger.error(`insertGroup failed for payload ${JSON.stringify((data))}`, error as Error)
			throw error;
		}
	}

	async insertMember(data: CreateMemberDTO) {
		const [created] = await this.drizzle.db
			.insert(members)
			.values({
				group_id: data.groupId,
				name: data.name,
				available_seats: data.availableSeats ?? null,
				is_driver: data.isDriver ?? false,
			})
			.returning();

		return created;
	}
}
