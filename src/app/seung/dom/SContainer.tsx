import { Container, type ContainerProps } from "@mui/material";

import { buildStyles, type SStyleProps } from "./STheme";

interface SContainerProps extends ContainerProps {
	styles?: SStyleProps;
}

export const SContainer = (args: SContainerProps) => {
	const { styles, className, maxWidth = "lg", ...misc } = args;

	return (
		<Container
			className={buildStyles("s-container-root", "mx-auto", "px-8", styles, className)}
			maxWidth={maxWidth}
			{...misc}
		/>
	);
};
