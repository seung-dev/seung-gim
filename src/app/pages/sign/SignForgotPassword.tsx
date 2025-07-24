import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { User, X } from "lucide-react";

import { SButton, SButtonIcon, SDiv, SFieldInput, SLinkNavigate } from "@/app/seung/design";
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
			<SDiv
				styles={["w-full"]}
				component="form"
				onSubmit={handleSubmit(submit)}
			>
				<SFieldInput
					styles={["mb-8"]}
					control={control}
					rules={{ required: t("messages.sign.username"), maxLength: 20 }}
					name="username"
					rounded="lg"
					scale="md"
					prefix={<User />}
					suffix={
						<SButtonIcon
							LucideIcon={X}
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
