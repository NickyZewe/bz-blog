import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BZ-Blog",
  description: "Explore the stars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-screen-lg">
          <div className="flex min-h screen flex-col items-center p-24">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
