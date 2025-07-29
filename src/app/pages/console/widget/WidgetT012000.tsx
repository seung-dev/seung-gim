import { SButton, SCodeBlock, SDiv, useSDrawerActions } from "@/app/seung/dom";

import { ConsoleMain } from "../ConsoleMain";

const code = `
const { drawerOpen } = useSDrawerActions();

const handleAction = (value: string) => {
	if (value) {
		drawerOpen({ view: <SDiv styles={["p-10"]}>{value}</SDiv> });
	}
};
`;

export const WidgetT012000 = () => {
	const { drawerOpen } = useSDrawerActions();

	const handleClick = (value: string) => {
		if (value) {
			drawerOpen({ view: <SDiv styles={["p-10"]}>{value}</SDiv> });
		}
	};

	return (
		<ConsoleMain
			breadcumbs
			title="Drawer"
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
					handleClick("Drawer Open");
				}}
				label="Open"
			/>
		</ConsoleMain>
	);
};
