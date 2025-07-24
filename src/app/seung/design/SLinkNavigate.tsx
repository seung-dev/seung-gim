import { useNavigate } from "react-router";

import { Link, type LinkProps } from "@mui/material";

import {
	build_class,
	type SClassProps,
	type SFontWeightProps,
	type SScaleProps,
} from "./SStyles";

interface SLinkNavigateProps extends Omit<LinkProps, "href" | "target" | "rel"> {
	styles?: SClassProps[];
	scale?: SScaleProps;
	weight?: SFontWeightProps;
	paint?: string;
	to?: string;
	replace?: boolean;
}

export const SLinkNavigate = (args: SLinkNavigateProps) => {
	const { styles, scale, weight, paint, to, replace, className, underline, ...misc } = args;

	const navigate = useNavigate();

	const click = async (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		if (to) {
			await navigate(to, { replace: replace });
		}
	};

	return (
		<Link
			className={build_class(
				"s-link-navigate-root",
				"[line-height:initial]",
				"cursor-pointer",
				scale && `s-font-${scale}`,
				weight && `font-${weight}`,
				paint && `s-color-${paint}`,
				underline === "always"
					? "underline underline-offset-2"
					: underline === "hover"
						? "hover:underline hover:underline-offset-2"
						: "",
				className,
				styles,
			)}
			onClick={click}
			{...misc}
		/>
	);
};
