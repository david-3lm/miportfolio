"use client";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher({ currentLang }) {
  const router = useRouter();
  const pathname = usePathname();

  function changeLang(lang) {
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
  }

  const btnClass = (disabled) =>
    `px-4 py-2 rounded font-semibold transition ${
      disabled
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-gray-600 hover:bg-gray-700 text-white"
    }`;

  return (
    <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
      <button
        disabled={currentLang === "es"}
        onClick={() => changeLang("es")}
        className={btnClass(currentLang === "es")}
      >
        ES
      </button>
      <button
        disabled={currentLang === "en"}
        onClick={() => changeLang("en")}
        className={btnClass(currentLang === "en")}
      >
        EN
      </button>
    </div>
  );
}
