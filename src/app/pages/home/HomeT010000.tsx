import { SDiv } from "@/app/seung/dom";

import { HomeT011000 } from "./HomeT011000";
import { HomeT012000 } from "./HomeT012000";
import { HomeT013000 } from "./HomeT013000";
import { HomeT014000 } from "./HomeT014000";

export const HomeT010000 = () => {
	return (
		<SDiv>
			<HomeT011000 hero />
			<HomeT012000 styles={["bg-blue-50"]} />
			<HomeT013000 />
			<HomeT014000 styles={["bg-blue-50"]} />
		</SDiv>
	);
};
