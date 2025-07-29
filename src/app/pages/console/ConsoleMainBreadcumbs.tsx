import { ChevronRight } from "lucide-react";

import { SDiv, SLucideIcon, type SStyleProps, STypography } from "@/app/seung/dom";

interface ConsoleMainBreadcumbsProps {
	styles?: SStyleProps;
}

export const ConsoleMainBreadcumbs = (args: ConsoleMainBreadcumbsProps) => {
	const { styles } = args;

	const items: {
		label: string;
	}[] = [{ label: "홈" }, { label: "대메뉴" }, { label: "중메뉴" }, { label: "소메뉴" }];

	return (
		<SDiv
			className="console-main-breadcumbs-root"
			styles={styles}
		>
			<SDiv styles={["flex flex-row items-center gap-1"]}>
				{items.map(({ label }, i) => (
					<SDiv
						key={`breadcumbs-item-${i}`}
						styles={["flex flex-row items-center gap-1"]}
					>
						{i > 0 && (
							<SLucideIcon
								styles={["text-gray-400"]}
								scale="sm"
								Icon={ChevronRight}
							/>
						)}
						<STypography
							styles={["text-gray-400"]}
							scale="sm"
						>
							{label}
						</STypography>
					</SDiv>
				))}
			</SDiv>
		</SDiv>
	);
};
