import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import type { FeatureConfig } from '@/data/site';
import DashboardPreview from './DashboardPreview';
import ProfitCalculator from './ProfitCalculator';
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
  return <DashboardPreview compact/>;
}

function ReferenceAssetForFeature({ slug }: { slug:string }) {
  const map: Record<string, TemporaryReferenceAssetKey> = {
    'product-hunting': 'productResearch',
    'auto-listing': 'listing',
    'stock-monitoring': 'monitoring',
    'price-monitoring': 'monitoring',
    'google-sheets': 'sellerManagement',
    'analytics': 'sellerHero',
    'reports': 'sellerManagement',
  };
  return (
    <ReferenceVisual
      asset={map[slug] ?? 'sellerHero'}
      title="Temporary staging reference"
      caption="Reference-site imagery is isolated and should be replaced with AutoDropshipPrime product screenshots before production."
    />
  );
}

export default function FeaturePage({ config }: { config:FeatureConfig }) {
  const Icon=config.icon;

  return (
    <>
      <section className="hero-mesh relative overflow-hidden border-b border-[#eee9f4]">
        <div className="hero-glow opacity-70" />
        <div className="container-site relative grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[.82fr_1.18fr]">
          <div>
            <div className="eyebrow"><Icon size={14}/>{config.eyebrow}</div>
            <h1 className="mt-5 max-w-[720px] text-[45px] leading-[1.01] font-[860] tracking-[-.052em] sm:text-[62px]">{config.hero}</h1>
            <p className="muted mt-6 max-w-xl text-[18px] leading-8">{config.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/signup">Start Free <ArrowRight size={16}/></Link>
              <Link className="btn-secondary" href="/contact">Talk to Sales</Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {config.bullets.slice(0,4).map(b=>(
                <div key={b} className="flex items-start gap-2 text-sm font-semibold">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#f0e8ff] text-[#6d28d9]"><Check size={12}/></span>
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <ReferenceAssetForFeature slug={config.slug}/>
            <div className="metric-chip absolute -bottom-5 left-5 hidden rounded-2xl p-4 sm:block">
              <div className="text-[10px] font-black uppercase tracking-[.12em] text-[#8a8097]">AutoDropshipPrime</div>
              <div className="mt-1 text-sm font-extrabold">{config.metricLabel}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#fbfaff]">
        <div className="container-site grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-[110px]">
            <div className="eyebrow">Inside the workflow</div>
            <h2 className="mt-4 text-[36px] leading-[1.05] font-[840] tracking-[-.04em] sm:text-[48px]">{config.title}, without the disconnected toolchain.</h2>
            <p className="muted mt-5 text-[16px] leading-7">The page combines realistic product UI with a clear operational sequence, so the feature feels like part of one platform rather than a separate microsite.</p>
          </div>
          <div className="space-y-5">
            {config.bullets.map((b,i)=>(
              <div key={b} className="card-premium grid gap-5 p-6 sm:grid-cols-[auto_1fr] sm:items-center">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#f1eaff] text-sm font-black text-[#6d28d9]">0{i+1}</span>
                <div>
                  <div className="text-lg font-extrabold">{b}</div>
                  <p className="muted mt-1 text-sm leading-6">Keep the status, context and next action visible so the workflow remains easy to understand at a glance.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <SectionHeading
              eyebrow="Product interface"
              title="Show the feature as working software, not as a decorative illustration."
              text="The custom UI below uses AutoDropshipPrime styling, realistic table density and practical status states to establish a consistent application language across every feature page."
            />
            <div className="staging-note">
              The reference image above is temporary. This interface block is the AutoDropshipPrime direction that can replace it once real product screenshots are ready.
            </div>
          </div>
          <div className="mt-10"><ProductVisual slug={config.slug}/></div>
        </div>
      </section>

      {config.slug==='analytics'&&(
        <section className="section bg-[#fbfaff]">
          <div className="container-site grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:items-start">
            <SectionHeading eyebrow="Calculation" title="Model the costs behind each sale." text="Use the interactive demo to estimate net profit, margin, ROI and break-even values."/>
            <ProfitCalculator/>
          </div>
        </section>
      )}

      <section className="section bg-[#211062] text-white">
        <div className="container-site grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.13em] text-[#cdbbfa]"><Sparkles size={14}/>One connected platform</div>
            <h2 className="mt-4 max-w-3xl text-[35px] leading-[1.05] font-[840] tracking-[-.04em] sm:text-[45px]">Connect {config.title.toLowerCase()} with research, listings, monitoring, orders and profit.</h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-7 text-white/70">The visual system is designed so moving between features feels like changing views inside the same product.</p>
          </div>
          <Link href="/features" className="rounded-[11px] bg-white px-5 py-3 text-sm font-extrabold text-[#32158c]">Explore all features</Link>
        </div>
      </section>
    </>
  );
}
