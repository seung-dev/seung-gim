import { Divider, type DividerProps } from "@mui/material";

import { buildStyles, type SStyleProps } from "./STheme";

interface SDividerProps extends DividerProps {
	styles?: SStyleProps;
}

export const SDivider = (args: SDividerProps) => {
	const { styles, className, ...misc } = args;

	return (
		<Divider
			className={buildStyles(
				"s-divider-root",
				"border-[var(--s-color-outline)]",
				styles,
				className,
			)}
			{...misc}
		/>
	);
};
