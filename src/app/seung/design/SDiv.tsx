import { Box, type BoxProps } from "@mui/material";

import { build_class, type SClassProps } from "./SStyles";

export interface SDivProps extends BoxProps {
	styles?: SClassProps[];
}

export const SDiv = (args: SDivProps) => {
	const { className, styles, ...misc } = args;

	return (
		<Box
			className={build_class("s-div-root", className, styles)}
			{...misc}
		/>
	);
};
