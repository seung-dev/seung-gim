import type { ComponentType, ElementType } from "react";

import { type RouteObject, useRoutes } from "react-router";

import type { LucideProps } from "lucide-react";

export interface SRouteProps<T = string> {
	layout?: T;
	path?: string;
	label?: string;
	Icon?: ElementType<LucideProps>;
	Component?: ComponentType;
	roles?: string[];
	visible?: boolean;
	disabled?: boolean;
	actionable?: boolean;
	subgroup?: boolean;
	children?: SRouteProps<T>[];
}

export const toRouteProps = (routes: SRouteProps[]): RouteObject[] => {
	return routes.map(({ path, Component, children = [] }) => ({
		path,
		Component,
		children: children.length > 0 ? toRouteProps(children) : undefined,
	}));
};

interface SReactRouteProps {
	routes: SRouteProps[];
}

export const SReactRoute = ({ routes }: SReactRouteProps) => {
	return useRoutes(toRouteProps(routes));
};
