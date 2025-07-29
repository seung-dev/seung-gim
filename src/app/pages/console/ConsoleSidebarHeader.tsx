import { useNavigate } from "react-router";

import { ChevronLeft } from "lucide-react";

import { AppEnvironments } from "@/app/AppEnvironments";
import { SButtonIcon, SDiv, SImage, type SStyleProps, STypography } from "@/app/seung/dom";
import { useSLayoutActions } from "@/app/seung/stores";

export interface ConsoleSidebarHeaderProps {
	styles?: SStyleProps;
	collapsed?: boolean;
}

export const ConsoleSidebarHeader = (args: ConsoleSidebarHeaderProps) => {
	const { styles = [], collapsed } = args;

	const { sidebarCollapse } = useSLayoutActions();

	const navigate = useNavigate();

	const go_dashboard = async () => {
		await navigate("/console/dashboard", { replace: true });
	};

	return (
		<SDiv
			className="console-sidebar-header-root"
			styles={[
				"s-height-header",
				"shadow-lg",
				"flex flex-row items-center justify-between",
				styles,
			]}
		>
			<SDiv
				styles={["pl-4", "flex flex-row items-center gap-2", "cursor-pointer"]}
				onClick={go_dashboard}
			>
				<SImage
					styles={["w-5 h-5"]}
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
					Icon={ChevronLeft}
					hidden={collapsed}
					onClick={() => {
						sidebarCollapse();
					}}
				/>
			</SDiv>
		</SDiv>
	);
};
