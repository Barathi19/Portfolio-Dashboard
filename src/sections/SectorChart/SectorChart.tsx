import SectorPieChart from "./SectorPieChart";
import SectorBarChart from "./SectorBarChart";
import { IChartData } from "@/interface";

interface SectorChartProps {
  pieChartData: IChartData[];
  barChartData: IChartData[];
}

export default function SectorChart({
  pieChartData,
  barChartData,
}: SectorChartProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="bg-white rounded-lg shadow p-4">
        <h4 className="text-lg font-semibold mb-2">Sector Allocation</h4>
        <div className="h-[300px] sm:h-[350px]">
          <SectorPieChart data={pieChartData} />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h4 className="text-lg font-semibold mb-2">Sector Gain/Loss</h4>
        <div className="h-[300px] sm:h-[350px]">
          <SectorBarChart data={barChartData} />
        </div>
      </div>
    </div>
  );
}
