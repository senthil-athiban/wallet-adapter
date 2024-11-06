import React, { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { toast } from "react-toastify";

const TransferSol = () => {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [amount, setAmount] = useState(0);

  const { connection } = useConnection();
  const wallet = useWallet();

  const handleTransfer = async () => {
    if (!wallet.publicKey) {
      toast.error("Wallet not connected");
      return;
    }
    try {
      const transaction = new Transaction();
      transaction.add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: new PublicKey(receiverAddress),
          lamports: amount * LAMPORTS_PER_SOL,
        })
      );

      await wallet.sendTransaction(transaction, connection);
      toast.success(`Amount ${amount} SOL has been sent to ${receiverAddress}`);
    } catch (error) {
      console.error("Transaction failed", error);
      toast.error("Transaction failed. Please try again.");
    } finally {
      setAmount(0);
      setReceiverAddress("");
    }
  };
  return (
    <div className="flex flex-col w-full mt-1">
      <h2 className="text-xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        TRANSFER SOLANA
      </h2>

      <div className="flex flex-col gap-y-2 w-full">
        <input
          type="text"
          placeholder="Receiver public key"
          onChange={(e) => setReceiverAddress(e.target.value)}
          className="bg-white bg-opacity-20 rounded-lg text-black p-2 placeholder-gray-100 text-sm"
        />
        <input
          type="number"
          name="amount"
          placeholder="amount"
          className="bg-white bg-opacity-20 rounded-lg text-black p-2 placeholder-gray-100 text-sm"
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <button
          onClick={handleTransfer}
          className="w-full p-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg text-sm text-white font-mono shadow-lg hover:from-pink-400 hover:to-violet-400 transition duration-300"
        >
          Send SOL
        </button>
      </div>
    </div>
  );
};

export default TransferSol;
