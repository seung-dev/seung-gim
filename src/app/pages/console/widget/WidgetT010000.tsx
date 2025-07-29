import { SButton, SCodeBlock, useSToastActions } from "@/app/seung/dom";

import { ConsoleMain } from "../ConsoleMain";

const code = `
const { t } = useTranslation();

const { toastOpen } = useSToastActions();

const copy = async (value: string) => {
	await clipboard(value, () => {
		toastOpen(t("messages.copied"));
	});
};
`;

export const WidgetT010000 = () => {
	const { toastOpen } = useSToastActions();

	const handleClick = (value: string) => {
		if (value) {
			toastOpen(value);
		}
	};

	return (
		<ConsoleMain
			breadcumbs
			title="Toast"
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
					handleClick("Toast Open");
				}}
				label="Open"
			/>
		</ConsoleMain>
	);
};
