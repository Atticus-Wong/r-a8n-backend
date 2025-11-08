import { Injectable, Logger } from '@nestjs/common';
import { DrizzleService } from '../drizzle.service';
import { CreateGroupDTO, CreateMemberDTO } from 'src/utils/types';

@Injectable()
export class DeleteService {
	private readonly logger = new Logger(DeleteService.name);
	constructor(private readonly drizzle: DrizzleService) {}

	async deleteGroup(data: CreateGroupDTO) {
		// TODO: Implement
	}

	async deleteMember(data: CreateMemberDTO) {
		// TODO: Implement
	}

	async deleteSession(data: any) {
		// TODO: implement
	}
}
