import { useState } from "react";

import { Box, IconButton, Tooltip } from "@mui/material";

import { SCard } from "./SCard";
import {
	build_class,
	type SBorderRadiusProps,
	type SBoxShadowProps,
	type SClassProps,
} from "./SStyles";
import { STypography } from "./STypography";

interface SCodeViewProps {
	code: string;
	language?: string;
	title?: string;
	showLineNumbers?: boolean;
	showCopyButton?: boolean;
	styles?: SClassProps[];
	rounded?: SBorderRadiusProps;
	shadow?: SBoxShadowProps;
	className?: string;
}

export const SCodeView = (args: SCodeViewProps) => {
	const {
		code,
		language = "text",
		title,
		showLineNumbers = true,
		showCopyButton = true,
		styles,
		rounded,
		shadow,
		className,
	} = args;

	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy code:", err);
		}
	};

	const formatCode = (code: string) => {
		const lines = code.split("\n");
		return lines.map((line, index) => ({
			number: index + 1,
			content: line,
		}));
	};

	const codeLines = formatCode(code);

	return (
		<SCard
			styles={styles}
			rounded={rounded}
			shadow={shadow}
			className={build_class("s-code-view-root", className)}
		>
			{/* Header */}
			{(title || showCopyButton) && (
				<Box className="flex items-center justify-between mb-4 p-2 bg-gray-50 rounded-t-lg border-b border-gray-200">
					{title && (
						<STypography
							scale="sm"
							weight="medium"
							className="text-gray-700"
						>
							{title}
						</STypography>
					)}
					{showCopyButton && (
						<Tooltip title={copied ? "복사됨!" : "코드 복사"}>
							<IconButton
								size="small"
								onClick={handleCopy}
								className={build_class(
									"transition-colors",
									copied
										? "text-green-600"
										: "text-gray-600 hover:text-gray-800",
								)}
							>
								<STypography
									scale="xs"
									className="font-mono"
								>
									{copied ? "✓" : "📋"}
								</STypography>
							</IconButton>
						</Tooltip>
					)}
				</Box>
			)}

			{/* Code Content */}
			<Box className="relative">
				<Box
					className={build_class(
						"font-mono text-sm leading-relaxed overflow-x-auto",
						language && `language-${language}`,
					)}
					component="pre"
				>
					<code className="block p-4">
						{codeLines.map((line) => (
							<Box
								key={line.number}
								className="flex items-start"
							>
								{showLineNumbers && (
									<Box className="flex-shrink-0 w-12 text-right pr-4 text-gray-500 select-none">
										{line.number}
									</Box>
								)}
								<Box className="flex-1 min-w-0">
									<span className="whitespace-pre">{line.content}</span>
								</Box>
							</Box>
						))}
					</code>
				</Box>
			</Box>

			{/* Footer */}
			<Box className="mt-2 pt-2 border-t border-gray-200">
				<Box className="flex items-center justify-between">
					<STypography
						scale="xs"
						className="text-gray-500"
					>
						{language.toUpperCase()}
					</STypography>
					<STypography
						scale="xs"
						className="text-gray-500"
					>
						{codeLines.length}줄
					</STypography>
				</Box>
			</Box>
		</SCard>
	);
};

// 코드 블록을 위한 간단한 컴포넌트
interface SCodeBlockProps {
	code: string;
	language?: string;
	className?: string;
}

export const SCodeBlock = (args: SCodeBlockProps) => {
	const { code, language = "text", className } = args;

	return (
		<Box
			className={build_class(
				"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm",
				className,
			)}
			component="pre"
		>
			<code className={language && `language-${language}`}>{code}</code>
		</Box>
	);
};

// 인라인 코드를 위한 컴포넌트
interface SInlineCodeProps {
	code: string;
	className?: string;
}

export const SInlineCode = (args: SInlineCodeProps) => {
	const { code, className } = args;

	return (
		<Box
			component="code"
			className={build_class(
				"bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono",
				className,
			)}
		>
			{code}
		</Box>
	);
};
