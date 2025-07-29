import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { LockKeyhole, User, X } from "lucide-react";

import {
	SButton,
	SButtonIcon,
	SCheckbox,
	SDiv,
	SFieldInput,
	SLinkNavigate,
} from "@/app/seung/dom";
import { type SigninUsernameForm, useSigninUsername } from "@/app/stores";

import { SignMain } from "./SignMain";

export const SigninUsername = () => {
	const { t } = useTranslation();

	const { control, handleSubmit, reset } = useForm<SigninUsernameForm>({
		defaultValues: {
			username: "",
			password: "",
		},
	});

	const { request_signin_username } = useSigninUsername();

	const submit = async (values: SigninUsernameForm) => {
		await request_signin_username(values);
	};

	return (
		<SignMain
			title="ESG Data System"
			subtitle={t("messages.sign.signin")}
		>
			<SDiv styles={["w-full"]}>
				<form onSubmit={handleSubmit(submit)}>
					<SFieldInput
						control={control}
						rules={{ required: t("messages.sign.username"), maxLength: 20 }}
						name="username"
						scale="md"
						// label="아이디"
						prefix={<User />}
						suffix={
							<SButtonIcon
								Icon={X}
								onClick={() => {
									reset();
								}}
							/>
						}
						placeholder={t("messages.sign.username")}
						description
					/>
					<SFieldInput
						styles={["mb-6"]}
						control={control}
						rules={{ required: t("messages.sign.password"), maxLength: 20 }}
						name="password"
						scale="md"
						prefix={<LockKeyhole />}
						placeholder={t("messages.sign.password")}
						description
						password
					/>
					<SCheckbox
						styles={["mb-4"]}
						scale="sm"
						options={[
							{
								label: t("messages.sign.rememberme"),
								value: "rememberme",
							},
						]}
					/>
					<SButton
						type="submit"
						styles={[
							"mb-12",
							"w-full",
							"bg-blue-600 hover:bg-blue-700 s-color-white",
						]}
						scale="md"
						label={t("labels.buttons.signin")}
					/>
					<SDiv styles={["flex flex-col items-center gap-2"]}>
						<SLinkNavigate
							styles={["s-color-gray"]}
							scale="sm"
							underline="always"
							to="/sign/forgot/username"
						>
							{t("messages.sign.forgotusername")}
						</SLinkNavigate>
						<SLinkNavigate
							styles={["s-color-gray"]}
							scale="sm"
							underline="always"
							to="/sign/forgot/password"
						>
							{t("messages.sign.forgotpassword")}
						</SLinkNavigate>
					</SDiv>
				</form>
			</SDiv>
		</SignMain>
	);
};
