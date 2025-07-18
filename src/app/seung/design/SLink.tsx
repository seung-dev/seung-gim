import { Link, type LinkProps } from "@mui/material";

import { build_class, type SClassProps, type SScaleProps } from "./SStyles";

interface SLinkProps extends LinkProps {
	styles?: SClassProps[];
	scale?: SScaleProps;
	self?: boolean;
}

export const SLink = (args: SLinkProps) => {
	const {
		styles,
		scale,
		self,
		className,
		underline,
		rel = "noopener noreferrer",
		...misc
	} = args;

	return (
		<Link
			className={build_class(
				"s-link-root",
				// "leading-none",
				"[line-height:initial]",
				scale && `s-font-${scale}`,
				underline === "always"
					? "underline underline-offset-2"
					: underline === "hover"
						? "hover:underline hover:underline-offset-2"
						: "",
				className,
				styles,
			)}
			target={self ? "_self" : "_blank"}
			rel={rel}
			{...misc}
		/>
	);
};
