import type { ElementType, HTMLAttributes } from "react";

import type { LucideProps } from "lucide-react";

import { SLucideIcon } from "./SLucideIcon";
import { buildStyles, type SScaleProps, type SStyleProps } from "./STheme";

export interface SButtonIconProps extends Omit<HTMLAttributes<HTMLButtonElement>, "children"> {
	styles?: SStyleProps;
	scale?: SScaleProps;
	Icon?: ElementType<LucideProps>;
}

export const SButtonIcon = (args: SButtonIconProps) => {
	const { styles, scale, Icon, className, ...misc } = args;

	return (
		<button
			className={buildStyles("s-button-icon-root", "cursor-pointer", className)}
			{...misc}
		>
			{Icon && (
				<SLucideIcon
					styles={styles}
					scale={scale}
					Icon={Icon}
				/>
			)}
		</button>
	);
};
