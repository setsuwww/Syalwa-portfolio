const data = {
  about: [
    "Halo, aku Syalwa Nabila Raihan. Aku senang belajar hal baru, terutama yang menggabungkan kreativitas dan teknologi.",
    "Di luar pekerjaan, aku biasanya membaca, mendengarkan musik, atau mencari kafe baru untuk mengerjakan proyek berikutnya.",
  ],
  facts: [
    { label: "Berbasis di", value: "Indonesia" },
    { label: "Fokus", value: "Desain & pengembangan web" },
    { label: "Bahasa", value: "Indonesia, Inggris" },
  ],
};

export default function About() {
  return (
    <section id="about" className="bg-[#23204A] py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Tentang aku</h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/80">
            {data.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <dl className="self-end divide-y divide-white/15 border-y border-white/15">
          {data.facts.map((f) => (
            <div key={f.label} className="flex justify-between gap-6 py-4">
              <dt className="text-white/60">{f.label}</dt>
              <dd className="text-right font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
