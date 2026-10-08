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
    <section className="relative overflow-hidden border-b border-[#ece6f5] bg-[radial-gradient(circle_at_84%_8%,#eee6ff_0,transparent_31%),linear-gradient(180deg,#ffffff_0%,#faf7ff_100%)]">
      <div className={`container-site relative grid min-h-[590px] items-center gap-8 py-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-8 lg:py-16 ${reverse ? 'lg:grid-cols-[1.18fr_.82fr]' : ''}`}>
        <div className={reverse ? 'lg:order-2' : ''}>
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#ddd0f4] bg-[#f7f1ff] px-3.5 py-2 text-[9px] font-black uppercase tracking-[.11em] text-[#6d28d9] sm:text-[10px]">
            {eyebrow}
          </div>
          <h1 className="mt-5 max-w-[700px] text-[39px] font-[900] leading-[.98] tracking-[-.055em] text-[#171230] sm:text-[48px] lg:text-[55px] xl:text-[59px]">
            {title}
          </h1>
          <div className="mt-4 h-[3px] w-20 rounded-full bg-[linear-gradient(90deg,#7c3aed,#ef2eb8)]" />
          <p className="muted mt-5 max-w-[650px] text-[14px] leading-7 sm:text-[16px]">{description}</p>

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
          <div className={`relative min-w-0 ${reverse ? 'lg:order-1' : ''}`}>
            <div className="overflow-hidden rounded-[24px] border border-[#e2d8ef] bg-white/85 p-2.5 sm:p-3.5">
              {visual}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
