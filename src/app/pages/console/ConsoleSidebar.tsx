import { type SClassProps, SDrawer } from "@/app/seung/design";
import { useSSidebar } from "@/app/seung/stores";

import { ConsoleSidebarHeader } from "./ConsoleSidebarHeader";
import { ConsoleSidebarTree } from "./ConsoleSidebarTree";

interface ConsoleSidebarProps {
	styles?: SClassProps[];
}

export const ConsoleSidebar = (args: ConsoleSidebarProps) => {
	const { styles = [] } = args;

	const sidebar = useSSidebar();

	return (
		<SDrawer
			styles={["console-sidebar-root", ...styles]}
			classes={{
				paper: sidebar === "expanded" ? "s-width-sidebar" : "s-width-sidebar-collapsed",
			}}
			variant="persistent"
			open={true}
		>
			<ConsoleSidebarHeader collapsed={sidebar === "collapsed"} />
			<ConsoleSidebarTree />
		</SDrawer>
	);
};
