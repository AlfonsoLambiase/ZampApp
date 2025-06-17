"use client";
import { useState } from "react";
import Image from "next/image";

export default function Scheda() {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("Carica immagine");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setFileName("Cambia immagine");
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      <Image
        src="/Sfondi/SfondoScheda.jpg"
        alt="Sfondo incontri"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white bg-gray-700 p-6 w-[90%] max-w-xl rounded-xl shadow-2xl">
        <p className="text-4xl text-center mb-6">Registra il tuo cane</p>

        <form className="flex flex-col gap-4">
          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block mb-1 text-lg">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              className="w-full p-2 rounded text-black bg-white"
              placeholder="Aggiungi qui..."
            />
          </div>

          {/* Razza */}
          <div>
            <label htmlFor="razza" className="block mb-1 text-lg">
              Razza
            </label>
            <input
              type="text"
              id="razza"
              className="w-full p-2 rounded text-black bg-white"
              placeholder="Aggiungi qui..."
            />
          </div>

          {/* Sesso */}
          <div>
            <label className="block mb-1 text-lg">Sesso</label>
            <div className="flex gap-4 text-white">
              <label>
                <input type="radio" name="sesso" value="maschio" className="mr-1" />
                Maschio
              </label>
              <label>
                <input type="radio" name="sesso" value="femmina" className="mr-1" />
                Femmina
              </label>
            </div>
          </div>

          {/* Vaccino */}
          <div>
            <label className="block mb-1 text-lg">Vaccino</label>
            <div className="flex gap-4 text-white">
              <label>
                <input type="radio" name="vaccino" value="si" className="mr-1" />
                Sì
              </label>
              <label>
                <input type="radio" name="vaccino" value="no" className="mr-1" />
                No
              </label>
            </div>
          </div>

          {/* Foto */}
          <div>
            <label className="block mb-1 text-lg">Foto</label>
            <div className="flex items-center gap-2">
              <label
                htmlFor="foto"
                className="cursor-pointer px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-200 transition"
              >
                {fileName}
              </label>
              <input
                type="file"
                id="foto"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Anteprima */}
          {preview && (
            <div className="mt-4">
              <p className="mb-2 text-white">Anteprima:</p>
              <img
                src={preview}
                alt="Anteprima foto"
                className="w-32 h-32 object-cover rounded border"
              />
            </div>
          )}

          {/* Bottone Salva */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-white hover:bg-gray-300 text-black px-6 py-2 rounded shadow font-semibold transition"
            >
              Salva
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
