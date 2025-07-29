import { Outlet, useNavigate } from "react-router";

import { AppEnvironments } from "@/app/AppEnvironments";
import { SButton, SDiv, SImage, STypography } from "@/app/seung/dom";

import { HomeFooter } from "./HomeFooter";
import { HomeHeader, HomeHeaderLogo } from "./HomeHeader";
import { HomeNavigation } from "./HomeNavigation";

export const HomeLayout = () => {
	const navigate = useNavigate();

	const handleClick = async () => {
		await navigate("/sign/in");
	};

	return (
		<SDiv
			className="home-layout-root"
			styles={["min-h-screen", "flex flex-col"]}
		>
			<HomeHeader
				logo={
					<HomeHeaderLogo
						image={
							<SImage
								scale="lg"
								src="/seung-black.svg"
								alt="Site Logo"
							/>
						}
						name={
							<STypography
								styles={["s-color-black"]}
								locale="en"
								scale="lg"
								weight="bold"
							>
								{AppEnvironments.APP_NAME}
							</STypography>
						}
						to="/"
					/>
				}
				navigation={
					<HomeNavigation
						// routes={AppRoutes.filter(({ layout }) => layout === "home")}
						routes={[
							{ path: "/a", label: "A Menu" },
							{ path: "/b", label: "B Menu" },
							{ path: "/c", label: "C Menu" },
							{ path: "/d", label: "D Menu" },
						]}
						action={
							<SButton
								styles={["bg-blue-600 rounded-full s-color-white"]}
								scale="sm"
								label={"관리자 [Admin]"}
								onClick={handleClick}
							/>
						}
					/>
				}
			/>
			<main className="host-layout-main flex-1">
				<Outlet />
			</main>
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
