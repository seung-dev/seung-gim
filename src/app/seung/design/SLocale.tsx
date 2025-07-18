import type { PropsWithChildren } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export type SLocaleProps = "ko" | "en";

export const SLocale = (args: PropsWithChildren<{ locale: SLocaleProps }>) => {
	const { children, locale = "ko" } = args;

	return (
		<LocalizationProvider
			dateAdapter={AdapterDayjs}
			adapterLocale={locale}
		>
			<div className={`s-locale-${locale}`}>{children}</div>
		</LocalizationProvider>
	);
};
