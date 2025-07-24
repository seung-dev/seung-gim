import { type PropsWithChildren, useEffect } from "react";

import { create } from "zustand";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// export type SLocaleProps = "ko" | "en";

interface SLocaleProps {
	locale?: string;
}

interface SLocaleStoreProps extends SLocaleProps {
	actions: {
		set_locale: (locale: string) => void;
	};
}

export const useSLayoutStore = create<SLocaleStoreProps>()((set) => ({
	locale: "ko",
	actions: {
		set_locale: (locale: string) => set({ locale }),
	},
}));

export const useSLocaleActions = () => useSLayoutStore((state) => state.actions);
export const useSLocale = () => useSLayoutStore((state) => state.locale);

export const SLocale = (args: PropsWithChildren) => {
	const { children } = args;

	const locale = useSLocale();

	useEffect(() => {
		const language = `s-locale-${locale}`;

		document.body.classList.forEach((className) => {
			if (className.startsWith("s-locale")) {
				document.body.classList.remove(className);
			}
		});

		document.body.classList.add(language);

		return () => {
			document.body.classList.remove(language);
		};
	}, [locale]);

	return (
		<LocalizationProvider
			dateAdapter={AdapterDayjs}
			adapterLocale={locale}
		>
			{children}
		</LocalizationProvider>
	);
};
