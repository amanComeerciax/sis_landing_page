import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SISWIT | Unified Cloud Platform for CPQ, CLM & CRM",
  description:
    "SISWIT empowers enterprises with a unified cloud platform for Configure-Price-Quote (CPQ), Contract Lifecycle Management (CLM), and Customer Relationship Management (CRM).",
  keywords:
    "CPQ, CLM, CRM, SaaS, enterprise software, cloud platform",
  openGraph: {
    title: "SISWIT | Unified Cloud Platform for CPQ, CLM & CRM",
    description:
      "One platform for CPQ, CLM & CRM. Streamline your sales, contracts, and customer relationships with enterprise-grade automation.",
    type: "website",
    url: "https://app.siswitinfra.com",
    siteName: "SISWIT",
  },
  twitter: {
    card: "summary_large_image",
    title: "SISWIT | Unified Cloud Platform for CPQ, CLM & CRM",
    description:
      "One platform for CPQ, CLM & CRM. Streamline your sales, contracts, and customer relationships.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#010101] text-white">
        {children}
      </body>
    </html>
  );
}
