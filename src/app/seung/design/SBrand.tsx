import type { ReactNode } from "react";

import { SDiv } from "./SDiv";
import type { SClassProps, SScaleProps } from "./SStyles";
import { STypography, type STypographyProps } from "./STypography";

interface SBrandProps {
	styles?: SClassProps[];
	slots?: {
		label: STypographyProps;
	};
	image?: ReactNode;
	icon?: ReactNode;
	label?: string;
	scale?: SScaleProps;
	onClick?: () => void;
}

export const SBrand = (args: SBrandProps) => {
	const {
		styles = [],
		slots = { label: { scale: "lg", weight: "bold", paint: "black" } },
		image,
		label,
		onClick,
	} = args;

	return (
		<SDiv
			styles={[
				"s-brand-root",
				"flex flex-row items-center gap-2",
				"cursor-pointer",
				...styles,
			]}
			onClick={onClick}
		>
			{image}
			{label && <STypography {...slots.label}>{label}</STypography>}
		</SDiv>
	);
};
