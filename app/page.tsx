"use client";
import Balance from "@/components/Balance";
import Appbar from "@/components/Appbar";
import SignMessage from "@/components/SignMessage";
import TransferSol from "@/components/TransferSol";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import AirDrop from "@/components/AirDrop";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <Appbar />
      <div className="w-full h-screen flex justify-center items-center ">
        <ConnectionProvider endpoint="https://api.devnet.solana.com">
          <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div className="flex flex-col justify-center items-center border p-2 rounded-lg shadow-md max-w-md gap-y-6 relative bg-white/10 backdrop-blur-md">
                <div className="flex gap-x-2">
                  <WalletMultiButton />
                  <WalletDisconnectButton />
                </div>
                <Balance />
                <AirDrop />
                <SignMessage />
                <TransferSol />
              </div>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </div>
  );
}
