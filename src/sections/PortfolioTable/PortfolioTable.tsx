"use client";

import { ColumnDef } from "@tanstack/react-table";
import { IStock } from "@/interface";
import Table from "@/components/Table/Table";

interface PortfolioTableProps {
  data: IStock[];
}

export default function PortfolioTable({ data }: PortfolioTableProps) {
  const columns: ColumnDef<IStock>[] = [
    { accessorKey: "company", header: "Stock" },
    { accessorKey: "purchasePrice", header: "Purchase Price" },
    { accessorKey: "quantity", header: "Qty" },
    { accessorKey: "investment", header: "Investment" },
    {
      accessorKey: "portfolio",
      header: "Portfolio (%)",
      cell: (info) => `${info.getValue<number>().toFixed(2)}%`,
    },
    { accessorKey: "exchange", header: "NSE/BSE" },
    {
      accessorKey: "cmp",
      header: "CMP",
      cell: (info) => info.getValue<number>().toFixed(2) ?? "—",
    },
    {
      accessorKey: "presentValue",
      header: "Present Value",
      cell: (info) => info.getValue<number>().toFixed(2) ?? "—",
    },
    {
      accessorKey: "gainOrLoss",
      header: "Gain/Loss",
      cell: (info) => {
        const val = info.getValue<number>() || 0;
        return (
          <span className={val >= 0 ? "text-green-600" : "text-red-600"}>
            {val.toLocaleString("en-IN")}
          </span>
        );
      },
    },
    {
      accessorKey: "pe",
      header: "P/E Ratio",
      cell: (info) => info.getValue<number>().toFixed(2) ?? "—",
    },
    {
      accessorKey: "latestEarnings",
      header: "Latest Earnings",
      cell: (info) => info.getValue<number>().toFixed(2) ?? "—",
    },
  ];

  return <Table columns={columns} data={data} title="Portfolio Holdings" />;
}
