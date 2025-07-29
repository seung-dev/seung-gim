import { Smile } from "lucide-react";

import {
	SButton,
	SButtonIcon,
	SCard,
	SCodeBlock,
	SDiv,
	type SScaleProps,
	STypography,
	useSTheme,
} from "@/app/seung/dom";

import { HomeSection, type HomeSectionProps } from "./HomeSection";
import { font_scales } from "./HomeT011000";

const SBackgroundPaint = {
	red: "bg-red-600 hover:bg-red-700 s-color-white",
	orange: "bg-orange-600 hover:bg-orange-700 s-color-white",
	amber: "bg-amber-600 hover:bg-amber-700 s-color-white",
	yellow: "bg-yellow-600 hover:bg-yellow-700 s-color-white",
	lime: "bg-lime-600 hover:bg-lime-700 s-color-white",
	green: "bg-green-600 hover:bg-green-700 s-color-white",
	emerald: "bg-emerald-600 hover:bg-emerald-700 s-color-white",
	teal: "bg-teal-600 hover:bg-teal-700 s-color-white",
	cyan: "bg-cyan-600 hover:bg-cyan-700 s-color-white",
	sky: "bg-sky-600 hover:bg-sky-700 s-color-white",
	blue: "bg-blue-600 hover:bg-blue-700 s-color-white",
	indigo: "bg-indigo-600 hover:bg-indigo-700 s-color-white",
	violet: "bg-violet-600 hover:bg-violet-700 s-color-white",
	purple: "bg-purple-600 hover:bg-purple-700 s-color-white",
	fuchsia: "bg-fuchsia-600 hover:bg-fuchsia-700 s-color-white",
	pink: "bg-pink-600 hover:bg-pink-700 s-color-white",
	rose: "bg-rose-600 hover:bg-rose-700 s-color-white",
	gray: "bg-gray-600 hover:bg-gray-700 s-color-white",
	neutral: "bg-neutral-600 hover:bg-neutral-700 s-color-white",
	stone: "bg-stone-600 hover:bg-stone-700 s-color-white",
	black: "bg-black hover:bg-black/80 s-color-white",
	white: "bg-white hover:bg-white/80",
	disabled: "bg-gray-400 s-color-white cursor-not-allowed",
} as const;

type SBackgroundPaintProps = keyof typeof SBackgroundPaint;

const SOutlinePaint = {
	red: "outline-red-600 hover:outline-red-700 text-red-600 hover:text-red-700",
	orange: "outline-orange-600 hover:outline-orange-700 text-orange-600 hover:text-orange-700",
	amber: "outline-amber-600 hover:outline-amber-700 text-amber-600 hover:text-amber-700",
	yellow: "outline-yellow-600 hover:outline-yellow-700 text-yellow-600 hover:text-yellow-700",
	lime: "outline-lime-600 hover:outline-lime-700 text-lime-600 hover:text-lime-700",
	green: "outline-green-600 hover:outline-green-700 text-green-600 hover:text-green-700",
	emerald:
		"outline-emerald-600 hover:outline-emerald-700 text-emerald-600 hover:text-emerald-700",
	teal: "outline-teal-600 hover:outline-teal-700 text-teal-600 hover:text-teal-700",
	cyan: "outline-cyan-600 hover:outline-cyan-700 text-cyan-600 hover:text-cyan-700",
	sky: "outline-sky-600 hover:outline-sky-700 text-sky-600 hover:text-sky-700",
	blue: "outline-blue-600 hover:outline-blue-700 text-blue-600 hover:text-blue-700",
	indigo: "outline-indigo-600 hover:outline-indigo-700 text-indigo-600 hover:text-indigo-700",
	violet: "outline-violet-600 hover:outline-violet-700 text-violet-600 hover:text-violet-700",
	purple: "outline-purple-600 hover:outline-purple-700 text-purple-600 hover:text-purple-700",
	fuchsia:
		"outline-fuchsia-600 hover:outline-fuchsia-700 text-fuchsia-600 hover:text-fuchsia-700",
	pink: "outline-pink-600 hover:outline-pink-700 text-pink-600 hover:text-pink-700",
	rose: "outline-rose-600 hover:outline-rose-700 text-rose-600 hover:text-rose-700",
	gray: "outline-gray-600 hover:outline-gray-700 text-gray-600 hover:text-gray-700",
	neutral:
		"outline-neutral-600 hover:outline-neutral-700 text-neutral-600 hover:text-neutral-700",
	stone: "outline-stone-600 hover:outline-stone-700 text-stone-600 hover:text-stone-700",
	black: "outline-black hover:outline-black/80 s-color-black hover:s-color-black/80",
	white: "outline-white hover:outline-white/80 s-color-white hover:s-color-white/80",
	disabled: "outline-gray-400 text-gray-400 cursor-not-allowed",
} as const;

type SOutlinePaintProps = keyof typeof SOutlinePaint;

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
						{"Button"}
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
						{"Button Scale"}
					</STypography>
					<SCard styles={["p-6"]}>
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
												"w-full flex flex-row flex-nowrap items-center gap-4",
											]}
										>
											<SButton
												styles={[
													"bg-blue-600 hover:bg-blue-700 s-color-white",
												]}
												scale={scale}
												ellipsis
												Prefix={Smile}
												label={`버튼 s-button-${scale}`}
											/>
											<SButton
												styles={[
													"bg-blue-600 hover:bg-blue-700 s-color-white",
													"rounded-lg",
												]}
												scale={scale}
												ellipsis
												label={"rounded-lg"}
											/>
											<SButton
												styles={[
													"bg-blue-600 hover:bg-blue-700 s-color-white",
													"rounded-full",
												]}
												scale={scale}
												ellipsis
												label={"rounded-full"}
											/>
											<SButton
												styles={[
													"bg-blue-600 hover:bg-blue-700 s-color-white",
													"shrink min-w-0",
												]}
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
												styles={["w-full", paint]}
												scale="sm"
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
											styles={[
												"p-2",
												name === "white" ? "bg-black" : "",
												paint,
											]}
										>
											<SButton
												styles={["w-full"]}
												scale="sm"
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
					<SCard styles={["p-6"]}>
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
														styles={[
															`text-blue-${value} hover:text-blue-${value + 100}`,
														]}
														scale={scale}
														Icon={Smile}
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
