import type { Metadata } from "next";
import Header from "@/components/shared/Header";
// import Footer from "@/components/client/Footer";
// import "./globals.css";

export const metadata: Metadata = {
  title: "Your App Name",
  description: "A modern web application built with Next.js",
  keywords: ["nextjs", "react", "typescript"],
  authors: [{ name: "Your Name" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header with better positioning and backdrop */}
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <Header />
      </header>

      {/* Main content with proper spacing and flex grow */}
      <main className="flex-1 pt-18">
        <div className="w-full min-h-screen">{children}</div>
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
