import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import type { FeatureConfig } from '@/data/site';
import DashboardPreview from './DashboardPreview';
import ProfitCalculator from './ProfitCalculator';
import AnalyticsPanel from './AnalyticsPanel';
import { ListingPreview, MonitoringPreview, ProductHunterPreview, ReportsPreview, SheetPreview } from './ProductVisuals';
import SectionHeading from './SectionHeading';

function Visual({ slug }: { slug:string }) {
  if (slug==='product-hunting') return <ProductHunterPreview/>;
  if (slug==='auto-listing') return <ListingPreview/>;
  if (slug==='stock-monitoring'||slug==='price-monitoring') return <MonitoringPreview/>;
  if (slug==='google-sheets') return <SheetPreview/>;
  if (slug==='analytics') return <AnalyticsPanel/>;
  if (slug==='reports') return <ReportsPreview/>;
  return <DashboardPreview compact/>;
}

export default function FeaturePage({ config }: { config:FeatureConfig }) {
  const Icon=config.icon;
  return <>
    <section className="border-b border-[#eee9f4] bg-[linear-gradient(180deg,#fff,#fbf9ff)]">
      <div className="container-site grid min-h-[560px] items-center gap-12 py-20 lg:grid-cols-[.82fr_1.18fr]">
        <div><div className="eyebrow"><Icon size={14}/>{config.eyebrow}</div><h1 className="mt-5 text-[44px] leading-[1.03] font-[850] tracking-[-.05em] sm:text-[58px]">{config.hero}</h1><p className="muted mt-6 max-w-xl text-[18px] leading-8">{config.description}</p><div className="mt-8 flex flex-wrap gap-3"><Link className="btn-primary" href="/signup">Start Free <ArrowRight size={16}/></Link><Link className="btn-secondary" href="/contact">Talk to Sales</Link></div><div className="mt-7 space-y-3">{config.bullets.slice(0,3).map(b=><div key={b} className="flex items-start gap-2 text-sm font-semibold"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#f0e8ff] text-[#6d28d9]"><Check size={12}/></span>{b}</div>)}</div></div>
        <div><Visual slug={config.slug}/></div>
      </div>
    </section>
    <section className="section"><div className="container-site"><SectionHeading center eyebrow="Workflow" title={`${config.title}, without a disconnected toolchain.`} text="The page is built around operational context: inputs, statuses, useful outputs and a clear next action."/><div className="mt-10 grid gap-4 md:grid-cols-4">{config.bullets.map((b,i)=><div key={b} className="card p-5"><div className="text-3xl font-black text-[#dfd3f6]">0{i+1}</div><div className="mt-4 text-sm font-extrabold leading-6">{b}</div></div>)}</div></div></section>
    {config.slug==='analytics'&&<section className="section bg-[#fbfaff]"><div className="container-site"><SectionHeading eyebrow="Calculation" title="Model the costs behind each sale." text="Use the interactive demo to estimate net profit, margin, ROI and break-even values."/><div className="mt-9"><ProfitCalculator/></div></div></section>}
    <section className="section bg-[#211062] text-white"><div className="container-site grid items-center gap-7 md:grid-cols-[1fr_auto]"><div><div className="text-xs font-black uppercase tracking-[.13em] text-[#cdbbfa]">One connected platform</div><h2 className="mt-3 text-[34px] font-[830] tracking-[-.035em]">Connect {config.title.toLowerCase()} with the rest of your workflow.</h2><p className="mt-3 max-w-2xl text-white/70">Product research, listings, monitoring, orders, calculations, profit and reports are designed to feel like one product rather than separate tools.</p></div><Link href="/features" className="rounded-[10px] bg-white px-5 py-3 text-sm font-extrabold text-[#32158c]">Explore all features</Link></div></section>
  </>;
}
