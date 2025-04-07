"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  TbBrandSpotify,
  TbHome,
  TbBrandYoutube,
  TbBrandTiktok,
  TbBrandInstagram,
  TbBrandRumble,
  TbMenu2,
  TbMenu,
} from "react-icons/tb";
import Link from "next/link";

const Navbar = () => {
  //Show the navbar in mobile.
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    //navbar components
    <nav className="navbar">
      <div className="flex justify-between items-center">
        <div className="logoContain">
          <Image
            src="/buffalo_family-.png"
            alt="logo"
            width={150}
            height={10}
          />
        </div>
        {/* original links */}
        <ul className="hidden md:flex flex-row font-bold space-x-5 list-none">
          <li className="text-white hover:text-amber-700">
            <Link href="/">
              <TbHome className="inline-block" /> Home
            </Link>
          </li>
          <li className="text-white hover:text-amber-700">
            <Link href="https://youtube.com/@BuffaloFamily">
              <TbBrandYoutube className="inline-block" /> Youtube
            </Link>
          </li>
          <li className="text-white hover:text-amber-700">
            <Link href="https://open.spotify.com/user/31nnciv64lbpx3wgfmsnanwu6hbm?si=vCI3JRbyQYyknWJiO6djhw&nd=1&dlsi=3611ff4cca314d7f">
              <TbBrandSpotify className="inline-block" /> Spotify
            </Link>
          </li>
          <li className="text-white hover:text-amber-700">
            <Link href="https://www.tiktok.com/@buffalofamily">
              <TbBrandTiktok className="inline-block" /> Tiktok
            </Link>
          </li>
          <li className="text-white hover:text-amber-700">
            <Link href="https://www.instagram.com/buffalo_kambinare?igsh=c2ZlNTdyeHI2MDcz&utm_source=qr">
              <TbBrandInstagram className="inline-block" /> Instagram
            </Link>
          </li>
          <li className="text-white hover:text-amber-700">
            <Link href="https://rumble.com/v6r64h8-buffalo-family-kambinare-grilled.html">
              <TbBrandRumble className="inline-block" /> Rumble
            </Link>
          </li>
        </ul>
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle-Menu"
        >
          {isOpen ? <TbMenu /> : <TbMenu2 />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col font-bold space-y-4 list-none">
            <li className="text-white hover:text-amber-700">
              <Link href="/">
                <TbHome className="inline-block" /> Home
              </Link>
            </li>
            <li className="text-white hover:text-amber-700">
              <Link href="https://youtube.com/@BuffaloFamily">
                <TbBrandYoutube className="inline-block" /> Youtube
              </Link>
            </li>
            <li className="text-white hover:text-amber-700">
              <Link href="https://open.spotify.com/user/31nnciv64lbpx3wgfmsnanwu6hbm?si=vCI3JRbyQYyknWJiO6djhw&nd=1&dlsi=3611ff4cca314d7f">
                <TbBrandSpotify className="inline-block" /> Spotify
              </Link>
            </li>
            <li className="text-white hover:text-amber-700">
              <Link href="https://www.tiktok.com/@buffalofamily">
                <TbBrandTiktok className="inline-block" /> Tiktok
              </Link>
            </li>
            <li className="text-white hover:text-amber-700">
              <Link href="https://www.instagram.com/buffalo_kambinare?igsh=c2ZlNTdyeHI2MDcz&utm_source=qr">
                <TbBrandInstagram className="inline-block" /> Instagram
              </Link>
            </li>
            <li className="text-white hover:text-amber-700">
              <Link href="https://rumble.com/v6r64h8-buffalo-family-kambinare-grilled.html">
                <TbBrandRumble className="inline-block" /> Rumble
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
