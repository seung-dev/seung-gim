import { STypography } from "./STypography";

interface SFieldMessageProps {
	message?: string;
	error?: boolean;
}

export const SFieldMessage = (args: SFieldMessageProps) => {
	const { message, error } = args;

	return (
		<STypography
			className="s-field-message-root"
			styles={["pt-1 h-[0.875rem]", error && "s-color-error"]}
			scale="sm"
		>
			{message}
		</STypography>
	);
};
