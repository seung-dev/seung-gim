import type { PropsWithChildren } from "react";

import { BrowserRouter, type BrowserRouterProps } from "react-router";

import { SnackbarProvider, type SnackbarProviderProps } from "notistack";

import {
	createTheme,
	CssBaseline,
	GlobalStyles,
	StyledEngineProvider,
	ThemeProvider,
} from "@mui/material";

import { SLocale } from "./SLocale";
import { type SThemeProps, useSThemeActions } from "./STheme";
import { SToast } from "./SToast";

interface SFrameProps {
	theme: Partial<SThemeProps>;
	snackbar?: SnackbarProviderProps;
	router?: BrowserRouterProps;
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

	const { cssVariables } = useSThemeActions();

	return (
		<SLocale>
			<ThemeProvider theme={createTheme()}>
				<StyledEngineProvider enableCssLayer>
					<CssBaseline />
					<GlobalStyles
						styles={`@layer theme, base, mui, components, utilities; ${cssVariables(theme)}`}
					/>
					<SnackbarProvider {...snackbar}>
						<BrowserRouter {...router}>{children}</BrowserRouter>
					</SnackbarProvider>
				</StyledEngineProvider>
			</ThemeProvider>
		</SLocale>
	);
};
