import { forwardRef, useCallback } from "react";

import { X } from "lucide-react";
import { type CustomContentProps, SnackbarContent, useSnackbar } from "notistack";

import { Box, IconButton } from "@mui/material";

import { SDiv } from "./SDiv";
import { STypography } from "./STypography";

export const useSToastActions = () => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	return {
		toastOpen: enqueueSnackbar,
		toastClose: closeSnackbar,
	};
};

export const SToast = forwardRef<HTMLDivElement, CustomContentProps>((args, ref) => {
	const { id, message } = args;

	const { toastClose } = useSToastActions();

	const close = useCallback(() => {
		toastClose(id);
	}, [id, toastClose]);

	return (
		<SnackbarContent
			className="justify-center"
			ref={ref}
		>
			<SDiv
				className="s-toast-root"
				styles={[
					"min-w-64 max-w-[80dvw] md:max-w-[32dvw]",
					"p-4 flex flex-row items-center justify-between",
					"outline-1 outline-[var(--s-color-outline)] rounded-lg shadow-xl",
					"bg-white",
				]}
			>
				{typeof message === "string" ? (
					<STypography
						styles={["s-color-black"]}
						scale="sm"
					>
						{message}
					</STypography>
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
		</SnackbarContent>
	);
});

SToast.displayName = "SToast";
