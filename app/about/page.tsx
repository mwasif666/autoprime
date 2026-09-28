import type { Metadata } from 'next';
import { Check, Layers3, LineChart, Workflow } from 'lucide-react';
import MarketingCta from '@/components/MarketingCta';
import SectionHeading from '@/components/SectionHeading';
import { ProductDashboardPreview, SheetPreview, Workflow as WorkflowPreview } from '@/components/ProductVisuals';

export const metadata: Metadata = { title:'About', description:'The product direction behind AutoDropshipPrime.' };

const principles = [
  [Layers3,'One connected system','Keep research, listing, monitoring and analytics operationally connected.'],
  [Workflow,'Clear workflows','Show inputs, statuses and next actions without decorative clutter.'],
  [LineChart,'Useful visibility','Bring pricing, stock, orders and profit into one consistent view.'],
];

export default function AboutPage(){return <>
  <section className="hero-mesh border-b border-[#eee9f4]">
    <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-[.78fr_1.22fr] lg:py-20">
      <div>
        <div className="eyebrow">About AutoDropshipPrime</div>
        <h1 className="mt-4 text-[38px] leading-[1.05] font-[850] tracking-[-.04em] sm:text-[48px]">Less fragmented work. More operational clarity.</h1>
        <p className="muted mt-5 text-[16px] leading-7">AutoDropshipPrime is designed around a simple idea: product research, listings, monitoring, orders and profit analytics should feel like one connected operating workflow.</p>
        <div className="mt-7 space-y-3">{['Product-first workflows','Clear status and next actions','Consistent analytics language'].map(x=><div key={x} className="flex items-center gap-2 text-[13px] font-semibold"><Check size={14} className="text-[#6d28d9]"/>{x}</div>)}</div>
      </div>
      <ProductDashboardPreview/>
    </div>
  </section>

  <section className="section">
    <div className="container-site">
      <SectionHeading center eyebrow="Product principles" title="Built around the work sellers repeat every day." text="The design system favors clarity, real operating states and reusable product patterns over decorative complexity."/>
      <div className="mt-8 grid gap-4 md:grid-cols-3">{principles.map(([Icon,t,d]:any)=><div className="rounded-[16px] border border-[#e8e2ef] bg-white p-5 sm:p-6" key={t}><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f1eaff] text-[#6d28d9]"><Icon size={19}/></span><h2 className="mt-4 text-[17px] font-extrabold">{t}</h2><p className="muted mt-2 text-[13px] leading-6">{d}</p></div>)}</div>
    </div>
  </section>

  <section className="section bg-[#211062] text-white">
    <div className="container-site grid gap-8 lg:grid-cols-[.62fr_1.38fr] lg:items-center">
      <div><div className="text-[10px] font-black uppercase tracking-[.14em] text-[#cdbbfa]">Operating model</div><h2 className="mt-3 text-[30px] leading-[1.08] font-[820] tracking-[-.03em] sm:text-[38px]">One sequence from research to insight.</h2><p className="mt-4 text-[14px] leading-7 text-white/65">The interface is built to preserve context as a product moves through listing, monitoring, orders and reporting.</p></div>
      <div className="rounded-[18px] border border-white/10 bg-white/[.04] p-4 text-[#171230]"><WorkflowPreview/></div>
    </div>
  </section>

  <section className="section">
    <div className="container-site grid items-center gap-10 lg:grid-cols-[.7fr_1.3fr]">
      <div><div className="eyebrow">Finance visibility</div><h2 className="mt-3 text-[30px] leading-[1.1] font-[820] tracking-[-.03em] sm:text-[38px]">Operational data should stay usable outside a single dashboard.</h2><p className="muted mt-4 text-[15px] leading-7">Order value, supplier cost, fees and profit can stay structured in a sheet-ready workflow while the application remains the main operating view.</p></div>
      <SheetPreview/>
    </div>
  </section>

  <MarketingCta/>
</>}