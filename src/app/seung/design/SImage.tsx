import type { ImgHTMLAttributes } from "react";

import { build_class, type SClassProps, type SScaleProps } from "./SStyles";

interface SImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	styles?: SClassProps[];
	square?: number;
	scale?: SScaleProps;
	white?: boolean;
}

export const SImage = (args: SImageProps) => {
	const { styles, scale, square, white, className, src, alt, ...misc } = args;

	return (
		<img
			className={build_class(
				"s-image-root",
				square && `w-${square} h-${square}`,
				scale && `s-image-icon-${scale}`,
				white && "filter invert",
				className,
				styles,
			)}
			src={src}
			alt={alt}
			{...misc}
		/>
	);
};
