import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Check,
  ClipboardList,
  FileSpreadsheet,
  PackageSearch,
  RefreshCcw,
  SearchCheck,
  Sparkles,
  Tags,
} from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import Pricing from './Pricing';
import Faq from './Faq';
import AnalyticsPanel from './AnalyticsPanel';
import {
  ListingPreview,
  MonitoringPreview,
  ProductDashboardPreview,
  ProductHunterPreview,
  SheetPreview,
  Workflow,
} from './ProductVisuals';

const featureCards = [
  {
    number: '01',
    title: 'Product Hunting',
    text: 'Research products with supplier cost, selling price, margin and stock context in one place.',
    icon: PackageSearch,
    accent: '#6d28d9',
    soft: '#f3edff',
  },
  {
    number: '02',
    title: 'Auto Listing',
    text: 'Move shortlisted products into a structured listing workflow without repeating the same setup work.',
    icon: ClipboardList,
    accent: '#8b3dff',
    soft: '#f5efff',
  },
  {
    number: '03',
    title: 'Stock Monitoring',
    text: 'Keep supplier stock changes visible so products needing attention are easier to spot.',
    icon: RefreshCcw,
    accent: '#ee4e9b',
    soft: '#fff0f7',
  },
  {
    number: '04',
    title: 'Price Monitoring',
    text: 'Review supplier price movement alongside your current store pricing and margin context.',
    icon: Tags,
    accent: '#7c3aed',
    soft: '#f4efff',
  },
  {
    number: '05',
    title: 'Google Sheets',
    text: 'Keep order values, product cost, fees and profit records organized in a spreadsheet-ready workflow.',
    icon: FileSpreadsheet,
    accent: '#1d9b63',
    soft: '#eefaf4',
  },
  {
    number: '06',
    title: 'Profit Analytics',
    text: 'See sales, costs, fees, orders and profit trends from a single calculation and reporting view.',
    icon: BarChart3,
    accent: '#5b4bd8',
    soft: '#f0efff',
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#ece6f5] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8ff_100%)]">
      <div className="container-site grid min-h-[690px] items-center gap-12 py-16 lg:grid-cols-[.83fr_1.17fr] lg:py-20">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ddd0f4] bg-[#f7f1ff] px-3 py-2 text-[10px] font-black uppercase tracking-[.13em] text-[#6d28d9]">
            <Sparkles size={13} /> All-in-one eBay automation platform
          </div>

          <h1 className="mt-6 max-w-[600px] text-[43px] font-[850] leading-[.98] tracking-[-.055em] sm:text-[53px] lg:text-[62px]">
            Automate Your <span className="gradient-text">eBay Business.</span>
          </h1>

          <p className="muted mt-6 max-w-[590px] text-[16px] leading-7 sm:text-[17px]">
            Find products, prepare listings, monitor stock and prices, track orders and understand profit from one connected dropshipping workflow.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/signup" className="btn-primary min-h-[48px] px-6 text-sm">Start Free <ArrowRight size={16} /></Link>
            <a href="#how-it-works" className="btn-secondary min-h-[48px] px-6 text-sm">See How It Works</a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-[12px] font-bold text-[#665e73]">
            {['Product research', 'Listing workflow', 'Profit visibility'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#f0e8ff] text-[#6d28d9]"><Check size={11} /></span>
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="relative">
            <div className="mb-3 flex items-center justify-between px-1 text-[10px] font-black uppercase tracking-[.1em] text-[#81758e]">
              <span>Seller dashboard</span>
              <span className="text-[#6d28d9]">Product preview</span>
            </div>
            <div className="overflow-hidden rounded-[18px] border border-[#ded4ee] bg-white">
              <ProductDashboardPreview />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-[#ece6f5] bg-white">
        <div className="container-site flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-extrabold">Everything connected around your selling workflow</div>
            <div className="mt-1 text-[11px] text-[#7a7186]">Built around eBay operations and Google Sheets records</div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex min-h-[42px] items-center gap-3 rounded-xl border border-[#e4deeb] bg-[#fcfbff] px-4">
              <div className="text-[22px] font-black tracking-[-.07em]"><span className="text-[#e53238]">e</span><span className="text-[#0064d2]">b</span><span className="text-[#f5af02]">a</span><span className="text-[#86b817]">y</span></div>
              <span className="text-xs font-extrabold">Marketplace workflow</span>
            </div>
            <div className="flex min-h-[42px] items-center gap-3 rounded-xl border border-[#dce9e1] bg-[#f7fcf9] px-4">
              <FileSpreadsheet size={19} className="text-[#218a49]" />
              <span className="text-xs font-extrabold">Google Sheets sync</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureOverview() {
  return (
    <section className="section bg-[#fdfcff]">
      <div className="container-site">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="eyebrow">Everything in one workflow</div>
          <h2 className="mt-4 text-[32px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[42px]">
            Everything You Need to <span className="gradient-text">Automate Your eBay Business</span>
          </h2>
          <p className="muted mx-auto mt-4 max-w-[700px] text-[15px] leading-7">
            Bring product research, listing preparation, supplier monitoring, spreadsheet records and profit analytics into one connected platform.
          </p>
        </div>

        <div className="mt-11 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title}>
                <div className="h-full rounded-[16px] border border-[#e7e0ef] bg-white p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-[10px] text-[11px] font-black text-white" style={{ background: feature.accent }}>{feature.number}</span>
                    <span className="grid h-10 w-10 place-items-center rounded-[10px]" style={{ color: feature.accent, background: feature.soft }}><Icon size={19} /></span>
                  </div>
                  <h3 className="mt-6 text-[18px] font-extrabold tracking-[-.02em]">{feature.title}</h3>
                  <p className="muted mt-2 text-[13px] leading-6">{feature.text}</p>
                  <div className="mt-6 border-t border-[#eee9f3] pt-4">
                    <div className="flex items-center gap-2 text-[11px] font-extrabold" style={{ color: feature.accent }}>
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: feature.accent }} />
                      Connected product module
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ListingWorkflow() {
  const steps = [
    ['01', 'Choose a product', 'Move a researched product into listing preparation.'],
    ['02', 'Review content', 'Check title, description and product details before publishing.'],
    ['03', 'Set pricing', 'Keep source cost, selling price and margin visible together.'],
    ['04', 'Save or create', 'Finish with a clean draft or listing action.'],
  ];

  return (
    <section className="section border-y border-[#eee8f4] bg-[#faf7ff]">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[.72fr_1.28fr]">
        <Reveal>
          <div className="eyebrow">Listing workflow</div>
          <h2 className="mt-4 text-[32px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[42px]">Move From Product Research to a Ready Listing.</h2>
          <p className="muted mt-4 max-w-xl text-[15px] leading-7">Keep product details, content, pricing and margin context together in a clear step-by-step listing workflow.</p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {steps.map(([number, title, text]) => (
              <div key={number} className="flex gap-4 rounded-[14px] border border-[#e4daef] bg-white p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-[#6d28d9] text-[10px] font-black text-white">{number}</span>
                <div><div className="text-sm font-extrabold">{title}</div><div className="mt-1 text-[11px] leading-5 text-[#756d80]">{text}</div></div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.04}><ListingPreview /></Reveal>
      </div>
    </section>
  );
}

function ResearchSection() {
  return (
    <section className="section">
      <div className="container-site">
        <div className="grid items-end gap-7 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="eyebrow">Product research</div>
            <h2 className="mt-4 max-w-[660px] text-[32px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[42px]">Discover Products With the Selling Context You Actually Need.</h2>
          </div>
          <p className="muted max-w-[560px] text-[15px] leading-7 lg:justify-self-end">Review supplier, source price, estimated selling price, stock and potential margin before a product enters the listing workflow.</p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
          <Reveal><ProductHunterPreview /></Reveal>
          <Reveal delay={0.04}>
            <div className="grid h-full gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                [SearchCheck, 'Compare quickly', 'Keep source cost and selling context side by side.'],
                [PackageSearch, 'Build a shortlist', 'Move useful opportunities into one research view.'],
                [ArrowRight, 'Continue the workflow', 'Take a selected product directly toward listing preparation.'],
              ].map(([Icon, title, text]: any) => (
                <div key={title} className="rounded-[14px] border border-[#e6dfed] bg-[#fdfcff] p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-[#f1e9ff] text-[#6d28d9]"><Icon size={18} /></span>
                  <div className="mt-4 text-sm font-extrabold">{title}</div>
                  <p className="mt-2 text-[12px] leading-5 text-[#746c80]">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MonitoringSection() {
  return (
    <section className="section border-y border-[#eee8f4] bg-[#faf8ff]">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[.58fr_1.42fr] lg:items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ead8f3] bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[.12em] text-[#6d28d9]"><RefreshCcw size={12} /> Price & stock intelligence</div>
            <h2 className="mt-5 text-[32px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[42px]">Supplier Changes Stay Visible in One Monitoring Center.</h2>
            <p className="muted mt-4 text-[15px] leading-7">Use one view for stock state, supplier price changes, store-price context and items that need attention.</p>
            <div className="mt-6 space-y-3">
              {['Stock status at a glance', 'Supplier price-change context', 'Clear attention states'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#efe7ff] text-[#6d28d9]"><Check size={12} /></span>{item}</div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.04}><MonitoringPreview /></Reveal>
        </div>
      </div>
    </section>
  );
}

function SheetsSection() {
  return (
    <section className="section">
      <div className="container-site">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="eyebrow">Google Sheets automation</div>
          <h2 className="mt-4 text-[32px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[42px]">Keep Orders and Profit Records Organized Automatically.</h2>
          <p className="muted mx-auto mt-4 max-w-[680px] text-[15px] leading-7">Keep order value, product cost, fees, profit and status structured in a spreadsheet-ready flow that is easy to review.</p>
        </div>
        <Reveal><div className="mt-9"><SheetPreview /></div></Reveal>
      </div>
    </section>
  );
}

function ConnectedFlow() {
  return (
    <section id="how-it-works" className="section border-y border-[#382279] bg-[#211062] text-white">
      <div className="container-site grid gap-8 lg:grid-cols-[.62fr_1.38fr] lg:items-center">
        <div>
          <div className="text-[10px] font-black uppercase tracking-[.14em] text-[#d5c5ff]">How it works</div>
          <h2 className="mt-4 text-[32px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[42px]">One Connected Flow From Product Discovery to Profit.</h2>
          <p className="mt-4 max-w-xl text-[14px] leading-7 text-white/65">Research products, prepare listings, monitor changes, organize order records and review profit without switching between disconnected tools.</p>
        </div>
        <div className="rounded-[16px] border border-white/15 bg-white/[.04] p-4 text-[#171230] sm:p-5"><Workflow /></div>
      </div>
    </section>
  );
}

function AnalyticsSection() {
  return (
    <section className="section bg-[#fcfbff]">
      <div className="container-site">
        <SectionHeading
          center
          eyebrow="Profit dashboard"
          title="Understand What Is Selling, What It Costs and What You Keep."
          text="A practical analytics view brings sales, costs, fees, orders and profit trends together without adding unsupported performance claims."
        />
        <Reveal><div className="mt-9"><AnalyticsPanel /></div></Reveal>
      </div>
    </section>
  );
}

function ConversionSection() {
  return (
    <>
      <section className="section border-t border-[#eee8f4] bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow">Plans</div>
            <h2 className="mt-4 text-[32px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[42px]">Simple Plans for Growing Sellers.</h2>
            <p className="muted mt-4 text-[14px] leading-6">Choose the plan structure that fits your current selling workflow and room to grow.</p>
          </div>
          <div className="mt-9"><Pricing /></div>
        </div>
      </section>

      <section className="section border-t border-[#eee8f4] bg-[#faf8ff]">
        <div className="container-site max-w-[960px]">
          <div className="mb-8 text-center">
            <div className="eyebrow">FAQ</div>
            <h2 className="mt-4 text-[30px] font-[850] tracking-[-.035em] sm:text-[38px]">Questions Before You Get Started?</h2>
          </div>
          <Faq />
        </div>
      </section>
    </>
  );
}

function FinalCta() {
  return (
    <section className="section bg-white">
      <div className="container-site">
        <div className="overflow-hidden rounded-[18px] border border-[#40228a] bg-[linear-gradient(105deg,#211062_0%,#5d24c9_58%,#8b3dff_100%)] px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:py-9">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[.14em] text-[#ddd0ff]">Ready to simplify your workflow?</div>
            <h2 className="mt-3 text-[28px] font-[850] tracking-[-.035em] sm:text-[34px]">Run Your Dropshipping Operation From One Place.</h2>
          </div>
          <div className="mt-6 flex shrink-0 flex-wrap gap-3 lg:mt-0">
            <Link href="/signup" className="cta-primary">Start Free <ArrowRight size={15} /></Link>
            <Link href="/contact" className="cta-secondary">Book Demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureOverview />
      <ListingWorkflow />
      <ResearchSection />
      <MonitoringSection />
      <SheetsSection />
      <ConnectedFlow />
      <AnalyticsSection />
      <ConversionSection />
      <FinalCta />
    </>
  );
}
