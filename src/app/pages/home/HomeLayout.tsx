import { Outlet, useNavigate } from "react-router";

import { AppEnvironments } from "@/app/AppEnvironments";
import { SButton, SDiv } from "@/app/seung/design";

import { HomeFooter } from "./HomeFooter";
import { HomeHeader } from "./HomeHeader";
import { HomeLogo } from "./HomeLogo";
import { HomeNavigation } from "./HomeNavigation";

export const HomeLayout = () => {
	const navigate = useNavigate();

	const move_to_signin = async () => {
		await navigate("/signin");
	};

	return (
		<SDiv
			className="home-layout-root"
			styles={["min-h-screen", "flex flex-col"]}
		>
			<HomeHeader
				Logo={
					<HomeLogo
						path="/"
						label="seung.gim"
					/>
				}
				Navigation={
					<HomeNavigation
						// routes={AppRoutes.filter(({ layout }) => layout === "home")}
						routes={[
							{ path: "/a", label: "A Menu" },
							{ path: "/b", label: "B Menu" },
							{ path: "/c", label: "C Menu" },
							{ path: "/d", label: "D Menu" },
						]}
						Action={
							<SButton
								contained="blue"
								rounded="full"
								scale="sm"
								label={"관리자 [Admin]"}
								onClick={async () => {
									await move_to_signin();
								}}
							/>
						}
					/>
				}
			/>
			<SDiv
				className="host-layout-main"
				styles={["flex-1"]}
				component="main"
			>
				<Outlet />
			</SDiv>
			<HomeFooter
				author={{
					name: AppEnvironments.APP_AUTHOR_NAME,
					address: AppEnvironments.APP_AUTHOR_ADDRESS,
					email: AppEnvironments.APP_AUTHOR_EMAIL,
				}}
			/>
		</SDiv>
	);
};
