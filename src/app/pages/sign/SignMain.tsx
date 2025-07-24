import type { PropsWithChildren } from "react";

import { SCard, SContainer, SDiv, STypography } from "@/app/seung/design";

interface SignMainProps {
	title?: string;
	subtitle?: string;
}

export const SignMain = (args: PropsWithChildren<SignMainProps>) => {
	const { title, subtitle, children } = args;

	return (
		<SContainer maxWidth="xs">
			<SDiv styles={["h-dvh", "flex flex-col items-center justify-center"]}>
				<SCard
					styles={["pt-12 pr-8 pb-10 pl-8", "bg-white"]}
					rounded="lg"
					shadow="lg"
				>
					<SDiv styles={["flex flex-col items-center justify-center"]}>
						<STypography
							styles={["mb-12", "text-center"]}
							scale="2xl"
							weight="bold"
						>
							{title}
						</STypography>
						<STypography
							styles={["mb-6", "text-center"]}
							scale="lg"
							color="gray"
							weight="bold"
						>
							{subtitle}
						</STypography>
						<SDiv styles={["w-full"]}>{children}</SDiv>
					</SDiv>
				</SCard>
			</SDiv>
		</SContainer>
	);
};
