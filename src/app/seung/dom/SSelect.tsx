import { type HTMLAttributes, useState } from "react";

import { Autocomplete, Box, TextField } from "@mui/material";

import type { SOptionProps } from "./SCheckbox";
import { buildStyles, type SScaleProps, type SStyleProps } from "./STheme";
import { STypography } from "./STypography";

export const SSelectScale: Record<string, string> = {
	xs: "s-height-xs pr-4 pl-2 s-font-xs",
	sm: "s-height-sm pr-4 pl-2 s-font-sm",
	md: "s-height-md pr-4 pl-2 s-font-md",
	lg: "s-height-lg pr-4 pl-2 s-font-lg",
	xl: "s-height-xl pr-4 pl-2 s-font-xl",
	"2xl": "s-height-2xl pr-4 pl-2 s-font-xl",
} as const;

export interface SSelectProps extends Pick<HTMLAttributes<HTMLSelectElement>, "className"> {
	styles?: SStyleProps;
	scale?: SScaleProps;
	cell?: boolean;
	options?: SOptionProps[];
	placeholder?: string;
}

export const SSelect = (args: SSelectProps) => {
	const { scale, cell, options, placeholder, styles, className, ...misc } = args;

	const _options = [{ value: "", label: "" }, ...(options ?? [])];

	const [value, set_value] = useState<SOptionProps | null>(_options[0]);

	const selected = _options.find((option) => option.value === value?.value) ?? {
		value: "",
		label: "",
	};

	return (
		<Autocomplete
			className={buildStyles(
				"s-select-root",
				"min-w-32",
				scale && `s-select-${scale}`,
				!cell && "outline-1 outline-[var(--s-color-outline)]",
				cell && "w-full h-full outline-none",
				styles,
				className,
			)}
			classes={{
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
				props: HTMLAttributes<HTMLLIElement> & {
					key: string;
				},
				option: SOptionProps,
			) => {
				const { key, ...misc_props } = props;
				return (
					<Box
						key={key}
						component="li"
						{...misc_props}
					>
						<STypography className={buildStyles(["px-2 py-4", "s-font-md"])}>
							{option.label}
						</STypography>
					</Box>
				);
			}}
			noOptionsText={
				<STypography className={buildStyles(["px-2 py-4", "s-font-md"])}>
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
