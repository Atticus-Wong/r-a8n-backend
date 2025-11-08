import { Injectable, OnModuleDestroy, OnModuleInit, Logger } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/postgres-js';
import { ConfigService } from '@nestjs/config';
import postgres, { Sql } from 'postgres';
import * as schema from './schema';

@Injectable()
export class DrizzleService implements OnModuleInit, OnModuleDestroy {
	private readonly logger = new Logger(DrizzleService.name);
	private readonly client: Sql;
	readonly db;
	constructor(private readonly config: ConfigService) {
		const url = this.config.getOrThrow<string>('DATABASE_URL');
		this.client = postgres(url, { prepare: false, ssl: 'require'})
		this.db = drizzle(this.client, { schema });
	}

  async onModuleInit() {
    this.logger.log('Connected to Supabase database');
  }

  async onModuleDestroy() {
    await this.client.end();
  }

}

