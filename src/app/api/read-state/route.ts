
import 'server-only';
// This API route reads the state of a smart contract on Ethereum or compatible networks
// and returns a specific value (e.g., a message) from it.
// Ensure you have the necessary packages installed:
// npm install ethers next
// or
// yarn add ethers next 

import { NextResponse } from 'next/server';
import { ethers } from 'ethers';
import  abi  from '../../../../contracts/NFTContract.json'; // Adjust the path to your ABI file
// Replace with your contract details
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ''; '0xYourContractAddressHere'; // Replace with your contract address
const ABI = abi; // Ensure this matches your contract's ABI

console.log('Using contract address:', CONTRACT_ADDRESS);
// Infura/Alchemy/Public RPC URL (e.g., Sepolia, Polygon, etc.)
const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL || ''; // or use a public RPC
console.log('Using RPC_URL:', RPC_URL);

export async function GET() {
    console.log('Reading contract state...');
  try {
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
    const name = await contract.name(); 
    const totalSupply = await contract.maxSupply();
    const tokenMinted = await contract.tokenMinted(); 
    const price = await contract.pricePublic(); 
    console.log('Contract name:', name);
    console.log('Total supply:', totalSupply.toString());
    console.log('Tokens minted:', tokenMinted.toString());
    console.log('Price per token:', ethers.formatEther(price.toString()), 'ETH');
    // Return the values in the response
    // Convert BigInt values to strings before returning them
    return NextResponse.json(
        {
          name,
          totalSupply: totalSupply.toString(),
          tokenMinted: tokenMinted.toString(),
          price: ethers.formatEther(price.toString()),
        },
        { status: 200 }
      );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
