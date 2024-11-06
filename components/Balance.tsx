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
    <div className="flex items-center p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md w-full justify-between mt-2 ">
      <p className=" text-white font-mono text-sm">
        Balance: {balance / 1000000000} SOL
      </p>
      <button
        onClick={handleBalance}
        className="p-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg text-xs text-white font-mono shadow-lg hover:from-pink-400 hover:to-violet-400 transition duration-300"
      >
        Check Balance
      </button>
    </div>
  );
};

export default Balance;
