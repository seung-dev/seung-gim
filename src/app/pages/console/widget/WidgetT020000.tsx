import { useForm } from "react-hook-form";

import type { GridColDef } from "@mui/x-data-grid";

import {
	SCodeBlock,
	STable,
	STableCell,
	useSTableCell,
	useSTableCellBoolean,
	useSTableCellDate,
	useSTableCellNumber,
	useSTableCellText,
} from "@/app/seung/dom";

import { ConsoleMain } from "../ConsoleMain";
import { useWidgetT020000, type WidgetT020000Form, type WidgetT020000Item } from "./Widget";

const codeColumns = `
const columns: GridColDef<Item>[] = [
	{
		...useSTableCell(),
		field: "row_id",
		headerName: "ID",
		width: 100,
		align: "center",
	},
	{
		...useSTableCellText(),
		field: "row_text",
		headerName: "Text",
	},
	{
		...useSTableCellNumber(),
		field: "row_number",
		headerName: "Number",
	},
	{
		...useSTableCellDate(),
		field: "row_date",
		headerName: "Date",
	},
	{
		...useSTableCellBoolean(),
		field: "row_boolean",
		headerName: "Boolean",
	},
];
`;

const codeTable = `
const columns: GridColDef<Item>[] = [
	{
		...useSTableCell(),
		field: "row_id",
		headerName: "ID",
		width: 100,
		align: "center",
	},
	{
		...useSTableCell(),
		field: "my_test",
		headerName: "renderCell",
		width: 100,
		align: "center",
		renderCell: (data) => {
			return <STableCell styles={["bg-red-500"]}>{data.row.row_text}</STableCell>;
		},
	},
	{
		...useSTableCellText(),
		field: "row_text",
		headerName: "Text",
	},
	{
		...useSTableCellNumber(),
		field: "row_number",
		headerName: "Number",
	},
	{
		...useSTableCellDate(),
		field: "row_date",
		headerName: "Date",
	},
	{
		...useSTableCellBoolean(),
		field: "row_boolean",
		headerName: "Boolean",
	},
];

<STable
	columns={columns}
	getRowId={(row) => row.row_id}
	pageSize={10}
	pageNo={1}
	onPaginationModelChange={(model) => {
		const page_size = model.pageSize;
		if (page_size === getValues("page_size")) {
			setValue("page_no", model.page);
		} else {
			setValue("page_no", 0);
			setValue("page_size", model.pageSize);
		}
		// submit();
	}}
	onSortModelChange={(model) => {
		setValue(
			"sorts",
			model
				.filter(({ sort }) => !!sort)
				.map(({ field, sort }) => ({
					field: field,
					order: sort?.toUpperCase() ?? "",
				})),
		);
		// submit();
	}}
	rowCount={response?.item_size ?? 0}
	rows={response?.items ?? []}
/>
`;

export const WidgetT020000 = () => {
	const defaultValues: WidgetT020000Form = {
		page_no: 0,
		page_size: 100,
		sorts: [{ name: "updated_at", direction: "DESC" }],
	};
	const { setValue, getValues } = useForm<WidgetT020000Form>({
		defaultValues,
	});

	const { response_widget_t020000 } = useWidgetT020000();

	const columns: GridColDef<WidgetT020000Item>[] = [
		{
			...useSTableCell(),
			field: "row_id",
			headerName: "ID",
			width: 100,
			align: "center",
		},
		{
			...useSTableCell(),
			field: "my_test",
			headerName: "renderCell",
			width: 100,
			align: "center",
			renderCell: (data) => {
				return <STableCell styles={["bg-red-500"]}>{data.row.row_text}</STableCell>;
			},
		},
		{
			...useSTableCellText(),
			field: "row_text",
			headerName: "Text",
		},
		{
			...useSTableCellNumber(),
			field: "row_number",
			headerName: "Number",
		},
		{
			...useSTableCellDate(),
			field: "row_date",
			headerName: "Date",
		},
		{
			...useSTableCellBoolean(),
			field: "row_boolean",
			headerName: "Boolean",
		},
	];

	return (
		<ConsoleMain
			breadcumbs
			title="Table"
		>
			<SCodeBlock
				styles={["mb-4"]}
				dark
				code={codeColumns}
			/>
			<SCodeBlock
				styles={["mb-4"]}
				dark
				code={codeTable}
			/>
			<STable
				columns={columns}
				getRowId={(row: WidgetT020000Item) => row.row_id}
				pageSize={10}
				pageNo={1}
				onPaginationModelChange={(model) => {
					const page_size = model.pageSize;
					if (page_size === getValues("page_size")) {
						setValue("page_no", model.page);
					} else {
						setValue("page_no", 0);
						setValue("page_size", model.pageSize);
					}
					// submit();
				}}
				onSortModelChange={(model) => {
					setValue(
						"sorts",
						model
							.filter(({ sort }) => !!sort)
							.map(({ field, sort }) => ({
								name: field,
								direction: sort?.toUpperCase() ?? "",
							})),
					);
					// submit();
				}}
				rowCount={response_widget_t020000.item_size ?? 0}
				rows={response_widget_t020000.items ?? []}
			/>
		</ConsoleMain>
	);
};
