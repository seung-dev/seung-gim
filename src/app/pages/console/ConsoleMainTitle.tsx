import { SDiv, type SStyleProps, STypography } from "@/app/seung/dom";

interface ConsoleMainTitleProps {
	styles?: SStyleProps;
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
