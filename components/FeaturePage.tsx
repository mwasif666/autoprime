import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import type { FeatureConfig } from '@/data/site';
import AnalyticsPanel from './AnalyticsPanel';
import MarketingCta from './MarketingCta';
import PageHero from './PageHero';
import ConnectedWorkflowShowcase from './ConnectedWorkflowShowcase';
import {
  ListingPreview,
  MonitoringPreview,
  ProductHunterPreview,
  ReportsPreview,
  SheetPreview,
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
  const icon8 = (name:string) => `https://img.icons8.com/color/96/${name}.png`;
  const stepIcons = ['search--v1','checklist','combo-chart--v1','shopping-cart--v1'];

  return <>
    <PageHero
      eyebrow={<><Icon size={13}/>{config.eyebrow}</>}
      title={<>{config.hero}</>}
      description={config.description}
      bullets={config.bullets.slice(0,4)}
      primary={{label:'Start Free',href:'/signup'}}
      secondary={{label:'Talk to Sales',href:'/contact'}}
      visual={<ProductVisual slug={config.slug}/>}
    />

    <section className="section bg-white">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr]">
        <div className="rounded-[24px] border border-[#e2d8ef] bg-[#fdfcff] p-3 sm:p-4"><FeatureImage slug={config.slug}/></div>
        <div>
          <div className="eyebrow">Built for the workflow</div>
          <h2 className="mt-4 text-[31px] font-[850] leading-[1.08] tracking-[-.04em] sm:text-[40px]">{config.title} without a disconnected toolchain.</h2>
          <p className="muted mt-4 text-[15px] leading-7">Keep operational context close to the task so sellers can understand what changed, what matters and what should happen next.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {config.bullets.map((item,index)=><div key={item} className="flex items-start gap-3 rounded-[15px] border border-[#e7e0ef] bg-[#fdfcff] px-4 py-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] border border-[#eee6f7] bg-[#faf7ff]"><img src={icon8(stepIcons[index%stepIcons.length])} alt="" className="h-7 w-7 object-contain"/></span>
              <div><div className="text-[12px] font-extrabold text-[#171230]">{item}</div><div className="mt-1 text-[9px] leading-4 text-[#736b80]">Keep status and next action visible at this stage.</div></div>
            </div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="section border-y border-[#eee8f4] bg-[#faf8ff]">
      <div className="container-site">
        <div className="mx-auto max-w-[820px] text-center"><div className="eyebrow">Feature workflow</div><h2 className="mt-4 text-[31px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[40px]">A clear operating sequence, from input to action.</h2><p className="muted mx-auto mt-4 max-w-[700px] text-[14px] leading-7">The page uses the same numbered, visual card language as the homepage so every feature feels part of one product system.</p></div>
        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {config.bullets.slice(0,4).map((item,index)=><article key={item} className="relative min-h-[210px] rounded-[22px] border border-[#e7e0ef] bg-white p-5">
            <span className="absolute right-4 top-4 grid h-8 min-w-8 place-items-center rounded-[9px] bg-[linear-gradient(135deg,#6d28d9,#9a2cff)] px-2 text-[10px] font-black text-white">0{index+1}</span>
            <span className="grid h-16 w-16 place-items-center rounded-[18px] border border-[#eee6f7] bg-[#faf7ff]"><img src={icon8(stepIcons[index])} alt="" className="h-12 w-12 object-contain"/></span>
            <h3 className="mt-5 text-[15px] font-extrabold text-[#171230]">{item}</h3>
            <p className="muted mt-2 text-[11px] leading-5">Keep the information, status and next action visible at this stage.</p>
          </article>)}
        </div>
      </div>
    </section>

    <ConnectedWorkflowShowcase
      eyebrow="One connected platform"
      title={`Connect ${config.title.toLowerCase()} with the rest of the seller workflow.`}
      text="Research, listing, monitoring, orders, Sheets and profit use the same visual language and operating context across the platform."
    />

    <section className="section bg-white">
      <div className="container-site flex flex-col items-center justify-between gap-5 rounded-[24px] border border-[#e4daef] bg-[#fdfaff] p-6 text-center sm:p-8 lg:flex-row lg:text-left">
        <div><div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.12em] text-[#6d28d9]"><Sparkles size={13}/>Next step</div><h2 className="mt-2 text-[24px] font-[850] tracking-[-.03em] text-[#171230]">Explore how {config.title.toLowerCase()} fits your store.</h2></div>
        <Link href="/pricing" className="btn-primary shrink-0">See Plans <ArrowRight size={15}/></Link>
      </div>
    </section>

    <MarketingCta title={'Bring '+config.title.toLowerCase()+' into one connected workspace.'}/>
  </>;
}
