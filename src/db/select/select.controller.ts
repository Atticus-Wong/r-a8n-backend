import { Body, Controller, Get, Post } from '@nestjs/common';
import { SelectService } from './select.service';

@Controller('db/select')
export class SelectController {
	constructor(private readonly selects: SelectService) {}

	@Get('groups')
	selectGroup() {
		return this.selects.selectGroup();
	}

	@Post('selectMembersFromGroup')
	selectMembersFromGroup(
		@Body('group_id')
		group_id: string
	) {
		return this.selects.selectMembersFromGroup(group_id);
	}
}
