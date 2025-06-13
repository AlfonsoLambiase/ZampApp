"use client";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";



const Navbar: FC = () => {
  
  return (
    <div className="flex items-center justify-between bg-gray-700/90 px-4 py-2 h-[88px] max-h-screen w-full">
      {/* Hamburger sinistro */}
      <div className="w-[40px] h-[40px] flex-shrink-0 relative">
        <Image
          src="/HeaderHamburger.png"
          alt="HamnurgerMenu"
          fill
          className="object-contain"
        />
      </div>

      {/* Icone centrali */}
      <div className="flex gap-6 justify-center items-center flex-grow">
        <Link href="/">
          <div className="relative w-[40px] h-[40px]">
            <Image
              src="/HeaderHouse.png"
              alt="Casa"
              fill
              className="object-contain"
            />
          </div>
        </Link>


        <div className="relative w-[45px] h-[45px]">
          <Image
            src="/HeaderDog2.png"
            alt="Cane"
            fill
            className="object-contain"
          />
        </div>

      <Link href="/incontri">
        <div className="relative w-[45px] h-[45px]">
          <Image
            src="/HeaderHeart.png"
            alt="Cuore"
            fill
            className="object-contain"
          />
        </div>
        </Link>

        <div className="relative w-[45px] h-[45px]">
          <Image
            src="/HeaderNote.webp"
            alt="Nota"
            fill
            className="object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default Navbar;
