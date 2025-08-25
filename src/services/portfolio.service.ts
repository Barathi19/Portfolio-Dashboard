import { IPortfolio } from "@/interface";

// GET PORTFOLIO
export const GetStocksPortfoilo = async (): Promise<IPortfolio> => {
  const response = await fetch("/api/portfolio");

  if (!response.ok) {
    throw new Error(`Failed to fetch portfolio. Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
