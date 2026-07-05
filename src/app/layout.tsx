import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shubham Tayade | Mission Control",
  description: "Portfolio of Shubham Tayade - Associate Technical Project Manager, Earth Observation & Space Systems Professional.",
  keywords: ["Shubham Tayade", "Space Technology", "Earth Observation", "Project Management", "Satellite Engineer", "Remote Sensing", "GIS", "IIST", "ISRO", "International Astronautical Congress"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground relative selection:bg-primary/30">
        <Navbar />
        <main className="flex-1 flex flex-col pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
