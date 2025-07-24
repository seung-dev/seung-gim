import { Outlet } from "react-router";

import { SDiv } from "@/app/seung/design";
import { useSSidebar } from "@/app/seung/stores";

import { ConsoleFooter } from "./ConsoleFooter";
import { ConsoleHeader } from "./ConsoleHeader";

export const ConsoleBody = () => {
	const sidebar = useSSidebar();

	return (
		<SDiv
			className="console-layout-body"
			styles={[
				"flex-1 overflow-auto",
				sidebar === "expanded"
					? "ml-[var(--s-width-sidebar)]"
					: "ml-[var(--s-width-sidebar-collapsed)]",
				"flex flex-col",
			]}
		>
			<ConsoleHeader />
			<SDiv
				className="console-layout-main"
				styles={["flex-1", "border-l border-gray-200"]}
				component="main"
			>
				<Outlet />
			</SDiv>
			<ConsoleFooter />
		</SDiv>
	);
};
