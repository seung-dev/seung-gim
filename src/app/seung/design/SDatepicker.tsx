import { DatePicker, type DatePickerProps } from "@mui/x-date-pickers";

import { build_class, type SClassProps, type SScaleProps } from "./SStyles";

export interface SDatepickerProps extends DatePickerProps {
	styles?: SClassProps[];
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
			className={build_class(
				"s-datepicker-root",
				!cell && "border-1 border-gray-400",
				scale && `s-datepicker-${scale}`,
				cell && "w-full h-full border-none",
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
