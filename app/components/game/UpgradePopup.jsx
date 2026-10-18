"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

const T = {
  es: { close: "Seguir jugando", visit: "Ver proyecto" },
  en: { close: "Keep playing", visit: "View project" },
};

export default function UpgradePopup({ upgrade, onClose, lang = "es" }) {
  const t = T[lang] ?? T.es;

  // Cerrar con Escape
  useEffect(() => {
    if (!upgrade) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [upgrade, onClose]);

  return (
    <AnimatePresence>
      {upgrade && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={upgrade.name}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.85, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 12 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-amber-500/40 bg-zinc-900 p-6 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              {upgrade.image && (
                <img src={upgrade.image} alt="" className="h-16 w-16 shrink-0 rounded-lg object-contain" />
              )}
              <div>
                <h2 className="text-xl font-bold">{upgrade.name}</h2>
                {upgrade.subtitle && <p className="text-sm text-zinc-400">{upgrade.subtitle}</p>}
                {upgrade.period && <p className="text-sm text-zinc-500">{upgrade.period}</p>}
              </div>
            </div>

            <p className="mt-4 inline-block rounded-full bg-amber-500/15 px-3 py-1 text-sm text-amber-300">
              {upgrade.desc}
            </p>

            {upgrade.description && <p className="mt-4 text-zinc-300">{upgrade.description}</p>}

            {upgrade.bullets?.length > 0 && (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-zinc-300">
                {upgrade.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}

            {upgrade.tags?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {upgrade.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              {upgrade.url && (
                <a
                  href={upgrade.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800"
                >
                  {t.visit}
                </a>
              )}
              <button
                onClick={onClose}
                autoFocus
                className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-amber-400"
              >
                {t.close}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
