import { useNavigate } from "react-router";

import { Settings } from "lucide-react";

import { AppRoutes } from "@/app/AppRoutes";
import { SDiv, SSidebar, type SStyleProps, useSModalActions } from "@/app/seung/dom";
import type { SRouteProps } from "@/app/seung/router";
import { useSLayoutActions, useSSidebar } from "@/app/seung/stores";

interface ConsoleSidebarTreeProps {
	styles?: SStyleProps;
}

export const ConsoleSidebarTree = (args: ConsoleSidebarTreeProps) => {
	const { styles } = args;

	const sidebar = useSSidebar();

	const { sidebarExpand } = useSLayoutActions();

	const navigate = useNavigate();

	const handleNavigate = async (value: SRouteProps) => {
		if (value.path) {
			await navigate(value.path);
		}
	};

	const { modalOpen } = useSModalActions();

	const handleAction = (value: SRouteProps) => {
		if (value.path) {
			modalOpen({ view: <SDiv styles={["p-10"]}>{value.path}</SDiv> });
		}
	};

	const items = AppRoutes.find((route) => route.layout === "console")?.children ?? [];

	return (
		<SSidebar
			className="console-sidebar-tree-root"
			styles={styles}
			ActionIcon={Settings}
			items={items}
			collapsed={sidebar === "collapsed"}
			expand={sidebarExpand}
			navigate={handleNavigate}
			action={handleAction}
		/>
	);
};
