import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Mail, User, X } from "lucide-react";

import { SButton, SButtonIcon, SDiv, SFieldInput, SLinkNavigate } from "@/app/seung/dom";
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
			<SDiv styles={["w-full"]}>
				<form onSubmit={handleSubmit(submit)}>
					<SFieldInput
						styles={["mb-4"]}
						control={control}
						rules={{ required: t("messages.sign.email"), maxLength: 20 }}
						name="email"
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
					<SFieldInput
						styles={["mb-8"]}
						control={control}
						rules={{ required: t("messages.sign.fullname"), maxLength: 20 }}
						name="fullname"
						scale="md"
						prefix={<User />}
						suffix={
							<SButtonIcon
								Icon={X}
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
