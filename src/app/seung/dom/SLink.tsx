import type { AnchorHTMLAttributes } from "react";

import {
	buildStyles,
	type SFontWeightProps,
	type SScaleProps,
	type SStyleProps,
} from "./STheme";

// interface SLinkProps extends HTMLAttributes<HTMLAnchorElement> {
interface SLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	styles?: SStyleProps;
	scale?: SScaleProps;
	weight?: SFontWeightProps;
	underline?: "always" | "hover" | "none";
	self?: boolean;
}

export const SLink = (args: SLinkProps) => {
	const {
		styles,
		scale,
		weight,
		underline,
		self,
		className,
		children,
		rel = "noopener noreferrer",
		...misc
	} = args;

	return (
		<a
			className={buildStyles(
				"s-link-root",
				"[line-height:initial]",
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
			target={self ? "_self" : "_blank"}
			rel={rel}
			{...misc}
		>
			{children}
		</a>
	);
};
