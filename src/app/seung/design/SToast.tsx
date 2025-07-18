import { forwardRef, useCallback } from "react";

import { X } from "lucide-react";
import { type CustomContentProps, SnackbarContent, useSnackbar } from "notistack";

import { Box, IconButton } from "@mui/material";

import { SDiv } from "./SDiv";
import { STypography } from "./STypography";

export const useSToastActions = () => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	return {
		toast_open: enqueueSnackbar,
		toast_close: closeSnackbar,
	};
};

export const SToast = forwardRef<HTMLDivElement, CustomContentProps>((args, ref) => {
	const { id, message } = args;

	const { toast_close } = useSToastActions();

	const close = useCallback(() => {
		toast_close(id);
	}, [id, toast_close]);

	return (
		<SnackbarContent
			className="justify-center"
			ref={ref}
		>
			<SDiv
				className="s-toast-root"
				styles={[
					"min-w-64",
					"max-w-[80dvw]",
					"md:max-w-[32dvw]",
					"p-4",
					"rounded-lg",
					"shadow-xl",
					"border-1",
					"border-gray-200",
					"bg-white",
					"flex",
					"flex-row",
					"items-center",
					"justify-between",
				]}
			>
				{typeof message === "string" ? (
					<STypography styles={["text-sm", "text-black"]}>{message}</STypography>
				) : (
					message
				)}
				<Box
					height="100%"
					display="flex"
					alignItems="flex-start"
				>
					<IconButton
						size="small"
						color="inherit"
						onClick={close}
						sx={{ mt: -0.5 }}
					>
						<X />
					</IconButton>
				</Box>
			</SDiv>
			{/* <Card
				sx={{
					width: "24rem",
					paddingTop: "0.5rem",
					paddingRight: "0.625rem",
					paddingBottom: "0.5rem",
					paddingLeft: "0.625rem",
					borderRadius: "0.5rem",
					"& .MuiCardActions-root": {
						justifyContent: "space-between",
					},
				}}
			>
				<CardActions></CardActions>
			</Card> */}
		</SnackbarContent>
	);
});

SToast.displayName = "SToast";
