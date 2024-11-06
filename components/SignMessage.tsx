"use client";

import React, { useState } from "react";
import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
import { toast } from "react-toastify";

const SignMessage = () => {
  const { publicKey, signMessage } = useWallet();
  const [message, setMessage] = useState("");

  const handleSign = async () => {
    if (!publicKey) {
      toast.error("Wallet not connected");
      return;
    }

    if (!signMessage) {
      toast.error("Wallet does not support message signing");
      return;
    }

    if (!message?.length) {
      toast.error("No message has been provided");
      return;
    }
    try {
      const encodedMessage = new TextEncoder().encode(message);
      const signature = await signMessage(encodedMessage);
      if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) {
        toast.error("Invalid signature");
        return;
      }
      toast.success(`Success, Message signature: ${bs58.encode(signature)}`);
    } catch (error) {
      console.error("Error signing message:", error);
      toast.error("Failed to sign message. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-y-2 w-full">
      <h2 className="text-xl font-extrabold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
        SIGN MESSAGE
      </h2>
      <div className="flex gap-x-2 w-full">
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          className="bg-white bg-opacity-20 rounded-lg text-white p-2 placeholder-gray-600"
        />
        <button
          onClick={handleSign}
          className="w-full p-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg text-sm text-white font-mono shadow-lg hover:from-pink-400 hover:to-violet-400 transition duration-300"
        >
          Sign
        </button>
      </div>
    </div>
  );
};

export default SignMessage;
