import { Toolbar, type ToolbarProps } from "@mui/material";

import { buildStyles, type SStyleProps } from "./STheme";

interface SToolbarProps extends ToolbarProps {
	styles?: SStyleProps;
}

export const SToolbar = (args: SToolbarProps) => {
	const { styles, className, ...misc } = args;

	return (
		<Toolbar
			className={buildStyles("s-toolbar-root", styles, className)}
			{...misc}
		/>
	);
};
