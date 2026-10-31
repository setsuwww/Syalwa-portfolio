import SectionTitle from "../components/SectionTitle";

const favorites = [
  { title: "Buku", items: ["Laskar Pelangi", "Atomic Habits", "Filosofi Teras"] },
  { title: "Musik", items: ["Indie pop", "Lo-fi", "Soundtrack film"] },
  { title: "Makanan", items: ["Nasi goreng", "Matcha latte", "Es krim stroberi"] },
  { title: "Hobi", items: ["Journaling", "Fotografi", "Menggambar digital"] },
];

export default function Favorites() {
  return (
    <section id="favorite" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle note="Hal-hal kecil yang bikin hariku lebih menyenangkan.">Favorit</SectionTitle>
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {favorites.map((f) => (
          <div key={f.title}>
            <h3 className="mb-3 border-b-4 border-[#E8456B] pb-2 font-display text-xl font-bold text-[#23204A]">
              {f.title}
            </h3>
            <ul className="space-y-2 text-[#23204A]/80">
              {f.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
