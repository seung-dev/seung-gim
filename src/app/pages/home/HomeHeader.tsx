import type { ReactNode } from "react";

import { useNavigate } from "react-router";

import { SAppBar, SContainer, SDiv, SToolbar } from "@/app/seung/dom";

interface HomeHeaderProps {
	logo?: ReactNode;
	navigation?: ReactNode;
}

export const HomeHeader = (args: HomeHeaderProps) => {
	const { logo, navigation, ...misc } = args;

	return (
		<SAppBar
			className="home-header-root"
			styles={["fixed s-height-header", "bg-white shadow-md"]}
			{...misc}
		>
			<SContainer>
				<SToolbar styles={["items-center space-between"]}>
					{logo}
					{navigation}
				</SToolbar>
			</SContainer>
		</SAppBar>
	);
};

export interface HomeHeaderLogoProps {
	image?: ReactNode;
	name?: ReactNode;
	to?: string;
}

export const HomeHeaderLogo = (args: HomeHeaderLogoProps) => {
	const { image, name, to } = args;

	const navigate = useNavigate();

	const handleClick = async () => {
		if (to) {
			await navigate(to);
		}
	};

	return (
		<SDiv
			styles={["flex flex-row items-center gap-2", to && "cursor-pointer"]}
			onClick={handleClick}
		>
			{image}
			{name}
		</SDiv>
	);
};
