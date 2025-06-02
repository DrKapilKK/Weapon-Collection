// src/components/ConnectMetaMask.tsx
'use client';
// Add this before any imports
declare global {
    interface Window {
      ethereum?: any; // use `any` or define a full type if needed
    }
  }
import { useEffect, useState } from 'react';

export default function ConnectWallet() {
  const [account, setAccount] = useState<string | null>(null);

  // Handle account connection
  const connectWallet = async () => {
    if (typeof window === 'undefined' || !window.ethereum) {
      alert('MetaMask is not installed!');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } catch (err) {
      console.error(err);
    }
  };

  // Listen for account changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setAccount(accounts[0] || null);
      });

      window.ethereum.on('disconnect', () => setAccount(null));
    }
  }, []);

  return (
    <div className="flex items-center gap-4">
      {account ? (
        <>
          <span className="text-green-600 font-mono">
            {account.slice(0, 6)}...{account.slice(-4)}
          </span>
          <button
            onClick={() => setAccount(null)}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Connect MetaMask
        </button>
      )}
    </div>
  );
}
