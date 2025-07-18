import { Divider, type DividerProps } from "@mui/material";

import { build_class, type SClassProps } from "./SStyles";

interface SDividerProps extends DividerProps {
	styles?: SClassProps[];
}

export const SDivider = (args: SDividerProps) => {
	const { styles, className, ...misc } = args;

	return (
		<Divider
			className={build_class("s-divider-root", className, styles)}
			{...misc}
		/>
	);
};
