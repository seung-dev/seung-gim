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
				Component: Dashboard,
				label: "Dashboard",
				Icon: LayoutDashboard,
			},
			{
				label: "Base",
				Icon: Box,
				children: [
					{
						path: "/console/base/t010000",
						Component: BaseT010000,
						label: "Typography",
					},
					{
						path: "/console/base/t011000",
						Component: BaseT011000,
						label: "Color",
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
						Component: ActionT010000,
						label: "Input",
						actionable: true,
					},
					{
						path: "/console/action/t011000",
						Component: ActionT011000,
						label: "Checkbox",
					},
					{
						path: "/console/action/t012000",
						Component: ActionT012000,
						label: "Radio",
					},
					{
						path: "/console/action/t013000",
						Component: ActionT013000,
						label: "Select",
					},
					{
						label: "Control",
						subgroup: true,
					},
					{
						path: "/console/action/t020000",
						Component: ActionT020000,
						label: "Button",
					},
				],
			},
			{
				label: "Widget",
				Icon: Box,
				children: [
					{
						path: "/console/widget/t010000",
						Component: WidgetT010000,
						label: "Toast",
					},
					{
						path: "/console/widget/t011000",
						Component: WidgetT011000,
						label: "Modal",
					},
					{
						path: "/console/widget/t012000",
						Component: WidgetT012000,
						label: "Drawer",
					},
					{
						path: "/console/widget/t020000",
						Component: WidgetT020000,
						label: "Table",
					},
				],
			},
		],
	},
];
