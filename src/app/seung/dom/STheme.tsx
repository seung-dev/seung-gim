import { create } from "zustand";

const toRGB = (value: string): [number, number, number] | undefined => {
	if (!value.startsWith("#")) {
		return undefined;
	}

	const hex = value.replace("#", "");

	if (!/^[0-9A-Fa-f]{6}$|^[0-9A-Fa-f]{8}$/.test(hex)) {
		return undefined;
	}

	const r = parseInt(hex.substring(0, 2), 16) / 255;
	const g = parseInt(hex.substring(2, 4), 16) / 255;
	const b = parseInt(hex.substring(4, 6), 16) / 255;

	return [r, g, b];
};

const toHSL = (rgb: [number, number, number]): [number, number, number] => {
	const [r, g, b] = rgb;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);

	let h = 0;
	let s = 0;
	const l = (max + min) / 2;

	if (max === min) {
		h = s = 0;
	} else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}

	return [h * 360, s * 100, l * 100];
};

const toHex = (c: number) => {
	const hex = Math.round(c * 255).toString(16);
	return hex.length === 1 ? "0" + hex : hex;
};

const toHexColor = (h: number, s: number, l: number) => {
	h /= 360;
	s /= 100;
	l /= 100;

	const hue2rgb = (p: number, q: number, t: number) => {
		if (t < 0) t += 1;
		if (t > 1) t -= 1;
		if (t < 1 / 6) return p + (q - p) * 6 * t;
		if (t < 1 / 2) return q;
		if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
		return p;
	};

	let r, g, b;

	if (s === 0) {
		r = g = b = l;
	} else {
		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const buildColors = (name: string, value: string, weight = 600) => {
	const rgb = toRGB(value);

	if (!rgb) {
		return "";
	}

	const alpha = value && value.length === 9 ? value.slice(7) : "";

	const [h, s, l] = toHSL(rgb);

	const lightnesses: Record<number, number> = {
		100: 90,
		200: 80,
		300: 70,
		400: 60,
		500: 50,
		600: 40,
		700: 30,
		800: 20,
		900: 10,
	};

	const lightness = lightnesses[weight];
	const diff = lightness - l;

	const palette: string[] = [];

	[100, 200, 300, 400, 500, 600, 700, 800, 900].forEach((weight) => {
		const target = lightnesses[weight];
		const _l = Math.max(0, Math.min(100, target - diff));

		let _s = s;
		if (weight <= 300) {
			_s = Math.max(0, s - (300 - weight) * 0.1);
		} else if (weight >= 700) {
			_s = Math.min(100, s + (weight - 700) * 0.05);
		}

		palette.push(`--s-color-${name}-${weight}: ${toHexColor(h, _s, _l)}${alpha};`);
	});

	return palette.join("");
};

export interface SThemeProps {
	font_size: number;
	unit: number;
	height_xs: number;
	height_sm: number;
	height_md: number;
	height_lg: number;
	height_xl: number;
	height_2xl: number;
	height_header: number;
	width_sidebar: number;
	width_sidebar_collapsed: number;
	font_xs: number;
	font_sm: number;
	font_md: number;
	font_lg: number;
	font_xl: number;
	font_2xl: number;
	font_3xl: number;
	font_4xl: number;
	font_5xl: number;
	font_6xl: number;
	color_outline: string;
	colors: Record<string, string>;
}

interface SThemeStore {
	theme: SThemeProps;
	actions: {
		setTheme: (theme: Partial<SThemeProps>) => void;
		cssVariables: (theme?: Partial<SThemeProps>) => string;
	};
}

const useSThemeStore = create<SThemeStore>()((set, get) => ({
	theme: {
		font_size: 16,
		unit: 0.0625,
		height_xs: 30,
		height_sm: 36,
		height_md: 42,
		height_lg: 48,
		height_xl: 56,
		height_2xl: 64,
		height_header: 64,
		width_sidebar: 224,
		width_sidebar_collapsed: 52,
		font_xs: 12,
		font_sm: 14,
		font_md: 16,
		font_lg: 20,
		font_xl: 24,
		font_2xl: 32,
		font_3xl: 40,
		font_4xl: 48,
		font_5xl: 56,
		font_6xl: 64,
		color_white: "#ffffff",
		color_gray: "#99a1af",
		color_black: "#000000",
		color_outline: "#0000003b",
		color_error: "#d32f2f",
		color_link: "#4169e1",
		colors: {},
	},
	actions: {
		setTheme: (theme: Partial<SThemeProps>) => {
			set((state) => ({
				theme: {
					...state.theme,
					...theme,
					colors: {
						...state.theme.colors,
						...(theme.colors || {}),
					},
				},
			}));
		},
		cssVariables: (theme?: Partial<SThemeProps>) => {
			const t = get();
			const _theme = {
				...t.theme,
				...theme,
				colors: { ...t.theme.colors, ...(theme?.colors ?? {}) },
			};
			const unit = _theme.unit;
			const variables = Object.entries(_theme)
				.filter(([key]) => key !== "colors")
				.map(([key, value]) => {
					const _key = key.replace(/_/g, "-");
					if (key === "font_size") {
						return `font-size: ${value as number}px;`;
					}
					if (key === "unit") {
						return `--s-${_key}: ${value as number}rem;`;
					}
					if (key.startsWith("color")) {
						return `--s-${_key}: ${value as string};`;
					}
					return `--s-${_key}: ${unit * (value as number)}rem;`;
				})
				.join("");
			const colors = Object.entries(_theme.colors)
				.map(([name, hex]) => {
					return buildColors(name.replace(/_/g, "-"), hex);
				})
				.join("");
			return `:root {${variables}${colors}}`;
		},
	},
}));

export const useSThemeActions = () => useSThemeStore((state) => state.actions);
export const useSTheme = () => useSThemeStore((state) => state.theme);

export type SScaleProps =
	| "xs"
	| "sm"
	| "md"
	| "lg"
	| "xl"
	| "2xl"
	| "3xl"
	| "4xl"
	| "5xl"
	| "6xl";

export type SFontWeightProps = "normal" | "medium" | "bold";

export type SStyleProps = string | string[] | number | undefined | null | false | SStyleProps[];

export const buildStyles = (...styles: SStyleProps[]): string => {
	return styles
		.reduce<string[]>((_, style) => {
			if (Array.isArray(style)) {
				return _.concat(buildStyles(...style).split(" "));
			}
			return style ? _.concat(String(style)) : _;
		}, [])
		.join(" ");
};
