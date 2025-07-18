export const clipboard = async (value: string, callback?: () => void) => {
	await window.navigator.clipboard.writeText(value).then(() => {
		callback?.();
	});
};
