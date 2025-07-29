import { Smile } from "lucide-react";

import {
	SCard,
	SCodeBlock,
	SDiv,
	type SFontWeightProps,
	SLucideIcon,
	type SScaleProps,
	STypography,
	useSTheme,
} from "@/app/seung/dom";

import { HomeSection, type HomeSectionProps } from "./HomeSection";

const code = `
<STypography
	// locale="ko"// ko(default), en
	scale="md"// xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl
	// weight="normal"// normal(default), medium, bold
	// ellipsis// true, false(default)
	// required// true, false(default)
>
	{message}
</STypography>
`;

const message = "동해물과 백두산이 ABCDEFG abcdefg";

const font_locales: string[] = ["ko", "en"];

const font_family: Record<string, string> = {
	ko: "Pretendard GOV",
	en: "Roboto",
};

const font_weight: SFontWeightProps[] = ["normal", "medium", "bold"];

export const font_scales: SScaleProps[] = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"2xl",
	"3xl",
	"4xl",
	"5xl",
	"6xl",
];

export const HomeT011000 = (args: HomeSectionProps) => {
	const { unit, ...styles } = useSTheme();

	return (
		<HomeSection {...args}>
			<SDiv styles={["flex flex-col gap-8"]}>
				<SDiv>
					<STypography
						styles={["mb-4"]}
						scale="2xl"
						weight="bold"
					>
						{"Font"}
					</STypography>
					<SCodeBlock
						dark
						code={code}
					/>
				</SDiv>
				<SDiv>
					<STypography
						styles={["mb-4"]}
						scale="2xl"
						weight="bold"
					>
						{"Font Locale & Weight"}
					</STypography>
					<SCard styles={["p-6"]}>
						<SDiv styles={["flex flex-col gap-4"]}>
							{font_locales.map((locale, i) =>
								font_weight.map((weight, j) => (
									<SDiv key={`font-locale-${i}-${j}`}>
										<SDiv
											styles={[
												"grid",
												"grid-cols-12",
												"items-center",
												"gap-2",
											]}
										>
											<STypography
												styles={["col-span-2"]}
												scale="sm"
											>
												{font_family[locale]}
											</STypography>
											<SDiv styles={["col-span-2", "flex flex-col"]}>
												<STypography scale="sm">
													{`.s-font-${locale}`}
												</STypography>
												<STypography scale="sm">
													{`.font-${weight}`}
												</STypography>
											</SDiv>
											<STypography
												styles={["col-span-8"]}
												locale={locale}
												scale="2xl"
												weight={weight}
											>
												{message}
											</STypography>
										</SDiv>
									</SDiv>
								)),
							)}
						</SDiv>
					</SCard>
				</SDiv>
				<SDiv>
					<STypography
						styles={["mb-4"]}
						scale="2xl"
						weight="bold"
					>
						{"Font Scale"}
					</STypography>
					<SCard styles={["p-6"]}>
						<SDiv styles={["flex flex-col gap-4"]}>
							{font_scales.map((scale, i) => {
								const rem = styles[`font_${scale}`];
								return (
									<SDiv key={`font-scale-${i}`}>
										<SDiv styles={["grid grid-cols-12 items-center gap-2"]}>
											<SDiv styles={["col-span-1", "flex flex-col"]}>
												<STypography scale="sm">{`${unit * rem}rem`}</STypography>
												<STypography scale="sm">{`${unit * rem * 16}px`}</STypography>
											</SDiv>
											<STypography
												styles={["col-span-1"]}
												scale="sm"
											>
												{`.s-font-${scale}`}
											</STypography>
											<SDiv
												styles={[
													"col-span-10",
													"flex flex-row items-center gap-2",
												]}
											>
												<SLucideIcon
													scale={scale}
													Icon={Smile}
												/>
												<STypography
													scale={scale}
													ellipsis
												>
													{message}
												</STypography>
											</SDiv>
										</SDiv>
									</SDiv>
								);
							})}
						</SDiv>
					</SCard>
				</SDiv>
			</SDiv>
		</HomeSection>
	);
};
