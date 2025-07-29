import { type MouseEvent, type ReactNode, useState } from "react";

import { SButton } from "./SButton";
import { SDiv } from "./SDiv";
import { SDivider } from "./SDivider";
import { SMenu, SMenuItem, type SMenuProps } from "./SMenu";
import { STypography } from "./STypography";

interface SButtonMenuProps extends Pick<SMenuProps, "anchorOrigin" | "transformOrigin"> {
	label: ReactNode;
	items: {
		label?: string;
		prefix?: ReactNode;
		divider?: boolean;
		action?: () => void;
	}[];
}

export const SButtonMenu = (args: SButtonMenuProps) => {
	const {
		label,
		items,
		anchorOrigin = { horizontal: "center", vertical: "bottom" },
		transformOrigin = { horizontal: "center", vertical: "top" },
	} = args;

	const [avatar_anchor, set_avatar_anchor] = useState<null | HTMLElement>(null);
	const open = Boolean(avatar_anchor);

	const avatar_open = (e: MouseEvent<HTMLButtonElement>) => {
		set_avatar_anchor(e.currentTarget);
	};
	const avatar_close = () => {
		set_avatar_anchor(null);
	};

	return (
		<div>
			<SButton
				onClick={avatar_open}
				label={label}
			/>
			<SMenu
				classes={{ paper: "mt-2 py-2" }}
				anchorEl={avatar_anchor}
				anchorOrigin={anchorOrigin}
				transformOrigin={transformOrigin}
				open={open}
				onClose={avatar_close}
				onClick={avatar_close}
			>
				{items.map(({ label, action, divider, prefix }, i) =>
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
								{prefix}
								<STypography scale="md">{label}</STypography>
							</SDiv>
						</SMenuItem>
					),
				)}
			</SMenu>
		</div>
	);
};
