import type { ElementType } from "react";

import type { LucideProps } from "lucide-react";

import { Button, type ButtonProps } from "@mui/material";

import { build_class, type SClassProps, type SScaleProps } from "./SStyles";

export interface SButtonIconProps extends Omit<ButtonProps, "children"> {
	styles?: SClassProps[];
	paint?: string;
	scale?: SScaleProps;
	hidden?: boolean;
	LucideIcon?: ElementType<LucideProps>;
}

export const SButtonIcon = (args: SButtonIconProps) => {
	const { styles, paint, scale, hidden, LucideIcon, className, ...misc } = args;

	return (
		<Button
			className={build_class(
				"s-button-icon-root",
				"min-w-0",
				"normal-case",
				scale && `s-button-icon-${scale}`,
				paint && `s-color-${paint}`,
				hidden && "hidden",
				className,
				styles,
			)}
			{...misc}
		>
			{LucideIcon && <LucideIcon className={`s-lucide-${scale}`} />}
		</Button>
	);
};
