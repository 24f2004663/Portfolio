import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import ContactModal from "@/components/ContactModal";
import { ContactProvider } from "@/context/ContactContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manoj K. | Data Science Portfolio",
  description: "Data Science Undergraduate @ IIT Madras. Portfolio showcasing projects in AI, Web Dev, and IoT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ContactProvider>
          <Navbar />
          <ContactModal />
          <main className="flex-grow pt-16">
            {children}
          </main>
        </ContactProvider>
      </body>
    </html>
  );
}
