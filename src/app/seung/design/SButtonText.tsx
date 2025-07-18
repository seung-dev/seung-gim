import { Button } from "@mui/material";

import type { SButtonProps } from "./SButton";
import { SDiv } from "./SDiv";
import { build_class } from "./SStyles";

export const SButtonText = (args: SButtonProps) => {
	const { styles, scale, ellipsis, className, children, ...misc } = args;

	return (
		<Button
			className={build_class(
				"s-button-outlined-root",
				"justify-start",
				className,
				styles,
			)}
			{...misc}
		>
			<SDiv
				styles={[
					"normal-case",
					scale ? `s-font-${scale}` : "",
					ellipsis ? "truncate" : "",
				]}
				component="span"
			>
				{children}
			</SDiv>
		</Button>
	);
};
