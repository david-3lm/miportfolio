import { experiences, projects, studies } from "./portfolio";

const TEXT = {
  es: { perClick: (n) => `+${n} por clic`, perSec: (n) => `+${n} CPS` },
  en: { perClick: (n) => `+${n} per click`, perSec: (n) => `+${n} CPS` },
};

// Acepta string o { es, en }
const pick = (v, lang) => (typeof v === "string" ? v : v?.[lang] ?? v?.es ?? "");

// "bahia-petricor" -> "Bahia Petricor" (solo si el proyecto no tiene `name`)
const prettify = (id) =>
  id
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const detailsOf = (x, subtitle, lang) => ({
  subtitle,
  period: pick(x.period, lang),
  description: pick(x.description, lang),
  bullets: pick(x.projects, lang) || [],
  tags: x.technologies || [],
});

const round1 = (n) => Math.round(n * 10) / 10;

export function buildUpgrades(lang = "es") {
  const t = TEXT[lang] ?? TEXT.es;
  const locale = lang === "en" ? "en-US" : "es-ES";
  const fmt = (n) => n.toLocaleString(locale, { maximumFractionDigits: 1 });

  const clickUpgrades = studies.map((s, i) => {
    const value = 15 * 30 ** i;
    return {
      id: `study-${s.id}`,
      name: pick(s.title, lang),
      image: s.image,
      type: "click",
      baseCost: 30 * 12 ** i,
      value,
      desc: t.perClick(fmt(value)),
	  ...detailsOf(s, pick(s.company, lang), lang),
    };
  });



  // Proyectos + experiencias -> producción automática, de más barato a más caro
  const autoSources = [
    ...projects.map((p) => ({
      id: `project-${p.id}`,
      name: p.name ? pick(p.name, lang) : prettify(p.id),
      image: p.image,
      url: p.url, // por si luego quieres enseñarlo en ProjectModal
    })),
    ...experiences.map((e) => ({
      id: `experience-${e.id}`,
      name: e.company,
      image: e.image,
	  ...detailsOf(e, pick(e.title, lang), lang),
    })),
  ];

  const autoUpgrades = autoSources.map((u, i) => {
    const value = round1((20 * 3 ** i) / 8); // 0.1, 0.6, 3.6, 21.6...
    return {
      ...u,
      type: "auto",
      baseCost:Math.round(20 * 3 ** i), // 15, 120, 960, 7680...
      value,
      desc: t.perSec(fmt(value)),
    };
  });

  return [...clickUpgrades, ...autoUpgrades];
}
