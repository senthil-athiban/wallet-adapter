'use client';
import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React, { useState } from 'react'

const SignMessage = () => {
    const { publicKey, signMessage} = useWallet();
    const [message, setMessage] = useState("");

    const handleSign = async () => {
        if(!publicKey) throw new Error('Wallet not connected');
        if(!signMessage) throw new Error('Wallet does not support message signing');

        if(!message?.length) throw new Error("No message has been provided");
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);
        if(!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) {
            throw new Error("Invalid signature")
        }
        alert(`Success, Message signature: ${bs58.encode(signature)}`);
    }
  return (
    <div className='border-blue-50'>
        <input type="text"  onChange={(e) => setMessage(e.target.value)} className='border'/>
        <button onClick={handleSign}>Sign</button>
    </div>
  )
}

export default SignMessage