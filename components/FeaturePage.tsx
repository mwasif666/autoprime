import Link from 'next/link';
import { ArrowRight, Check, CircleDot, Sparkles } from 'lucide-react';
import type { FeatureConfig } from '@/data/site';
import AnalyticsPanel from './AnalyticsPanel';
import {
  ListingPreview,
  MonitoringPreview,
  ProductHunterPreview,
  ReportsPreview,
  SheetPreview,
} from './ProductVisuals';
import SectionHeading from './SectionHeading';
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
  return <ReferenceVisual asset={map[slug] || 'sellerHero'} className="min-h-[340px]" imageClassName="min-h-[340px] object-cover object-center"/>;
}

export default function FeaturePage({ config }: { config:FeatureConfig }) {
  const Icon=config.icon;
  return <>
    <section className="hero-mesh relative overflow-hidden border-b border-[#eee9f4]">
      <div className="container-site relative grid min-h-[560px] items-center gap-11 py-16 lg:grid-cols-[.82fr_1.18fr]">
        <div>
          <div className="eyebrow"><Icon size={13}/>{config.eyebrow}</div>
          <h1 className="mt-4 max-w-[700px] text-[39px] leading-[1.04] font-[850] tracking-[-.045em] sm:text-[48px] lg:text-[52px]">{config.hero}</h1>
          <p className="muted mt-5 max-w-xl text-[16px] leading-7">{config.description}</p>
          <div className="mt-7 flex flex-wrap gap-3"><Link className="btn-primary" href="/signup">Start Free <ArrowRight size={16}/></Link><Link className="btn-secondary" href="/contact">Talk to Sales</Link></div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">{config.bullets.slice(0,4).map(item=><div key={item} className="flex items-start gap-2 text-[13px] font-semibold"><Check size={14} className="mt-0.5 shrink-0 text-[#6d28d9]"/>{item}</div>)}</div>
        </div>
        <FeatureImage slug={config.slug}/>
      </div>
    </section>

    <section className="section bg-[#fbfaff]">
      <div className="container-site grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
        <div className="lg:sticky lg:top-[100px]">
          <div className="eyebrow">Workflow</div>
          <h2 className="mt-3 text-[30px] leading-[1.1] font-[820] tracking-[-.03em] sm:text-[38px]">{config.title} in a clear operating flow.</h2>
          <p className="muted mt-4 text-[15px] leading-7">Each action keeps context and next steps visible, so the feature feels connected to the rest of the platform.</p>
        </div>
        <div className="relative space-y-0 border-l border-[#ded3ec] pl-7 sm:pl-9">
          {config.bullets.map((item,index)=><div key={item} className="relative pb-8 last:pb-0">
            <span className="absolute -left-[38px] top-0 grid h-6 w-6 place-items-center rounded-full border border-[#d7c8e9] bg-white text-[#6d28d9] sm:-left-[46px]"><CircleDot size={12}/></span>
            <div className="text-[11px] font-black uppercase tracking-[.1em] text-[#8b3dff]">Step {index+1}</div>
            <div className="mt-1 text-[16px] font-extrabold">{item}</div>
            <p className="muted mt-2 max-w-2xl text-[13px] leading-6">Keep the input, status and next action visible without adding another disconnected screen.</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container-site">
        <SectionHeading eyebrow="Product interface" title="A focused screen built around the task." text="Consistent tables, filters, status language and controls make the product feel like one operating system."/>
        <div className="mt-8"><ProductVisual slug={config.slug}/></div>
      </div>
    </section>

    <section className="section bg-[#211062] text-white">
      <div className="container-site grid items-center gap-7 md:grid-cols-[1fr_auto]">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.13em] text-[#cdbbfa]"><Sparkles size={13}/>One connected platform</div>
          <h2 className="mt-3 max-w-3xl text-[29px] leading-[1.08] font-[820] tracking-[-.03em] sm:text-[36px]">Connect {config.title.toLowerCase()} with research, listings, monitoring, orders and profit.</h2>
        </div>
        <Link href="/features" className="rounded-[10px] bg-white px-5 py-3 text-sm font-extrabold text-[#32158c]">Explore all features</Link>
      </div>
    </section>
  </>;
}
