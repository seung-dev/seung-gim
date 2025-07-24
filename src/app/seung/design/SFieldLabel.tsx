import { Asterisk } from "lucide-react";

import { SDiv } from "./SDiv";
import { SLucideIcon } from "./SLucideIcon";
import { STypography } from "./STypography";

interface SFieldLabelProps {
	label?: string;
	required?: boolean;
}

export const SFieldLabel = (args: SFieldLabelProps) => {
	const { label, required } = args;

	return (
		<SDiv
			className="s-field-label-root"
			styles={["pb-2", "flex flex-row items-center"]}
		>
			<STypography scale="md">{label}</STypography>
			{required && (
				<SLucideIcon
					scale="sm"
					paint="error"
					LucideIcon={Asterisk}
				/>
			)}
		</SDiv>
	);
};
