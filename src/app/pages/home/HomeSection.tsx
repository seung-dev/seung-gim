import { SContainer, SDiv, type SDivProps } from "@/app/seung/design";

export interface HomeSectionProps extends SDivProps {
	hero?: boolean;
}

export const HomeSection = (args: HomeSectionProps) => {
	const { className, children, styles, hero, ...misc } = args;

	return (
		<SDiv
			className="home-section-root"
			styles={["py-12", hero ? "mt-[var(--s-header-height)]" : "", className, styles]}
			{...misc}
		>
			<SContainer>{children}</SContainer>
		</SDiv>
	);
};
