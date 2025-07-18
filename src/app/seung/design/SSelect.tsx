import { useState } from "react";

import { Autocomplete, Box, TextField } from "@mui/material";

import {
	build_class,
	type SBorderRadiusProps,
	type SClassProps,
	type SScaleProps,
} from "./SStyles";
import { STypography } from "./STypography";

export const SSelectScale: Record<string, string> = {
	xs: "s-height-xs pr-4 pl-2 s-font-xs",
	sm: "s-height-sm pr-4 pl-2 s-font-sm",
	md: "s-height-md pr-4 pl-2 s-font-md",
	lg: "s-height-lg pr-4 pl-2 s-font-lg",
	xl: "s-height-xl pr-4 pl-2 s-font-xl",
	"2xl": "s-height-2xl pr-4 pl-2 s-font-xl",
} as const;

export interface SSelectOption {
	value: string;
	label: string;
}

export interface SSelectProps extends Pick<React.HTMLAttributes<HTMLElement>, "className"> {
	styles?: SClassProps[];
	rounded?: SBorderRadiusProps;
	scale?: SScaleProps;
	cell?: boolean;
	options?: SSelectOption[];
	placeholder?: string;
}

export const SSelect = (args: SSelectProps) => {
	const { styles, rounded, scale, cell, options, placeholder, className, ...misc } = args;

	const _options = [{ value: "", label: "" }, ...(options ?? [])];

	const [value, set_value] = useState<SSelectOption | null>(_options[0]);

	const selected = _options.find((option) => option.value === value?.value) ?? {
		value: "",
		label: "",
	};

	return (
		<Autocomplete
			className={build_class(
				"s-select-root",
				"min-w-32",
				!cell && "border-1 border-gray-400",
				rounded && `rounded-${rounded}`,
				scale && `s-select-${scale}`,
				cell && "w-full h-full border-none",
				className,
				styles,
			)}
			classes={{
				// input: build_class(scale && SSelectScale[scale]),
				input: "s-select-input",
				endAdornment: "right-1",
				clearIndicator: "hidden",
			}}
			disablePortal
			renderInput={(params) => (
				<TextField
					{...params}
					placeholder={placeholder}
				/>
			)}
			renderOption={(
				props: React.HTMLAttributes<HTMLLIElement> & {
					key: string;
				},
				option: SSelectOption,
			) => {
				const { key, ...misc_props } = props;
				return (
					<Box
						key={key}
						component="li"
						{...misc_props}
					>
						<STypography className={build_class(["px-2 py-4", "s-font-md"])}>
							{option.label}
						</STypography>
					</Box>
				);
			}}
			noOptionsText={
				<STypography className={build_class(["px-2 py-4", "s-font-md"])}>
					No options
				</STypography>
			}
			isOptionEqualToValue={(option, value) => option.value === value.value}
			options={options ?? []}
			value={selected}
			onChange={(_, v) => {
				set_value(v);
			}}
			{...misc}
		/>
	);
};
