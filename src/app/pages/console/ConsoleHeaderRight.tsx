import { useTranslation } from "react-i18next";

import { ArrowUp01, Bell, Languages, LogOut, UserCog } from "lucide-react";

import { Avatar } from "@mui/material";

import { to_color } from "@/app/seung/core";
import { SButtonIcon, SButtonMenu, SDiv, SLucideIcon, STypography } from "@/app/seung/design";
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
				paint="white"
				LucideIcon={Bell}
			/>
			<SButtonMenu
				Label={
					<SLucideIcon
						scale="lg"
						paint="white"
						LucideIcon={Languages}
					/>
				}
				items={[
					{
						label: "한국어",
						Prefix: (
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
						Prefix: (
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
				Label={
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
						Prefix: (
							<SLucideIcon
								scale="lg"
								LucideIcon={UserCog}
							/>
						),
						action: go_profile,
					},
					{
						label: t("labels.buttons.version"),
						Prefix: (
							<SLucideIcon
								scale="lg"
								LucideIcon={ArrowUp01}
							/>
						),
						action: show_version,
					},
					{ divider: true },
					{
						label: t("labels.buttons.signout"),
						Prefix: (
							<SLucideIcon
								scale="lg"
								LucideIcon={LogOut}
							/>
						),
						action: signout,
					},
				]}
			/>
		</SDiv>
	);
};
