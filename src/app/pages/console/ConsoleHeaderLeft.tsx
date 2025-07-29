import { Menu } from "lucide-react";

import { SButtonIcon, SDiv } from "@/app/seung/dom";
import { useSLayoutActions, useSSidebar } from "@/app/seung/stores";

export const ConsoleHeaderLeft = () => {
	const sidebar = useSSidebar();

	const { sidebarExpand } = useSLayoutActions();

	return (
		<SDiv>
			<SButtonIcon
				styles={["s-color-white"]}
				Icon={Menu}
				hidden={sidebar === "expanded"}
				onClick={() => {
					sidebarExpand();
				}}
			/>
		</SDiv>
	);
};
