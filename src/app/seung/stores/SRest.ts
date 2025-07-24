import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router";

export const useSGetItems = <T extends FieldValues>(args: {
	payload?: T;
	onSuccessTo: string;
}) => {
	const { payload, onSuccessTo } = args;

	const navigate = useNavigate();

	const request = async (values?: T) => {
		await navigate(onSuccessTo, { state: values ?? payload });
	};

	return { request };
};

export const useSPostItems = <T extends FieldValues>(args: {
	payload?: T;
	onSuccessTo: string;
}) => {
	const { payload, onSuccessTo } = args;

	const navigate = useNavigate();

	const request = async (values?: T) => {
		await navigate(onSuccessTo, { state: values ?? payload });
	};

	return { request };
};

export const useSPostMutation = <T extends FieldValues>(args: {
	payload?: T;
	onSuccessTo: string;
}) => {
	const { payload, onSuccessTo } = args;

	const navigate = useNavigate();

	const request = async (values?: T) => {
		await navigate(onSuccessTo, { state: values ?? payload });
	};

	return { request };
};
