import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Projeto NextJs",
  description: "Site para praticar NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>

        {children}
      </body>
    </html>
  );
}
