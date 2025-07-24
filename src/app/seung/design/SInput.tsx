import { type HTMLInputTypeAttribute, type ReactNode, useState } from "react";

import { Eye, EyeOff } from "lucide-react";

import { FormControl, Input, InputAdornment, type InputProps } from "@mui/material";

import { SButtonIcon } from "./SButtonIcon";
import {
	build_class,
	type SBorderRadiusProps,
	type SClassProps,
	type SScaleProps,
} from "./SStyles";

export interface SInputProps extends Omit<InputProps, "name" | "prefix" | "suffix"> {
	styles?: SClassProps[];
	rounded?: SBorderRadiusProps;
	scale?: SScaleProps;
	cell?: boolean;
	prefix?: ReactNode;
	suffix?: ReactNode;
	password?: boolean;
}

export const SInput = (args: SInputProps) => {
	const { styles, rounded, scale, cell, prefix, suffix, password, className, ...misc } = args;

	const [type, set_type] = useState<HTMLInputTypeAttribute>(password ? "password" : "text");

	const _suffix = suffix ? (
		suffix
	) : password ? (
		<SButtonIcon
			onMouseDown={() => {
				set_type(type === "password" ? "text" : "password");
			}}
			onMouseLeave={() => {
				set_type(type === "password" ? "password" : "text");
			}}
			LucideIcon={type === "password" ? Eye : EyeOff}
		/>
	) : null;

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
				type={type}
				{...misc}
			/>
			{_suffix && (
				<InputAdornment
					className="s-input-suffix"
					position="end"
				>
					{_suffix}
				</InputAdornment>
			)}
		</FormControl>
	);
};
