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

