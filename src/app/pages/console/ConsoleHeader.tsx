import { SDiv, type SStyleProps } from "@/app/seung/dom";

import { ConsoleHeaderLeft } from "./ConsoleHeaderLeft";
import { ConsoleHeaderRight } from "./ConsoleHeaderRight";

interface ConsoleHeaderProps {
	styles?: SStyleProps;
}

export const ConsoleHeader = (args: ConsoleHeaderProps) => {
	const { styles } = args;

	return (
		<SDiv
			className="console-header-root"
			styles={[
				"s-height-header",
				"shadow-md",
				"px-8 flex flex-row items-center justify-between",
				styles,
			]}
		>
			<ConsoleHeaderLeft />
			<ConsoleHeaderRight />
		</SDiv>
	);
};
