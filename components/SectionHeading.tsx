export default function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
    {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
    <h2 className="text-[30px] leading-[1.12] font-[800] tracking-[-0.03em] sm:text-[38px] lg:text-[42px]">{title}</h2>
    {text && <p className="muted mt-4 text-[15px] leading-7 sm:text-[16px]">{text}</p>}
  </div>;
}
