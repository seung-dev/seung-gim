import type { ElementType } from "react";

import type { LucideProps } from "lucide-react";

import { build_class, type SClassProps, type SScaleProps } from "./SStyles";

export interface SLucideIconProps {
	styles?: SClassProps[];
	scale?: SScaleProps;
	paint?: string;
	LucideIcon: ElementType<LucideProps>;
}

export const SLucideIcon = (args: SLucideIconProps) => {
	const { styles = [], scale, paint, LucideIcon } = args;

	return (
		<LucideIcon
			className={build_class(
				"s-lucide-root",
				scale && `s-lucide-${scale}`,
				paint && `s-color-${paint}`,
				...styles,
			)}
		/>
	);
};
