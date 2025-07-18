import { Toolbar, type ToolbarProps } from "@mui/material";

import { build_class, type SClassProps } from "./SStyles";

interface SToolbarProps extends ToolbarProps {
	styles?: SClassProps[];
}

export const SToolbar = (args: SToolbarProps) => {
	const { styles, className, ...misc } = args;

	return (
		<Toolbar
			className={build_class("s-toolbar-root", className, styles)}
			{...misc}
		/>
	);
};
