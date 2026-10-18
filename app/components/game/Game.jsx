"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { buildUpgrades } from "@/data/upgrades";
import Link from "next/link";
import GameScene from "./GameScene";
import ProjectModal from "./ProjectModal";
import UpgradePopup from "./UpgradePopup";

const GROWTH = 1.15;
const costOf = (u, owned) => Math.ceil(u.baseCost * GROWTH ** owned);

const nf = new Intl.NumberFormat("es-ES", { notation: "compact", maximumFractionDigits: 1 });
export const format = (n) => (n < 1000 ? n.toLocaleString("es-ES", { maximumFractionDigits: 1 }) : nf.format(n));

export default function Game({lang}) {
  const UPGRADES = useMemo(() => buildUpgrades(lang), [lang]);
  const [Code, setCode] = useState(0);
  const [owned, setOwned] = useState({});
  const [shopOpen, setShopOpen] = useState(false); // solo móvil
  const [popup, setPopup] = useState(null);

  const count = (id) => owned[id] || 0;
  const sum = (type) =>
    UPGRADES.filter((u) => u.type === type).reduce((s, u) => s + u.value * count(u.id), 0);

  const clickPower = 1 + sum("click");
  const cps = sum("auto");

  // Bucle de producción pasiva: 10 ticks por segundo
  const cpsRef = useRef(cps);
  useEffect(() => {
    cpsRef.current = cps;
  }, [cps]);
  useEffect(() => {
    const t = setInterval(() => setCode((c) => c + cpsRef.current / 10), 100);
    return () => clearInterval(t);
  }, []);

  const handleCookieClick = () => setCode((c) => c + clickPower);

  const buy = (u) => {
	if (count(u.id) >= 1) return;
    const cost = costOf(u, count(u.id));
    if (Code < cost) return;
    setCode((c) => c - cost);
    setOwned((o) => ({ ...o, [u.id]: count(u.id) + 1 }));
	setPopup(u);
  };

  const finished = UPGRADES.every((u) => count(u.id) >= 1);

  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100 lg:grid lg:grid-cols-[1fr_380px]">
      <Link
        href="/"
        className="absolute left-4 top-4 z-10 rounded-lg px-3 py-1.5 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
      >
        ← Volver al portfolio
      </Link>

      <GameScene
        Code={Code}
        cps={cps}
        clickPower={clickPower}
        onCookieClick={handleCookieClick}
        format={format}
      />

      <ProjectModal
        upgrades={UPGRADES.filter((u) => !count(u.id))}
        owned={owned}
        Code={Code}
        costOf={costOf}
        onBuy={buy}
        format={format}
        open={shopOpen}
        onOpen={() => setShopOpen(true)}
        onClose={() => setShopOpen(false)}
      />

	  <UpgradePopup 
		upgrade={popup} 
		onClose={() => setPopup(null)} 
		lang={lang}
	  />
    </main>
  );
}
