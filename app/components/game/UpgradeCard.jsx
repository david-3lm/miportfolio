"use client";

import { motion } from "motion/react";

export default function UpgradeCard({ upgrade, owned, cost, canAfford, onBuy, format }) {
  return (
    <motion.button
      onClick={onBuy}
      disabled={!canAfford}
      whileHover={canAfford ? { x: -4 } : undefined}
      whileTap={canAfford ? { scale: 0.97 } : undefined}
      className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
        canAfford
          ? "border-amber-500/40 bg-zinc-800 hover:bg-zinc-700"
          : "cursor-not-allowed border-zinc-800 bg-zinc-900 opacity-50"
      }`}
    >
		{upgrade.image ? (
		  <img src={upgrade.image} alt="" className="h-10 w-10 shrink-0 rounded-md object-contain" />
		) : (
		  <span className="text-3xl">{upgrade.icon}</span>
		)}

      <span className="flex-1">
        <span className="block font-semibold">{upgrade.name}</span>
        <span className="block text-sm text-zinc-400">{upgrade.desc}</span>
        <span className={`block text-sm ${canAfford ? "text-amber-300" : "text-zinc-500"}`}>
          CPS {format(cost)}
        </span>
      </span>

      <span className="text-2xl font-bold tabular-nums text-zinc-500">{owned}</span>
    </motion.button>
  );
}
