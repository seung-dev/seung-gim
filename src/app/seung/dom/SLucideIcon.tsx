import type { ElementType } from "react";

import type { LucideProps } from "lucide-react";

import { buildStyles, type SScaleProps, type SStyleProps } from "./STheme";

export interface SLucideIconProps extends LucideProps {
	styles?: SStyleProps;
	scale?: SScaleProps;
	Icon: ElementType<LucideProps>;
}

export const SLucideIcon = (args: SLucideIconProps) => {
	const { scale, Icon, styles, className, ...misc } = args;

	return (
		<Icon
			className={buildStyles(
				"s-lucide-root",
				scale && `s-lucide-${scale}`,
				styles,
				className,
			)}
			{...misc}
		/>
	);
};
