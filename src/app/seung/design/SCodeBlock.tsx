import ReactMarkdown from "react-markdown";

import { Copy } from "lucide-react";

import { SButton } from "./SButton";
import { SDiv } from "./SDiv";
import {
	build_class,
	type SBorderRadiusProps,
	type SBoxShadowProps,
	type SClassProps,
} from "./SStyles";

interface SCodeBlockProps {
	styles?: SClassProps[];
	rounded?: SBorderRadiusProps;
	shadow?: SBoxShadowProps;
	dark?: boolean;
	code?: string;
	onClick?: () => void;
}

export const SCodeBlock = (args: SCodeBlockProps) => {
	const { styles, rounded, dark, code, onClick } = args;

	return (
		<SDiv
			className={build_class(
				"s-markdown-root",
				"relative",
				"p-6",
				rounded && `rounded-${rounded}`,
				dark ? "bg-black text-gray-200" : "bg-white text-gray-900 shadow-lg",
				styles,
			)}
		>
			<SDiv styles={["absolute top-6 right-6 z-10"]}>
				<SButton
					scale="sm"
					label="복사"
					startIcon={<Copy />}
					onClick={onClick}
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
