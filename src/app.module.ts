import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './db/drizzle.module';
import { InsertsModule } from './db/insert/insert.module';

@Module({
  imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		DrizzleModule,
		InsertsModule
	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
