import { Outlet } from "react-router";

import { SDiv } from "@/app/seung/dom";
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
			<ConsoleHeader styles={["bg-[var(--s-color-charcoal-600)]"]} />
			<main className="console-layout-main flex-1">
				<Outlet />
			</main>
			<ConsoleFooter />
		</SDiv>
	);
};
