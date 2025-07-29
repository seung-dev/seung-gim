// const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
// 	width: "100%",
// 	minHeight: "25rem",
// 	"--DataGrid-overlayHeight": "4rem",
// 	"--DataGrid-containerBackground": theme.palette.mode === "dark" ? "#061e07" : "#eaf2ea",
// 	"& .MuiDataGrid-columnHeaders": {
// 		"& .MuiDataGrid-columnHeaderTitle": {
// 			fontSize: "var(--s3-font-size)",
// 			fontWeight: 700,
// 		},
// 	},
// }));
import { type PropsWithChildren, useEffect } from "react";

import { Check, ExternalLink, X } from "lucide-react";

import {
	DataGrid,
	type DataGridProps,
	type GridColDef,
	type GridRenderCellParams,
	useGridApiRef,
} from "@mui/x-data-grid";

import { date_format, format_comma, is_number, unescape_text } from "../core";
import { SLink } from "./SLink";
import { SLucideIcon } from "./SLucideIcon";
import { buildStyles, type SStyleProps } from "./STheme";
import { STypography } from "./STypography";

interface STableProps extends Omit<DataGridProps, "apiRef" | "slotProps" | "initialState"> {
	styles?: SStyleProps;
	pageSize: number;
	pageNo: number;
}
export const STable = (args: STableProps) => {
	const {
		styles,
		pageSize,
		pageNo,
		className,
		columnHeaderHeight = 40,
		rowHeight = 40,
		showColumnVerticalBorder = true,
		showCellVerticalBorder = true,
		disableRowSelectionOnClick = true,
		disableColumnFilter = true,
		columnGroupingModel,
		paginationMode = "server",
		pageSizeOptions = [10, 20, 100],
		sortingMode = "server",
		...misc
	} = args;

	const apiRef = useGridApiRef();

	useEffect(() => {
		apiRef.current?.setPageSize(pageSize);
		apiRef.current?.setPage(pageNo);
	}, [pageSize, pageNo, apiRef]);

	return (
		<DataGrid
			className={buildStyles(
				"s-table-root",
				"min-h-[24rem]",
				"rounded-none border border-[var(--s-color-outline)]",
				styles,
				className,
			)}
			sx={{
				"& .MuiDataGrid-virtualScroller": {
					maxHeight: columnHeaderHeight + rowHeight * 10,
				},
				"& .zzzzzzzzz .MuiTablePagination-root": {
					"& .MuiInputBase-root": {
						ml: 4,
						mr: 4,
					},
				},
			}}
			classes={{
				columnHeaders: "border-b border-[var(--s-color-outline)]",
				columnHeader: "border-r border-[var(--s-color-outline)]",
				row: "border-b border-[var(--s-color-outline)] ",
				cell: "border-r border-[var(--s-color-outline)] align-center",
				main: "border-b border-[var(--s-color-outline)]",
			}}
			slotProps={{
				loadingOverlay: { variant: "linear-progress", noRowsVariant: "skeleton" },
			}}
			apiRef={apiRef}
			initialState={{
				pagination: {
					paginationModel: {
						pageSize: pageSize,
					},
				},
			}}
			columnHeaderHeight={columnHeaderHeight}
			rowHeight={rowHeight}
			showColumnVerticalBorder={showColumnVerticalBorder}
			showCellVerticalBorder={showCellVerticalBorder}
			disableRowSelectionOnClick={disableRowSelectionOnClick}
			disableColumnFilter={disableColumnFilter}
			columnGroupingModel={columnGroupingModel}
			paginationMode={paginationMode}
			pageSizeOptions={pageSizeOptions}
			sortingMode={sortingMode}
			{...misc}
		/>
	);
};

// const StyledStack = styled(Stack)({
// 	width: "100%",
// 	height: "100%",
// 	"& .MuiChip-root": {
// 		height: "1.25rem",
// 		borderRadius: "0.25rem",
// 		"& .MuiChip-label": {
// 			padding: "0 0.5rem",
// 		},
// 	},
// });

interface STableCellProps {
	styles?: SStyleProps;
}

export const STableCell = (args: PropsWithChildren<STableCellProps>) => {
	const { styles, children } = args;

	return (
		<div
			className={buildStyles(
				"s-table-cell-root",
				"w-full h-full",
				"px-2 flex flex-row items-center [justify-content:inherit]",
				styles,
			)}
		>
			{children}
		</div>
	);
};

export const useSTableCell = (
	options?: Omit<GridColDef, "field">,
): Omit<GridColDef, "field"> => ({
	width: 160,
	headerAlign: "center",
	align: "left",
	sortable: false,
	hideable: false,
	disableColumnMenu: true,
	renderCell: ({ value }: GridRenderCellParams) => <STableCell>{value}</STableCell>,
	...options,
});

export const useSTableCellText = (
	options?: Omit<GridColDef, "field">,
): Omit<GridColDef, "field"> => ({
	width: 160,
	headerAlign: "center",
	align: "left",
	sortable: false,
	hideable: false,
	disableColumnMenu: true,
	renderCell: ({ value }: GridRenderCellParams) => (
		<STableCell>
			{value && typeof value === "string" && (
				<STypography
					scale="sm"
					ellipsis
				>
					{unescape_text(value)}
				</STypography>
			)}
		</STableCell>
	),
	...options,
});

export const useSTableCellDate = (
	options?: Omit<GridColDef, "field">,
): Omit<GridColDef, "field"> => ({
	width: 192,
	headerAlign: "center",
	align: "center",
	sortable: false,
	hideable: false,
	disableColumnMenu: true,
	renderCell: ({ value }) => (
		<STableCell>
			{value && is_number(value) && (
				<STypography scale="sm">
					{date_format("YYYY-MM-DD HH:mm:ss", { value: value as number })}
				</STypography>
			)}
		</STableCell>
	),
	...options,
});

export const useSTableCellNumber = (
	options?: Omit<GridColDef, "field">,
): Omit<GridColDef, "field"> => ({
	width: 160,
	headerAlign: "center",
	align: "right",
	sortable: false,
	hideable: false,
	disableColumnMenu: true,
	renderCell: ({ value }) => (
		<STableCell>
			{value && (
				<STypography scale="sm">
					{(typeof value === "string" || typeof value === "number") &&
						format_comma(value)}
				</STypography>
			)}
		</STableCell>
	),
	...options,
});

export const useSTableCellLink = (
	options?: Omit<GridColDef, "field">,
): Omit<GridColDef, "field"> => ({
	width: 160,
	headerAlign: "center",
	align: "center",
	sortable: false,
	hideable: false,
	disableColumnMenu: true,
	renderCell: ({ value }) => {
		return (
			<STableCell>
				{value && typeof value === "string" && (
					<SLink href={value}>
						<SLucideIcon Icon={ExternalLink} />
					</SLink>
				)}
			</STableCell>
		);
	},
	...options,
});

export const useSTableCellBoolean = (
	options?: Omit<GridColDef, "field">,
): Omit<GridColDef, "field"> => ({
	width: 160,
	headerAlign: "center",
	align: "center",
	sortable: false,
	hideable: false,
	disableColumnMenu: true,
	renderCell: ({ value }) => {
		return (
			<STableCell>
				{!value || (typeof value === "string" && value !== "1") ? (
					<SLucideIcon Icon={X} />
				) : (
					<SLucideIcon Icon={Check} />
				)}
			</STableCell>
		);
	},
	...options,
});
