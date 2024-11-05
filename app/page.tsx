'use client';
import AirDrop from "@/components/AirDrop";
import Appbar from "@/components/Appbar";
import SignMessage from "@/components/SignMessage";
import TransferSol from "@/components/TransferSol";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

export default function Home() {
  return (
    <div>
      <Appbar />
      <div>
        <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/nHIagRBeZgfs52U0qA9sPB348ybEWB0d">
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
              <WalletMultiButton />
              <WalletDisconnectButton />
              <AirDrop />
              <SignMessage />
              <TransferSol />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
      
    </div>
  );
}
