import { useNavigate } from "react-router";

import { ChevronLeft } from "lucide-react";

import { AppEnvironments } from "@/app/AppEnvironments";
import { SButtonIcon, type SClassProps, SDiv, SImage, STypography } from "@/app/seung/design";
import { useSLayoutActions } from "@/app/seung/stores";

export interface ConsoleSidebarHeaderProps {
	styles?: SClassProps[];
	collapsed?: boolean;
}

export const ConsoleSidebarHeader = (args: ConsoleSidebarHeaderProps) => {
	const { styles = [], collapsed } = args;

	const { sidebar_collapse } = useSLayoutActions();

	const navigate = useNavigate();

	const go_dashboard = async () => {
		await navigate("/console/dashboard", { replace: true });
	};

	return (
		<SDiv
			styles={[
				"s-height-header",
				"shadow-lg",
				"flex flex-row items-center justify-between",
				...styles,
			]}
		>
			<SDiv
				styles={["pl-5", "flex flex-row items-center gap-2", "cursor-pointer"]}
				onClick={go_dashboard}
			>
				<SImage
					styles={["w-6 h-6"]}
					src="/seung-black.svg"
					alt="Site Logo"
				/>
				<STypography
					scale="lg"
					weight="bold"
					hidden={collapsed}
				>
					{AppEnvironments.APP_NAME}
				</STypography>
			</SDiv>
			<SDiv styles={["pr-4", "flex flex-col"]}>
				<SButtonIcon
					LucideIcon={ChevronLeft}
					hidden={collapsed}
					onClick={() => {
						sidebar_collapse();
					}}
				/>
			</SDiv>
		</SDiv>
	);
};
