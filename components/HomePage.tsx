import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  FileSpreadsheet,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import DashboardPreview from './DashboardPreview';
import ProfitCalculator from './ProfitCalculator';
import Pricing from './Pricing';
import Faq from './Faq';
import AnalyticsPanel from './AnalyticsPanel';
import { allFeatures } from '@/data/site';
import {
  MonitoringPreview,
  ReportsPreview,
  SheetPreview,
  Workflow,
} from './ProductVisuals';
import { ReferenceGallery, ReferenceVisual } from './ReferenceMedia';

function Hero() {
  return (
    <section className="hero-mesh relative overflow-hidden border-b border-[#efeaf5]">
      <div className="hero-glow" />
      <div className="absolute inset-0 dot-grid opacity-[.22]" />
      <div className="container-site relative grid min-h-[760px] items-center gap-14 py-20 lg:grid-cols-[.88fr_1.12fr]">
        <Reveal>
          <div className="eyebrow mb-6"><Zap size={14}/>The all-in-one dropshipping automation platform</div>
          <h1 className="max-w-[660px] text-[43px] leading-[.99] font-[860] tracking-[-.055em] sm:text-[58px] lg:text-[68px]">
            Automate the busywork. <span className="gradient-text">See the whole business.</span>
          </h1>
          <p className="muted mt-7 max-w-[630px] text-[18px] leading-8">
            Hunt products, build listings, monitor supplier stock and prices, track orders, calculate profit and keep Google Sheets updated from one connected workspace.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/signup">Start Free <ArrowRight size={17}/></Link>
            <a className="btn-secondary" href="#product-tour">Explore the Product</a>
          </div>
          <div className="mt-7 grid max-w-[600px] gap-3 sm:grid-cols-3">
            {[
              ['One workspace', 'Research to reports'],
              ['Clear monitoring', 'Stock + price states'],
              ['Profit visibility', 'Costs, fees and margin'],
            ].map(([title, text]) => (
              <div key={title} className="flex items-start gap-3 border-t border-[#e9e3f1] pt-3">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#efe7ff] text-[#6d28d9]"><Check size={11}/></span>
                <div><div className="text-xs font-extrabold">{title}</div><div className="mt-1 text-[11px] text-[#81788f]">{text}</div></div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={.08}>
          <div className="relative mx-auto max-w-[760px]">
            <ReferenceVisual asset="productResearch" title="Product research — temporary staging visual" />
            <div className="metric-chip absolute -left-5 bottom-10 hidden rounded-2xl p-4 lg:block">
              <div className="text-[10px] font-black uppercase tracking-[.12em] text-[#8a8097]">Workflow</div>
              <div className="mt-1 text-sm font-extrabold">Find → List → Monitor</div>
            </div>
            <div className="metric-chip absolute -right-4 top-20 hidden rounded-2xl p-4 xl:block">
              <div className="flex items-center gap-2 text-xs font-extrabold"><BadgeCheck size={15} className="text-[#6d28d9]"/>Connected operations</div>
              <div className="mt-1 text-[11px] text-[#82788f]">Orders, profit & reports</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="border-b border-[#eee9f4] bg-white">
      <div className="container-site grid gap-0 py-7 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [Layers3, 'All-in-one workflow', 'Fewer disconnected tools'],
          [Gauge, 'Operational visibility', 'Price, stock and order states'],
          [BarChart3, 'Profit analytics', 'Revenue, costs and margin'],
          [ShieldCheck, 'Built to stay clear', 'No fake claims or metrics'],
        ].map(([Icon, title, text]: any, i) => (
          <div key={title} className={`flex items-center gap-3 py-3 sm:px-5 ${i ? 'lg:border-l lg:border-[#eee9f4]' : ''}`}>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f4efff] text-[#6d28d9]"><Icon size={18}/></span>
            <div><div className="text-sm font-extrabold">{title}</div><div className="mt-1 text-xs text-[#7d748a]">{text}</div></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReferenceDirection() {
  return (
    <section className="section bg-[#fbfaff]">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <SectionHeading
            eyebrow="Staging visual direction"
            title="Familiar eCommerce SaaS patterns, rebuilt around AutoDropshipPrime."
            text="For this development branch, reference-site product imagery is used temporarily so layout, hierarchy and storytelling can be judged with realistic visual density before final proprietary screenshots replace it."
          />
          <div className="staging-note">
            Temporary reference assets are isolated in <strong>data/referenceAssets.ts</strong>. Replace those URLs before production without rebuilding the page layout.
          </div>
        </div>
        <div className="mt-10"><ReferenceGallery/></div>
      </div>
    </section>
  );
}

function IntegrationStrip() {
  return (
    <section className="section-tight">
      <div className="container-site">
        <SectionHeading
          center
          eyebrow="Connected workflow"
          title="One operating layer for the work you repeat every day."
          text="eBay and Google Sheets are surfaced as confirmed workflow touchpoints. Additional integrations stay out of the interface until they are approved."
        />
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="card-premium flex items-center justify-between p-5">
            <div><div className="text-[11px] font-black uppercase tracking-[.12em] text-[#8a8097]">Marketplace</div><div className="mt-2 text-xl font-black tracking-tight"><span className="text-[#e53238]">e</span><span className="text-[#0064d2]">b</span><span className="text-[#f5af02]">a</span><span className="text-[#86b817]">y</span></div></div>
            <span className="status good">Confirmed focus</span>
          </div>
          <div className="card-premium flex items-center justify-between p-5">
            <div><div className="text-[11px] font-black uppercase tracking-[.12em] text-[#8a8097]">Finance workflow</div><div className="mt-2 flex items-center gap-2 text-base font-black text-[#238647]"><FileSpreadsheet size={20}/>Google Sheets</div></div>
            <span className="status good">Included</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductValue() {
  return (
    <section className="section bg-[#211062] text-white">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <div className="text-[11px] font-black uppercase tracking-[.14em] text-[#cbb5ff]">One connected system</div>
            <h2 className="mt-4 text-[38px] leading-[1.04] font-[850] tracking-[-.045em] sm:text-[52px]">Stop operating your store across a patchwork of tools.</h2>
          </div>
          <p className="max-w-2xl text-[17px] leading-8 text-white/70">
            AutoDropshipPrime connects product discovery, listing, monitoring, orders, calculations and reporting into a workflow that feels continuous instead of fragmented.
          </p>
        </div>
        <div className="mt-12 rounded-[22px] border border-white/10 bg-white/[.045] p-4 sm:p-6"><Workflow/></div>
      </div>
    </section>
  );
}

function StorySection({
  eyebrow,
  title,
  text,
  visual,
  reverse = false,
  href,
  bullets,
}: {
  eyebrow: string;
  title: string;
  text: string;
  visual: ReactNode;
  reverse?: boolean;
  href: string;
  bullets: string[];
}) {
  return (
    <section className="section">
      <div className={`container-site grid items-center gap-12 lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <Reveal>{visual}</Reveal>
        <Reveal>
          <div className="eyebrow mb-4">{eyebrow}</div>
          <h2 className="text-[36px] leading-[1.06] font-[840] tracking-[-.042em] sm:text-[48px]">{title}</h2>
          <p className="muted mt-5 text-[17px] leading-7">{text}</p>
          <div className="feature-rail mt-7 space-y-4">
            {bullets.map((bullet, i) => (
              <div key={bullet} className="relative flex gap-4 pl-1">
                <span className="z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#e5daf6] bg-white text-xs font-black text-[#6d28d9] shadow-sm">0{i + 1}</span>
                <div className="pt-2 text-sm font-bold leading-6">{bullet}</div>
              </div>
            ))}
          </div>
          <Link href={href} className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#6d28d9]">Explore the feature <ArrowRight size={15}/></Link>
        </Reveal>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="section bg-[#fbfaff]">
      <div className="container-site">
        <SectionHeading
          eyebrow="All-in-one"
          title="A serious operating toolkit, not a wall of identical feature cards."
          text="Each capability belongs to one of three connected jobs: finding products, operating listings and understanding the numbers."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {allFeatures.map((f, i) => (
            <Link
              href={f.href}
              key={f.title}
              className={`group card relative overflow-hidden p-6 transition hover:-translate-y-1 hover:border-[#d9caec] hover:shadow-[0_24px_60px_rgba(48,25,104,.11)] ${i === 0 || i === 5 ? 'lg:col-span-6' : 'lg:col-span-4'}`}
            >
              <div className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-[#f3edff] opacity-80 blur-2xl transition group-hover:bg-[#eadfff]" />
              <div className="relative flex items-start justify-between gap-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#e7def4] bg-[#f7f3ff] text-[#6d28d9]"><f.icon size={19}/></span>
                <ArrowRight size={16} className="text-[#a69cb6] transition group-hover:translate-x-1 group-hover:text-[#6d28d9]"/>
              </div>
              <div className="relative mt-8 text-lg font-extrabold">{f.title}</div>
              <p className="relative muted mt-2 max-w-md text-sm leading-6">{f.text}</p>
              {(i === 0 || i === 5) && (
                <div className="relative mt-6 h-16 overflow-hidden rounded-xl border border-[#e9e2f2] bg-[linear-gradient(110deg,#f5efff,#fff,#fff2fa)]">
                  <div className="absolute left-4 top-4 h-2 w-28 rounded-full bg-[#d9c8f7]" />
                  <div className="absolute left-4 top-8 h-2 w-44 rounded-full bg-[#eee7f7]" />
                  <div className="absolute right-5 top-4 h-8 w-14 rounded-lg bg-[#6d28d9]/10" />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ['Connect', 'Connect the confirmed marketplace workflow.'],
    ['Discover', 'Research products and review source price, stock and margin context.'],
    ['Operate', 'Move through listing, monitoring and order workflows.'],
    ['Measure', 'Review calculations, profit, reports and sheet updates.'],
  ];
  return (
    <section className="section">
      <div className="container-site">
        <SectionHeading center eyebrow="How it works" title="From product discovery to profit tracking, without losing context."/>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map(([title, text], i) => (
            <div key={title} className="relative border-t-2 border-[#ddd0ef] pt-6">
              <div className="text-[11px] font-black uppercase tracking-[.12em] text-[#8b3dff]">Step 0{i + 1}</div>
              <div className="mt-3 text-xl font-extrabold">{title}</div>
              <p className="muted mt-2 text-sm leading-6">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="section-tight border-y border-[#eee9f4] bg-[#f8f5fc]">
      <div className="container-site grid gap-7 md:grid-cols-4">
        {[
          ['Less manual work', 'Reduce repetitive operational steps.'],
          ['Better visibility', 'See pricing, stock and profitability together.'],
          ['Faster workflow', 'Move from research into listing with context intact.'],
          ['One platform', 'Keep core seller operations in one visual system.'],
        ].map(([title, text]) => (
          <div key={title}>
            <div className="text-xs font-black uppercase tracking-[.12em] text-[#6d28d9]">{title}</div>
            <div className="mt-3 text-[17px] font-bold leading-7">{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <ReferenceDirection />
      <IntegrationStrip />
      <ProductValue />

      <StorySection
        eyebrow="Product research"
        title="Find products with the commercial context already visible."
        text="Review supplier information, source price, estimated selling price, category, stock and margin before a product moves into your listing workflow."
        visual={<ReferenceVisual asset="productResearch" title="Product-hunting interface reference" />}
        href="/features/product-hunting"
        bullets={['Search and filter product opportunities', 'Compare source price with selling context', 'Move selected products into listing preparation']}
      />

      <StorySection
        reverse
        eyebrow="Auto listing"
        title="Move from a product idea to a clean listing workflow."
        text="Prepare titles, descriptions, prices, quantities and product details in one structured editor instead of repeating the same work across disconnected screens."
        visual={<ReferenceVisual asset="listing" title="Listing workflow reference" />}
        href="/features/auto-listing"
        bullets={['Import product context', 'Review listing content and pricing', 'Save drafts or move listings forward']}
      />

      <section className="section bg-[#f8f5fc]">
        <div className="container-site grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow">Stock + price monitoring</div>
            <h2 className="mt-4 text-[38px] leading-[1.05] font-[840] tracking-[-.042em] sm:text-[50px]">Supplier changes should be obvious, not buried.</h2>
            <p className="muted mt-5 text-[17px] leading-7">Keep price changes, stock states and attention items visible from a single monitoring center.</p>
            <div className="mt-7"><ReferenceVisual asset="monitoring" title="Price + stock monitoring reference"/></div>
          </div>
          <div className="self-end"><MonitoringPreview/></div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading eyebrow="Google Sheets automation" title="Your order and profit sheet should update as part of the workflow." text="Turn order, cost, fee, margin and status information into a structured spreadsheet flow that remains easy to review outside the dashboard."/>
          <div className="mt-10"><SheetPreview/></div>
        </div>
      </section>

      <section className="section bg-[#fbfaff]">
        <div className="container-site grid items-start gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <SectionHeading eyebrow="Calculation dashboard" title="Know the numbers before you scale the workflow." text="Estimate net profit, profit margin, ROI and break-even price using the cost inputs that actually matter."/>
          <ProfitCalculator/>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading eyebrow="Profit dashboard" title="See where margin is coming from — and where it is leaking." text="Review sales, product cost, fees, net profit and margin with a consistent analytics view."/>
          <div className="mt-10"><AnalyticsPanel/></div>
        </div>
      </section>

      <section className="section bg-[#fbfaff]">
        <div className="container-site">
          <SectionHeading eyebrow="Reports" title="Turn operating data into a reusable reporting layer." text="Keep sales, profit, orders, product performance, inventory and price-change reports in one workspace."/>
          <div className="mt-10"><ReportsPreview/></div>
        </div>
      </section>

      <FeatureGrid />

      <section id="product-tour" className="section">
        <div className="container-site">
          <SectionHeading center eyebrow="Product dashboard" title="A product experience that looks like software people can actually work in." text="Reusable dashboard primitives keep product visuals consistent across the marketing site and future application screens."/>
          <div className="mt-10"><DashboardPreview/></div>
        </div>
      </section>

      <HowItWorks />
      <Benefits />

      <section className="section">
        <div className="container-site">
          <SectionHeading center eyebrow="Pricing" title="Simple plan structure. Final commercial details stay configurable." text="Plan pricing and exact limits remain placeholders until approved business data is supplied."/>
          <div className="mt-10"><Pricing/></div>
        </div>
      </section>

      <section id="faq" className="section bg-[#fbfaff]">
        <div className="container-site grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <SectionHeading eyebrow="FAQ" title="Clear answers, without invented capabilities." text="The site keeps integrations, limits and claims tied to approved product requirements."/>
          <Faq/>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div className="brand-gradient relative overflow-hidden rounded-[26px] px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            <div className="absolute inset-0 dot-grid opacity-[.12]" />
            <div className="relative mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em] text-white/65"><Sparkles size={14}/>AutoDropshipPrime</div>
              <h2 className="mt-5 text-[38px] leading-[1.04] font-[850] tracking-[-.045em] sm:text-[54px]">Run your dropshipping operation from one place.</h2>
              <p className="mx-auto mt-5 max-w-xl text-[17px] leading-7 text-white/75">Research products, operate listings, monitor changes and understand profit without jumping between disconnected tools.</p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link href="/signup" className="rounded-[11px] bg-white px-5 py-3 font-extrabold text-[#32158c]">Start Free</Link>
                <Link href="/contact" className="rounded-[11px] border border-white/25 bg-white/10 px-5 py-3 font-extrabold text-white">Book a Demo</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
