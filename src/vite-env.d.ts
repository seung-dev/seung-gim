/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_NAME: string;
	readonly VITE_APP_VERSION: string;
	readonly VITE_APP_AUTHOR_NAME: string;
	readonly VITE_APP_AUTHOR_ADDRESS: string;
	readonly VITE_APP_AUTHOR_EMAIL: string;
	readonly VITE_ROOT_CLASS_NAME: string;
	readonly VITE_BASE_URL: string;
	readonly VITE_ALLOWED_ORIGINS: string;
	readonly VITE_AVAILABLE_LANGUAGES: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
