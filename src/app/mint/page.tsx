"use client";
import { useEffect } from "react";

export default function MintPage() {
    async function fetchMintData() {
        try {
            const response = await fetch('/api/mint-data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Failed to fetch mint data:', error);
            return { error: 'Failed to fetch mint data' };
        }
    }
    useEffect(() => {
        fetchMintData().then(data => {
            if (data.error) {
                console.error(data.error);
            } else {
                console.log('Mint data fetched successfully:', data);
            }
        });
    }, []);
    return (
        <div >
            <h1>Weapon World</h1>
            <p>Mint your weapon here!</p>
            <input type="text" placeholder="Enter weapon quantity" className="border p-2 rounded mb-4" />
            <label className="block mb-2">Price:</label>
            <button className="bg-blue-500 text-white p-2 rounded">Mint Weapon</button>
            
        </div>);
}