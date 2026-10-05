import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const icon8 = (name: string) => `https://img.icons8.com/color/96/${name}.png`;

const steps = [
  {
    number: '01',
    title: 'Submit Your Request',
    text: 'Tell us the product, target price and key requirements.',
    icon: 'task',
    soft: '#f4eeff',
  },
  {
    number: '02',
    title: 'We Search Suppliers',
    text: 'Our sourcing workflow checks relevant suppliers and factories.',
    icon: 'factory',
    soft: '#eef7ff',
  },
  {
    number: '03',
    title: 'Compare Best Options',
    text: 'Review pricing, MOQ and supplier options in one place.',
    icon: 'search--v1',
    soft: '#edfff4',
  },
  {
    number: '04',
    title: 'Approve & Order',
    text: 'Choose the right option and move forward with sourcing.',
    icon: 'purchase-order',
    soft: '#fff3e8',
  },
];

export default function SimpleSourcingSection() {
  return (
    <section id="simple-sourcing" className="section border-y border-[#eee8f4] bg-[#fcfbff]">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <div className="eyebrow">Sourcing request service</div>
            <h2 className="mt-4 max-w-[650px] text-[32px] font-[880] leading-[1.05] tracking-[-.045em] text-[#171230] sm:text-[40px]">
              Can’t Find the Product? <span className="gradient-text">We’ll Help Source It.</span>
            </h2>
            <p className="muted mt-4 max-w-[620px] text-[14px] leading-7">
              Send us the product details and target requirements. We’ll help organize supplier options so you can compare and choose the best fit.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 lg:justify-end">
            {[
              ['factory', 'Direct factory'],
              ['verified-account', 'Verified suppliers'],
              ['price-tag', 'Competitive pricing'],
            ].map(([icon, label]) => (
              <div key={label} className="flex items-center gap-2 rounded-[12px] border border-[#e6def0] bg-white px-3 py-2.5">
                <img src={icon8(icon)} alt="" className="h-6 w-6 object-contain" loading="lazy" />
                <span className="text-[10px] font-extrabold text-[#29213a]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article key={step.title} className="rounded-[18px] border border-[#e6deef] bg-white p-5">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-9 min-w-9 place-items-center rounded-[10px] bg-[linear-gradient(135deg,#6d28d9,#9b2cff)] px-2 text-[10px] font-black text-white">
                  {step.number}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-[12px] border border-[#ece4f4]" style={{ background: step.soft }}>
                  <img src={icon8(step.icon)} alt="" className="h-7 w-7 object-contain" loading="lazy" />
                </span>
              </div>
              <h3 className="mt-5 text-[14px] font-[850] tracking-[-.02em] text-[#171230]">{step.title}</h3>
              <p className="mt-2 text-[10px] leading-5 text-[#746c80]">{step.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-4 rounded-[18px] border border-[#ded2ef] bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[13px] font-extrabold text-[#171230]">Need help finding a product?</div>
            <div className="mt-1 text-[10px] text-[#756d80]">Send a sourcing request and review the available supplier options.</div>
          </div>
          <Link href="/contact" className="btn-primary min-h-[44px] shrink-0 px-5 text-[12px]">
            Submit Sourcing Request <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
