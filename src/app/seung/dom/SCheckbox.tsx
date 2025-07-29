import type { ChangeEvent, HTMLAttributes } from "react";

import { buildStyles, type SScaleProps, type SStyleProps } from "./STheme";

export interface SOptionProps {
	value: string | number;
	label?: string;
	disabled?: boolean;
}

interface SCheckboxOptionProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
	scale?: SScaleProps;
	option: SOptionProps;
	values?: (string | number)[];
	onChange?: (values: (string | number)[]) => void;
}

const SCheckboxOption = (args: SCheckboxOptionProps) => {
	const { scale, option, values = [], onChange } = args;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = option.value;
		if (e.target.checked) {
			onChange?.([...values, value]);
		} else {
			onChange?.(values.filter((v) => v !== value));
		}
	};

	return (
		<div className="flex flex-row items-center gap-2">
			<input
				type="checkbox"
				className="s-checkbox-input"
				checked={values.includes(option.value)}
				disabled={option.disabled}
				onChange={handleChange}
			/>
			<label className={buildStyles("s-checkbox-label", scale && `s-font-${scale}`)}>
				{option.label}
			</label>
		</div>
	);
};

interface SCheckboxProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
	styles?: SStyleProps;
	scale?: SScaleProps;
	options: SOptionProps[];
	values?: (string | number)[];
	onChange?: (values: (string | number)[]) => void;
}

export const SCheckbox = (args: SCheckboxProps) => {
	const { styles, scale, options, values, onChange, className, ...misc } = args;

	return (
		<div
			className={buildStyles("s-checkbox-root", styles, className)}
			{...misc}
		>
			{options.map(({ label, value }, i) => (
				<SCheckboxOption
					key={`option-${i}`}
					scale={scale}
					option={{ label, value }}
					values={values}
					onChange={onChange}
				/>
			))}
		</div>
	);
};
