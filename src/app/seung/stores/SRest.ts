import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router";

export interface SPaginationProps {
	page_no: number;
	page_size: number;
	sorts: {
		name: string;
		direction: string;
	}[];
}

export interface SpringResponse {
	timestamp?: number;
	status?: number;
	error?: string;
	message?: string;
}

export interface SResponseData<T = unknown> {
	item_size?: number;
	items?: T[];
}

export interface SResponse<T = unknown> extends SpringResponse {
	error_code?: string;
	error_message?: string;
	trace_id?: string;
	request_time?: number;
	response_time?: number;
	elapsed_time?: number;
	data?: T;
}

export const useSGetItems = <T extends FieldValues>(args: {
	payload?: T;
	onSuccessTo?: string;
}) => {
	const { payload, onSuccessTo } = args;

	const navigate = useNavigate();

	const request = async (values?: T) => {
		if (onSuccessTo) {
			await navigate(onSuccessTo, { state: values ?? payload });
		}
	};

	return { request };
};

export const useSPostItems = <T extends FieldValues>(args: {
	payload?: T;
	onSuccessTo?: string;
}) => {
	const { payload, onSuccessTo } = args;

	const navigate = useNavigate();

	const request = async (values?: T) => {
		if (onSuccessTo) {
			await navigate(onSuccessTo, { state: values ?? payload });
		}
	};

	return { request };
};

export const useSPostMutation = <T extends FieldValues>(args: {
	payload?: T;
	onSuccessTo?: string;
}) => {
	const { payload, onSuccessTo } = args;

	const navigate = useNavigate();

	const request = async (values?: T) => {
		if (onSuccessTo) {
			await navigate(onSuccessTo, { state: values ?? payload });
		}
	};

	return { request };
};
