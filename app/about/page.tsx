import type { Metadata } from 'next';
import { Layers3, LineChart, Workflow } from 'lucide-react';
import { ProductDashboardPreview } from '@/components/ProductVisuals';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = { title:'About', description:'The product direction behind AutoDropshipPrime.' };

export default function AboutPage(){return <>
  <section className="hero-mesh border-b border-[#eee9f4]">
    <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-[.8fr_1.2fr]">
      <div><div className="eyebrow">About AutoDropshipPrime</div><h1 className="mt-4 text-[38px] leading-[1.05] font-[850] tracking-[-.04em] sm:text-[48px]">Less fragmented work. More operational clarity.</h1><p className="muted mt-5 text-[16px] leading-7">Product research, listings, monitoring, orders and profit analytics should feel like one connected workflow.</p></div>
      <ProductDashboardPreview/>
    </div>
  </section>
  <section className="section"><div className="container-site"><SectionHeading center eyebrow="Product principles" title="Built around the work sellers repeat every day."/><div className="mt-8 grid gap-4 md:grid-cols-3">{[[Layers3,'One connected system','Keep research, listing and analytics operationally connected.'],[Workflow,'Clear workflows','Show inputs, statuses and next actions without decorative clutter.'],[LineChart,'Useful visibility','Bring pricing, stock, orders and profit into one consistent view.']].map(([Icon,t,d]:any)=><div className="rounded-[16px] border border-[#e8e2ef] bg-white p-5" key={t}><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f1eaff] text-[#6d28d9]"><Icon size={19}/></span><h2 className="mt-4 text-[17px] font-extrabold">{t}</h2><p className="muted mt-2 text-[13px] leading-6">{d}</p></div>)}</div></div></section>
</>}