'use client';
import { UserCircle } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({openMenu, setOpenMenu}) {
    return (
      <nav className="bg-gray-700 flex w-full h-auto justify-center z-30 fixed top-0">
          <div className="min-h-screen w-full inset-0 fixed pointer-events-none">
          {openMenu.overlay&&(<div className="w-full h-1/3 bg-gray-900/95 z-40 pointer-events-auto"></div>
          )}
          </div>
        <div className="flex justify-between w-3/5 pointer-events-none">
          <ul className="flex items-center justify-evenly flex-1 z-50">
            <li className="text-white text-2xl flex h-16 items-center group hover:text-black relative pointer-events-auto"
            onMouseEnter={() => setOpenMenu(prev => ({...prev, gallery: true, overlay: true}))}
            onMouseLeave={() => setOpenMenu(prev => ({...prev, gallery: false}))}
            >
              <a href="placeholder" className="relative">Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-350 delay-100 group-hover:w-full"></span>
              </a>
              {openMenu.gallery && (
                <div className="absolute top-full z-50">
                  <div className="left-0 bg-gray-700 animate-dropdown-1 mt-1 group/item">
                    <a href="#" className="block px-4 py-2 text-white hover:text-black relative">Yoyos
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-350 delay-100 group-hover/item:w-full"></span>
                    </a>
                  </div>
                  <div className="left-0 bg-gray-700 animate-dropdown-2 mt-1 group/item">
                    <a href="#" className="block px-4 py-2 text-white hover:text-black relative">Events
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-350 delay-100 group-hover/item:w-full"></span>
                    </a>
                  </div>
                </div>
              )}
            </li>
            <li className="text-white text-2xl flex h-16 items-center group hover:text-black relative pointer-events-auto"
                onMouseEnter={() => setOpenMenu(prev => ({...prev, tutorials: true, overlay: true}))}
                onMouseLeave={() => setOpenMenu(prev => ({...prev, tutorials: false}))}
                >
                <a href="placeholder" className="relative">Tutorials
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-350 group-hover:w-full"></span>
                </a>
                {openMenu.tutorials && (
                <div className="absolute top-full z-50">
                  <div className="left-0 bg-gray-700 animate-dropdown-1 mt-1 group/item">
                    <a href="#" className="block px-4 py-2 text-white hover:text-black relative">Basics
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-350 delay-100 group-hover/item:w-full"></span>
                    </a>
                  </div>
                  <div className="left-0 bg-gray-700 animate-dropdown-2 mt-1 group/item">
                    <a href="#" className="block px-4 py-2 text-white hover:text-black relative">Combos
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-350 delay-100 group-hover/item:w-full"></span>
                    </a>
                  </div>
                </div>
              )}
            </li>
              <li className="text-white text-2xl flex h-16 items-center group hover:text-black pointer-events-auto">
                <a href="placeholder" className="relative">YoYo Glossary
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-350 group-hover:w-full"></span>
                </a>
              </li>
              <li className="text-white text-2xl flex h-16 items-center group hover:text-black pointer-events-auto">
                <a href="placeholder" className="relative">Events
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-350 group-hover:w-full"></span>
                </a>
              </li>
          </ul>
          <div className="flex items-center h-16 group"><a href="placeholder" className="relative flex items-center text-white hover:text-black z-50 pointer-events-auto">
              <span className="relative">
                <UserCircle size={48} />
                  <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-orange-600"></span>
              </span></a></div>
        </div>
      </nav>
    );
  }