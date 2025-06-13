"use client";
import Image from "next/image";

export default function registro(){

return(
    <>
 <div className="relative w-full min-h-screen">
      <Image
        src="/Sfondi/SfondoRegistro.jpg"
        alt="Sfondo incontri"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white bg-gray-700 p-6 w-[90%] max-w-xl rounded-xl shadow-2xl">
        <p className="text-4xl text-center mb-6">Registra il tuo cane</p>
        </div>
        </div>
        </>
)
};