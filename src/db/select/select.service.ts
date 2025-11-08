import { Injectable, Logger } from '@nestjs/common';
import { DrizzleService } from '../drizzle.service';
import { groups, members } from '../schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class SelectService {
	private readonly logger = new Logger(SelectService.name);
	constructor(private readonly drizzle: DrizzleService) {}

	async selectGroup() {
		try {
			const result = await this.drizzle.db
				.select()
				.from(groups)

			return { groups: result };
		} catch (error) {
			this.logger.error(`select group failed`);
			throw error;
		}
	}

	async selectMembersFromGroup(group_id: string) {
		try {
			const result = await this.drizzle.db
				.select()
				.from(members)
				.where(eq(members.group_id, group_id));
			this.logger.log(`selectMembersFromGroup result=${JSON.stringify(result)}`);
      return { members: result };
		} catch (error) {
			this.logger.error(`selectMembersFromGroup failed for group_id=${group_id}`, error as Error);
			throw error;
		}
	}
}
