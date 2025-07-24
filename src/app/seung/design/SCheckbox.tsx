import { Checkbox, type CheckboxProps, FormControlLabel } from "@mui/material";

import { build_class, type SClassProps, type SScaleProps } from "./SStyles";

interface SCheckboxProps extends CheckboxProps {
	styles?: SClassProps[];
	scale?: SScaleProps;
	label: string;
}

export const SCheckbox = (args: SCheckboxProps) => {
	const { styles, scale, label, className, ...misc } = args;

	return (
		<FormControlLabel
			className={build_class(
				"s-checkbox-root",
				"gap-2",
				scale && `s-checkbox-${scale}`,
				className,
				styles,
			)}
			classes={{
				label: "s-checkbox-label",
			}}
			control={
				<Checkbox
					className="s-checkbox-input"
					size="small"
					{...misc}
				/>
			}
			label={label}
		/>
	);
};
