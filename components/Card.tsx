"use client";

import React from "react";
import SignMessage from "@/components/SignMessage";
import TransferSol from "@/components/TransferSol";
import AirDrop from "@/components/AirDrop";
import Balance from "@/components/Balance";
import Address from "./Address";

const Card = () => {
  
  return (
    <div className="flex flex-col justify-center items-center border p-4 px-12 rounded-lg shadow-md w-full max-w-md gap-y-2 relative bg-white/10 backdrop-blur-md">
      <Address />
      <Balance />
      <AirDrop />
      <SignMessage />
      <TransferSol />
    </div>
  );
};

export default Card;
