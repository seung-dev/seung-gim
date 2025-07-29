import { Outlet } from "react-router";

import { SDiv } from "@/app/seung/dom";

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
			<main className="sign-layout-main flex-1">
				<Outlet />
			</main>
		</SDiv>
	);
};
