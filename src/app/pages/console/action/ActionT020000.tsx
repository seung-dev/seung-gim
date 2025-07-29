import { SCodeBlock } from "@/app/seung/dom";

import { ConsoleMain } from "../ConsoleMain";

const code = `
<SButton
	// type="submit"// submit, button(default)
	styles={["bg-blue-600 hover:bg-blue-700 s-color-white"]}
	scale="xs"// xs, sm, md, lg, xl, 2xl
	// ellipsis// true, false(default)
	// Prefix={Smile}
	label="확인"
/>
`;

export const ActionT020000 = () => {
	return (
		<ConsoleMain
			breadcumbs
			title="Button"
		>
			<SCodeBlock
				dark
				code={code}
			/>
		</ConsoleMain>
	);
};
