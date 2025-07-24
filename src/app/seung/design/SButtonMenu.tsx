import { type ReactNode, useState } from "react";

import { Button } from "@mui/material";

import { SDiv } from "./SDiv";
import { SDivider } from "./SDivider";
import { SMenu, SMenuItem, type SMenuProps } from "./SMenu";
import { STypography } from "./STypography";

interface SButtonMenuProps extends Pick<SMenuProps, "anchorOrigin" | "transformOrigin"> {
	Label: ReactNode;
	items: {
		label?: string;
		Prefix?: ReactNode;
		// Prefix?: ReactNode | ElementType<LucideProps>;
		divider?: boolean;
		action?: () => void;
	}[];
}

export const SButtonMenu = (args: SButtonMenuProps) => {
	const {
		Label,
		items,
		anchorOrigin = { horizontal: "center", vertical: "bottom" },
		transformOrigin = { horizontal: "center", vertical: "top" },
	} = args;

	const [avatar_anchor, set_avatar_anchor] = useState<null | HTMLElement>(null);
	const open = Boolean(avatar_anchor);

	const avatar_open = (e: React.MouseEvent<HTMLButtonElement>) => {
		set_avatar_anchor(e.currentTarget);
	};
	const avatar_close = () => {
		set_avatar_anchor(null);
	};

	return (
		<SDiv>
			<Button onClick={avatar_open}>{Label}</Button>
			<SMenu
				classes={{ paper: "mt-2 py-2" }}
				// slotProps={{
				// 	paper: {
				// 		elevation: 0,
				// 		sx: {
				// 			overflow: "visible",
				// 			filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
				// 			// mt: 1.2,
				// 			"&:before": {
				// 				content: '""',
				// 				display: "block",
				// 				position: "absolute",
				// 				top: 0,
				// 				right: 14,
				// 				width: 10,
				// 				height: 10,
				// 				bgcolor: "background.paper",
				// 				transform: "translateY(-50%) rotate(45deg)",
				// 				zIndex: 0,
				// 			},
				// 		},
				// 	},
				// }}
				anchorEl={avatar_anchor}
				anchorOrigin={anchorOrigin}
				transformOrigin={transformOrigin}
				open={open}
				onClose={avatar_close}
				onClick={avatar_close}
			>
				{items.map(({ label, action, divider, Prefix }, i) =>
					divider ? (
						<SDivider
							key={`s-button-menu-${i}`}
							styles={["my-1"]}
						/>
					) : (
						<SMenuItem
							key={`s-button-menu-${i}`}
							styles={["py-1 px-4"]}
							onClick={action}
						>
							<SDiv styles={["flex flex-row items-center gap-4"]}>
								{Prefix}
								<STypography scale="md">{label}</STypography>
							</SDiv>
						</SMenuItem>
					),
				)}
			</SMenu>
		</SDiv>
	);
};
