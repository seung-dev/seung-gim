import { Container, type ContainerProps } from "@mui/material";

import { build_class, type SClassProps } from "./SStyles";

interface SContainerProps extends ContainerProps {
	styles?: SClassProps[];
}

export const SContainer = (args: SContainerProps) => {
	const { styles, className, maxWidth = "lg", ...misc } = args;

	return (
		<Container
			className={build_class("s-container-root", "mx-auto", "px-8", className, styles)}
			maxWidth={maxWidth}
			{...misc}
		/>
	);
};
