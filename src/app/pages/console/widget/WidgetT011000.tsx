import { SButton, SCodeBlock, SDiv, useSModalActions } from "@/app/seung/dom";

import { ConsoleMain } from "../ConsoleMain";

const code = `
const { modalOpen } = useSModalActions();

const handleAction = (value: string) => {
	if (value) {
		modalOpen({ view: <SDiv styles={["p-10"]}>{value}</SDiv> });
	}
};
`;

export const WidgetT011000 = () => {
	const { modalOpen } = useSModalActions();

	const handleClick = (value: string) => {
		if (value) {
			modalOpen({ view: <SDiv styles={["p-10"]}>{value}</SDiv> });
		}
	};
	return (
		<ConsoleMain
			breadcumbs
			title="Modal"
		>
			<SCodeBlock
				styles={["mb-4"]}
				dark
				code={code}
			/>
			<SButton
				styles={["bg-blue-600 hover:bg-blue-700 s-color-white"]}
				scale="md"
				onClick={() => {
					handleClick("Modal Open");
				}}
				label="Open"
			/>
		</ConsoleMain>
	);
};
