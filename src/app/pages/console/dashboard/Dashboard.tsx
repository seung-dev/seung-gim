import { CircleQuestionMark, Eye, Pin, Settings } from "lucide-react";

import { SButtonIcon, SDiv } from "@/app/seung/dom";

import { ConsoleMain } from "../ConsoleMain";

export const Dashboard = () => {
	return (
		<ConsoleMain
			breadcumbs
			title="Dashboard"
			suffix={
				<SDiv styles={["flex flex-row items-center gap-4"]}>
					<SButtonIcon
						styles={["text-blue-600"]}
						scale="lg"
						Icon={CircleQuestionMark}
					/>
					<SButtonIcon
						styles={["text-blue-600"]}
						scale="lg"
						Icon={Pin}
					/>
					<SButtonIcon
						styles={["text-blue-600"]}
						scale="lg"
						Icon={Eye}
					/>
				</SDiv>
			}
			actions={<SButtonIcon Icon={Settings} />}
		></ConsoleMain>
	);
};
