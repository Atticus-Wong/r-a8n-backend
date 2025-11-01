import { Module } from '@nestjs/common';
import { DrizzleModule } from '../drizzle.module';
import { InsertsController } from './insert.controller';
import { InsertsService } from './insert.service';

@Module({
	imports: [DrizzleModule],
	controllers: [InsertsController],
	providers: [InsertsService],
})
export class InsertsModule {}
