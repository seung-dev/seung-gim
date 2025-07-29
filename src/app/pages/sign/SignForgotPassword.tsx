import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Mail, X } from "lucide-react";

import { SButton, SButtonIcon, SDiv, SFieldInput, SLinkNavigate } from "@/app/seung/dom";
import { type SignForgotPasswordForm, useSignForgotPassword } from "@/app/stores";

import { SignMain } from "./SignMain";

export const SignForgotPassword = () => {
	const { t } = useTranslation();

	const { control, handleSubmit, reset } = useForm<SignForgotPasswordForm>({
		defaultValues: {
			username: "",
		},
	});

	const { request_sign_forgot_password } = useSignForgotPassword();

	const submit = async (values: SignForgotPasswordForm) => {
		await request_sign_forgot_password(values);
	};

	return (
		<SignMain
			title="ESG Data System"
			subtitle={t("messages.sign.forgotpassword")}
		>
			<SDiv styles={["w-full"]}>
				<form onSubmit={handleSubmit(submit)}>
					<SFieldInput
						styles={["mb-8"]}
						control={control}
						rules={{ required: t("messages.sign.username"), maxLength: 20 }}
						name="username"
						scale="md"
						prefix={<Mail />}
						suffix={
							<SButtonIcon
								Icon={X}
								onClick={() => {
									reset();
								}}
							/>
						}
						placeholder={t("messages.sign.email")}
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
