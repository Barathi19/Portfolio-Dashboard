import { NextResponse } from "next/server";
import yahooFinance from "yahoo-finance2";
import stocksData from "@/data/stock.json";
import { IStock, IStockDetail, IStockHashMap } from "@/interface";

export const revalidate = 15; // cache for 15 seconds

export async function GET() {
  let stockJson: IStockHashMap = {};
  let totalInvestment = 0;

  const json: IStockDetail[] = JSON.parse(JSON.stringify(stocksData));

  if (Array.isArray(json) && json.length > 0) {
    stockJson = json.reduce((obj, val) => {
      totalInvestment += val.purchasePrice * val.quantity;

      if (!obj[val.symbol]) obj[val.symbol] = val;
      return obj;
    }, {} as IStockHashMap);
  }

  let symbols: string[] = [];

  if (Object.keys(stockJson).length > 0) {
    symbols = Object.keys(stockJson);
  }

  const results = await yahooFinance.quote(symbols);

  const data: IStock[] = results.map((s) => {
    const { company, investment, purchasePrice, quantity, sector } =
      stockJson[s.symbol];
    const cmp = s.regularMarketPrice || 0;
    const pe = s.trailingPE || 0;
    const latestEarnings = s.epsTrailingTwelveMonths || 0;
    const presentValue = cmp * quantity;
    const exchange = s.fullExchangeName;

    return {
      company,
      investment,
      purchasePrice,
      quantity,
      sector,
      symbol: s.symbol,
      cmp,
      pe,
      latestEarnings,
      presentValue,
      exchange,
      portfolio: (investment / totalInvestment) * 100,
      gainOrLoss: presentValue - investment,
    };
  });

  return NextResponse.json(
    { fetchedAt: new Date().toISOString(), data },
    {
      headers: {
        "Cache-Control": "s-maxage=15, stale-while-revalidate",
      },
    }
  );
}
