import { HomeError, HomeLayout, HomeT010000 } from "@/app/pages/home";
import {
	SignForgotPassword,
	SignForgotUsername,
	SigninOTP,
	SigninUsername,
	SignLayout,
} from "@/app/pages/sign";
import type { SRouteProps } from "@/app/seung/router";

import { ConsoleLayout, Dashboard } from "./pages/console";

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
			{ path: "/console/dashboard", Component: Dashboard, label: "Dashboard" },
			{
				Component: Dashboard,
				label: "기초데이터관리",
				children: [
					{
						label: "환경",
					},
					{
						path: "/console/resources/t010000",
						Component: Dashboard,
						label: "폐기물처리",
					},
					{
						path: "/console/resources/t011000",
						Component: Dashboard,
						label: "에너지",
					},
					{
						path: "/console/resources/t012000",
						Component: Dashboard,
						label: "용수",
					},
					{
						path: "/console/resources/t013000",
						Component: Dashboard,
						label: "폐수",
					},
					{
						path: "/console/resources/t014000",
						Component: Dashboard,
						label: "대기",
					},
					{
						path: "/console/resources/t014000",
						Component: Dashboard,
						label: "수질",
					},
					{
						label: "사회",
					},
					{
						path: "/console/resources/t020000",
						Component: Dashboard,
						label: "인사",
					},
					{
						path: "/console/resources/t021000",
						Component: Dashboard,
						label: "안전",
					},
					{
						label: "지배구조",
					},
					{
						path: "/console/resources/t030000",
						Component: Dashboard,
						label: "재무상태표",
					},
					{
						path: "/console/resources/t031000",
						Component: Dashboard,
						label: "손익계산서",
					},
				],
			},
			{
				Component: Dashboard,
				label: "ESG지표관리",
				children: [
					{
						path: "/console/indicators/t010000",
						Component: Dashboard,
						label: "지표설정",
					},
					{
						path: "/console/indicators/t011000",
						Component: Dashboard,
						label: "지표입력",
					},
					{
						path: "/console/indicators/t012000",
						Component: Dashboard,
						label: "지표조회",
					},
				],
			},
			{
				Component: Dashboard,
				label: "공급망관리",
				children: [
					{
						path: "/console/chains/t010000",
						Component: Dashboard,
						label: "원료",
					},
					{
						path: "/console/chains/t011000",
						Component: Dashboard,
						label: "자재",
					},
					{
						path: "/console/scchains/t012000",
						Component: Dashboard,
						label: "매입",
					},
				],
			},
			{
				Component: Dashboard,
				label: "게시판관리",
				children: [
					{
						path: "/console/boards/t010000",
						Component: Dashboard,
						label: "공지사항",
					},
				],
			},
			{
				Component: Dashboard,
				label: "환경설정",
				children: [
					{
						path: "/console/settings/t010000",
						Component: Dashboard,
						label: "기본설정",
					},
					{
						path: "/console/settings/t011000",
						Component: Dashboard,
						label: "코드관리",
					},
					{
						path: "/console/settings/t012000",
						Component: Dashboard,
						label: "사업장관리",
					},
					{
						path: "/console/settings/t013000",
						Component: Dashboard,
						label: "관리자관리",
					},
					{
						path: "/console/settings/t014000",
						Component: Dashboard,
						label: "사용자관리",
					},
					{
						path: "/console/settings/t015000",
						Component: Dashboard,
						label: "권한그룹관리",
					},
					{
						path: "/console/settings/t016000",
						Component: Dashboard,
						label: "로그관리",
					},
				],
			},
		],
	},
];
