'use client';

import React from 'react';

export default function Home() {
  
  return (
    <div className="ml-8 w-48">
      <h2 className="text-xl font-semibold mb-4">You Can: </h2>

      <button
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        onClick={() => window.location.href = '/mint'}
      >
        Mint Weapon
      </button>
      <br /><br />

      <button
        className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        onClick={() => window.location.href = '/owner-mint'}
      >
        Owner
      </button>
      <br /><br />

      <button
        className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
        onClick={() => window.location.href = '/withdraw'}
      >
        Withdrawal
      </button>
    </div>

  );
}
