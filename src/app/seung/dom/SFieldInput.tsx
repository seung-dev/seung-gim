import { type FieldValues, useController } from "react-hook-form";

import { format_comma, format_phone_number, is_empty } from "../core";
import { SDiv } from "./SDiv";
import { SFieldLabel } from "./SFieldLabel";
import { SFieldMessage } from "./SFieldMessage";
import { SFieldMeter } from "./SFieldMeter";
import type { SControlProps } from "./SForm";
import { SInput, type SInputProps } from "./SInput";

export interface SFieldInputProps<T extends FieldValues>
	extends SControlProps<T>,
		Omit<SInputProps, "value" | "onChange"> {
	label?: string;
	description?: boolean;
	message?: string;
	meter?: boolean;
	format?: "number" | "phone";
}

export const SFieldInput = <T extends FieldValues>(args: SFieldInputProps<T>) => {
	const {
		label,
		description,
		message,
		meter,
		format,
		className,
		styles,
		control,
		name,
		rules,
		...misc
	} = args;

	const {
		field: { ref, value, onChange },
		fieldState: { invalid, error },
	} = useController({ control, name, rules });

	const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const v = e.target.value;
		const formatted =
			format === "number"
				? format_comma(v)
				: format === "phone"
					? format_phone_number(v)
					: v;
		onChange({
			...e,
			target: {
				...e.target,
				value: formatted,
			},
		});
	};

	const _message = error?.message ?? message ?? " ";

	return (
		<SDiv
			className="s-field-input-root"
			styles={["relative", "mb-4", styles, className]}
		>
			{label && (
				<SFieldLabel
					label={label}
					required={!!rules?.required}
				/>
			)}
			<SInput
				ref={ref}
				value={value}
				onChange={_onChange}
				{...misc}
			/>
			<div className="flex flex-row items-center gap-1">
				{(description || !is_empty(message)) && (
					<SFieldMessage
						message={_message}
						error={invalid}
					/>
				)}
				{meter && (
					<SFieldMeter
						numerator={value ? (value as string).length : 0}
						denominator={Number(rules?.maxLength)}
					/>
				)}
			</div>
		</SDiv>
	);
};
