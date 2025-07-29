import { SDiv } from "@/app/seung/dom";

import { ConsoleBody } from "./ConsoleBody";
import { ConsoleSidebar } from "./ConsoleSidebar";

export const ConsoleLayout = () => {
	return (
		<SDiv
			className="console-layout-root"
			styles={["min-h-screen min-w-[80rem]", "flex flex-row"]}
		>
			<ConsoleSidebar />
			<ConsoleBody />
		</SDiv>
	);
};
