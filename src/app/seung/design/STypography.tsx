import { Typography, type TypographyProps } from "@mui/material";

import type { SLocaleProps } from "./SLocale";
import {
	build_class,
	type SClassProps,
	type SFontWeightProps,
	type SScaleProps,
} from "./SStyles";

export interface STypographyProps extends TypographyProps {
	styles?: SClassProps[];
	scale?: SScaleProps;
	weight?: SFontWeightProps;
	ellipsis?: boolean;
	required?: boolean;
	locale?: SLocaleProps;
}

export const STypography = (args: STypographyProps) => {
	const { styles, scale, weight, ellipsis, required, locale, className, children, ...misc } =
		args;

	return (
		<Typography
			className={build_class(
				"s-typography-root",
				"leading-none",
				// "[line-height:initial]",
				"tracking-[var(--s-letter-spacing)]",
				scale && `s-font-${scale}`,
				weight && `font-${weight}`,
				ellipsis && "truncate",
				locale && `s-font-${locale}`,
				className,
				styles,
			)}
			{...misc}
		>
			{children}
			{required && <span className="text-red-400">{" *"}</span>}
		</Typography>
	);
};
