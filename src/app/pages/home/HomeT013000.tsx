import { useTranslation } from "react-i18next";

import { Smile } from "lucide-react";

import { clipboard } from "@/app/seung/core";
import {
	SBackgroundPaint,
	type SBackgroundPaintProps,
	SButton,
	SButtonIcon,
	SCard,
	SCodeBlock,
	SDiv,
	SOutlinePaint,
	type SOutlinePaintProps,
	type SScaleProps,
	STypography,
	useSStyles,
	useSToastActions,
} from "@/app/seung/design";

import { HomeSection, type HomeSectionProps } from "./HomeSection";
import { font_scales } from "./HomeT011000";

export const button_scales: SScaleProps[] = [
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

const code = `
<SButton
	contained="blue"// red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose, slate, gray, zinc, neutral, stone, white, black
	// outlined="blue"// red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose, slate, gray, zinc, neutral, stone, white, black
	// rounded="lg"// none, sm, md, lg, xl, 2xl, full
	scale="xs"// xs, sm, md, lg, xl, 2xl
	// ellipsis// true, false(default)
	label="label"
	// startIcon={<Smile />}
/>
`;

export const HomeT013000 = (args: HomeSectionProps) => {
	const { unit, ...styles } = useSStyles();

	const { t } = useTranslation();

	const { toast_open } = useSToastActions();

	const copy = async (value: string) => {
		await clipboard(value, () => {
			toast_open(t("messages.copied"));
		});
	};

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
						onClick={async () => {
							await copy(code);
						}}
					/>
				</SDiv>
				<SDiv>
					<STypography
						styles={["mb-4"]}
						scale="2xl"
						weight="bold"
					>
						{"Button Scale"}
					</STypography>
					<SCard>
						<SDiv styles={["flex flex-col gap-2"]}>
							{button_scales
								.filter(
									(scale) =>
										scale !== "3xl" &&
										scale !== "4xl" &&
										scale !== "5xl" &&
										scale !== "6xl",
								)
								.map((scale, i) => {
									const rem = styles[`height_${scale}`];
									return (
										<SDiv
											key={`button-scale-${i}`}
											styles={[
												"w-full",
												"flex flex-row items-center gap-4",
											]}
										>
											<SButton
												contained="blue"
												scale={scale}
												ellipsis
												startIcon={<Smile />}
												label={`버튼 s-button-${scale}`}
											/>
											<SButton
												contained="blue"
												rounded="lg"
												scale={scale}
												ellipsis
												label={"rounded-lg"}
											/>
											<SButton
												contained="blue"
												rounded="full"
												scale={scale}
												ellipsis
												label={"rounded-full"}
											/>
											<SButton
												outlined="blue"
												rounded="lg"
												scale={scale}
												ellipsis
												label={`height: ${unit * rem * 16}px; padding-inline: ${(unit * rem * 16) / 2}px;`}
											/>
										</SDiv>
									);
								})}
						</SDiv>
					</SCard>
				</SDiv>
				<SDiv>
					<STypography
						styles={["mb-4"]}
						scale="2xl"
						weight="bold"
					>
						{"Button Color"}
					</STypography>
					<SCard>
						<SDiv styles={["flex flex-col gap-4"]}>
							<SDiv styles={["grid grid-cols-4 gap-2"]}>
								{Object.keys(SBackgroundPaint).map((name, i) => {
									const paint = name as SBackgroundPaintProps;
									return (
										<SDiv
											key={`button-color-${i}`}
											styles={["p-2", name === "white" ? "bg-black" : ""]}
										>
											<SButton
												styles={["w-full"]}
												rounded="lg"
												scale="sm"
												contained={paint}
												ellipsis
												label={name}
											/>
										</SDiv>
									);
								})}
							</SDiv>
							<SDiv styles={["grid grid-cols-4 gap-4"]}>
								{Object.keys(SOutlinePaint).map((name, i) => {
									const paint = name as SOutlinePaintProps;
									return (
										<SDiv
											key={`button-color-outlined-${i}`}
											styles={["p-2", name === "white" ? "bg-black" : ""]}
										>
											<SButton
												styles={["w-full"]}
												rounded="lg"
												scale="sm"
												outlined={paint}
												ellipsis
												label={name}
											/>
										</SDiv>
									);
								})}
							</SDiv>
						</SDiv>
					</SCard>
				</SDiv>
				<SDiv>
					<STypography
						styles={["mb-4"]}
						scale="2xl"
						weight="bold"
					>
						{"Button Icon"}
					</STypography>
					<SCard>
						<SDiv styles={["flex flex-col gap-4"]}>
							{font_scales.map((scale, i) => {
								const rem = styles[`font_${scale}`];
								return (
									<SDiv key={`button-icon-${i}`}>
										<SDiv styles={["grid grid-cols-12 items-center gap-2"]}>
											<SDiv styles={["col-span-1", "flex flex-col"]}>
												<STypography scale="sm">{`${unit * rem}rem`}</STypography>
												<STypography scale="sm">{`${unit * rem * 16}px`}</STypography>
											</SDiv>
											<STypography
												styles={["col-span-2"]}
												scale="sm"
											>
												{`.s-button-icon-${scale}`}
											</STypography>
											<SDiv
												styles={[
													"col-span-9",
													"flex flex-row items-center gap-2",
												]}
											>
												{[
													100, 200, 300, 400, 500, 600, 700, 800, 900,
													950,
												].map((value, j) => (
													<SButtonIcon
														key={`button-icon-${i}-${j}`}
														scale={scale}
														paint={`text-blue-${value} hover:text-blue-${value + 100}`}
														LucideIcon={Smile}
													/>
												))}
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
