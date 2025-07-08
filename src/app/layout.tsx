'use client';
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConnectWallet from '../components/ConnectWallet';
import { useEffect, useState } from 'react';

interface ContractState {
  name?: string;
  totalSupply?: string;
  tokenMinted?: string;
  price?: string;
  error?: string;
}

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
  const [contractState, setContractState] = useState<ContractState | null>(null);
  
    useEffect(() => {
      const fetchState = async () => {
        try {
          const res = await fetch('/api/read-state');
          const data = await res.json();
          setContractState(data);
        } catch (err) {
          console.error('Failed to fetch message', err);
          setContractState({ error: 'Error loading data' });
        }
      };
  
      fetchState();
    }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <span className="text-xl font-bold">Welcome to Weapon Collection World</span>
        <ConnectWallet />
      </nav>  
      <main className="p-8 flex gap-8 items-start min-h-screen bg-gray-50">
        {/* Left: Status Box */}
        <div className="w-[400px] h-[300px] bg-white rounded-lg shadow-lg p-6 flex flex-col justify-start">
          <h1 className="text-2xl font-bold mb-4">Current Status</h1>
          <div className="text-base bg-gray-100 p-4 rounded shadow flex-1 overflow-auto">
            {contractState ? (
              contractState.error ? (
                <span className="text-red-600">{contractState.error}</span>
              ) : (
                <ul className="space-y-1">
                  <li><strong>Name:</strong> {contractState.name}</li>
                  <li><strong>Total Supply:</strong> {contractState.totalSupply}</li>
                  <li><strong>Tokens Minted:</strong> {contractState.tokenMinted}</li>
                  <li><strong>Price:</strong> {contractState.price} ETH</li>
                </ul>
              )
            ) : (
              'Loading...'
            )}
          </div>
        </div>

        {/* Right: Children */}
        <div className="flex-1">
          {children}
        </div>
      </main>

      <footer className="bg-slate-900 text-white p-4 text-center">
          New Weapon Collection coming soon!
          <br />
      </footer>
      </body>
    </html>
  );
}