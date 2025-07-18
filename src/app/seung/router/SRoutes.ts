import type { ComponentType } from "react";

import { type RouteObject, useRoutes } from "react-router";

export interface SRouteProps<T = string> {
	layout?: T;
	path?: string;
	label?: string;
	Component?: ComponentType;
	children?: SRouteProps<T>[];
	roles?: string[];
	visible?: boolean;
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
