import { Drawer } from "@mui/material";

import { buildStyles, type SStyleProps } from "@/app/seung/dom";
import { useSSidebar } from "@/app/seung/stores";

import { ConsoleSidebarHeader } from "./ConsoleSidebarHeader";
import { ConsoleSidebarTree } from "./ConsoleSidebarTree";

interface ConsoleSidebarProps {
	styles?: SStyleProps;
}

export const ConsoleSidebar = (args: ConsoleSidebarProps) => {
	const { styles } = args;

	const sidebar = useSSidebar();

	return (
		<Drawer
			className={buildStyles("console-sidebar-root", styles)}
			classes={{
				paper: sidebar === "expanded" ? "s-width-sidebar" : "s-width-sidebar-collapsed",
			}}
			variant="persistent"
			open={true}
		>
			<ConsoleSidebarHeader
				styles={["z-1"]}
				collapsed={sidebar === "collapsed"}
			/>
			<nav className="console-sidebar-tree-root flex-1 border-r border-gray-200">
				<ConsoleSidebarTree styles={["py-4"]} />
			</nav>
		</Drawer>
	);
};
