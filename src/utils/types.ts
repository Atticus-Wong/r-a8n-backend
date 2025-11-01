import { protos } from "@googlemaps/routeoptimization";

// easy-to-use google type wrappers
export type OptimizeToursRequest = protos.google.maps.routeoptimization.v1.IOptimizeToursRequest;
export type OptimizeToursResponse = protos.google.maps.routeoptimization.v1.IOptimizeToursResponse;
export type Timestamp = protos.google.protobuf.ITimestamp;

// DTO = Data Transfer Object
export type RidesQueryDTO = {
	drivers: string[]
	riders: {
		lat: string
		long: string
		name: string
	}[]
	destination: {
		lat: string
		long: string
	}
}


