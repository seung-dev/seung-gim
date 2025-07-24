import { Outlet } from "react-router";

import { SDiv } from "@/app/seung/design";

export const SignLayout = () => {
	return (
		<SDiv
			className="sign-layout-root"
			styles={[
				"min-h-screen",
				"flex flex-col items-center justify-center",
				"bg-gradient-to-b from-[#4CAF50] via-[#2196F3] to-[#607D8B]",
			]}
		>
			<SDiv
				className="sign-layout-main"
				styles={["flex-1"]}
				component="main"
			>
				<Outlet />
			</SDiv>
		</SDiv>
	);
};
