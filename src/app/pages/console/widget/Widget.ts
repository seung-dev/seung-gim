import type { SPaginationProps, SResponseData } from "@/app/seung/stores";

export interface WidgetT020000Form extends SPaginationProps {
	row_text?: string;
}

export interface WidgetT020000Item {
	row_id: string;
	row_text: string;
	row_number: number;
	row_date: number;
	row_boolean: boolean;
}

export const useWidgetT020000 = () => {
	return {
		response_widget_t020000: {
			item_size: 20,
			items: [
				{
					row_id: "1",
					row_text: "John Doe",
					row_number: 1000000,
					row_date: 1742981440646,
					row_boolean: true,
				},
			],
		} as SResponseData<WidgetT020000Item>,
	};
};
