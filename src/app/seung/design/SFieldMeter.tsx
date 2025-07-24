import { STypography } from "./STypography";

interface SFieldMeterProps {
	numerator?: number;
	denominator?: number;
}

export const SFieldMeter = (args: SFieldMeterProps) => {
	const { denominator, numerator = 0 } = args;

	return (
		<STypography
			className="s-field-meter-root"
			styles={[
				"pt-1 h-[0.875rem]",
				"text-right",
				"text-gray-400",
				denominator && denominator > 0 && numerator > denominator && "s-color-error",
			]}
			scale="sm"
		>
			{`${numerator} / ${denominator ?? "∞"}`}
		</STypography>
	);
};
