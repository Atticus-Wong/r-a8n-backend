import { protos } from "@googlemaps/routeoptimization";

// easy-to-use google type wrappers
export type OptimizeToursRequest = protos.google.maps.routeoptimization.v1.IOptimizeToursRequest;
export type OptimizeToursResponse = protos.google.maps.routeoptimization.v1.IOptimizeToursResponse;
export type Timestamp = protos.google.protobuf.ITimestamp;

// DTO = Data Transfer Object
export type RidesQueryDTO = {
	drivers: {
		lat: string
		lng: string
		name: string
	}[]
	riders: {
		lat: string
		lng: string
		name: string
	}[]
	destination: {
		lat: string
		lng: string
	}
}

export type CreateGroupDTO = {
	name: string;
	latitude: number;
	longitude: number;
}


export type CreateMemberDTO = {
	groupId: string;
	name: string;
	availableSeats?: number | null;
	isDriver?: boolean;
	latitude: string;
	longitude: string;
	contactInfo: any
};
