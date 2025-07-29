import { Link, type LinkProps } from "react-router";

import {
	buildStyles,
	type SFontWeightProps,
	type SScaleProps,
	type SStyleProps,
} from "./STheme";

interface SLinkNavigateProps extends LinkProps {
	styles?: SStyleProps;
	scale?: SScaleProps;
	weight?: SFontWeightProps;
	underline?: "always" | "hover" | "none";
}

export const SLinkNavigate = (args: SLinkNavigateProps) => {
	const { styles, scale, weight, underline, className, ...misc } = args;

	return (
		<Link
			className={buildStyles(
				"s-link-navigate-root",
				"cursor-pointer",
				scale && `s-font-${scale}`,
				weight && `font-${weight}`,
				underline === "always"
					? "underline underline-offset-2"
					: underline === "hover"
						? "hover:underline hover:underline-offset-2"
						: "",
				styles,
				className,
			)}
			{...misc}
		/>
	);
};
