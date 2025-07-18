import type { ReactNode } from "react";

import { SAppBar, SContainer, SToolbar } from "@/app/seung/design";

interface HomeHeaderProps {
	Logo?: ReactNode;
	Navigation?: ReactNode;
}

export const HomeHeader = (args: HomeHeaderProps) => {
	const { Logo, Navigation, ...misc } = args;

	return (
		<SAppBar
			className="home-header-root"
			styles={["fixed", "h-[var(--s-header-height)]", "bg-white shadow-md"]}
			{...misc}
		>
			<SContainer>
				<SToolbar styles={["items-center space-between"]}>
					{Logo}
					{Navigation}
				</SToolbar>
			</SContainer>
		</SAppBar>
	);
};
