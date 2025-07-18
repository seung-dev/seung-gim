import { useEffect } from "react";

import { createTheme } from "@mui/material";

import { SDialog, SFrame, useSStylesActions } from "@/app/seung/design";
import { SReactRoute } from "@/app/seung/router";

import { AppStyles } from "./AppEnvironments";
import { AppRoutes } from "./AppRoutes";

function App() {
	const theme = createTheme();

	const { set_styles } = useSStylesActions();

	useEffect(() => {
		set_styles(AppStyles);
	}, []);

	return (
		<SFrame theme={theme}>
			<SReactRoute routes={AppRoutes} />
			<SDialog />
		</SFrame>
	);
}

export default App;
