import { SCodeBlock } from "@/app/seung/dom";

import { ConsoleMain } from "../ConsoleMain";

const code = `
<SSelect
	// styles={[]}
	scale="md"// xs, sm, md, lg, xl, 2xl
	options={[
		{ value: "1", label: "한국" },
		{ value: "2", label: "중국" },
		{ value: "3", label: "일본" },
	]}
	placeholder="Select an option"
/>
`;

export const ActionT013000 = () => {
	return (
		<ConsoleMain
			breadcumbs
			title="Select"
		>
			<SCodeBlock
				dark
				code={code}
			/>
		</ConsoleMain>
	);
};
