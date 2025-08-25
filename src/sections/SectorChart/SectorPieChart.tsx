import { sectorColors } from "@/data/color";
import { IChartData } from "@/interface";
import { formatCurrency } from "@/utils";
import { useMemo } from "react";
import {
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  SectorProps,
  Tooltip,
} from "recharts";

type Coordinate = {
  x: number;
  y: number;
};

type PieSectorData = {
  percent?: number;
  name?: string | number;
  midAngle?: number;
  middleRadius?: number;
  tooltipPosition?: Coordinate;
  value?: number;
  paddingAngle?: number;
  dataKey?: string;
  payload?: IChartData;
};

type PieSectorDataItem = React.SVGProps<SVGPathElement> &
  Partial<SectorProps> &
  PieSectorData;

const renderActiveShape = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
}: PieSectorDataItem) => {
  return (
    <g>
      {payload && (
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
      )}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
      />
    </g>
  );
};

interface SectorPieChartProps {
  data: IChartData[];
}

export default function SectorPieChart({ data }: SectorPieChartProps) {
  const total = useMemo(() => {
    return data.reduce((acc, val) => (acc += val.value), 0);
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={600} height={600}>
        <Pie
          activeShape={renderActiveShape}
          data={data.map((d) => ({ ...d, fill: sectorColors[d.name] }))}
          cx="50%"
          cy="50%"
          innerRadius={75}
          outerRadius={105}
          dataKey="value"
        />
        <Legend verticalAlign="bottom" align="center" height={60} />
        <Tooltip
          formatter={(value: number, _, item) => {
            const v = Number(value) || 0;
            return [
              <span key={item.payload.name}>
                {`${formatCurrency(v)}, (${((v / total) * 100).toFixed(2)}%)`}
              </span>,
              item.payload.name,
            ];
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
