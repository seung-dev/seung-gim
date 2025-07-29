import dayjs, { type ManipulateType } from "dayjs";

export const timestamp = () => dayjs().unix();

export type SDateFormat =
	| "YYYY-MM-DD HH:mm:ss"
	| "YYYYMMDDHHmmss"
	| "YYYY-MM-DD"
	| "YYYYMMDD"
	| "YYYY-MM"
	| "YYYYMM"
	| "YYYY"
	| "MM"
	| "DD";

export const date_format = (
	format: SDateFormat = "YYYY-MM-DD",
	options?: { value?: number; add?: number; unit?: ManipulateType },
): string => {
	const { value, add = 0, unit = "day" } = options ?? {};

	const date = !value ? dayjs() : dayjs(value);

	if (add) {
		return date.subtract(add * -1, unit).format(format);
	}

	return date.format(format);
};

export type STimeFormat = "mm:ss" | "HH:mm:ss" | "D HH:mm:ss";

export const time_format = ({
	time,
	format = "mm:ss",
}: {
	time: number;
	format?: STimeFormat;
}): string => {
	const ss = time % 60;
	const mm = (time % (60 * 60)) / 60;
	if ("mm:ss" === format) {
		return `${String(Math.floor(mm)).padStart(2, "0")}:${String(Math.floor(ss)).padStart(2, "0")}`;
	}
	const hh = (time % (60 * 60 * 24)) / (60 * 60);
	if ("HH:mm:ss" === format) {
		return `${String(Math.floor(hh)).padStart(2, "0")}:${String(Math.floor(mm)).padStart(2, "0")}:${String(
			Math.floor(ss),
		).padStart(2, "0")}`;
	}
	const d = time / (60 * 60 * 24);
	return `${Math.floor(d)}D ${String(Math.floor(hh)).padStart(2, "0")}:${String(
		Math.floor(mm),
	).padStart(2, "0")}:${String(Math.floor(ss)).padStart(2, "0")}`;
};

export const date_max = (format: SDateFormat, a: string, b: string) => {
	const a_date = dayjs(a, format);
	const b_date = dayjs(b, format);
	return a_date.isAfter(b_date) ? a_date.format(format) : b_date.format(format);
};
