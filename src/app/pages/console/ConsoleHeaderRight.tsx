import { useTranslation } from "react-i18next";

import { ArrowUp01, Bell, Languages, LogOut, UserCog } from "lucide-react";

import { Avatar } from "@mui/material";

import { to_color } from "@/app/seung/core";
import { SButtonIcon, SButtonMenu, SDiv, SLucideIcon, STypography } from "@/app/seung/dom";
import { useSUserProfile } from "@/app/seung/stores";
import { useSignout } from "@/app/stores";

export const ConsoleHeaderLocale = () => {
	return <div>ConsoleHeaderLocale</div>;
};

export const ConsoleHeaderAvatar = () => {
	return <div>ConsoleHeaderAvatar</div>;
};

export const ConsoleHeaderRight = () => {
	const { t } = useTranslation();

	// const { locale } = useSLocale();

	const { nickname } = useSUserProfile();

	const initial = nickname ? nickname.substring(0, 1).toUpperCase() : "";

	const color = to_color(nickname);

	const go_profile = () => {
		console.log("go profile");
	};
	const show_version = () => {
		console.log("show version");
	};

	const { request_signout } = useSignout();

	const signout = async () => {
		await request_signout();
	};

	return (
		<SDiv styles={["flex flex-row items-center gap-6"]}>
			<SButtonIcon
				styles={["s-color-white"]}
				Icon={Bell}
			/>
			<SButtonMenu
				label={
					<SLucideIcon
						styles={["s-color-white"]}
						scale="lg"
						Icon={Languages}
					/>
				}
				items={[
					{
						label: "한국어",
						prefix: (
							<STypography
								styles={["text-gray-400"]}
								scale="sm"
								weight="bold"
							>
								{"ko"}
							</STypography>
						),
					},
					{
						label: "English",
						prefix: (
							<STypography
								styles={["text-gray-400"]}
								scale="sm"
								weight="bold"
							>
								{"en"}
							</STypography>
						),
					},
				]}
			/>
			<SButtonMenu
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				label={
					<Avatar
						className="w-8 h-8 font-bold cursor-pointer"
						sx={{ backgroundColor: color }}
					>
						{initial}
					</Avatar>
				}
				items={[
					{
						label: t("labels.buttons.profile"),
						prefix: (
							<SLucideIcon
								scale="lg"
								Icon={UserCog}
							/>
						),
						action: go_profile,
					},
					{
						label: t("labels.buttons.version"),
						prefix: (
							<SLucideIcon
								scale="lg"
								Icon={ArrowUp01}
							/>
						),
						action: show_version,
					},
					{ divider: true },
					{
						label: t("labels.buttons.signout"),
						prefix: (
							<SLucideIcon
								scale="lg"
								Icon={LogOut}
							/>
						),
						action: signout,
					},
				]}
			/>
		</SDiv>
	);
};
