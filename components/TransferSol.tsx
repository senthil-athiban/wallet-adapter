import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import React, { useState } from "react";

const TransferSol = () => {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [amount, setAmount] = useState(0);

  const {connection} = useConnection();
  const wallet = useWallet();

  const handleTransfer = async () => {
    if (!wallet.publicKey) throw new Error("Wallet not connected");

    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(receiverAddress),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );

    const res = await wallet.sendTransaction(transaction, connection);
    alert(`Amount ${amount} SOL has been sent to ${receiverAddress}`)
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Receiver public key"
        onChange={(e) => setReceiverAddress(e.target.value)}
        className="border-blue-50"
      />
      <input
        type="number"
        name="amount"
        placeholder="amount"
        className="border-blue-50"
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={handleTransfer}>Send SOL</button>
    </div>
  );
};

export default TransferSol;
