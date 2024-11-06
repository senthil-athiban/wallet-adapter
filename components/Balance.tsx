"use client";
import React, { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const Balance = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState(0);

  const handleBalance = async () => {
    if (!publicKey) {
      alert("No public key");
      return;
    }
    const amount = await connection.getBalance(publicKey);
    setBalance(amount);
  };
  return (
    <div className="flex flex-col items-center p-4 bg-white bg-opacity-20 rounded-lg shadow-md backdrop-filter backdrop-blur-xl">
      <p className="text-lg font-semibold text-white mb-4">
        Balance: {balance / 1000000000} SOL
      </p>
      <button
        onClick={handleBalance}
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 transition duration-300"
      >
        Check Balance
      </button>
    </div>
  );
};

export default Balance;
