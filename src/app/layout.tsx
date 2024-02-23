import type { Metadata, Viewport } from "next";
import { Layout } from "@/views";

import "./globals.css";

export const metadata: Metadata = {
  title: "Sweet knitting",
  icons: ["./logo.svg"],
  description: "Sweet knitting",
  keywords: ["knitting"],
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "Sweet knitting",
    description: "Sweet knitting",
    siteName: "Sweet knitting",
    images: "/og_image.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#8dd3bb",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <Layout>{children}</Layout>
    </html>
  );
}
