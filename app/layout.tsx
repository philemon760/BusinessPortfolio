import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediCare Plus | Trusted Healthcare Services in the USA",
  description:
    "MediCare Plus offers world-class general medical care, telemedicine, diagnostics, and preventive health checkups across the United States. Serving 50,000+ patients. Book your appointment online today.",
  keywords: [
    "healthcare USA",
    "doctor appointment Austin TX",
    "telehealth United States",
    "medical clinic Texas",
    "preventive health checkup",
    "online doctor consultation USA",
    "MediCare Plus",
    "primary care Austin",
    "board certified doctors",
  ],
  openGraph: {
    title: "MediCare Plus | Trusted American Healthcare Services",
    description:
      "Compassionate, board-certified medical care — in-clinic and online across all 50 states. Book an appointment with our 120+ US specialist doctors today.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#061824] dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Soft blue ambient blob — top right */}
        <div className="bg-[#0096c7] absolute top-[-6rem] -z-10 right-[38rem] h-[22rem] w-[22rem] rounded-full blur-[10rem] opacity-20 sm:w-[42rem] dark:opacity-15" />

        {/* Light teal ambient blob — top left */}
        <div className="bg-[#caf0f8] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[12rem] opacity-40 sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:opacity-10 dark:bg-[#48bfe3]" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: "#0a3d5c",
                  color: "#caf0f8",
                  border: "1px solid rgba(0,180,216,0.3)",
                  borderRadius: "0.75rem",
                },
              }}
            />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
