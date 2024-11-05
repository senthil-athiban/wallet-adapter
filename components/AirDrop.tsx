'use client';
import React, { useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

const AirDrop = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const [balance, setBalance] = useState(0);

    const handleBalance = async () => {
        if(!publicKey) {
            alert("No public key");
            return;
        }
            const amount = await connection.getBalance(publicKey);
            setBalance(amount);
    }
  return (
    <div>
        <p>Balance : {balance/1000000000} SOL</p>
        <button onClick={handleBalance}>click me</button>
    </div>
  )
}

export default AirDrop