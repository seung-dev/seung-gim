import { create } from "zustand";

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

export type SBoxShadowProps = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type SFontWeightProps = "normal" | "medium" | "bold";

export type SBorderProps = "none" | "gray";

export type SBorderRadiusProps =
	| "xs"
	| "sm"
	| "md"
	| "lg"
	| "xl"
	| "2xl"
	| "3xl"
	| "4xl"
	| "full";

export type SClassProps = string | string[] | number | undefined | null | false;

export const build_class = (...classes: (SClassProps | SClassProps[])[]): string => {
	return classes.filter(Boolean).flat().filter(Boolean).join(" ");
};

export interface SStylesProps {
	font_size: number;
	unit: number;
	scale_xs: number;
	scale_sm: number;
	scale_md: number;
	scale_lg: number;
	scale_xl: number;
	scale_2xl: number;
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
	header_height: number;
}

interface SStylesStore {
	styles: SStylesProps;
	actions: {
		set_styles: (styles: Partial<SStylesProps>) => void;
		get_styles: () => string;
	};
}

const useSStylesStore = create<SStylesStore>()((set, get) => ({
	styles: {
		font_size: 16,
		unit: 0.0625,
		scale_xs: 28,
		scale_sm: 34,
		scale_md: 40,
		scale_lg: 46,
		scale_xl: 52,
		scale_2xl: 64,
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
		header_height: 64,
	},
	actions: {
		set_styles: (styles: Partial<SStylesProps>) => {
			set((state) => ({
				styles: { ...state.styles, ...styles },
			}));
		},
		get_styles: () => {
			const { styles } = get();
			const unit = styles.unit;
			const variables = Object.entries(styles)
				.map(([key, value]) => {
					const _key = key.replace(/_/g, "-");
					if (key === "font_size") {
						return `font-size: ${value}px;`;
					}
					if (key === "unit") {
						return `--s-${_key}: ${value}rem;`;
					}
					return `--s-${_key}: ${unit * value}rem;`;
				})
				.join("");
			return `:root {${variables}}`;
		},
	},
}));

export const useSStylesActions = () => useSStylesStore((state) => state.actions);
export const useSStyles = () => useSStylesStore((state) => state.styles);

export interface SDesignProps {
	styles?: SClassProps[];
	border?: SBorderProps;
	rounded?: SBorderRadiusProps;
	shadow?: SBoxShadowProps;
	scale?: SScaleProps;
	weight?: SFontWeightProps;
}

export const SBackgroundPaint = {
	red: "bg-red-600 hover:bg-red-700 text-white",
	orange: "bg-orange-600 hover:bg-orange-700 text-white",
	amber: "bg-amber-600 hover:bg-amber-700 text-white",
	yellow: "bg-yellow-600 hover:bg-yellow-700 text-white",
	lime: "bg-lime-600 hover:bg-lime-700 text-white",
	green: "bg-green-600 hover:bg-green-700 text-white",
	emerald: "bg-emerald-600 hover:bg-emerald-700 text-white",
	teal: "bg-teal-600 hover:bg-teal-700 text-white",
	cyan: "bg-cyan-600 hover:bg-cyan-700 text-white",
	sky: "bg-sky-600 hover:bg-sky-700 text-white",
	blue: "bg-blue-600 hover:bg-blue-700 text-white",
	indigo: "bg-indigo-600 hover:bg-indigo-700 text-white",
	violet: "bg-violet-600 hover:bg-violet-700 text-white",
	purple: "bg-purple-600 hover:bg-purple-700 text-white",
	fuchsia: "bg-fuchsia-600 hover:bg-fuchsia-700 text-white",
	pink: "bg-pink-600 hover:bg-pink-700 text-white",
	rose: "bg-rose-600 hover:bg-rose-700 text-white",
	gray: "bg-gray-600 hover:bg-gray-700 text-white",
	neutral: "bg-neutral-600 hover:bg-neutral-700 text-white",
	stone: "bg-stone-600 hover:bg-stone-700 text-white",
	black: "bg-black hover:bg-black/80 text-white",
	white: "bg-white hover:bg-white/80",
	disabled: "bg-gray-400 text-white cursor-not-allowed",
} as const;

export type SBackgroundPaintProps = keyof typeof SBackgroundPaint;

export const SOutlinePaint = {
	red: "outline-red-600 hover:outline-red-700 text-red-600 hover:text-red-700",
	orange: "outline-orange-600 hover:outline-orange-700 text-orange-600 hover:text-orange-700",
	amber: "outline-amber-600 hover:outline-amber-700 text-amber-600 hover:text-amber-700",
	yellow: "outline-yellow-600 hover:outline-yellow-700 text-yellow-600 hover:text-yellow-700",
	lime: "outline-lime-600 hover:outline-lime-700 text-lime-600 hover:text-lime-700",
	green: "outline-green-600 hover:outline-green-700 text-green-600 hover:text-green-700",
	emerald:
		"outline-emerald-600 hover:outline-emerald-700 text-emerald-600 hover:text-emerald-700",
	teal: "outline-teal-600 hover:outline-teal-700 text-teal-600 hover:text-teal-700",
	cyan: "outline-cyan-600 hover:outline-cyan-700 text-cyan-600 hover:text-cyan-700",
	sky: "outline-sky-600 hover:outline-sky-700 text-sky-600 hover:text-sky-700",
	blue: "outline-blue-600 hover:outline-blue-700 text-blue-600 hover:text-blue-700",
	indigo: "outline-indigo-600 hover:outline-indigo-700 text-indigo-600 hover:text-indigo-700",
	violet: "outline-violet-600 hover:outline-violet-700 text-violet-600 hover:text-violet-700",
	purple: "outline-purple-600 hover:outline-purple-700 text-purple-600 hover:text-purple-700",
	fuchsia:
		"outline-fuchsia-600 hover:outline-fuchsia-700 text-fuchsia-600 hover:text-fuchsia-700",
	pink: "outline-pink-600 hover:outline-pink-700 text-pink-600 hover:text-pink-700",
	rose: "outline-rose-600 hover:outline-rose-700 text-rose-600 hover:text-rose-700",
	gray: "outline-gray-600 hover:outline-gray-700 text-gray-600 hover:text-gray-700",
	neutral:
		"outline-neutral-600 hover:outline-neutral-700 text-neutral-600 hover:text-neutral-700",
	stone: "outline-stone-600 hover:outline-stone-700 text-stone-600 hover:text-stone-700",
	black: "outline-black hover:outline-black/80 text-black hover:text-black/80",
	white: "outline-white hover:outline-white/80 text-white hover:text-white/80",
	disabled: "outline-gray-400 text-gray-400 cursor-not-allowed",
} as const;

export type SOutlinePaintProps = keyof typeof SOutlinePaint;
