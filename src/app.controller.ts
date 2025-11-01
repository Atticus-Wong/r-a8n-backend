import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import type { RidesQueryDTO } from './utils/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

	@Post('/rides')
	optimizeRides(@Body() body: RidesQueryDTO) {
    return this.appService.optimizeRides(body);
	}
}
