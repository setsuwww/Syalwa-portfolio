const nav = [
  ["Tentang", "#about"],
  ["Favorit", "#favorite"],
  ["Portofolio", "#portfolio"],
  ["Kontak", "#contact"],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#23204A]/10 bg-[#F4F2FB]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold text-[#23204A]">
          Syalwa N.R.
        </a>
        <ul className="flex gap-5 text-sm font-medium text-[#23204A]/80 sm:gap-8">
          {nav.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="hover:text-[#E8456B] focus-visible:outline-2 focus-visible:outline-[#E8456B]">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
