import { type SClassProps, SDiv, STypography } from "@/app/seung/design";

interface ConsoleMainTitleProps {
	styles?: SClassProps[];
	title: string;
}

export const ConsoleMainTitle = (args: ConsoleMainTitleProps) => {
	const { styles, title } = args;

	return (
		<SDiv
			className="console-main-title-root"
			styles={styles}
		>
			<STypography
				scale="xl"
				weight="bold"
			>
				{title}
			</STypography>
		</SDiv>
	);
};
