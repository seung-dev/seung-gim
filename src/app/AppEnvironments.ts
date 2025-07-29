import type { SEnvrionments, SLanguage } from "@/app/seung/core";
import type { SThemeProps } from "@/app/seung/dom";

export const AppEnvironments: Readonly<SEnvrionments> = {
	APP_NAME: import.meta.env.VITE_APP_NAME,
	APP_VERSION: import.meta.env.VITE_APP_VERSION,
	APP_AUTHOR_NAME: import.meta.env.VITE_APP_AUTHOR_NAME,
	APP_AUTHOR_ADDRESS: import.meta.env.VITE_APP_AUTHOR_ADDRESS,
	APP_AUTHOR_EMAIL: import.meta.env.VITE_APP_AUTHOR_EMAIL,
	ROOT_CLASS_NAME: import.meta.env.VITE_ROOT_CLASS_NAME,
	BASE_URL: import.meta.env.VITE_BASE_URL,
	ALLOWED_ORIGINS: JSON.parse(import.meta.env.VITE_ALLOWED_ORIGINS) as string[],
	AVAILABLE_LANGUAGES: JSON.parse(
		import.meta.env.VITE_AVAILABLE_LANGUAGES,
	) as unknown as SLanguage[],
} as const;

export const AppTheme: Partial<SThemeProps> = {
	unit: 0.0625,
	height_header: 64,
	colors: {
		esgdadta: "#6f9a6f",
		innon: "#5b6bc0",
		charcoal: "#36454f",
	},
};
