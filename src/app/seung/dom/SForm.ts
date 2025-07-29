import type { FieldValues, UseControllerProps } from "react-hook-form";

export interface SControlProps<T extends FieldValues>
	extends Pick<UseControllerProps<T>, "control" | "name" | "rules"> {}
