// app/loading.tsx
"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Loading() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/Animazioni/Caricamento.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  if (!animationData) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-64 h-64">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
}
