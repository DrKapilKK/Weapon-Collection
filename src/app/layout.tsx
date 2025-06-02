'use client';
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConnectWallet from '../components/ConnectWallet';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <span className="text-xl font-bold">Welcome to Weapon Collection World</span>
        <ConnectWallet />
      </nav>  
        {children}
      <footer className="bg-slate-900 text-white p-4 text-center">
          New Weapon Collection coming soon!
          <br />
      </footer>
      </body>
    </html>
  );
}