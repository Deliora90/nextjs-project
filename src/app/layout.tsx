import type { Metadata, Viewport } from "next";
import { Layout } from "@/views";

import "./globals.css";

export const metadata: Metadata = {
  title: "Golobe",
  description: "Search flights & places hire to our most popular destinations",
  keywords: ["flights", "places", "tickets"],
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "Golobe",
    description:
      "Search flights & places hire to our most popular destinations",
    siteName: "Golobe",
    images: "/og_image.png",
  }
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
