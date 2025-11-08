import { Body, Controller, Post } from '@nestjs/common';
import { InsertsService } from './insert.service';
import type { CreateGroupDTO, CreateMemberDTO} from 'src/utils/types';

@Controller('db/insert')
export class InsertsController {
	constructor(private readonly inserts: InsertsService) {}

	@Post('groups')
	insertGroup(
		@Body()
		body: CreateGroupDTO,
	) {
		return this.inserts.insertGroup(body);
	}

	@Post('riders')
	insertMember(
		@Body()
		body: CreateMemberDTO,
	) {
		return this.inserts.insertMember(body);
	}
}
