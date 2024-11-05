'use client';
import React from 'react'
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

const Adapter = () => {
  return (
    <div>
        <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/nHIagRBeZgfs52U0qA9sPB348ybEWB0d">
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
              <WalletMultiButton />
              <WalletDisconnectButton />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}

export default Adapter