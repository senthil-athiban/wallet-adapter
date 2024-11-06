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
    <div className="flex items-center p-2 bg-white bg-opacity-20 rounded-lg shadow-md backdrop-filter backdrop-blur-xl w-full justify-between mt-2 border-l-4 border-pink-500">
      <p className="text-lg font-semibold text-white">
        Balance: {balance / 1000000000} SOL
      </p>
      <button
        onClick={handleBalance}
        className="p-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg text-sm text-white font-semibold shadow-lg hover:from-pink-400 hover:to-violet-400 transition duration-300"
      >
        Check Balance
      </button>
    </div>
  );
};

export default Balance;
