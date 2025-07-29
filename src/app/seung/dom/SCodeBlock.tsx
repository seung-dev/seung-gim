import ReactMarkdown from "react-markdown";

import { Copy } from "lucide-react";

import { clipboard } from "../core";
import { SButton } from "./SButton";
import { SDiv, type SDivProps } from "./SDiv";
import type { SStyleProps } from "./STheme";
import { useSToastActions } from "./SToast";

interface SCodeBlockProps extends Omit<SDivProps, "onClick"> {
	styles?: SStyleProps;
	dark?: boolean;
	code?: string;
}

export const SCodeBlock = (args: SCodeBlockProps) => {
	const { styles, dark, code, ...misc } = args;

	const { toastOpen } = useSToastActions();

	const handleClick = async () => {
		if (code) {
			await clipboard(code, () => {
				toastOpen("Copied!");
			});
		}
	};

	return (
		<SDiv
			styles={[
				"s-markdown-root",
				"relative",
				"p-6",
				dark ? "bg-black text-gray-200" : "bg-white text-gray-900 shadow-lg",
				styles,
			]}
			{...misc}
		>
			<SDiv styles={["absolute top-6 right-6 z-10"]}>
				<SButton
					scale="sm"
					label="복사"
					Prefix={Copy}
					onClick={handleClick}
				/>
			</SDiv>
			<ReactMarkdown
				components={{
					code: (props) => (
						<code
							{...props}
							className="whitespace-pre-wrap"
						/>
					),
				}}
			>
				{`\`\`\`tsx${code}\`\`\``}
			</ReactMarkdown>
		</SDiv>
	);
};
