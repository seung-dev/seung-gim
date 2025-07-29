import { SDiv, type SDivProps } from "./SDiv";
import {
	buildStyles,
	type SFontWeightProps,
	type SScaleProps,
	type SStyleProps,
} from "./STheme";

export interface STypographyProps extends SDivProps {
	styles?: SStyleProps;
	scale?: SScaleProps;
	locale?: string;
	weight?: SFontWeightProps;
	hidden?: boolean;
	ellipsis?: boolean;
	required?: boolean;
}

export const STypography = (args: STypographyProps) => {
	const {
		styles,
		scale,
		locale,
		weight,
		hidden,
		ellipsis,
		required,
		className,
		children,
		...misc
	} = args;

	return (
		<SDiv
			className="s-typography-root"
			styles={buildStyles(
				"leading-none",
				// "leading-none translate-y-0.5",
				scale && `s-font-${scale}`,
				locale && `s-font-${locale}`,
				weight && `font-${weight}`,
				hidden && "hidden",
				ellipsis && "truncate",
				styles,
				className,
			)}
			{...misc}
		>
			{children}
			{required && <span className="s-color-error">{" *"}</span>}
		</SDiv>
	);
};
