import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

import type { SLanguage } from "./app/seung/core";

const loc = import.meta.env.MODE === "loc";

const languages = JSON.parse(
	import.meta.env.VITE_AVAILABLE_LANGUAGES,
) as unknown as SLanguage[];

void i18n
	.use(HttpBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: loc,
		supportedLngs: languages.map((language) => language.name),
		fallbackLng: languages[0].name,
		preload: languages.map((language) => language.name),
		ns: ["translation"],
		defaultNS: "translation",
		backend: {
			loadPath: "/locales/{{lng}}/{{ns}}.json",
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
