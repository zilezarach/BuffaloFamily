"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleShop = () => {
    router.push("/Shop");
  };

  return (
    <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/background.gif')" }}>
      <div className="flex flex-col justify-center items-center h-screen">
        <Image src="/Gang_logo.png" alt="logo" width={300} height={300} className="logo" />
        <div className="flex justify-center items-center mt-7">
          <button onClick={handleShop} className="p-5 text-white rounded-md bg-amber-800 hover:bg-blue-600">
            Come Say Hi😎
          </button>
        </div>
      </div>
    </div>
  );
}
