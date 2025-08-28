import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/client/shared/Header";
import Footer from "@/components/client/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaya Capital: Renovations",
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
    <div className={`${inter.className} flex min-h-screen flex-col`}>
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <Header />
      </header>

      <main className="flex-1 pt-22">
        <div className="w-full min-h-screen">{children}</div>
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}
