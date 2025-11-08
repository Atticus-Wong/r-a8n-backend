import { Module } from '@nestjs/common';
import { DrizzleModule } from '../drizzle.module';
import { SelectController } from './select.controller';
import { SelectService } from './select.service';

@Module({
	imports: [DrizzleModule],
	controllers: [SelectController],
	providers: [SelectService],
})
export class SelectModule {}
