'use client';

import React, { useEffect, useRef, useState } from "react";
import solana from "@/public/sol.png";
import Image from "next/image";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { toast } from "react-toastify";

const Appbar = () => {
  const { connected } = useWallet();
  const initialMount = useRef(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    if(initialMount.current) {
      if (connected) {
        toast.success("Wallet has been connected", {autoClose: 1000});
      } else {
        toast.error("Wallet has been disconnected", {autoClose: 1000});
      }
    } else {
      initialMount.current = true
    }
  }, [connected]);

  return (  
    <div className="flex items-center justify-between w-full p-2 py-3 shadow-md relative bg-white/20 backdrop-blur-md">
      <div className="flex items-center">
        <Image src={solana} alt="" width={40} height={40} className="mr-2" />
        <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
          WALLET ADAPTER
        </p>
      </div>
      <div className="flex gap-x-2">
        {mounted && (connected ? <WalletDisconnectButton /> : <WalletMultiButton />)}
      </div>
    </div>
  );
};

export default Appbar;
