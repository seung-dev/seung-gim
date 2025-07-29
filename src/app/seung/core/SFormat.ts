export type SDataUnit = "B" | "KB" | "MB" | "GB" | "TB" | "PB" | "EB" | "ZB" | "YB";

export const SDataUnits: readonly SDataUnit[] = [
	"B",
	"KB",
	"MB",
	"GB",
	"TB",
	"PB",
	"EB",
	"ZB",
	"YB",
];

export const SRegex: Record<string, RegExp> = {
	TRIM: /^\s|\s+$/g,
	LEFT_NUMBER: /[^\d]/g,
	REMOVE_NUMBER: /[\d]/g,
	NUMBER_COMMA: /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
} as const;

export const is_null = (value: unknown): boolean => value == null;

export const is_blank = (value: string | undefined): boolean => value === "";

export const is_empty = (value: string | undefined): boolean =>
	is_null(value) || is_blank(value);

export const is_string = (value: unknown): boolean =>
	value !== undefined && typeof value === "string";

export const is_number = (value: unknown): boolean => !isNaN(Number(value));

export const is_array = (value: unknown): boolean => Array.isArray(value);

export const repeat = (value: string | undefined, size: number): string | undefined =>
	value?.repeat(size);

export const concat = (...values: (string | number | undefined)[]): string => values.join("");

export const left = (value: string | undefined, size: number): string | undefined =>
	value?.substring(0, size);

export const right = (value: string | undefined, size: number): string | undefined =>
	value?.slice(size * -1);

export const pad_start = (
	value: string | number | undefined,
	size: number,
	fill: string,
): string | undefined => String(value).padStart(size, fill);

export const pad_end = (
	value: string | number | undefined,
	size: number,
	fill: string,
): string | undefined => String(value).padEnd(size, fill);

export const replace = (
	value: string | undefined,
	regex: RegExp,
	fill: string,
): string | undefined => value?.replace(regex, fill);

export const trim = (value: string | undefined): string | undefined =>
	replace(value, SRegex.TRIM, "");

export const unescape_text = (value?: string): string =>
	value
		? (new DOMParser().parseFromString(value, "text/html").documentElement.textContent ??
			"")
		: "";

export const number_array = (length: number, begin?: number): number[] => {
	const add: number = begin ?? 0;
	return Array.from({ length: length }).map((_, i) => i + add);
};
export const to_string = (
	value: string | number | undefined,
	default_value?: string,
): string =>
	!value ? (default_value ?? "") : typeof value === "string" ? value : String(value);

export const to_number = (value: unknown, default_value?: number): number | undefined =>
	is_null(value) && default_value
		? default_value
		: is_number(value)
			? Number(value)
			: undefined;

export const to_color = (value: string | undefined): string | undefined => {
	if (!value) {
		return undefined;
	}
	const hash = value.split("").reduce((item, v) => v.charCodeAt(0) + ((item << 5) - item), 0);
	return number_array(3).reduce((item, v) => {
		const bit = (hash >> (v * 8)) & 0xff;
		return concat(item, bit.toString(16).padStart(2, "0"));
	}, "#");
};

export const number_only = (value: string | undefined): string | undefined =>
	replace(value, SRegex.LEFT_NUMBER, "");

export const format_comma = (value: string | number | undefined): string => {
	const _value = to_string(value);
	const n = _value.replace(SRegex.LEFT_NUMBER, "");
	return n ? n.replace(SRegex.NUMBER_COMMA, ",") : "";
};

export const format_phone_number = (value: string | undefined): string => {
	const n = number_only(value) ?? "";
	const l = n.length;
	if (l === 0) {
		return "";
	}
	if (n.startsWith("02")) {
		if (l < 3) {
			return n;
		}
		if (l < 6) {
			return n.replace(/(\d{2})(\d+)/g, "$1-$2");
		}
		if (l < 10) {
			return n.replace(/(\d{2})(\d{3})(\d+)/g, "$1-$2-$3");
		}
		return n.replace(/(\d{2})(\d{4})(\d+)/g, "$1-$2-$3");
	}
	if (l < 4) {
		return n;
	}
	if (l < 7) {
		return n.replace(/(\d{3})(\d+)/g, "$1-$2");
	}
	if (l < 11) {
		return n.replace(/(\d{3})(\d{3})(\d+)/g, "$1-$2-$3");
	}
	return n.replace(/(\d{3})(\d{4})(\d+)/g, "$1-$2-$3");
};

export const format_file_size = (
	value: string | number | undefined,
	unit?: SDataUnit,
): string | undefined => {
	const num = to_number(value);
	if (is_null(num)) return undefined;
	const safe: number = num ?? 0;
	const k = 1024;
	let index;
	if (unit) {
		index = SDataUnits.indexOf(unit);
	} else {
		index = Math.floor(Math.log(safe) / Math.log(k));
	}
	const size = safe / Math.pow(k, index);
	const exponent = size > 999 ? index + 1 : index;
	return `${(Math.floor((10 * safe) / Math.pow(k, exponent)) / 10).toFixed(1)} ${SDataUnits[exponent]}`;
};
