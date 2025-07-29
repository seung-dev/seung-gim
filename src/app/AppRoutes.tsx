import { Box, Boxes, LayoutDashboard } from "lucide-react";

import { HomeError, HomeLayout, HomeT010000 } from "@/app/pages/home";
import {
	SignForgotPassword,
	SignForgotUsername,
	SigninOTP,
	SigninUsername,
	SignLayout,
} from "@/app/pages/sign";
import type { SRouteProps } from "@/app/seung/router";

import { ConsoleLayout } from "./pages/console";
import {
	ActionT010000,
	ActionT011000,
	ActionT012000,
	ActionT013000,
	ActionT020000,
} from "./pages/console/action";
import { BaseT010000, BaseT011000 } from "./pages/console/base";
import { Dashboard } from "./pages/console/dashboard";
import {
	WidgetT010000,
	WidgetT011000,
	WidgetT012000,
	WidgetT020000,
} from "./pages/console/widget";

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
		Component: SignLayout,
		children: [
			{ path: "/sign/in", Component: SigninUsername },
			{ path: "/sign/in/otp", Component: SigninOTP },
			{ path: "/sign/forgot/username", Component: SignForgotUsername },
			{ path: "/sign/forgot/password", Component: SignForgotPassword },
		],
	},
	{
		layout: "console",
		Component: ConsoleLayout,
		children: [
			{
				path: "/console/dashboard",
				label: "Dashboard",
				Icon: LayoutDashboard,
				Component: Dashboard,
			},
			{
				label: "Base",
				Icon: Box,
				children: [
					{
						path: "/console/base/t010000",
						label: "Typography",
						Component: BaseT010000,
					},
					{
						path: "/console/base/t011000",
						label: "Color",
						Component: BaseT011000,
					},
				],
			},
			{
				label: "Action",
				Icon: Boxes,
				children: [
					{
						label: "Form",
						subgroup: true,
					},
					{
						path: "/console/action/t010000",
						label: "Input",
						actionable: true,
						Component: ActionT010000,
					},
					{
						path: "/console/action/t011000",
						label: "Checkbox",
						Component: ActionT011000,
					},
					{
						path: "/console/action/t012000",
						label: "Radio",
						Component: ActionT012000,
					},
					{
						path: "/console/action/t013000",
						label: "Select",
						Component: ActionT013000,
					},
					{
						label: "Control",
						subgroup: true,
					},
					{
						path: "/console/action/t020000",
						label: "Button",
						Component: ActionT020000,
					},
				],
			},
			{
				label: "Widget",
				Icon: Box,
				children: [
					{
						path: "/console/widget/t010000",
						label: "Toast",
						Component: WidgetT010000,
					},
					{
						path: "/console/widget/t011000",
						label: "Modal",
						Component: WidgetT011000,
					},
					{
						path: "/console/widget/t012000",
						label: "Drawer",
						Component: WidgetT012000,
					},
					{
						path: "/console/widget/t020000",
						label: "Table",
						Component: WidgetT020000,
					},
				],
			},
		],
	},
];
