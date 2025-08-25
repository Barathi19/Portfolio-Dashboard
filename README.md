Portfolio Dashboard

A stock portfolio dashboard built with Next.js, TypeScript, and Recharts.
The app parses portfolio data (from JSON/Excel), fetches live market data using Yahoo Finance API, and visualizes portfolio performance with tables and charts.


Portfolio Overview

Total Investment

Current Value

Net Gain/Loss (with trend indicators)

Holdings Table

Stock name, Purchase Price, Quantity, Investment

Current Market Price (CMP), Present Value

Gain/Loss, Portfolio Weight %, Exchange, P/E Ratio, Earnings

Charts & Analytics

Pie Chart: Investment distribution by sector

Bar Chart: Sector-wise gain/loss

Auto-refresh

Fetches fresh market data every 15 seconds (stale-while-revalidate enabled)

Responsive UI

Mobile & desktop friendly

Clean dashboard design with Tailwind CSS

Tech Stack

Frontend: Next.js 15, React 19, TypeScript

UI Styling: Tailwind CSS, React Icons

Charts: Recharts (Pie, Bar)

Backend/Data Fetching: Yahoo Finance API (yahoo-finance2)

State & Utils: React hooks, custom utils for formatting

Project Structure
/components      → Shared components (Cards, Loader, Error, Table)
/sections        → Dashboard sections (Overview, PortfolioTable, SectorChart)
/data            → stock.json (portfolio data)
/app             → Next.js pages & API routes
/utils           → Helpers (formatCurrency, etc.)

Setup & Run

Clone repo

git clone https://github.com/Barathi19/Portfolio-Dashboard.git
cd Portfolio-Dashboard


Install dependencies

npm install


Run development server

npm run dev


App will be available at http://localhost:3000

Build for production

npm run build
npm start

Data Flow

Portfolio Data Source

Stocks & sectors loaded from /data/stock.json

API Fetch

/api/portfolio fetches live CMP, EPS, PE via Yahoo Finance API

Merges with portfolio JSON

UI Render

Overview Cards → Summary

Table → Stock-wise details

Charts → Sector-wise distribution & performance

Notes

Deployment: Supports Vercel (Next.js native)

Caching: Uses s-maxage=15, stale-while-revalidate for better performance

Limitations: Some stock symbols may not resolve correctly from Yahoo