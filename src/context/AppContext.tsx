// src/context/AppContext.tsx
'use client';

import React, { createContext, useContext, useState } from 'react';

type AppContextType = {
  walletAddress: string;
  price: string;
  setWalletAddress: (addr: string) => void;
  setPrice: (price: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [price, setPrice] = useState('');

  return (
    <AppContext.Provider value={{ walletAddress, price, setWalletAddress, setPrice }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
};
