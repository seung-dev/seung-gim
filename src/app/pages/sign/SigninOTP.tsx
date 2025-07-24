import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { KeyRound, Send } from "lucide-react";

import { SButton, SButtonIcon, SDiv, SFieldInput, SLinkNavigate } from "@/app/seung/design";
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
			<SDiv
				styles={["w-full"]}
				component="form"
				onSubmit={handleSubmit(submit)}
			>
				<SFieldInput
					styles={["mb-8"]}
					control={control}
					rules={{ required: t("messages.sign.otp"), maxLength: 20 }}
					name="otp"
					rounded="lg"
					scale="md"
					prefix={<KeyRound />}
					suffix={
						<SButtonIcon
							LucideIcon={Send}
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
					styles={["mb-12", "w-full"]}
					contained="blue"
					rounded="lg"
					scale="md"
					label={t("labels.buttons.ok")}
				/>
				<SDiv styles={["flex flex-col items-center gap-2"]}>
					<SLinkNavigate
						scale="sm"
						paint="gray400"
						underline="always"
						to="/sign/in"
					>
						{t("messages.sign.gotosign")}
					</SLinkNavigate>
				</SDiv>
			</SDiv>
		</SignMain>
	);
};
