import Image from "next/image";


export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <Image
        src="/Sfondi/SfondoHome.jpg"
        alt="Sfondo Home"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center text-center text-white bg-gray-700 p-6 w-2/4 rounded-xl shadow-2xs">
        <p className="text-4xl">
          Benvenuto su ZampApp!
          <br />
          La tua app pensata per migliorare la vita del tuo cane (e la tua!).
          <br />
          Con ZampApp puoi programmare incontri tra cani e tenere traccia delle
          attività quotidiane del tuo amico a quattro zampe: passeggiate, pasti,
          cure veterinarie e tanto altro.
          <br />
          Tutto a portata di zampa! 🐾
        </p>
      </div>
    </div>
  );
}
