import { Menu } from "lucide-react";

import { SButtonIcon, SDiv } from "@/app/seung/design";
import { useSLayoutActions, useSSidebar } from "@/app/seung/stores";

export const ConsoleHeaderLeft = () => {
	const sidebar = useSSidebar();

	const { sidebar_expand } = useSLayoutActions();

	return (
		<SDiv>
			<SButtonIcon
				paint="white"
				LucideIcon={Menu}
				hidden={sidebar === "expanded"}
				onClick={() => {
					sidebar_expand();
				}}
			/>
		</SDiv>
	);
};
