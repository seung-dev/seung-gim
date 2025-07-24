import type { ReactNode } from "react";

import { SAppBar, SContainer, SToolbar } from "@/app/seung/design";

interface HomeHeaderProps {
	Brand: ReactNode;
	Navigation?: ReactNode;
}

export const HomeHeader = (args: HomeHeaderProps) => {
	const { Brand, Navigation, ...misc } = args;

	return (
		<SAppBar
			className="home-header-root"
			styles={["fixed s-height-header", "bg-white shadow-md"]}
			{...misc}
		>
			<SContainer>
				<SToolbar styles={["items-center space-between"]}>
					{Brand}
					{Navigation}
				</SToolbar>
			</SContainer>
		</SAppBar>
	);
};
