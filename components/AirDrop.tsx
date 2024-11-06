"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AirDrop = () => {
  const [selectedConnection, setSelectedConnection] = useState("dev");
  const [amount, setAmount] = useState(0);

  const { publicKey } = useWallet();

  const handleAirDrop = async () => {
    if (!publicKey) {
      toast.error("Wallet not connected");
      return;
    }
    const url =
      selectedConnection === "dev"
        ? "https://api.devnet.solana.com"
        : "https://api.testnet.solana.com";

    const customConnection = new Connection(url, "confirmed");

    try {
      const airdropSignature = await customConnection.requestAirdrop(
        publicKey,
        amount * LAMPORTS_PER_SOL
      );

      const confirmation = await customConnection.confirmTransaction(
        airdropSignature,
        "finalized"
      );

      if (confirmation.value.err) {
        toast.error("Airdrop transaction failed");
      }

      toast.success(`${amount} SOL has been airdropped to ${publicKey}`);
    } catch (error) {
      console.error("Airdrop failed:", error);
      toast.error("Airdrop failed. Check connection or wallet status.");
    } finally {
      setAmount(0);
    }
  };

  return (
    <div className="w-full px-4">
      <div className="flex gap-x-3 items-center w-full">
        <div className="w-1/4">
          <h2 className="text-center">SOL AIRDROP</h2>
        </div>
        <div className="flex bg-white bg-opacity-20 backdrop-filter backdrop-blu-rlg w-3/4 p-2 justify-around rounded-lg items-center">
          <p
            className={`cursor-pointer py-1 px-4 rounded-full transition duration-300 ${
              selectedConnection === "dev"
                ? "bg-white bg-opacity-30"
                : "hover:bg-white hover:bg-opacity-20"
            }`}
            onClick={() => setSelectedConnection("dev")}
          >
            Dev
          </p>
          <p
            className={`cursor-pointer py-1 px-4 rounded-full transition duration-300 ${
              selectedConnection === "test"
                ? `bg-white bg-opacity-30`
                : "hover:bg-white hover:bg-opacity-20"
            }`}
            onClick={() => setSelectedConnection("test")}
          >
            Test
          </p>
        </div>
      </div>
      <div className="flex gap-x-2 py-2 w-full">
        <input
          type="number"
          value={amount || ""}
          onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
          className="w-full bg-white bg-opacity-20 rounded-md text-black text-center"
        />
        <button
          onClick={handleAirDrop}
          className="p-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg text-sm text-white font-semibold shadow-lg hover:from-pink-400 hover:to-violet-400 transition duration-300"
        >
          AIRDROP
        </button>
      </div>
    </div>
  );
};

export default AirDrop;
