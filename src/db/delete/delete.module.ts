import { Module } from '@nestjs/common';
import { DrizzleModule } from '../drizzle.module';
import { DeleteController } from './delete.controller';
import { DeleteService } from './delete.service';

@Module({
	imports: [DrizzleModule],
	controllers: [DeleteController],
	providers: [DeleteService],
})
export class InsertsModule {}
