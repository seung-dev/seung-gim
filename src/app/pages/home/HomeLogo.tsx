import { useNavigate } from "react-router";

import { SDiv, STypography } from "@/app/seung/design";

interface HomeLogoProps {
	path?: string;
	label?: string;
}

export const HomeLogo = (args: HomeLogoProps) => {
	const { path = "/", label } = args;

	const navigate = useNavigate();

	return (
		<SDiv
			className="home-logo-root"
			styles={["flex flex-row items-center", "cursor-pointer"]}
			onClick={() => navigate(path)}
		>
			<STypography
				styles={["text-gray-900 hover:opacity-80", "cursor-pointer"]}
				scale="lg"
				weight="bold"
			>
				{label}
			</STypography>
		</SDiv>
	);
};
