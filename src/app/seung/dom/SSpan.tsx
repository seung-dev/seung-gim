import { forwardRef, type HTMLAttributes } from "react";

import { buildStyles, type SStyleProps } from "./STheme";

export interface SSpanProps extends HTMLAttributes<HTMLSpanElement> {
	styles?: SStyleProps;
}

export const SSpan = forwardRef<HTMLSpanElement, SSpanProps>((args, ref) => {
	const { styles, className, children, ...misc } = args;

	return (
		<span
			className={buildStyles(styles, className)}
			ref={ref}
			{...misc}
		>
			{children}
		</span>
	);
});

SSpan.displayName = "SSpan";
