import type { Metadata } from "next";
import "./globals.css";

import landingPageContent from "@/content/pages/index.json";

export const metadata: Metadata = {
  title: landingPageContent.title,
  description: landingPageContent.description,
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
