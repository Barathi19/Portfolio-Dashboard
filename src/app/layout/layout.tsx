import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutProps {
  lastUpdated?: string;
  children: React.ReactNode;
}

function Layout({ lastUpdated, children }: LayoutProps) {
  return (
    <section className="flex flex-col min-h-screen w-full">
      <Header lastUpdated={lastUpdated} />
      <main className="flex-1 bg-layout px-3 py-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </section>
  );
}

export default Layout;
