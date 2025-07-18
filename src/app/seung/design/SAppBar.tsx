import { AppBar, type AppBarProps } from "@mui/material";

import { build_class, type SClassProps } from "./SStyles";

interface SAppBarProps extends Omit<AppBarProps, "enableColorOnDark"> {
	styles?: SClassProps[];
}

export const SAppBar = (args: SAppBarProps) => {
	const { styles, className, ...misc } = args;

	return (
		<AppBar
			className={build_class("s-app-bar-root", className, styles)}
			enableColorOnDark
			{...misc}
		/>
	);
};
