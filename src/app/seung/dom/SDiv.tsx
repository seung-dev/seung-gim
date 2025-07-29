import { forwardRef, type HTMLAttributes } from "react";

import { buildStyles, type SStyleProps } from "./STheme";

export interface SDivProps extends HTMLAttributes<HTMLDivElement> {
	styles?: SStyleProps;
}

export const SDiv = forwardRef<HTMLDivElement, SDivProps>((args, ref) => {
	const { styles, className, children, ...misc } = args;

	return (
		<div
			className={buildStyles(styles, className)}
			ref={ref}
			{...misc}
		>
			{children}
		</div>
	);
});

SDiv.displayName = "SDiv";
