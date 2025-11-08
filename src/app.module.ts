import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './db/drizzle.module';
import { InsertsModule } from './db/insert/insert.module';
import { SelectModule } from './db/select/select.module';

@Module({
  imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		DrizzleModule,
		InsertsModule,
		SelectModule
	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
