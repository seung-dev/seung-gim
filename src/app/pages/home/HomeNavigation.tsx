import type { ReactNode } from "react";

import type { AppLayout } from "@/app/AppRoutes";
import { SDiv, SLinkNavigate } from "@/app/seung/dom";
import type { SRouteProps } from "@/app/seung/router";

interface HomeNavigationProps {
	routes?: SRouteProps<AppLayout>[];
	action?: ReactNode;
}

export const HomeNavigation = (args: HomeNavigationProps) => {
	const { routes, action } = args;

	return (
		<SDiv
			className="home-navigation-root"
			styles={["flex grow flex-row items-center justify-end gap-8"]}
		>
			<SDiv styles={["hidden", "md:flex flex-row items-center gap-8"]}>
				{routes
					?.filter(({ path }) => !!path)
					.map(({ path, label }, i) => (
						<SLinkNavigate
							key={`home-nav-${i}`}
							styles={["h-full", "text-gray-600 hover:text-gray-700"]}
							scale="sm"
							weight="medium"
							to={path ?? ""}
							replace
						>
							{label}
						</SLinkNavigate>
					))}
			</SDiv>
			{action}
		</SDiv>
	);
};
