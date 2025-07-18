import { type BoxProps } from "@mui/material";

import { SDiv } from "./SDiv";
import {
	build_class,
	type SBorderRadiusProps,
	type SBoxShadowProps,
	type SClassProps,
} from "./SStyles";

interface SCardProps extends BoxProps {
	styles?: SClassProps[];
	rounded?: SBorderRadiusProps;
	shadow?: SBoxShadowProps;
}

export const SCard = (args: SCardProps) => {
	const { styles, rounded, shadow, className, ...misc } = args;

	return (
		<SDiv
			className={build_class(
				"s-card-root",
				"p-4",
				rounded && `rounded-${rounded}`,
				!shadow && "border-1",
				!shadow && "border-gray-200",
				shadow && `shadow-${shadow}`,
				className,
				styles,
			)}
			{...misc}
		/>
	);
};
