import { Button, type ButtonProps } from "@mui/material";

import { build_class, type SClassProps, type SScaleProps } from "./SStyles";

export interface SButtonIconProps extends ButtonProps {
	styles?: SClassProps[];
	paint?: string;
	scale?: SScaleProps;
}

export const SButtonIcon = (args: SButtonIconProps) => {
	const { styles, paint, scale, className, children, ...misc } = args;

	return (
		<Button
			className={build_class(
				"s-button-icon-root",
				"normal-case",
				scale && `s-button-icon-${scale}`,
				paint,
				className,
				styles,
			)}
			{...misc}
		>
			{children}
		</Button>
	);
};
