import type { ReactNode } from "react";

import { build_class, type SScaleProps } from "./SStyles";

export interface SLucideProps {
	scale?: SScaleProps;
	paint?: string;
	icon: ReactNode;
}

export const SLucide = (args: SLucideProps) => {
	const { scale, paint, icon } = args;

	return (
		<span className={build_class("s-lucide-root", scale && `s-lucide-${scale}`, paint)}>
			{icon}
		</span>
	);
};
