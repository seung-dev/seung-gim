import type { HTMLAttributes } from "react";

import { buildStyles, type SStyleProps } from "./STheme";

interface SCardProps extends HTMLAttributes<HTMLDivElement> {
	styles?: SStyleProps;
}

export const SCard = (args: SCardProps) => {
	const { styles, className, children, ...misc } = args;

	return (
		<div
			className={buildStyles("s-card-root", "bg-white shadow-lg", styles, className)}
			{...misc}
		>
			{children}
		</div>
	);
};
