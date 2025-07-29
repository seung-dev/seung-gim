import { type PropsWithChildren, useEffect } from "react";

import { create } from "zustand";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface SLocaleProps {
	locale?: string;
}

interface SLocaleStoreProps extends SLocaleProps {
	actions: {
		setLocale: (locale: string) => void;
	};
}

const useSLocaleStore = create<SLocaleStoreProps>()((set) => ({
	locale: "ko",
	actions: {
		setLocale: (locale: string) => set({ locale }),
	},
}));

export const useSLocaleActions = () => useSLocaleStore((state) => state.actions);
export const useSLocale = () => useSLocaleStore((state) => state.locale);

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
