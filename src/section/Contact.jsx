const contact = {
  email: "syalwa@example.com",
  links: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "GitHub", href: "https://github.com/" },
  ],
};

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-extrabold leading-none tracking-tighter text-[#23204A]">
        Punya proyek atau ide?
        <br />
        Ayo ngobrol.
      </h2>
      <a
        href={`mailto:${contact.email}`}
        className="mt-10 inline-block break-all border-b-4 border-[#E8456B] font-display text-2xl font-bold text-[#23204A] hover:text-[#E8456B] sm:text-3xl"
      >
        {contact.email}
      </a>
      <ul className="mt-10 flex flex-wrap gap-3">
        {contact.links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-[#23204A] px-5 py-2 text-sm font-semibold text-[#23204A] hover:bg-[#23204A] hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
