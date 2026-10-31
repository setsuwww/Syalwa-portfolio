const data = {
  name: ["Syalwa", "Nabila", "Raihan"],
  role: "Creative & Digital Enthusiast",
  intro:
    "Aku suka mengubah ide yang masih berantakan jadi karya yang rapi dan enak dilihat.",
};

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-24 pt-16 md:grid-cols-[1.4fr_1fr] md:pt-24">
      <div>
        <p className="mb-6 text-base text-[#23204A]/70">{data.role}</p>
        <h1 className="font-display text-[clamp(3.5rem,13vw,9rem)] font-extrabold leading-[0.85] tracking-tighter text-[#23204A]">
          {data.name.map((n, i) => (
            <span key={n} className={`block ${i === 1 ? "pl-[0.6em] text-[#E8456B]" : ""}`}>
              {n}
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-[#23204A]/80">{data.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#portfolio" className="rounded-full bg-[#23204A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#E8456B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8456B]">
            Lihat karya
          </a>
          <a href="#contact" className="rounded-full border-2 border-[#23204A] px-6 py-3 text-sm font-semibold text-[#23204A] hover:bg-[#23204A] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8456B]">
            Hubungi aku
          </a>
        </div>
      </div>

      {/* Ganti blok ini dengan <img src="/foto.jpg" alt="Foto Syalwa" className="..." /> */}
      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
        <div className="absolute inset-0 rounded-t-full bg-[#D6D9FF]" />
        <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-[#FFD3DC]" />
        <div className="absolute inset-0 flex items-center justify-center font-display text-8xl font-extrabold text-[#23204A]/25">
          SNR
        </div>
      </div>
    </section>
  );
}
