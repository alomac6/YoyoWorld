'use client'
import { useState } from 'react';
import Navbar from "@/components/navbar";
import PhotoDisplay from "@/components/PhotoDisplay";
export default function Home() {
  const [openMenu, setOpenMenu] = useState({
    gallery: false,
    tutorials: false,
    overlay: false
  });
  return (
    <div className="flex-1 flex flex-col min-h-screen overflow-y-auto">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
    <main className="w-full flex items-center"
      onMouseEnter={() => setOpenMenu(prev => ({...prev, overlay: false}))}
      >
        <PhotoDisplay/>
      </main>
    </div>
  );
}
