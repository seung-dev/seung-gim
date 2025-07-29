import { SCodeBlock } from "@/app/seung/dom";

import { ConsoleMain } from "../ConsoleMain";

const code = `
<STypography
	// styles={["s-color-black"]}
	// locale="ko"// ko(default), en
	scale="md"// xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl
	// weight="normal"// normal(default), medium, bold
	// ellipsis// true, false(default)
	// required// true, false(default)
>
	{message}
</STypography>
`;

export const BaseT010000 = () => {
	return (
		<ConsoleMain
			breadcumbs
			title="Typography"
		>
			<SCodeBlock
				dark
				code={code}
			/>
		</ConsoleMain>
	);
};
