"use client";

import { AnimatePresence, motion } from "motion/react";
import UpgradeCard from "./UpgradeCard";

function Shop({ upgrades, owned, Code, costOf, onBuy, format }) {
  return (
    <div className="flex flex-col gap-2">
      {upgrades.map((u) => {
        const n = owned[u.id] || 0;
        const cost = costOf(u, n);
		if (!upgrades.length) {
		 return <p className="text-zinc-400">¡Lo has desbloqueado todo!</p>;
		}
        return (
          <UpgradeCard
            key={u.id}
            upgrade={u}
            owned={n}
            cost={cost}
            canAfford={Code >= cost}
            onBuy={() => onBuy(u)}
            format={format}
          />
        );
      })}
    </div>
  );
}

// Escritorio: panel fijo a la derecha. Móvil: botón + panel que sube desde abajo.
export default function ProjectModal({ open, onOpen, onClose, ...shopProps }) {
  return (
    <>
      {/* Escritorio */}
      <aside className="hidden h-screen overflow-y-auto border-l border-zinc-800 bg-zinc-900 p-4 lg:block">
        <h2 className="mb-4 text-lg font-semibold">Mejoras</h2>
        <Shop {...shopProps} />
      </aside>

      {/* Móvil */}
      <button
        onClick={onOpen}
        className="fixed bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-zinc-950 shadow-lg lg:hidden"
      >
        Mejoras
      </button>

      <AnimatePresence>
        {open && (
          <div className="lg:hidden">
            <motion.div
              className="fixed inset-0 z-30 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
            <motion.div
              className="fixed inset-x-0 bottom-0 z-40 max-h-[75vh] overflow-y-auto rounded-t-2xl bg-zinc-900 p-4"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Mejoras</h2>
                <button onClick={onClose} className="rounded-lg px-3 py-1 text-zinc-400 hover:bg-zinc-800">
                  Cerrar
                </button>
              </div>
              <Shop {...shopProps} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
