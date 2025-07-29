import type { ElementType } from "react";
import { useCallback, useState } from "react";

import { ChevronDown, ChevronRight, Folder, type LucideProps, Settings } from "lucide-react";

import type { SRouteProps } from "../router";
import { SButtonIcon } from "./SButtonIcon";
import { SDiv, type SDivProps } from "./SDiv";
import { SLucideIcon } from "./SLucideIcon";
import { STypography } from "./STypography";

const findParentPath = (
	items: SRouteProps[],
	targetLabel: string,
	currentPath: string[] = [],
): string[] | null => {
	for (const item of items) {
		const newPath = [...currentPath, item.label ?? ""];

		if (item.label === targetLabel) {
			return currentPath;
		}

		if (item.children) {
			const result = findParentPath(item.children, targetLabel, newPath);
			if (result) return result;
		}
	}
	return null;
};

const findItemsAtLevel = (
	items: SRouteProps[],
	targetLevel: number,
	currentLevel = 0,
): string[] => {
	const result: string[] = [];

	for (const item of items) {
		if (currentLevel === targetLevel) {
			result.push(item.label ?? "");
		} else if (item.children && currentLevel < targetLevel) {
			result.push(...findItemsAtLevel(item.children, targetLevel, currentLevel + 1));
		}
	}

	return result;
};

interface SSidebarItemProps {
	item: SRouteProps;
	level: number;
	collapsed?: boolean;
	expand?: (collapsed: boolean) => void;
	CollapsedIcon?: ElementType<LucideProps>;
	ExpandedIcon?: ElementType<LucideProps>;
	ActionIcon?: ElementType<LucideProps>;
	navigate?: (item: SRouteProps) => void;
	action?: (item: SRouteProps) => void;
	expandedItems: Set<string>;
	onToggleExpanded: (itemLabel: string, level: number) => void;
}

const SSidebarItem = (args: SSidebarItemProps) => {
	const {
		item,
		level,
		collapsed,
		expand,
		CollapsedIcon = ChevronRight,
		ExpandedIcon = ChevronDown,
		ActionIcon = Settings,
		navigate,
		action,
		expandedItems,
		onToggleExpanded,
	} = args;
	const { path, label, Icon, children, disabled, actionable, subgroup } = item;

	const single = !subgroup && (children ?? []).length === 0;
	const expandable = !collapsed && !single;
	const expanded = expandedItems.has(label ?? "");
	const isActionable = !collapsed && actionable;
	const indent = level === 1 ? "pl-9" : level === 2 ? "pl-16" : "pl-4";

	const Prefix =
		!collapsed && expandable && expanded
			? ExpandedIcon
			: !collapsed && expandable && !expanded
				? CollapsedIcon
				: collapsed
					? (Icon ?? Folder)
					: Icon;

	const handleClick = () => {
		if (collapsed) {
			if (expand) {
				expand(true);
			}
			if (!single) {
				onToggleExpanded(label ?? "", level);
			}
		} else {
			if (single && path) {
				navigate?.(item);
			} else if (!single) {
				onToggleExpanded(label ?? "", level);
			}
		}
	};

	const handleActionClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (path) {
			action?.(item);
		}
	};

	return (
		<div>
			{subgroup ? (
				<SDiv styles={["my-1", indent]}>
					<STypography
						styles={["pl-2", "s-color-gray"]}
						scale="sm"
						weight="bold"
					>
						{label}
					</STypography>
				</SDiv>
			) : (
				<SDiv
					styles={[
						"h-8 pr-4",
						indent,
						"flex flex-row items-center",
						"cursor-pointer hover:bg-gray-100 hover:text-blue-600",
						disabled && "opacity-50 cursor-not-allowed",
					]}
					onClick={handleClick}
				>
					<div className={level > 0 ? "pl-2" : ""}>
						{Prefix && (
							<SLucideIcon
								styles={["w-5 h-5 flex-shrink-0"]}
								Icon={Prefix}
							/>
						)}
					</div>
					{!collapsed && (
						<STypography
							styles={["pl-2 flex-1", "truncate"]}
							scale="md"
							weight="medium"
						>
							{label}
						</STypography>
					)}
					{isActionable && (
						<SButtonIcon
							styles={["w-4 h-4", "text-gray-600 hover:text-blue-600"]}
							Icon={ActionIcon}
							onClick={handleActionClick}
						/>
					)}
				</SDiv>
			)}
			{!collapsed && !single && expanded && (
				<div>
					{item.children?.map((child, index) => (
						<SSidebarItem
							key={`${child.label}-${index}`}
							item={child}
							level={level + 1}
							collapsed={collapsed}
							CollapsedIcon={CollapsedIcon}
							ExpandedIcon={ExpandedIcon}
							ActionIcon={ActionIcon}
							navigate={navigate}
							action={action}
							expandedItems={expandedItems}
							onToggleExpanded={onToggleExpanded}
						/>
					))}
				</div>
			)}
		</div>
	);
};

interface SSidebarProps extends SDivProps {
	items: SRouteProps[];
	collapsed?: boolean;
	expand?: (value: boolean) => void;
	CollapsedIcon?: ElementType<LucideProps>;
	ExpandedIcon?: ElementType<LucideProps>;
	ActionIcon?: ElementType<LucideProps>;
	navigate: (item: SRouteProps) => void;
	action?: (item: SRouteProps) => void;
}

export const SSidebar = (args: SSidebarProps) => {
	const {
		items,
		collapsed,
		expand,
		CollapsedIcon,
		ExpandedIcon,
		ActionIcon,
		navigate,
		action,
		styles,
		className,
	} = args;

	const [expandedItems, setExpandedItems] = useState<Set<string>>(() => {
		const initialSet = new Set<string>();
		if (items.length > 0 && items[0].children && items[0].children.length > 0) {
			initialSet.add(items[0].label ?? "");
		}
		return initialSet;
	});

	const onToggleExpanded = useCallback(
		(label: string, level: number) => {
			setExpandedItems((prev) => {
				const newSet = new Set(prev);

				const isCurrentlyExpanded = newSet.has(label);

				if (isCurrentlyExpanded) {
					newSet.delete(label);

					const removeChildren = (items: SRouteProps[]) => {
						for (const item of items) {
							if (newSet.has(item.label ?? "")) {
								newSet.delete(item.label ?? "");
								if (item.children) {
									removeChildren(item.children);
								}
							}
						}
					};

					const findAndRemoveChildren = (
						items: SRouteProps[],
						targetLabel: string,
					): boolean => {
						for (const item of items) {
							if (item.label === targetLabel) {
								if (item.children) {
									removeChildren(item.children);
								}
								return true;
							}
							if (item.children) {
								if (findAndRemoveChildren(item.children, targetLabel)) {
									return true;
								}
							}
						}
						return false;
					};

					findAndRemoveChildren(items, label);
				} else {
					const itemsAtSameLevel = findItemsAtLevel(items, level);
					itemsAtSameLevel.forEach((label) => {
						if (label !== label) {
							newSet.delete(label);
						}
					});

					newSet.add(label);

					const parentPath = findParentPath(items, label);
					if (parentPath) {
						parentPath.forEach((parentLabel) => {
							newSet.add(parentLabel);
						});
					}
				}

				return newSet;
			});
		},
		[items],
	);

	return (
		<SDiv
			styles={[
				"s-sidebar-root",
				"transition-all duration-200 ease-in-out",
				styles,
				className,
			]}
		>
			{items.map((item, index) => (
				<SSidebarItem
					key={`${item.label}-${index}`}
					item={item}
					level={0}
					collapsed={collapsed}
					expand={expand}
					CollapsedIcon={CollapsedIcon}
					ExpandedIcon={ExpandedIcon}
					ActionIcon={ActionIcon}
					navigate={navigate}
					action={action}
					expandedItems={expandedItems}
					onToggleExpanded={onToggleExpanded}
				/>
			))}
		</SDiv>
	);
};
