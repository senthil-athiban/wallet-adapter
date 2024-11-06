"use client";

import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { toast } from "react-toastify";
import { Copy } from "lucide-react";

const Address = () => {

  const { publicKey } = useWallet();
  const publicKeyString = publicKey?.toString() ?? "";
  const trimmedPublicKey = publicKeyString
    ? `${publicKeyString.slice(0, 4)}...${publicKeyString.slice(-4)}`
    : "";

  const handleCopy = () => {
    navigator.clipboard.writeText(publicKeyString);
    toast.success("Public address copied to clipboard");
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg shadow-md flex justify-between items-center">
      <p className="text-center font-mono text-sm">
        Public address: {trimmedPublicKey}
      </p>
      <button
        onClick={handleCopy}
        className="p-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg text-sm text-white font-semibold shadow-lg hover:from-pink-400 hover:to-violet-400 transition duration-300"
      >
        <Copy size={20} />
      </button>
    </div>
  );
};

export default Address;
