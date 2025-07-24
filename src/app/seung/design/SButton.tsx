import type { ElementType } from "react";

import type { LucideProps } from "lucide-react";

import { Button, type ButtonProps } from "@mui/material";

import { SLucideIcon } from "./SLucideIcon";
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

export interface SButtonProps extends Omit<ButtonProps, "children"> {
	styles?: SClassProps[];
	contained?: SBackgroundPaintProps;
	outlined?: SOutlinePaintProps;
	rounded?: SBorderRadiusProps;
	scale?: SScaleProps;
	ellipsis?: boolean;
	label: string;
	LucideIcon?: ElementType<LucideProps>;
}

export const SButton = (args: SButtonProps) => {
	const {
		styles,
		contained,
		outlined,
		rounded,
		scale,
		ellipsis,
		label,
		LucideIcon,
		className,
		...misc
	} = args;

	return (
		<Button
			className={build_class(
				"s-button-root",
				"gap-2",
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
			{LucideIcon && (
				<SLucideIcon
					scale={scale}
					LucideIcon={LucideIcon}
				/>
			)}
			<span className={`s-button-label${ellipsis ? " truncate" : ""}`}>{label}</span>
		</Button>
	);
};
