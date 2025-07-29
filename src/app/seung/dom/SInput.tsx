import {
	forwardRef,
	type HTMLInputTypeAttribute,
	type InputHTMLAttributes,
	type ReactNode,
	useState,
} from "react";

import { Eye, EyeOff } from "lucide-react";

import { SButtonIcon } from "./SButtonIcon";
import { buildStyles, type SScaleProps, type SStyleProps } from "./STheme";

export interface SInputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "name" | "prefix" | "suffix"> {
	styles?: SStyleProps;
	scale?: SScaleProps;
	cell?: boolean;
	prefix?: ReactNode;
	suffix?: ReactNode;
	password?: boolean;
	value?: string | number;
}

export const SInput = forwardRef<HTMLInputElement, SInputProps>((args, ref) => {
	const { styles, scale, cell, prefix, suffix, password, value, className, ...misc } = args;

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
			Icon={type === "password" ? Eye : EyeOff}
		/>
	) : null;

	return (
		<div
			className={buildStyles(
				"s-input-root",
				"flex flex-row items-center",
				"focus-within:outline-2 focus-within:outline-blue-500",
				scale && `s-input-${scale}`,
				!cell && "outline-1 s-color-outline",
				cell && "w-full h-full outline-none",
				styles,
				className,
			)}
		>
			{prefix && <div className="s-input-prefix s-line-height-initial">{prefix}</div>}
			<input
				className="min-w-0 flex-1 outline-none"
				type={type}
				ref={ref}
				value={value}
				{...misc}
			/>
			{_suffix && <div className="s-input-suffix leading-1">{_suffix}</div>}
		</div>
	);
});

SInput.displayName = "SInput";
