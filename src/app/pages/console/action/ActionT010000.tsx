import { SCodeBlock } from "@/app/seung/dom";

import { ConsoleMain } from "../ConsoleMain";

const code = `
<SInput
	// styles={[]}
	scale="md"// xs, sm, md, lg, xl, 2xl
	placeholder="내용을 입력하세요."
	// prefix={<Smile />}
	// suffix={<Smile />}
/>
`;

export const ActionT010000 = () => {
	return (
		<ConsoleMain
			breadcumbs
			title="Input"
		>
			<SCodeBlock
				dark
				code={code}
			/>
		</ConsoleMain>
	);
};
