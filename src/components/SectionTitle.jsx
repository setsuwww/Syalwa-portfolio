export default function SectionTitle({ children, note }) {
  return (
    <div className="mb-10 max-w-xl">
      <h2 className="font-display text-4xl font-bold tracking-tight text-[#23204A] sm:text-5xl">
        {children}
      </h2>
      {note && <p className="mt-3 text-base leading-relaxed text-[#23204A]/70">{note}</p>}
    </div>
  );
}
