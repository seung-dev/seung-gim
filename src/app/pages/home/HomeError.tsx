import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { Home, TriangleAlert } from "lucide-react";

import { SButton, SContainer, SDiv, STypography } from "@/app/seung/dom";

interface HomeErrorProps {
	title?: string;
	message?: string;
	path?: string;
}

export const HomeError = (args: HomeErrorProps) => {
	const { title, message, path = "/" } = args;

	const navigate = useNavigate();

	const { t, i18n } = useTranslation();
	const en = i18n.language === "en";

	return (
		<SContainer maxWidth="md">
			<SDiv styles={["mt-16", "flex flex-col items-start gap-12"]}>
				<SDiv styles={["w-full", "flex flex-row items-center justify-start gap-8"]}>
					<TriangleAlert
						className="text-orange-400"
						size={60}
					/>
					<STypography styles={["text-4xl font-bold"]}>
						{title ?? t("error.title")}
					</STypography>
				</SDiv>
				<SDiv
					styles={[
						"w-full",
						"py-4 px-4",
						"flex flex-col gap-2",
						"outline-l-4 outline-orange-400",
					]}
				>
					<STypography>{message ?? t("error.message")}</STypography>
					<STypography styles={["text-gray-400"]}>
						{t("error.message", { lng: en ? "ko" : "en" })}
					</STypography>
				</SDiv>
				<SDiv styles={["w-full", "flex flex-row items-center justify-center"]}>
					<SButton
						styles={["gap-2", "bg-blue-700 hover:bg-blue-800 s-color-white"]}
						scale="md"
						Prefix={Home}
						label={t("error.button")}
						onClick={() => navigate(path)}
					/>
				</SDiv>
			</SDiv>
		</SContainer>
	);
};
