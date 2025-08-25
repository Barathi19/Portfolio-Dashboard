import Card from "@/components/Card/Card";
import { IOverviewData } from "@/interface";
import React from "react";

interface OverviewProps {
  overviewData: IOverviewData[];
}

function Overview({ overviewData }: OverviewProps) {
  const gainOrLoss = (data: IOverviewData) => {
    if (data.title.includes("Gain/Loss")) {
      return Number(data.value) > 0 ? "text-green-600" : "text-red-600";
    }
  };

  return overviewData.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {overviewData.map((data) => (
        <Card
          key={data.title}
          title={data.title}
          value={data.value}
          icon={data.icon}
          color={gainOrLoss(data)}
          iconColor={gainOrLoss(data)}
        />
      ))}
    </div>
  ) : null;
}

export default Overview;
