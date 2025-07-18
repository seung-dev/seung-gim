import { SCard, SDiv, SJIT, STypography } from "@/app/seung/design";

import { HomeSection, type HomeSectionProps } from "./HomeSection";

export const colors = [
	"red",
	"orange",
	"amber",
	"yellow",
	"lime",
	"green",
	"emerald",
	"teal",
	"cyan",
	"sky",
	"blue",
	"indigo",
	"violet",
	"purple",
	"fuchsia",
	"pink",
	"rose",
	"slate",
	"gray",
	"zinc",
	"neutral",
	"stone",
];

export const HomeT012000 = (args: HomeSectionProps) => {
	return (
		<HomeSection {...args}>
			<SDiv styles={["flex flex-col gap-4"]}>
				<SDiv>
					<STypography
						styles={["mb-4", "font-bold"]}
						scale="2xl"
					>
						{"Color"}
					</STypography>
					<SCard
						styles={["bg-white"]}
						rounded="lg"
						shadow="xl"
					>
						{colors.map((color, i) => (
							<SDiv
								key={`color-${i}`}
								styles={["h-8", "grid grid-cols-11 items-center"]}
							>
								<SDiv
									styles={[
										"col-span-1",
										"h-full",
										"flex items-center justify-center",
										`bg-${color}-600`,
									]}
								>
									<STypography
										styles={["text-white"]}
										weight="bold"
									>
										{color}
									</STypography>
								</SDiv>
								{SJIT.filter((item) => item.startsWith(`bg-${color}`)).map(
									(lightness, j) => (
										<SDiv
											key={`color-${i}-${j}`}
											styles={[
												"col-span-1",
												"h-full",
												"flex items-center justify-center gap-2",
												"cursor-pointer",
												lightness,
											]}
										>
											<STypography
												styles={[j > 3 ? "text-white" : ""]}
												scale="xs"
											>
												{lightness.replace(/[^0-9]/g, "")}
											</STypography>
										</SDiv>
									),
								)}
							</SDiv>
						))}
					</SCard>
				</SDiv>
			</SDiv>
		</HomeSection>
	);
};
