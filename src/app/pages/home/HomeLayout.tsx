import { Outlet, useNavigate } from "react-router";

import { AppEnvironments } from "@/app/AppEnvironments";
import { SBrand, SButton, SDiv, SImage } from "@/app/seung/design";

import { HomeFooter } from "./HomeFooter";
import { HomeHeader } from "./HomeHeader";
import { HomeNavigation } from "./HomeNavigation";

export const HomeLayout = () => {
	const navigate = useNavigate();

	const go_home = async () => {
		await navigate("/", { replace: true });
	};

	const go_signin = async () => {
		await navigate("/sign/in");
	};

	return (
		<SDiv
			className="home-layout-root"
			styles={["min-h-screen", "flex flex-col"]}
		>
			<HomeHeader
				Brand={
					<SBrand
						image={
							<SImage
								scale="lg"
								src="/seung-black.svg"
								alt="Site Logo"
							/>
						}
						label={AppEnvironments.APP_NAME}
						onClick={go_home}
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
									await go_signin();
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
