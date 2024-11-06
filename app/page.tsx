"use client";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import Appbar from "@/components/Appbar";
import Card from "@/components/Card";
import "@solana/wallet-adapter-react-ui/styles.css";

export default function Home() {
  return (
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 w-full">
            <Appbar />
            <div className="w-full h-screen flex justify-center items-center">
              <Card />              
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
