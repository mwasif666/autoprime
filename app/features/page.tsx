import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart3, Boxes, Check, PackageSearch, RefreshCcw } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import BentoFeatures from '@/components/BentoFeatures';
import MarketingCta from '@/components/MarketingCta';
import { ProductDashboardPreview, SheetPreview, Workflow } from '@/components/ProductVisuals';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore AutoDropshipPrime product research, listing, monitoring, finance and reporting workflows.',
};

const groups=[
  {title:'Product discovery',icon:PackageSearch,items:['Auto Product Hunting'],text:'Research product opportunities with supplier, price, margin and stock context.'},
  {title:'Listing & operations',icon:Boxes,items:['Auto Listing','Orders'],text:'Move products through listing preparation and keep order context visible.'},
  {title:'Monitoring',icon:RefreshCcw,items:['Stock Monitoring','Price Monitoring'],text:'Surface supplier stock and price changes from one operating view.'},
  {title:'Finance & analytics',icon:BarChart3,items:['Google Sheets Automation','Profit Dashboard','Reports'],text:'Turn order and cost data into profit analysis and reusable reporting.'},
];

export default function FeaturesPage(){return <>
  <section className="hero-mesh border-b border-[#eee9f4]">
    <div className="container-site grid items-center gap-11 py-16 lg:grid-cols-[.82fr_1.18fr] lg:py-20">
      <div>
        <div className="eyebrow">Connected product system</div>
        <h1 className="mt-4 max-w-3xl text-[38px] leading-[1.05] font-[850] tracking-[-.04em] sm:text-[48px] lg:text-[52px]">One platform for your dropshipping workflow.</h1>
        <p className="muted mt-5 max-w-2xl text-[16px] leading-7">Research products, prepare listings, monitor supplier changes, track orders and understand profit from one consistent product experience.</p>
        <div className="mt-7 flex flex-wrap gap-3"><Link href="/signup" className="btn-primary">Start Free <ArrowRight size={16}/></Link><Link href="/pricing" className="btn-secondary">See Pricing</Link></div>
        <div className="mt-7 grid gap-2 sm:grid-cols-2">{['Product research','Listing workflow','Stock + price monitoring','Profit and reports'].map(x=><div key={x} className="flex items-center gap-2 text-[13px] font-semibold"><Check size={14} className="text-[#6d28d9]"/>{x}</div>)}</div>
      </div>
      <ProductDashboardPreview/>
    </div>
  </section>

  <section className="section bg-[#211062] text-white">
    <div className="container-site grid gap-9 lg:grid-cols-[.64fr_1.36fr] lg:items-center">
      <div><div className="text-[10px] font-black uppercase tracking-[.14em] text-[#cdbbfa]">How the product connects</div><h2 className="mt-3 text-[30px] leading-[1.08] font-[820] tracking-[-.03em] sm:text-[38px]">A single sequence instead of separate tools.</h2><p className="mt-4 text-[14px] leading-7 text-white/65">The same visual language follows the seller from research through reporting.</p></div>
      <div className="rounded-[18px] border border-white/10 bg-white/[.04] p-4 text-[#171230]"><Workflow/></div>
    </div>
  </section>

  <section className="section">
    <div className="container-site">
      <SectionHeading eyebrow="Workflow groups" title="Organized around the work sellers actually repeat." text="Capabilities are grouped by the job they support, not by arbitrary feature categories."/>
      <div className="mt-8 grid gap-4 md:grid-cols-2">{groups.map(g=><div key={g.title} className="rounded-[16px] border border-[#e8e2ef] bg-white p-5 sm:p-6"><div className="flex items-start gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f1eaff] text-[#6d28d9]"><g.icon size={19}/></span><div><h2 className="text-[18px] font-extrabold">{g.title}</h2><p className="muted mt-2 text-[13px] leading-6">{g.text}</p><div className="mt-4 flex flex-wrap gap-2">{g.items.map(x=><span key={x} className="rounded-lg border border-[#e8e2ef] bg-[#fcfbff] px-3 py-2 text-[11px] font-bold">{x}</span>)}</div></div></div></div>)}</div>
    </div>
  </section>

  <section className="section bg-[#fbfaff]">
    <div className="container-site">
      <SectionHeading eyebrow="Capabilities" title="Explore the platform by workflow." text="The bento layout keeps the product scannable without turning every feature into the same card."/>
      <div className="mt-8"><BentoFeatures/></div>
    </div>
  </section>

  <section className="section">
    <div className="container-site">
      <div className="grid items-center gap-10 lg:grid-cols-[.66fr_1.34fr]">
        <div><div className="eyebrow">Finance workflow</div><h2 className="mt-3 text-[30px] leading-[1.1] font-[820] tracking-[-.03em] sm:text-[38px]">Orders and profit stay visible beyond the dashboard.</h2><p className="muted mt-4 text-[15px] leading-7">Keep a structured sheet-ready record of sale value, cost, fees, profit and status without changing the operating flow.</p><Link href="/features/google-sheets" className="outline-action mt-6">Explore Google Sheets <ArrowRight size={15}/></Link></div>
        <SheetPreview/>
      </div>
    </div>
  </section>

  <MarketingCta/>
</>}