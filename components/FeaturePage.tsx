import Link from 'next/link';
import { ArrowRight, CheckCircle2, Eye, ListChecks, Sparkles } from 'lucide-react';
import type { FeatureConfig } from '@/data/site';
import MarketingCta from './MarketingCta';
import PageHero from './PageHero';
import {
  DashboardStorySection,
  HeroDashboardImage,
  OutcomeEditorialSection,
  SourceMarketplaceStrip,
  WorkflowRail,
  dashboardAssets,
  type OutcomeItem,
} from './MarketingPageSections';

const dashboardBySlug: Record<string, { src: string; eyebrow: string; title: string; text: string }> = {
  'product-hunting': {
    src: dashboardAssets.marketplace,
    eyebrow: 'Marketplace workspace',
    title: 'Research inside the same product environment you use every day.',
    text: 'Keep supplier, category and product discovery context visible while you compare opportunities and decide what should move into your listing workflow.',
  },
  'auto-listing': {
    src: dashboardAssets.aiImageGenerator,
    eyebrow: 'Listing content workspace',
    title: 'Prepare listing assets without breaking the workflow.',
    text: 'Product imagery and listing preparation stay close to the same seller experience instead of feeling like a disconnected creative tool.',
  },
  'stock-monitoring': {
    src: dashboardAssets.marketplace,
    eyebrow: 'Product context',
    title: 'Review stock decisions with the source product still in view.',
    text: 'Supplier and product context remains close to monitoring so low-stock and out-of-stock states are easier to interpret and act on.',
  },
  'price-monitoring': {
    src: dashboardAssets.calculations,
    eyebrow: 'Margin context',
    title: 'Price changes make more sense when profit stays visible.',
    text: 'Use supplier-price movement alongside cost and profit context so a price change is not isolated from the economics of the listing.',
  },
  'google-sheets': {
    src: dashboardAssets.calculations,
    eyebrow: 'Finance records',
    title: 'Keep order economics structured for review outside the dashboard.',
    text: 'Order values, costs and profit calculations stay organized so the same records can feed a clear spreadsheet-ready workflow.',
  },
  analytics: {
    src: dashboardAssets.calculations,
    eyebrow: 'Calculation dashboard',
    title: 'Use real order rows to understand the numbers behind the store.',
    text: 'Revenue, cost, shipping, profit and ROI stay connected to the underlying orders rather than being reduced to decorative summary cards.',
  },
  reports: {
    src: dashboardAssets.orders,
    eyebrow: 'Operational records',
    title: 'Reports start with clean, understandable order data.',
    text: 'Keep product, buyer, order and status context structured before turning the same operating data into reusable reports and exports.',
  },
};

export default function FeaturePage({ config }: { config: FeatureConfig }) {
  const Icon = config.icon;
  const dashboard = dashboardBySlug[config.slug] || dashboardBySlug['product-hunting'];
  const outcomeItems: OutcomeItem[] = [
    { title: config.bullets[0], text: 'Keep the primary task focused and easy to scan without opening another disconnected tool.', Icon, tone: '#6d28d9', soft: '#f3edff' },
    { title: config.bullets[1], text: 'Keep the information required for the decision visible at the moment it matters.', Icon: Eye, tone: '#1689f5', soft: '#eef7ff' },
    { title: config.bullets[2], text: 'Surface the operating state clearly so important changes do not disappear inside dense screens.', Icon: ListChecks, tone: '#16a36a', soft: '#ecfbf3' },
    { title: config.bullets[3], text: 'Move the result forward into the connected seller workflow with the same product context intact.', Icon: CheckCircle2, tone: '#f22eb7', soft: '#fff0f7' },
  ];

  return (
    <>
      <PageHero
        eyebrow={<><Icon size={13}/>{config.eyebrow}</>}
        title={<>{config.hero}</>}
        description={config.description}
        bullets={config.bullets.slice(0, 4)}
        primary={{ label: 'Start Free', href: '/signup' }}
        secondary={{ label: 'Talk to Sales', href: '/contact' }}
        visual={<HeroDashboardImage src={dashboard.src} alt={`${config.title} dashboard`} />}
      />

      {(config.slug === 'product-hunting' || config.slug === 'auto-listing') && (
        <SourceMarketplaceStrip
          eyebrow="Product sources"
          title="Research and import from the marketplaces already used in the seller workflow."
        />
      )}

      <DashboardStorySection
        eyebrow={dashboard.eyebrow}
        title={dashboard.title}
        text={dashboard.text}
        src={dashboard.src}
        alt={`${config.title} product workspace`}
        points={config.bullets.slice(0, 3)}
        reverse={config.slug === 'auto-listing' || config.slug === 'google-sheets' || config.slug === 'reports'}
      />

      <OutcomeEditorialSection
        eyebrow="What the workflow keeps visible"
        title={`${config.title} should feel like part of one operating system.`}
        text="The page follows the same product-led visual language as the homepage: clear hierarchy, realistic operating context, colorful status cues and fewer repeated card patterns."
        items={outcomeItems}
        soft
      />

      <WorkflowRail
        eyebrow="Connected workflow"
        title={`Move from ${config.title.toLowerCase()} into the next seller task without losing context.`}
        text="Research, listings, monitoring, orders, Sheets and profitability use one consistent operating sequence across AutoDropshipPrime."
      />

      <section className="section bg-white">
        <div className="container-site grid gap-5 border-y border-[#e7dfef] py-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[.12em] text-[#6d28d9]"><Sparkles size={13}/>Continue the workflow</div>
            <h2 className="mt-2 max-w-[760px] text-[24px] font-[850] leading-[1.1] tracking-[-.035em] text-[#171230] sm:text-[30px]">See how {config.title.toLowerCase()} fits into the complete AutoDropshipPrime product.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/features" className="btn-secondary">All Features</Link>
            <Link href="/pricing" className="btn-primary !text-white">See Plans <ArrowRight size={15}/></Link>
          </div>
        </div>
      </section>

      <MarketingCta title={`Bring ${config.title.toLowerCase()} into one connected workspace.`} text="Keep the feature close to the rest of the seller workflow instead of treating it as another isolated tool." />
    </>
  );
}
