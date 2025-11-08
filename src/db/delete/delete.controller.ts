import { Body, Controller, Post } from '@nestjs/common';
import { DeleteService } from './delete.service';
import type { CreateGroupDTO, CreateMemberDTO} from 'src/utils/types';

@Controller('db/delete')
export class DeleteController{
	constructor(private readonly deletes: DeleteService) {}

	@Post('groups')
	deleteGroup(
		@Body()
		body: CreateGroupDTO,
	) {
		return this.deletes.deleteGroup(body);
	}

	@Post('riders')
	deleteMember(
		@Body()
		body: CreateMemberDTO,
	) {
		return this.deletes.deleteMember(body);
	}

	@Post('session')
	deleteSession(
		@Body()
		body: { placeholder: string },
	) {
		return this.deletes.deleteSession(body);
	}
}
