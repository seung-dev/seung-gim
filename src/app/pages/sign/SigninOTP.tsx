import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { KeyRound, Send } from "lucide-react";

import { SButton, SButtonIcon, SDiv, SFieldInput, SLinkNavigate } from "@/app/seung/dom";
import { type SigninOTPForm, useSigninOTP } from "@/app/stores";

import { SignMain } from "./SignMain";

export const SigninOTP = () => {
	const { t } = useTranslation();

	const { control, handleSubmit, reset } = useForm<SigninOTPForm>({
		defaultValues: {
			token: "",
			otp: "",
		},
	});

	const { request_signin_otp } = useSigninOTP();

	const submit = async (values: SigninOTPForm) => {
		await request_signin_otp(values);
	};

	return (
		<SignMain
			title="ESG Data System"
			subtitle={t("messages.sign.signin2fa")}
		>
			<SDiv styles={["w-full"]}>
				<form onSubmit={handleSubmit(submit)}>
					<SFieldInput
						styles={["mb-8"]}
						control={control}
						rules={{ required: t("messages.sign.otp"), maxLength: 20 }}
						name="otp"
						scale="md"
						prefix={<KeyRound />}
						suffix={
							<SButtonIcon
								Icon={Send}
								onClick={() => {
									reset();
								}}
							/>
						}
						placeholder={t("messages.sign.otp")}
						description
					/>
					<SButton
						type="submit"
						styles={[
							"mb-12",
							"w-full",
							"bg-blue-600 hover:bg-blue-700 s-color-white",
						]}
						scale="md"
						label={t("labels.buttons.ok")}
					/>
					<SDiv styles={["flex flex-col items-center gap-2"]}>
						<SLinkNavigate
							styles={["s-color-gray"]}
							scale="sm"
							underline="always"
							to="/sign/in"
						>
							{t("messages.sign.gotosign")}
						</SLinkNavigate>
					</SDiv>
				</form>
			</SDiv>
		</SignMain>
	);
};
