import {
	SButton,
	SCard,
	SDatepicker,
	SDiv,
	SInput,
	SSelect,
	STypography,
} from "@/app/seung/design";

import { HomeSection, type HomeSectionProps } from "./HomeSection";
import { button_scales } from "./HomeT013000";

export const HomeT014000 = (args: HomeSectionProps) => {
	return (
		<HomeSection {...args}>
			<SDiv styles={["flex flex-col gap-4"]}>
				<SDiv>
					<STypography
						styles={["mb-4"]}
						scale="2xl"
						weight="bold"
					>
						{"Form"}
					</STypography>
					<SCard
						styles={["bg-white"]}
						rounded="lg"
						shadow="xl"
					>
						<SDiv styles={["flex flex-col gap-2"]}>
							{button_scales
								.filter(
									(scale) =>
										scale !== "3xl" &&
										scale !== "4xl" &&
										scale !== "5xl" &&
										scale !== "6xl",
								)
								.map((scale, i) => (
									<SDiv
										key={`button-scale-${i}`}
										styles={[
											"w-full",
											"bg-gray-100",
											"flex flex-row items-center gap-1",
										]}
									>
										<SButton
											contained="blue"
											scale={scale}
											label={`s-button-${scale}`}
										/>
										<SInput
											styles={["w-64"]}
											scale={scale}
											placeholder={`s-input-${scale}`}
										/>
										<SSelect
											styles={["w-64"]}
											scale={scale}
											options={[
												{
													value: "1",
													label: "한국한국한국한국한국한국한국한국한국",
												},
												{ value: "2", label: "중국" },
												{ value: "3", label: "일본" },
											]}
											placeholder="Select an option"
										/>
										<SDatepicker scale={scale} />
									</SDiv>
								))}
						</SDiv>
					</SCard>
				</SDiv>
			</SDiv>
		</HomeSection>
	);
};
