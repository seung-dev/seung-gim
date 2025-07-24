import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";

import { type SClassProps, SDiv } from "@/app/seung/design";

interface ConsoleSidebarTreeProps {
	styles?: SClassProps[];
}

export const ConsoleSidebarTree = (args: ConsoleSidebarTreeProps) => {
	const { styles = [] } = args;

	return (
		<SDiv
			styles={[
				"console-sidebar-tree-root",
				"flex flex-col gap-2",
				"border-r border-gray-200",
				...styles,
			]}
		>
			<SimpleTreeView>
				<TreeItem
					itemId="1"
					label="Applications"
				>
					<TreeItem
						itemId="1-1"
						label="Calendar"
					>
						<TreeItem
							itemId="1-1-1"
							label="Calendar111"
						/>
						<TreeItem
							itemId="1-1-2"
							label="Calendar112"
						/>
					</TreeItem>
					<TreeItem
						itemId="1-2"
						label="Chrome"
					/>
					<TreeItem
						itemId="1-3"
						label="Webstorm"
					/>
				</TreeItem>
				<TreeItem
					itemId="2"
					label="Applications2"
				>
					<TreeItem
						itemId="2-1"
						label="Calendar2"
					>
						<TreeItem
							itemId="2-1-1"
							label="Calendar211"
						/>
						<TreeItem
							itemId="2-1-2"
							label="Calendar212"
						/>
					</TreeItem>
					<TreeItem
						itemId="2-2"
						label="Chrome2"
					/>
					<TreeItem
						itemId="2-3"
						label="Webstorm2"
					/>
				</TreeItem>
			</SimpleTreeView>
		</SDiv>
	);
};

export const ConsoleSidebarTreeItem = () => {
	return <div></div>;
};
