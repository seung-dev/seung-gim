import { Typography, type TypographyProps } from "@mui/material";

import type { SLocaleProps } from "./SLocale";
import {
	build_class,
	type SClassProps,
	type SFontWeightProps,
	type SScaleProps,
} from "./SStyles";

export interface STypographyProps extends TypographyProps {
	locale?: SLocaleProps;
	styles?: SClassProps[];
	scale?: SScaleProps;
	weight?: SFontWeightProps;
	ellipsis?: boolean;
	required?: boolean;
}

export const STypography = (args: STypographyProps) => {
	const { locale, styles, scale, weight, ellipsis, required, className, children, ...misc } =
		args;

	return (
		<Typography
			className={build_class(
				"s-typography-root",
				"leading-none",
				locale && `s-font-${locale}`,
				scale && `s-font-${scale}`,
				weight && `font-${weight}`,
				ellipsis && "truncate",
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
