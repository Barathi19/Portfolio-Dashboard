// STOCK PORTFOLIO
export interface IStockDetail {
  company: string;
  sector: string;
  quantity: number;
  purchasePrice: number;
  investment: number;
  symbol: string;
}

export type IStockHashMap = Record<string, IStockDetail>;

export interface IStock extends IStockDetail {
  cmp: number;
  portfolio: number;
  presentValue: number;
  gainOrLoss: number;
  pe: number;
  exchange: string;
  latestEarnings: number;
}

export interface IPortfolio {
  fetchedAt: string;
  data: IStock[];
}

// OVERVIEW
export interface IOverviewData {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

// For Re-Chart's data
interface IChartSectorData {
  gainOrLoss: number;
  totalInvestment: number;
}

export type IChartHashMap = Record<string, IChartSectorData>;

export interface IChartData {
  name: string;
  value: number;
}
