import { SAlert, SDrawer, SFrame, SModal } from "@/app/seung/dom";
import { SReactRoute } from "@/app/seung/router";

import { AppTheme } from "./AppEnvironments";
import { AppRoutes } from "./AppRoutes";

function App() {
	return (
		<SFrame theme={AppTheme}>
			<SReactRoute routes={AppRoutes} />
			<SAlert />
			<SModal />
			<SDrawer />
		</SFrame>
	);
}

export default App;
