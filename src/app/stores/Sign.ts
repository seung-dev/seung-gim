import { useSPostMutation } from "@/app/seung/stores";

export interface SignForgotUsernameForm {
	email: string;
	fullname: string;
}

export const useSignForgotUsername = () => {
	const { request } = useSPostMutation<SignForgotUsernameForm>({
		onSuccessTo: "/sign/in",
	});
	return { request_sign_forgot_username: request };
};

export interface SignForgotPasswordForm {
	username: string;
}

export const useSignForgotPassword = () => {
	const { request } = useSPostMutation<SignForgotPasswordForm>({
		onSuccessTo: "/sign/in",
	});
	return { request_sign_forgot_password: request };
};

export interface SigninUsernameForm {
	username: string;
	password: string;
}

export const useSigninUsername = () => {
	const { request } = useSPostMutation<SigninUsernameForm>({
		onSuccessTo: "/sign/in/otp",
	});
	return { request_signin_username: request };
};

export interface SigninOTPForm {
	token: string;
	otp: string;
}

export const useSigninOTP = () => {
	const { request } = useSPostMutation<SigninOTPForm>({
		onSuccessTo: "/console/dashboard",
	});
	return { request_signin_otp: request };
};

export const useSignout = () => {
	const { request } = useSPostMutation({
		onSuccessTo: "/sign/in",
	});
	return { request_signout: request };
};
