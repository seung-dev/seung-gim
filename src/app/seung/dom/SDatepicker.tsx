import { DatePicker, type DatePickerProps } from "@mui/x-date-pickers";

import { buildStyles, type SScaleProps, type SStyleProps } from "./STheme";

export interface SDatepickerProps extends DatePickerProps {
	styles?: SStyleProps;
	scale?: SScaleProps;
	cell?: boolean;
}

export const SDatepicker = (args: SDatepickerProps) => {
	const {
		styles,
		scale,
		cell,
		className,
		views = ["year", "month", "day"],
		format = "YYYY-MM-DD",
		openTo = "day",
		...misc
	} = args;

	return (
		<DatePicker
			className={buildStyles(
				"s-datepicker-root",
				scale && `s-datepicker-${scale}`,
				!cell && "outline-1 s-color-outline",
				cell && "w-full h-full outline-none",
				className,
				styles,
			)}
			slotProps={{
				popper: {
					disablePortal: true,
				},
				layout: {
					classes: {
						contentWrapper: "h-80",
					},
				},
				calendarHeader: {
					classes: {
						root: "pt-8 px-6 mb-6 justify-between",
						switchViewIcon: "text-xl",
					},
				},
				leftArrowIcon: {
					className: "text-2xl",
				},
				rightArrowIcon: {
					className: "text-2xl",
				},
			}}
			displayWeekNumber
			views={views}
			format={format}
			openTo={openTo}
			{...misc}
		/>
	);
};
