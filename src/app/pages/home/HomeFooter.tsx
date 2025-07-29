import {
	SContainer,
	SDiv,
	SDivider,
	SImage,
	SLink,
	SLinkNavigate,
	STypography,
} from "@/app/seung/dom";

interface HomeFooterProps {
	author?: {
		name: string;
		address: string;
		email: string;
	};
}

export const HomeFooter = (args: HomeFooterProps) => {
	const { author } = args;

	const year = new Date().getFullYear();

	return (
		<footer className="home-footer-root py-12 bg-gray-800 s-color-white">
			<SContainer>
				<SDiv styles={["mx-auto"]}>
					<SDiv styles={["mb-8", "grid grid-cols-12 gap-4"]}>
						<SDiv styles={["col-span-12 md:col-span-6"]}>
							<STypography
								styles={["mb-4", "text-blue-400"]}
								scale="lg"
								weight="bold"
							>
								{author?.name}
							</STypography>
							<STypography
								styles={["mb-2", "text-gray-300"]}
								scale="sm"
							>
								{author?.address}
							</STypography>
							<STypography
								styles={["mb-2", "text-gray-300"]}
								scale="sm"
							>
								{author?.email}
							</STypography>
						</SDiv>
						<SDiv styles={["col-span-12 md:col-span-2"]}>
							<STypography
								styles={["mb-4", "text-right"]}
								weight="bold"
							>
								{"Menu A"}
							</STypography>
							{[
								{ path: "/A/a0", label: "Item a0" },
								{ path: "/A/a1", label: "Item a1" },
							].map(({ path, label }, i, array) => (
								<SLinkNavigate
									key={`A-${i}`}
									styles={[
										"block",
										i === array.length - 1 ? "" : "mb-3",
										"text-right",
										"text-gray-300",
									]}
									scale="sm"
									to={path}
								>
									{label}
								</SLinkNavigate>
							))}
						</SDiv>
						<SDiv styles={["col-span-12 md:col-span-2"]}>
							<STypography
								styles={["mb-4", "text-right"]}
								scale="md"
								weight="bold"
							>
								{"Menu B"}
							</STypography>
							{[
								{ path: "/B/b0", label: "Item b0" },
								{ path: "/B/b1", label: "Item b1" },
								{ path: "/B/b2", label: "Item b2" },
								{ path: "/B/b3", label: "Item b3" },
								{ path: "/B/b4", label: "Item b4" },
								{ path: "/B/b5", label: "Item b5" },
							].map(({ path, label }, i, array) => (
								<SLinkNavigate
									key={`B-${i}`}
									styles={[
										"block",
										i === array.length - 1 ? "" : "mb-3",
										"text-right",
										"text-gray-300",
									]}
									scale="sm"
									to={path}
								>
									{label}
								</SLinkNavigate>
							))}
						</SDiv>
						<SDiv styles={["col-span-12 md:col-span-2"]}>
							<STypography
								styles={["mb-4", "text-right"]}
								scale="md"
								weight="bold"
							>
								{"C Menu"}
							</STypography>
							{[
								{ path: "/C/c0", label: "Item c0" },
								{ path: "/C/c1", label: "Item c1" },
								{ path: "/C/c2", label: "Item c2" },
								{ path: "/C/c3", label: "Item c3" },
							].map(({ path, label }, i, array) => (
								<SLinkNavigate
									key={`C-${i}`}
									styles={[
										"block",
										i === array.length - 1 ? "" : "mb-3",
										"text-right",
										"text-gray-300",
									]}
									scale="sm"
									to={path}
								>
									{label}
								</SLinkNavigate>
							))}
						</SDiv>
					</SDiv>
					<SDivider styles={["mb-8", "s-color-outline"]} />
					<SDiv styles={["grid grid-cols-12 gap-4"]}>
						<SDiv styles={["col-span-12 md:col-span-6"]}>
							<STypography
								styles={["text-gray-400"]}
								scale="sm"
							>{`Copyright © ${year} ${author?.name}`}</STypography>
						</SDiv>
						<SDiv
							styles={[
								"col-span-12 md:col-span-6",
								"flex flex-row items-center justify-start md:justify-end gap-6",
							]}
						>
							<SLink href="https://github.com/seung-dev/seung-gim">
								<SImage
									scale="md"
									white
									src="/images/icons/github-black.svg"
									alt="Github"
								/>
							</SLink>
							<SLink href="https://react.dev/">
								<SImage
									className="w-4 h-4 filter invert"
									src="/images/icons/react-black.svg"
									alt="React"
								/>
							</SLink>
							<SLink href="https://www.typescriptlang.org/">
								<SImage
									className="w-4 h-4 filter invert"
									src="/images/icons/typescript-black.svg"
									alt="Typescript"
								/>
							</SLink>
							<SLink href="https://mui.com/">
								<SImage
									className="w-4 h-4 filter invert"
									src="/images/icons/mui-black.svg"
									alt="Material UI"
								/>
							</SLink>
							<SLink href="https://lucide.dev/icons/">
								<SImage
									className="w-4 h-4 filter invert"
									src="/images/icons/lucide-black.svg"
									alt="Lucide"
								/>
							</SLink>
							<SLink href="https://simpleicons.org/?q=simpleicons">
								<SImage
									className="w-4 h-4 filter invert"
									src="/images/icons/simpleicons-black.svg"
									alt="Simple Icons"
								/>
							</SLink>
						</SDiv>
					</SDiv>
				</SDiv>
			</SContainer>
		</footer>
	);
};
