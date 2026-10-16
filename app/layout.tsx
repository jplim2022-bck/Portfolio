import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Patrick Lim - IT Professional Portfolio",
  description: "IT Professional portfolio showcasing skills in data management, virtual assistance, and web development",
  keywords: ["portfolio", "IT professional", "virtual assistant", "data management", "web development", "next.js", "typescript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
