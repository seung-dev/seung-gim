import { SDiv } from "@/app/seung/design";

import { ConsoleHeaderLeft } from "./ConsoleHeaderLeft";
import { ConsoleHeaderRight } from "./ConsoleHeaderRight";

export const ConsoleHeader = () => {
	return (
		<SDiv
			className="console-header-root"
			styles={[
				"s-height-header",
				"bg-[var(--s-color-chacoalgray)] shadow-md",
				"flex flex-row items-center justify-between",
				"px-8",
			]}
		>
			<ConsoleHeaderLeft />
			<ConsoleHeaderRight />
		</SDiv>
	);
};
