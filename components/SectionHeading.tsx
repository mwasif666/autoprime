export default function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
    {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
    <h2 className="text-[34px] leading-[1.08] font-[800] tracking-[-0.035em] sm:text-[44px]">{title}</h2>
    {text && <p className="muted mt-5 text-[17px] leading-7">{text}</p>}
  </div>;
}
