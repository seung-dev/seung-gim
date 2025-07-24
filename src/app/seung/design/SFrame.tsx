import type { PropsWithChildren, ReactNode } from "react";

import { BrowserRouter } from "react-router";

import { SnackbarProvider, type SnackbarProviderProps } from "notistack";

import {
	CssBaseline,
	GlobalStyles,
	StyledEngineProvider,
	type Theme,
	ThemeProvider,
} from "@mui/material";

import { SLocale } from "./SLocale";
import { useSStylesActions } from "./SStyles";
import { SToast } from "./SToast";

interface SFrameProps {
	theme: Theme;
	snackbar?: SnackbarProviderProps;
	router?: {
		basename?: string;
		children?: ReactNode;
		window?: Window;
	};
}

export const SFrame = (args: PropsWithChildren<SFrameProps>) => {
	const {
		theme,
		snackbar = {
			anchorOrigin: { vertical: "top", horizontal: "center" },
			maxSnack: 3,
			autoHideDuration: 2000,
			Components: { default: SToast },
		},
		router,
		children,
	} = args;

	const { get_styles } = useSStylesActions();

	return (
		<ThemeProvider theme={theme}>
			<SLocale>
				<StyledEngineProvider enableCssLayer>
					<CssBaseline />
					<GlobalStyles
						styles={`@layer theme, base, mui, components, utilities; ${get_styles()}`}
					/>
					<SnackbarProvider {...snackbar}>
						<BrowserRouter {...router}>{children}</BrowserRouter>
					</SnackbarProvider>
				</StyledEngineProvider>
			</SLocale>
		</ThemeProvider>
	);
};
