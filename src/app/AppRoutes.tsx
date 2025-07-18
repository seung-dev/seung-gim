import { HomeError, HomeLayout, HomeT010000 } from "@/app/pages/home";
import { SigninUsername } from "@/app/pages/sign";
import type { SRouteProps } from "@/app/seung/router";

export type AppLayout = "home" | "tenant" | "sign" | "console";

export const AppRoutes: SRouteProps<AppLayout>[] = [
	{
		layout: "home",
		Component: HomeLayout,
		children: [{ path: "/", Component: HomeT010000 }],
	},
	{
		layout: "home",
		path: "*",
		Component: HomeError,
	},
	{
		layout: "sign",
		path: "/signin",
		Component: SigninUsername,
	},
];
