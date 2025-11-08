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

	// NOTE: response object has a visits array that stores all necessary information
	// NOTE: you can set vehicle capacity
	async optimizeRides(body: RidesQueryDTO): Promise<OptimizeToursResponse> {
		const projectID = this.config.getOrThrow<string>('GCP_PROJECT_ID')
		const request: OptimizeToursRequest = {
			parent: `projects/${projectID}`,
			model: {
				shipments: [
					{
						pickups: [ // colleges at la rue
							{
								arrivalLocation: {
									latitude: 38.54121451246123, // 38.54121451246123, -121.76212189869403
									longitude: -121.76212189869403,
								},
								loadDemands: {
									seats: { amount: 1 }
								}
							},
						],
						deliveries: [
							{
								arrivalLocation: {
									latitude: 38.565671102839445,
									longitude: -121.44199352101788,
								},
							},
						],
					},
					{
						pickups: [ // avalon
							{
								arrivalLocation: {
									latitude: 38.53861308341104, // 38.53861308341104, -121.72459217127707
									longitude: -121.72459217127707,
								},
								loadDemands: {
									seats: { amount: 1 }
								}
							},
						],
						deliveries: [
							{
								arrivalLocation: {
									latitude: 38.565671102839445,
									longitude: -121.44199352101788,
								},
							},
						],
					},
				],
				vehicles: [
					{
						startLocation: {
							latitude: 38.53772601870374, // 38.53772601870374, -121.72785218662175
							longitude: -121.72785218662175,
						},
						endLocation: {
							latitude: 38.565671102839445,
							longitude: -121.44199352101788,
						},
						costPerKilometer: 1,
						loadLimits: {
							seats: {
								maxLoad: 2
							}
						}
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
			this.logger.log("Status 200: /rides endpoint")
			return result;
		} catch (error) {
			this.logger.error('optimizeTours failed', error as Error);
			throw error;
		}
	}
}
