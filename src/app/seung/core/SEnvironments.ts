export interface SLanguage {
	name: string;
	label: string;
}

export interface SEnvrionments {
	readonly APP_NAME: string;
	readonly APP_VERSION: string;
	readonly APP_AUTHOR_NAME: string;
	readonly APP_AUTHOR_ADDRESS: string;
	readonly APP_AUTHOR_EMAIL: string;
	readonly ROOT_CLASS_NAME: string;
	readonly BASE_URL: string;
	readonly ALLOWED_ORIGINS: string[];
	readonly AVAILABLE_LANGUAGES: SLanguage[];
}
