import { sectorColors } from "@/data/color";
import { IChartData } from "@/interface";
import { formatCurrency } from "@/utils";
import React from "react";
import {
  BarChart,
  Bar,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  XAxis,
} from "recharts";

interface SectorBarChartProps {
  data: IChartData[];
}

const SectorBarChart = ({ data }: SectorBarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart layout="vertical" data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" tick={{ fontSize: 14 }} />
        <YAxis
          dataKey="name"
          tick={{ fontSize: 14 }}
          type="category"
          width={100}
        />
        <Tooltip
          formatter={(value: number, _, item) => {
            const v = Number(value) || 0;
            const label = v >= 0 ? "Gain" : "Loss";
            const color = v >= 0 ? "green" : "red";
            return [
              <span key={item.payload.name} style={{ color, fontWeight: 600 }}>
                {label}: {formatCurrency(v)}
              </span>,
            ];
          }}
        />
        <Bar dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={sectorColors[entry.name]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SectorBarChart;
