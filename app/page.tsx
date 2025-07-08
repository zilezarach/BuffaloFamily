"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  const handleShop = () => router.push("/Shop");

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/background.gif')" }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/Gang_logo.png"
          alt="Buffalo Family Logo"
          width={300}
          height={300}
          className="mb-6"
          priority
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Welcome to Buffalo Family
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
          Join the musical movement — beats, unity, and vibes from Uthiru 22 to
          the world.
        </p>

        <motion.button
          onClick={handleShop}
          className="px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white rounded-full font-semibold shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Come Say Hi 😎
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaChevronDown size={24} />
      </motion.div>
    </div>
  );
}
