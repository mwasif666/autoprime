import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import type { FeatureConfig } from '@/data/site';
import AnalyticsPanel from './AnalyticsPanel';
import MarketingCta from './MarketingCta';
import {
  ListingPreview,
  MonitoringPreview,
  ProductHunterPreview,
  ReportsPreview,
  SheetPreview,
  Workflow,
} from './ProductVisuals';
import { ReferenceVisual } from './ReferenceMedia';
import type { TemporaryReferenceAssetKey } from '@/data/referenceAssets';

function ProductVisual({ slug }: { slug:string }) {
  if (slug==='product-hunting') return <ProductHunterPreview/>;
  if (slug==='auto-listing') return <ListingPreview/>;
  if (slug==='stock-monitoring'||slug==='price-monitoring') return <MonitoringPreview/>;
  if (slug==='google-sheets') return <SheetPreview/>;
  if (slug==='analytics') return <AnalyticsPanel/>;
  if (slug==='reports') return <ReportsPreview/>;
  return <ProductHunterPreview/>;
}

function FeatureImage({ slug }: { slug:string }) {
  const map: Record<string, TemporaryReferenceAssetKey> = {
    'product-hunting': 'productResearch',
    'auto-listing': 'listing',
    'stock-monitoring': 'monitoring',
    'price-monitoring': 'monitoring',
    'google-sheets': 'sellerManagement',
    'analytics': 'sellerHero',
    'reports': 'sellerManagement',
  };
  return <ReferenceVisual asset={map[slug] || 'sellerHero'} className="min-h-[300px]" imageClassName="min-h-[300px] object-cover object-center"/>;
}

export default function FeaturePage({ config }: { config:FeatureConfig }) {
  const Icon=config.icon;

  return <>
    <section className="hero-mesh relative overflow-hidden border-b border-[#eee9f4]">
      <div className="container-site relative grid items-center gap-11 py-14 lg:grid-cols-[.76fr_1.24fr] lg:py-18">
        <div className="min-w-0">
          <div className="eyebrow"><Icon size={13}/>{config.eyebrow}</div>
          <h1 className="mt-4 max-w-[700px] text-[38px] leading-[1.04] font-[850] tracking-[-.045em] sm:text-[47px] lg:text-[52px]">{config.hero}</h1>
          <p className="muted mt-5 max-w-xl text-[16px] leading-7">{config.description}</p>
          <div className="mt-7 flex flex-wrap gap-3"><Link className="btn-primary" href="/signup">Start Free <ArrowRight size={16}/></Link><Link className="btn-secondary" href="/contact">Talk to Sales</Link></div>
          <div className="mt-7 grid gap-2 sm:grid-cols-2">{config.bullets.slice(0,4).map(item=><div key={item} className="flex items-start gap-2 text-[13px] font-semibold"><Check size={14} className="mt-0.5 shrink-0 text-[#6d28d9]"/>{item}</div>)}</div>
        </div>
        <div className="min-w-0"><ProductVisual slug={config.slug}/></div>
      </div>
    </section>

    <section className="section bg-[#fbfaff]">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr]">
        <FeatureImage slug={config.slug}/>
        <div>
          <div className="eyebrow">Built for the workflow</div>
          <h2 className="mt-3 text-[30px] leading-[1.1] font-[820] tracking-[-.03em] sm:text-[38px]">{config.title} without a disconnected toolchain.</h2>
          <p className="muted mt-4 text-[15px] leading-7">The experience keeps the operational context close to the task so sellers can understand what changed and what needs attention.</p>
          <div className="mt-6 space-y-3">
            {config.bullets.map(item=><div key={item} className="flex items-start gap-3 rounded-xl border border-[#e7e0ef] bg-white px-4 py-3 text-[13px] font-semibold"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#f1eaff] text-[#6d28d9]"><Check size={11}/></span>{item}</div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow">Workflow</div>
          <h2 className="mt-3 text-[30px] leading-[1.1] font-[820] tracking-[-.03em] sm:text-[38px]">A clear operating sequence, from input to action.</h2>
          <p className="muted mt-4 text-[15px] leading-7">Each step stays understandable on desktop, tablet and mobile without long vertical timelines or oversized numbered cards.</p>
        </div>
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {config.bullets.slice(0,4).map((item,index)=><div key={item} className="rounded-[15px] border border-[#e7e0ef] bg-white p-5">
            <div className="flex items-center justify-between"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#f1eaff] text-[11px] font-black text-[#6d28d9]">0{index+1}</span>{index<3&&<ArrowRight size={15} className="hidden text-[#a18ebc] lg:block"/>}</div>
            <div className="mt-5 text-[15px] font-extrabold">{item}</div>
            <p className="muted mt-2 text-[12px] leading-5">Keep the information, status and next action visible at this stage.</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="section bg-[#211062] text-white">
      <div className="container-site grid gap-8 lg:grid-cols-[.62fr_1.38fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.13em] text-[#cdbbfa]"><Sparkles size={13}/>One connected platform</div>
          <h2 className="mt-3 text-[29px] leading-[1.08] font-[820] tracking-[-.03em] sm:text-[36px]">Connect {config.title.toLowerCase()} with the rest of the seller workflow.</h2>
          <p className="mt-4 text-[14px] leading-7 text-white/65">Research, listing, monitoring, orders, sheets and profit use the same operating language across the platform.</p>
        </div>
        <div className="rounded-[18px] border border-white/10 bg-white/[.04] p-4 text-[#171230]"><Workflow/></div>
      </div>
    </section>

    <MarketingCta title={'Bring '+config.title.toLowerCase()+' into one connected workspace.'}/>
  </>;
}
