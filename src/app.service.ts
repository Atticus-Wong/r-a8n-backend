import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RouteOptimizationClient } from '@googlemaps/routeoptimization';
import { RidesQueryDTO } from './utils/types';
import { OptimizeToursResponse, OptimizeToursRequest } from './utils/types';
import { isoToTimestamp } from './utils/helper';



@Injectable()
export class AppService {
	constructor(private readonly config: ConfigService) {}
	private readonly logger = new Logger(AppService.name);
	private readonly routeClient = new RouteOptimizationClient();

  getHello(): string {
		const projectID = this.config.getOrThrow<string>('GCP_PROJECT_ID')
		return projectID
  }

	async optimizeRides(body: RidesQueryDTO): Promise<OptimizeToursResponse> {
		const projectID = this.config.getOrThrow<string>('GCP_PROJECT_ID')
		const request: OptimizeToursRequest = {
			parent: `projects/${projectID}`,
			model: {
				shipments: [
					{
						pickups: [
							{
								arrivalLocation: {
									latitude: 37.73881799999999,
									longitude: -122.4161,
								},
							},
						],
						deliveries: [
							{
								arrivalLocation: {
									latitude: 37.79581,
									longitude: -122.4218856,
								},
							},
						],
					},
				],
				vehicles: [
					{
						startLocation: {
							latitude: 37.73881799999999,
							longitude: -122.4161,
						},
						endLocation: {
							latitude: 37.73881799999999,
							longitude: -122.4161,
						},
						costPerKilometer: 1,
					},
				],
				globalStartTime: isoToTimestamp('2024-02-13T00:00:00.000Z'),
				globalEndTime: isoToTimestamp('2024-02-14T06:00:00.000Z'),
			},
		};

		try {
			const response = (await this.routeClient.optimizeTours(
				request,
			)) as [
					OptimizeToursResponse,
					OptimizeToursRequest | undefined,
					Record<string, unknown> | undefined,
			];
			const result = response[0];
			return result;
		} catch (error) {
			this.logger.error('optimizeTours failed', error as Error);
			throw error;
		}
	}
}
