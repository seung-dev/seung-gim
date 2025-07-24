import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Mail, User, X } from "lucide-react";

import { SButton, SButtonIcon, SDiv, SFieldInput, SLinkNavigate } from "@/app/seung/design";
import { type SignForgotUsernameForm, useSignForgotUsername } from "@/app/stores";

import { SignMain } from "./SignMain";

export const SignForgotUsername = () => {
	const { t } = useTranslation();

	const { control, handleSubmit, reset } = useForm<SignForgotUsernameForm>({
		defaultValues: {
			email: "",
			fullname: "",
		},
	});

	const { request_sign_forgot_username } = useSignForgotUsername();

	const submit = async (values: SignForgotUsernameForm) => {
		await request_sign_forgot_username(values);
	};

	return (
		<SignMain
			title="ESG Data System"
			subtitle={t("messages.sign.forgotusername")}
		>
			<SDiv
				styles={["w-full"]}
				component="form"
				onSubmit={handleSubmit(submit)}
			>
				<SFieldInput
					styles={["mb-4"]}
					control={control}
					rules={{ required: t("messages.sign.email"), maxLength: 20 }}
					name="email"
					rounded="lg"
					scale="md"
					prefix={<Mail />}
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
				<SFieldInput
					styles={["mb-8"]}
					control={control}
					rules={{ required: t("messages.sign.fullname"), maxLength: 20 }}
					name="fullname"
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
					placeholder={t("messages.sign.fullname")}
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
