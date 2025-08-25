"use client";

import { useEffect, useMemo, useState } from "react";
import Layout from "./layout/layout";
import Overview from "@/sections/Overview/Overview";
import { GetStocksPortfoilo } from "@/services/portfolio.service";
import { IChartData, IChartHashMap, IStock } from "@/interface";
import { formatCurrency } from "@/utils";
import Loader from "@/components/Loader/Loader";
import { FaWallet } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import PortfolioTable from "@/sections/PortfolioTable/PortfolioTable";
import ErrorComponent from "@/components/ErrorComponent/ErrorComponent";
import SectorChart from "@/sections/SectorChart/SectorChart";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null>(null);
  const [data, setData] = useState<IStock[]>([]);
  const [lastUpdated, setLastUpdated] = useState("");

  const otherDetails = useMemo(() => {
    let totalInvestment = 0;
    let currentValue = 0;
    let netGainOrLoss = 0;

    const sectorData: IChartHashMap = {};

    data.forEach((d) => {
      totalInvestment += d.investment;
      currentValue += d.presentValue;
      netGainOrLoss += d.gainOrLoss;

      if (sectorData[d.sector]) {
        sectorData[d.sector].totalInvestment += d.investment;
        sectorData[d.sector].gainOrLoss += d.gainOrLoss;
      } else {
        sectorData[d.sector] = {
          gainOrLoss: d.gainOrLoss,
          totalInvestment: d.investment,
        };
      }
    });

    const pieChartData: IChartData[] = [];
    const barChartData: IChartData[] = [];

    Object.entries(sectorData).forEach(([sector, data]) => {
      pieChartData.push({
        name: sector,
        value: +data.totalInvestment.toFixed(2),
      });
      barChartData.push({ name: sector, value: +data.gainOrLoss.toFixed(2) });
    });

    const overviewData = [
      {
        title: "Total Investment",
        value: formatCurrency(totalInvestment),
        icon: <FaWallet />,
      },
      {
        title: "Current Value",
        value: formatCurrency(currentValue),
        icon: <MdTrendingUp />,
      },
      {
        title: "Net Gain/Loss",
        value: formatCurrency(netGainOrLoss),
        icon: netGainOrLoss > 0 ? <FiArrowUpRight /> : <FiArrowDownRight />,
      },
    ];

    return { overviewData, pieChartData, barChartData };
  }, [data]);

  useEffect(() => {
    const fetchPortfolioDetails = async () => {
      try {
        const portfolioData = await GetStocksPortfoilo();
        setData(portfolioData.data);
        setLastUpdated(portfolioData.fetchedAt);
        setIsError(null);
      } catch (error) {
        console.error(error, "error");
        setIsError("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolioDetails();
    const interval = setInterval(fetchPortfolioDetails, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout lastUpdated={lastUpdated}>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorComponent />
      ) : (
        <div className="animate-fade">
          <Overview overviewData={otherDetails.overviewData} />
          <PortfolioTable data={data} />
          <SectorChart
            barChartData={otherDetails.barChartData}
            pieChartData={otherDetails.pieChartData}
          />
        </div>
      )}
    </Layout>
  );
}
