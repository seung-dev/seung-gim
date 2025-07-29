import { SCodeBlock } from "@/app/seung/dom";

import { ConsoleMain } from "../ConsoleMain";

const code = `
<SCheckbox
	// styles={[]}
	scale="sm"// xs, sm, md, lg, xl, 2xl
	options={[
		{
			label: "동의합니다.",
			value: "1",
		},
	]}
/>
`;

export const ActionT011000 = () => {
	return (
		<ConsoleMain
			breadcumbs
			title="Checkbox"
		>
			<SCodeBlock
				dark
				code={code}
			/>
		</ConsoleMain>
	);
};
