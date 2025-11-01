import { Timestamp } from "./types";

const isoToTimestamp = (iso: string): Timestamp => {
	const date = new Date(iso);
	const millis = date.getTime();
	return {
		seconds: Math.floor(millis / 1000),
		nanos: (millis % 1000) * 1_000_000,
	};
};

export {
	isoToTimestamp
}
