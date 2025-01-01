module.exports = {
	printWidth: 128, // 80(default)
	tabWidth: 4, // 2(default)
	useTabs: true, // false(default)
	semi: true, // true(default)
	singleQuote: false, // false(default)
	trailingComma: "all", // es5(default), none, all
	bracketSpacing: true, // true(default)
	bracketSameLine: false, // false(default)
	arrowParens: "always", // always(default), avoid
	proseWrap: "preserve", // preserve(default), always, never
	endOfLine: "lf", // lf(default), crlf, cr, auto
	singleAttributePerLine: true, // false(default)
	plugins: ["@trivago/prettier-plugin-sort-imports"],
	importOrder: [
		"^[./].*\\.(svg|png|jpeg|jpg|gif|webp)$",
		"^[./].*\\.(c|le|sc)ss$",
		"^vite",
		"^vite(.*)$",
		"^@vite(.*)$",
		"^path",
		"^react$",
		"^react-dom$",
		"^react-router-dom$",
		"^react(.*)$",
		"<BUILTIN_MODULES>",
		"<THIRD_PARTY_MODULES>",
		"^@refinedev(.*)$",
		"^@mui(.*)$",
		"^@/(!app)(.*)$",
		"^@/app(.*)$",
		"^[./]",
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
};
