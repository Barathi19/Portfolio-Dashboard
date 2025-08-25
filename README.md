📊 Portfolio Dashboard

A responsive stock portfolio dashboard built with Next.js, TypeScript, and Recharts. This app parses portfolio data (from JSON/Excel), fetches live market data via the Yahoo Finance API, and visualizes portfolio performance using interactive charts and tables.

Portfolio Overview

  - Total Investment
  - Current Value
  - Net Gain/Loss (with up/down trend indicators)

Holdings Table

 - Stock Name, Purchase Price, Quantity, Investment
 - Current Market Price (CMP), Present Value
 - Gain/Loss, Portfolio Weight (%)
 - Exchange, P/E Ratio, Earnings (EPS)

Charts & Analytics

 - Pie Chart: Investment distribution by sector
 - Bar Chart: Sector-wise gain/loss

Auto-Refresh

 - Live market data refreshes every 15 seconds
 - Uses stale-while-revalidate caching for performance

Responsive UI

 - Fully optimized for both mobile and desktop
 - Clean dashboard design with Tailwind CSS

Tech Stack

Layer	Tech

 * Frontend	- Next.js 15, React 19, TypeScript
 * Styling	- Tailwind CSS, React Icons
 * Charts   -	Recharts (Pie, Bar)
 * Data     -	Yahoo Finance API (yahoo-finance2)
 * State	  - React Hooks, custom utilities

📁 Project Structure

 - /components      →   Reusable UI components (Cards, Table, Loader, etc.)
 - /sections        →   Dashboard sections (Overview, PortfolioTable, PortfolioCharts)
 - /data            →   Portfolio data (stock.json)
 - /app             →   Next.js app directory (pages, API routes)
 - /utils           →   Helper functions (e.g., formatCurrency)

⚙️ Setup & Run
1. Clone the repository
git clone https://github.com/Barathi19/Portfolio-Dashboard.git
cd Portfolio-Dashboard

2. Install dependencies
npm install

3. Start development server
npm run dev


App will be available at: http://localhost:3000

4. Build for production
npm run build
npm start

Data Flow
Portfolio JSON (/data/stock.json)
       ↓
API Route (/api/portfolio) fetches:
  - CMP (Current Market Price)
  - EPS (Earnings Per Share)
  - P/E Ratio
       ↓
Data Merged
       ↓
UI Render:
  → Overview Cards
  → Holdings Table
  → Sector Charts

Notes

- Deployment: Optimized for Vercel
 (Next.js native support)
- Caching: Uses s-maxage=15 with stale-while-revalidate
- Limitations: Some stock symbols may not resolve correctly via Yahoo Finance API