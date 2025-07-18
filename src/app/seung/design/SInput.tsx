import type { ReactNode } from "react";

import { FormControl, Input, InputAdornment, type InputProps } from "@mui/material";

import {
	build_class,
	type SBorderRadiusProps,
	type SClassProps,
	type SScaleProps,
} from "./SStyles";

export interface SInputProps extends Omit<InputProps, "prefix" | "suffix"> {
	styles?: SClassProps[];
	rounded?: SBorderRadiusProps;
	scale?: SScaleProps;
	cell?: boolean;
	prefix?: ReactNode;
	suffix?: ReactNode;
}

export const SInput = (args: SInputProps) => {
	const { styles, rounded, scale, cell, prefix, suffix, className, ...misc } = args;

	return (
		<FormControl
			className={build_class(
				"s-input-root",
				"flex flex-row items-center",
				!cell && "border-1 border-gray-400",
				rounded && `rounded-${rounded}`,
				scale && `s-input-${scale}`,
				cell && "w-full h-full border-none",
				className,
				styles,
			)}
		>
			{prefix && (
				<InputAdornment
					className="s-input-prefix"
					position="start"
				>
					{prefix}
				</InputAdornment>
			)}
			<Input
				className="flex-1"
				{...misc}
			/>
			{suffix && (
				<InputAdornment
					className="s-input-suffix"
					position="end"
				>
					{suffix}
				</InputAdornment>
			)}
		</FormControl>
	);
};
