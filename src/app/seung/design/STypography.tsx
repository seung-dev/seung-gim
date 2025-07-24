import { Typography, type TypographyProps } from "@mui/material";

import {
	build_class,
	type SClassProps,
	type SFontWeightProps,
	type SScaleProps,
} from "./SStyles";

export interface STypographyProps extends TypographyProps {
	locale?: string;
	styles?: SClassProps[];
	scale?: SScaleProps;
	weight?: SFontWeightProps;
	paint?: string;
	hidden?: boolean;
	ellipsis?: boolean;
	required?: boolean;
}

export const STypography = (args: STypographyProps) => {
	const {
		locale,
		styles,
		scale,
		weight,
		paint,
		hidden,
		ellipsis,
		required,
		className,
		children,
		...misc
	} = args;

	return (
		<Typography
			className={build_class(
				"s-typography-root",
				"leading-none",
				// "leading-none translate-y-0.5",
				locale && `s-font-${locale}`,
				scale && `s-font-${scale}`,
				weight && `font-${weight}`,
				paint && `s-color-${paint}`,
				hidden && "hidden",
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
