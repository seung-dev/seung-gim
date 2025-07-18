import { Button, type ButtonProps } from "@mui/material";

import {
	build_class,
	SBackgroundPaint,
	type SBackgroundPaintProps,
	type SBorderRadiusProps,
	type SClassProps,
	SOutlinePaint,
	type SOutlinePaintProps,
	type SScaleProps,
} from "./SStyles";

export interface SButtonProps extends ButtonProps {
	styles?: SClassProps[];
	contained?: SBackgroundPaintProps;
	outlined?: SOutlinePaintProps;
	rounded?: SBorderRadiusProps;
	scale?: SScaleProps;
	ellipsis?: boolean;
}

export const SButton = (args: SButtonProps) => {
	const {
		styles,
		contained,
		outlined,
		rounded,
		scale,
		ellipsis,
		className,
		children,
		...misc
	} = args;

	return (
		<Button
			className={build_class(
				"s-button-root",
				"normal-case",
				rounded && `rounded-${rounded}`,
				scale && `s-button-${scale}`,
				contained && SBackgroundPaint[contained],
				!contained && outlined && `outline ${SOutlinePaint[outlined]}`,
				className,
				styles,
			)}
			{...misc}
		>
			<span className={`s-button-label${ellipsis ? " truncate" : ""}`}>{children}</span>
		</Button>
	);
};
