'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'

export default function Home() {
  const [steps, setSteps] = useState(0)
  let time = 0
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      time++;
      if (time >= 10) {
        clearInterval(interval);
      }
    }, 500);

    const animationInterval = setInterval(() => {
      setSteps((prevState) => {
        if (prevState < 100) {
          return prevState + 1;
        }
        clearInterval(animationInterval);
        return prevState;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(animationInterval);
    };
  }, []);

  const barStyle = {
    width: `${steps}%`,
    transition: "width 0.5s ease-in-out" // Adicionando a animação ease-in-out
  };

  if (barStyle.width === '100%') {
    setTimeout(() => {
      router.push('https://chat.whatsapp.com/DiN4ptQ5YEaLaE8oFFkjbX')
    }, 500)
  }

  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="relative flex flex-col text-center items-center justify-center h-[444px] px-12 rounded-mdbg-white shadow-xl rounded-xl">
        <img src="./images/logo3.png" alt="" className="-translate-y-6 w-28 h-28 rounded-full" />
        <div>
          <h2 className="text-3xl font-medium">Só um momento...</h2>
          <p>Estamos procurando o melhor grupo para você</p>
        </div>
        <div className="relative flex justify-center items-center rounded-md w-full h-6 mt-4 bg-gray-200 overflow-hidden">
          <div className={`absolute left-0 h-full bg-emerald-400`} style={barStyle}></div>
          {barStyle.width === '100%' && (
            <svg viewBox="25 25 50 50" className="z-10 absolute">
              <circle r="20" cy="50" cx="50"></circle>
            </svg>
          )}
        </div>
      </div>
    </main>
  )
}