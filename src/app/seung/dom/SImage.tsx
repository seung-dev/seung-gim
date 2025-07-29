import type { ImgHTMLAttributes } from "react";

import { buildStyles, type SScaleProps, type SStyleProps } from "./STheme";

interface SImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	styles?: SStyleProps;
	scale?: SScaleProps;
	square?: number;
	white?: boolean;
}

export const SImage = (args: SImageProps) => {
	const { styles, scale, square, white, className, alt, ...misc } = args;

	return (
		<img
			className={buildStyles(
				"s-image-root",
				scale && `s-image-icon-${scale}`,
				square && `w-${square} h-${square}`,
				white && "filter invert",
				styles,
				className,
			)}
			alt={alt}
			{...misc}
		/>
	);
};
