import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    title: "Aplikasi Catatan Harian",
    type: "Web app",
    desc: "Aplikasi jurnal sederhana dengan penanda suasana hati dan pengingat harian.",
    tools: "React, Tailwind",
    color: "bg-[#FFD3DC]",
    link: "#",
  },
  {
    title: "Identitas Visual Kafe Kecil",
    type: "Branding",
    desc: "Logo, palet warna, dan kemasan untuk kafe lokal yang baru dibuka.",
    tools: "Figma, Illustrator",
    color: "bg-[#C9E9D8]",
    link: "#",
  },
  {
    title: "Situs Portofolio Fotografi",
    type: "Website",
    desc: "Galeri responsif dengan tampilan penuh layar dan pemuatan gambar yang ringan.",
    tools: "Vite, React",
    color: "bg-[#D6D9FF]",
    link: "#",
  },
  {
    title: "Poster Event Kampus",
    type: "Desain grafis",
    desc: "Seri poster dan materi media sosial untuk acara tahunan kampus.",
    tools: "Photoshop, Canva",
    color: "bg-[#FFE7B8]",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle note="Beberapa proyek pilihan. Ganti judul, deskripsi, dan tautan dengan karyamu.">
          Portofolio
        </SectionTitle>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group block overflow-hidden rounded-3xl border border-[#23204A]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8456B]"
            >
              <div className={`${p.color} flex h-48 items-end p-6`}>
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#23204A]">
                  {p.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-[#23204A] group-hover:text-[#E8456B]">
                  {p.title}
                </h3>
                <p className="mt-2 leading-relaxed text-[#23204A]/70">{p.desc}</p>
                <p className="mt-4 text-sm font-medium text-[#23204A]/60">Dibuat dengan {p.tools}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
