import { useEffect, useState } from "react";

const nav = [
  ["Tentang", "#about"],
  ["Favorit", "#favorite"],
  ["Portofolio", "#portfolio"],
  ["Kontak", "#contact"],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Spacer: header bersifat fixed, jadi konten diberi ruang setinggi header */}
      <div className="h-16" aria-hidden="true" />

      <header
        className={`fixed inset-x-0 top-0 z-20 transition-all duration-300 motion-reduce:transition-none ${
          scrolled ? "px-4 pt-4" : "px-0 pt-0"
        }`}
      >
        <nav
          className={`mx-auto flex h-16 items-center justify-between border border-[#23204A]/10 px-6 transition-all duration-300 motion-reduce:transition-none ${
            scrolled
              ? "max-w-7xl rounded-full bg-[#F4F2FB]/70 shadow-lg shadow-[#23204A]/10 backdrop-blur-sm"
              : "max-w-full rounded-none border-x-transparent border-t-transparent bg-[#F4F2FB]/90"
          }`}
        >
          <a href="#top" className="font-display text-lg font-bold text-[#23204A]">
            Syalwa N.R.
          </a>
          <ul className="flex gap-5 text-sm font-medium text-[#23204A]/80 sm:gap-8">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-[#E8456B] focus-visible:outline-2 focus-visible:outline-[#E8456B]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
