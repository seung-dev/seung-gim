import { SContainer, SDiv, type SDivProps } from "@/app/seung/dom";

export interface HomeSectionProps extends SDivProps {
	hero?: boolean;
}

export const HomeSection = (args: HomeSectionProps) => {
	const { hero, styles, className, children, ...misc } = args;

	return (
		<SDiv
			className="home-section-root"
			styles={["py-12", hero && "mt-[var(--s-height-header)]", styles, className]}
			{...misc}
		>
			<SContainer>{children}</SContainer>
		</SDiv>
	);
};
