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
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-[#ece6f5] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8ff_100%)]">
      <span className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full border border-[#eee7f7]" />
      <span className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full border border-[#eee7f7]" />
      <div className={`container-site relative grid min-h-[560px] items-center gap-10 py-14 lg:grid-cols-[.82fr_1.18fr] lg:py-18 ${reverse ? 'lg:grid-cols-[1.18fr_.82fr]' : ''}`}>
        <div className={reverse ? 'lg:order-2' : ''}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ddd0f4] bg-[#f7f1ff] px-3 py-2 text-[10px] font-black uppercase tracking-[.13em] text-[#6d28d9]">
            {eyebrow}
          </div>
          <h1 className="mt-5 max-w-[760px] text-[39px] font-[850] leading-[1.02] tracking-[-.05em] text-[#171230] sm:text-[48px] lg:text-[54px]">
            {title}
          </h1>
          <p className="muted mt-5 max-w-[680px] text-[15px] leading-7 sm:text-[16px]">{description}</p>

          {(primary || secondary) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {primary && <Link href={primary.href} className="btn-primary">{primary.label} <ArrowRight size={16}/></Link>}
              {secondary && <Link href={secondary.href} className="btn-secondary">{secondary.label}</Link>}
            </div>
          )}

          {bullets.length > 0 && (
            <div className="mt-7 grid gap-2 sm:grid-cols-2">
              {bullets.slice(0,4).map(item => (
                <div key={item} className="flex items-start gap-2 text-[12px] font-semibold text-[#5f576c]">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#f0e8ff] text-[#6d28d9]"><Check size={11}/></span>
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {visual && (
          <div className={`relative min-w-0 ${reverse ? 'lg:order-1' : ''}`}>
            <div className="overflow-hidden rounded-[24px] border border-[#e2d8ef] bg-white p-3 sm:p-4">
              {visual}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
