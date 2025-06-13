"use client"
import Image from "next/image";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function Incontri() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/Animazioni/Localizzatore.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Image
        src="/Sfondi/SfondoIncontri.jpg"
        alt="Sfondo incontri"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white bg-gray-700 p-6 w-[90%] max-w-xl rounded-xl shadow-2xl">
        <p className="text-4xl text-center mb-6">LOCALIZZATI</p>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="w-1/3" htmlFor="citta">
              Città:
            </label>
            <input
              id="citta"
              type="text"
              className="w-2/3 p-1 text-black rounded bg-white"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="w-1/3" htmlFor="cap">
              CAP:
            </label>
            <input
              id="cap"
              type="text"
              className="w-2/3 p-1 text-black rounded bg-white"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="w-1/3" htmlFor="paese">
              Paese:
            </label>
            <input
              id="paese"
              type="text"
              className="w-2/3 p-1 text-black rounded bg-white"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="w-40 h-40">
            {animationData ? (
              <Lottie animationData={animationData} loop />
            ) : (
              <p>...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
