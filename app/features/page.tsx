import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart3, Boxes, PackageSearch, RefreshCcw } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import BentoFeatures from '@/components/BentoFeatures';
import { ProductDashboardPreview, Workflow } from '@/components/ProductVisuals';

export const metadata: Metadata = { title: 'Features', description: 'Explore AutoDropshipPrime product research, listing, monitoring, finance and reporting workflows.' };

const groups=[
  {title:'Product discovery',icon:PackageSearch,items:['Auto Product Hunting'],text:'Research product opportunities with supplier, price, margin and stock context.'},
  {title:'Listing & operations',icon:Boxes,items:['Auto Listing','Orders'],text:'Move products through listing preparation and keep order context visible.'},
  {title:'Monitoring',icon:RefreshCcw,items:['Stock Monitoring','Price Monitoring'],text:'Surface supplier stock and price changes from one operating view.'},
  {title:'Finance & analytics',icon:BarChart3,items:['Google Sheets Automation','Profit Dashboard','Reports'],text:'Turn order and cost data into profit analysis and reusable reporting.'},
];

export default function FeaturesPage(){return <>
  <section className="hero-mesh border-b border-[#eee9f4]">
    <div className="container-site py-20 text-center">
      <div className="eyebrow">Connected product system</div>
      <h1 className="mx-auto mt-4 max-w-4xl text-[38px] leading-[1.05] font-[850] tracking-[-.04em] sm:text-[48px] lg:text-[52px]">One platform for your dropshipping workflow.</h1>
      <p className="muted mx-auto mt-5 max-w-2xl text-[16px] leading-7">Research products, prepare listings, monitor supplier changes, track orders and understand profit from one consistent product experience.</p>
    </div>
  </section>

  <section className="section">
    <div className="container-site">
      <Workflow/>
      <div className="mt-12 grid gap-4 md:grid-cols-2">{groups.map(g=><div key={g.title} className="rounded-[16px] border border-[#e8e2ef] bg-white p-5 sm:p-6"><div className="flex items-start gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f1eaff] text-[#6d28d9]"><g.icon size={19}/></span><div><h2 className="text-[18px] font-extrabold">{g.title}</h2><p className="muted mt-2 text-[13px] leading-6">{g.text}</p><div className="mt-4 flex flex-wrap gap-2">{g.items.map(x=><span key={x} className="rounded-lg border border-[#e8e2ef] bg-[#fcfbff] px-3 py-2 text-[11px] font-bold">{x}</span>)}</div></div></div></div>)}</div>
    </div>
  </section>

  <section className="section bg-[#fbfaff]">
    <div className="container-site">
      <SectionHeading eyebrow="Capabilities" title="Explore the platform by workflow." text="Each capability keeps the same visual language, status patterns and interaction model."/>
      <div className="mt-8"><BentoFeatures/></div>
    </div>
  </section>

  <section className="section">
    <div className="container-site">
      <SectionHeading center eyebrow="Products" title="A focused product-management screen." text="Listings, cost, selling price, stock and margin stay visible without showing an oversized full dashboard."/>
      <div className="mt-8"><ProductDashboardPreview/></div>
      <div className="mt-7 text-center"><Link href="/features/product-hunting" className="inline-flex items-center gap-2 text-sm font-extrabold text-[#6d28d9]">Start with product hunting <ArrowRight size={15}/></Link></div>
    </div>
  </section>
</>}