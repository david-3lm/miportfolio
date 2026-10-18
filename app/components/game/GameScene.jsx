"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import Sprite from "./Sprite";

export default function GameScene({ Code, cps, clickPower, onCookieClick, format }) {
  const areaRef = useRef(null);
  const idRef = useRef(0);
  const [pops, setPops] = useState([]); // números flotantes "+1"

  const handleClick = (e) => {
    onCookieClick();

    const rect = areaRef.current.getBoundingClientRect();
    // Si se activa con teclado, clientX/Y valen 0: usamos el centro
    const keyboard = e.clientX === 0 && e.clientY === 0;
    const x = keyboard ? rect.width / 2 : e.clientX - rect.left;
    const y = keyboard ? rect.height / 2 : e.clientY - rect.top;

	const spriteFps = (cps) => Math.min(12, 2 + Math.log10(1 + cps) * 3);
    const id = idRef.current++;
    setPops((p) => [...p, { id, x, y }]);
    setTimeout(() => setPops((p) => p.filter((n) => n.id !== id)), 800);
  };

  return (
    <section
      ref={areaRef}
      className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden px-6 pb-24 lg:pb-0"
    >

      <div className="text-center">
        <p className="text-5xl font-bold tabular-nums sm:text-6xl">{format(Math.floor(Code))}</p>
        <p className="mt-1 text-zinc-400">Code Per Second</p>
        <p className="mt-3 text-sm text-zinc-500">
          {format(cps)} por segundo · {format(clickPower)} por clic
        </p>
      </div>

      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05, rotate: -3 }}
        whileTap={{ scale: 0.92, rotate: 3 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="select-none rounded-full text-[9rem] leading-none outline-none focus-visible:ring-4 focus-visible:ring-amber-400/60 sm:text-[12rem]"
        aria-label="Hacer clic en la galleta"
      >
        <motion.div>
			<Sprite
			  src="/Typin.png"
			  frameWidth={32}
			  frameHeight={32}
			  frames={2}
			  fps={(cps)}
			/>
		</motion.div>
      </motion.button>
      {pops.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -70 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ left: p.x, top: p.y }}
          className="pointer-events-none absolute -translate-x-1/2 text-xl font-bold text-amber-300"
        >
          +{format(clickPower)}
        </motion.span>
      ))}
    </section>
  );
}
