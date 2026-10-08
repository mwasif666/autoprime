import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight, Check } from 'lucide-react';

type Props = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: string;
  bullets?: string[];
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  visual?: ReactNode;
  reverse?: boolean;
  titleSize?: 'default' | 'compact';
};

export default function PageHero({
  eyebrow,
  title,
  description,
  bullets = [],
  primary,
  secondary,
  visual,
  reverse = false,
  titleSize = 'compact',
}: Props) {
  const titleClassName = titleSize === 'compact'
    ? 'text-[34px] sm:text-[40px] lg:text-[45px] xl:text-[48px] leading-[1.02] tracking-[-.045em]'
    : 'text-[38px] sm:text-[46px] lg:text-[52px] xl:text-[56px] leading-[1] tracking-[-.05em]';

  return (
    <section className="relative overflow-hidden border-b border-[#ece6f5] bg-[radial-gradient(circle_at_84%_8%,#eee6ff_0,transparent_31%),linear-gradient(180deg,#ffffff_0%,#faf7ff_100%)]">
      <div className={`container-site relative grid min-h-[520px] items-center gap-8 py-10 lg:grid-cols-[.86fr_1.14fr] lg:gap-10 lg:py-14 ${reverse ? 'lg:grid-cols-[1.14fr_.86fr]' : ''}`}>
        <div className={reverse ? 'lg:order-2' : ''}>
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#ddd0f4] bg-[#f7f1ff] px-3.5 py-2 text-[9px] font-black uppercase tracking-[.11em] text-[#6d28d9] sm:text-[10px]">
            {eyebrow}
          </div>
          <h1 className={`mt-5 max-w-[660px] font-[900] text-[#171230] ${titleClassName}`}>
            {title}
          </h1>
          <div className="mt-4 h-[3px] w-20 rounded-full bg-[linear-gradient(90deg,#7c3aed,#ef2eb8)]" />
          <p className="muted mt-5 max-w-[620px] text-[14px] leading-7 sm:text-[15px]">{description}</p>

          {(primary || secondary) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {primary && <Link href={primary.href} className="btn-primary min-h-[48px] px-6 !text-white">{primary.label} <ArrowRight size={16}/></Link>}
              {secondary && <Link href={secondary.href} className="btn-secondary min-h-[48px] px-6">{secondary.label}</Link>}
            </div>
          )}

          {bullets.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
              {bullets.slice(0,4).map(item => (
                <div key={item} className="flex items-start gap-2 text-[10px] font-bold text-[#625a70] sm:text-[11px]">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#efe8ff] text-[#6d28d9]"><Check size={11}/></span>
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {visual && (
          <div className={`relative flex min-w-0 items-center justify-center ${reverse ? 'lg:order-1' : ''}`}>
            {visual}
          </div>
        )}
      </div>
    </section>
  );
}
