"use client";

import React from "react";
import Image from "next/image";
import { TbBrandSpotify, TbHome, TbBrandYoutube, TbBrandTiktok } from "react-icons/tb";
import Link from "next/link";

const Navbar = () => {
  //Show the navbar in mobile.
  return (
    //navbar components
    <nav className="navbar">
      <div className="logoContain">
        <Image src="/buffalo_family-.png" alt="logo" width={150} height={10} />
      </div>
      {/* original links */}
      <ul className="flex flex-row font-bold space-x-5 list-none">
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
      </ul>
    </nav>
  );
};

export default Navbar;
