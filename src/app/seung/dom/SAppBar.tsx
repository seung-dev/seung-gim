import { AppBar, type AppBarProps } from "@mui/material";

import { buildStyles, type SStyleProps } from "./STheme";

interface SAppBarProps extends Omit<AppBarProps, "enableColorOnDark"> {
	styles?: SStyleProps;
}

export const SAppBar = (args: SAppBarProps) => {
	const { styles, className, ...misc } = args;

	return (
		<AppBar
			className={buildStyles("s-app-bar-root", styles, className)}
			enableColorOnDark
			{...misc}
		/>
	);
};
