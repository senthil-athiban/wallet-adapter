"use client";

import React from "react";
import SignMessage from "@/components/SignMessage";
import TransferSol from "@/components/TransferSol";
import AirDrop from "@/components/AirDrop";
import Balance from "@/components/Balance";
import Address from "./Address";

const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center border border-blue-400 p-8 rounded-3xl shadow-md w-full max-w-md gap-y-2 relative bg-white/20 backdrop-blur-2xl border-gray-200/20">
      <Address />
      <Balance />
      <AirDrop />
      <SignMessage />
      <TransferSol />
    </div>
  );
};

export default Card;
