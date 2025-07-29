import type { PropsWithChildren, ReactNode } from "react";

import { SDiv, type SStyleProps } from "@/app/seung/dom";

import { ConsoleMainBreadcumbs } from "./ConsoleMainBreadcumbs";
import { ConsoleMainTitle } from "./ConsoleMainTitle";

interface ConsoleMainProps {
	styles?: SStyleProps;
	title?: string;
	breadcumbs?: boolean;
	suffix?: ReactNode;
	actions?: ReactNode;
}

export const ConsoleMain = (args: PropsWithChildren<ConsoleMainProps>) => {
	const { styles, title, breadcumbs, suffix, actions, children } = args;

	return (
		<SDiv
			className="console-main-root"
			styles={["p-6", styles]}
		>
			{breadcumbs && <ConsoleMainBreadcumbs styles={["mb-4"]} />}
			{title && (
				<SDiv styles={["mb-4", "flex flex-row items-center justify-between"]}>
					<SDiv styles={["flex flex-row items-center gap-4"]}>
						<ConsoleMainTitle title={title} />
						{suffix && <SDiv>{suffix}</SDiv>}
					</SDiv>
					{actions && <SDiv>{actions}</SDiv>}
				</SDiv>
			)}
			<SDiv styles={["w-full"]}>{children}</SDiv>
		</SDiv>
	);
};
