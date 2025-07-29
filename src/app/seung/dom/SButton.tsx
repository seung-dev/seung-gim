import type { ButtonHTMLAttributes, ElementType, ReactNode } from "react";

import type { LucideProps } from "lucide-react";

import { SLucideIcon } from "./SLucideIcon";
import { buildStyles, type SScaleProps, type SStyleProps } from "./STheme";

export interface SButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
	styles?: SStyleProps;
	scale?: SScaleProps;
	ellipsis?: boolean;
	Prefix?: ElementType<LucideProps>;
	label?: ReactNode;
}

export const SButton = (args: SButtonProps) => {
	const { styles, scale, ellipsis, Prefix, label, className, ...misc } = args;

	return (
		<button
			className={buildStyles(
				"s-button-root",
				"min-w-0 flex flex-row items-center justify-center gap-2",
				"cursor-pointer",
				scale && `s-button-${scale} s-font-${scale}`,
				styles,
				className,
			)}
			{...misc}
		>
			{Prefix && (
				<SLucideIcon
					scale={scale}
					Icon={Prefix}
				/>
			)}
			<span className={buildStyles(ellipsis && "truncate")}>{label}</span>
		</button>
	);
};
