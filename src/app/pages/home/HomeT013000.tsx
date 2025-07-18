import { Smile } from "lucide-react";

import {
	SBackgroundPaint,
	type SBackgroundPaintProps,
	SButton,
	SButtonIcon,
	SCard,
	SDiv,
	SOutlinePaint,
	type SOutlinePaintProps,
	type SScaleProps,
	STypography,
	useSStyles,
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

export const tailwindcss_button_outline_colors = [
	["outline-red-600", "hover:outline-red-700", "text-red-600 hover:text-red-700"],
	["outline-orange-600", "hover:outline-orange-700", "text-orange-600 hover:text-orange-700"],
	["outline-amber-600", "hover:outline-amber-700", "text-amber-600 hover:text-amber-700"],
	["outline-yellow-600", "hover:outline-yellow-700", "text-yellow-600 hover:text-yellow-700"],
	["outline-lime-600", "hover:outline-lime-700", "text-lime-600 hover:text-lime-700"],
	["outline-green-600", "hover:outline-green-700", "text-green-600 hover:text-green-700"],
	["outline-emerald-600", "text-emerald-600 hover:text-emerald-700"],
	["outline-teal-600", "hover:outline-teal-700", "text-teal-600 hover:text-teal-700"],
	["outline-cyan-600", "hover:outline-cyan-700", "text-cyan-600 hover:text-cyan-700"],
	["outline-sky-600", "hover:outline-sky-700", "text-sky-600 hover:text-sky-700"],
	["outline-blue-600", "hover:outline-blue-700", "text-blue-600 hover:text-blue-700"],
	["outline-indigo-600", "hover:outline-indigo-700", "text-indigo-600 hover:text-indigo-700"],
	["outline-violet-600", "hover:outline-violet-700", "text-violet-600 hover:text-violet-700"],
	["outline-purple-600", "hover:outline-purple-700", "text-purple-600 hover:text-purple-700"],
	[
		"outline-fuchsia-600",
		"hover:outline-fuchsia-700",
		"text-fuchsia-600 hover:text-fuchsia-700",
	],
	["outline-pink-600", "hover:outline-pink-700", "text-pink-600 hover:text-pink-700"],
	["outline-rose-600", "hover:outline-rose-700", "text-rose-600 hover:text-rose-700"],
	["outline-slate-600", "hover:outline-slate-700", "text-slate-600 hover:text-slate-700"],
	["outline-gray-600", "hover:outline-gray-700", "text-gray-600 hover:text-gray-700"],
	["outline-zinc-600", "hover:outline-zinc-700", "text-zinc-600 hover:text-zinc-700"],
	[
		"outline-neutral-600",
		"hover:outline-neutral-700",
		"text-neutral-600 hover:text-neutral-700",
	],
	["outline-stone-600", "hover:outline-stone-700", "text-stone-600 hover:text-stone-700"],
];

export const HomeT013000 = (args: HomeSectionProps) => {
	const { unit, ...styles } = useSStyles();

	return (
		<HomeSection {...args}>
			<SDiv styles={["flex flex-col gap-4"]}>
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
									const rem = styles[`scale_${scale}`];
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
											>
												{`s-button-${scale}`}
											</SButton>
											<SButton
												contained="blue"
												rounded="lg"
												scale={scale}
												ellipsis
											>
												{"rounded-lg"}
											</SButton>
											<SButton
												contained="blue"
												rounded="full"
												scale={scale}
												ellipsis
											>
												{"rounded-full"}
											</SButton>
											<SButton
												outlined="blue"
												rounded="lg"
												scale={scale}
												ellipsis
											>
												{`height: ${unit * rem * 16}px; padding-inline: ${(unit * rem * 16) / 2}px;`}
											</SButton>
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
											>
												{name}
											</SButton>
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
											>
												{name}
											</SButton>
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
													>
														<Smile />
													</SButtonIcon>
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
