import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  FileSpreadsheet,
  PackageSearch,
  RefreshCcw,
  ShoppingCart,
  Sparkles,
  Tags,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import ProductResearchShowcase from '@/components/ProductResearchShowcase';
import WalletPaymentsShowcase from '@/components/WalletPaymentsShowcase';
import BentoFeatures from '@/components/BentoFeatures';
import SectionHeading from '@/components/SectionHeading';
import MarketingCta from '@/components/MarketingCta';
import {
  DashboardStorySection,
  HeroDashboardImage,
  OutcomeEditorialSection,
  SourceMarketplaceStrip,
  WorkflowRail,
  dashboardAssets,
} from '@/components/MarketingPageSections';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore AutoDropshipPrime product research, listing, monitoring, finance and reporting workflows.',
};

export default function FeaturesPage(){
  return <>
    <PageHero
      eyebrow={<><Sparkles size={13}/>Connected product system</>}
      title={<>One platform for your <span className="gradient-text">dropshipping workflow.</span></>}
      description="Research products, prepare listings, monitor supplier changes, track orders and understand profit from one consistent product experience."
      bullets={['Product research','Listing optimization','Stock + price monitoring','Sheets, wallet and profit visibility']}
      primary={{label:'Start Free',href:'/signup'}}
      secondary={{label:'See Pricing',href:'/pricing'}}
      visual={<HeroDashboardImage src={dashboardAssets.marketplace} alt="AutoDropshipPrime marketplace dashboard"/>}
    />

    <SourceMarketplaceStrip
      eyebrow="Source products"
      title="Research and import from eBay, AliExpress, Etsy and Amazon before moving products into the connected workflow."
    />

    <ProductResearchShowcase />

    <DashboardStorySection
      eyebrow="Order processing"
      title="The product keeps operating context visible after a listing starts selling."
      text="Orders, buyer details, supplier order work and processing status live in the same product language instead of feeling like a separate back-office tool."
      src={dashboardAssets.orderProcessing}
      alt="AutoDropshipPrime order processing dashboard"
      points={['Sync and review new orders','Keep processing status visible','Connect order value with supplier context']}
      reverse
      cta={{label:'Explore the workflow',href:'/features'}}
    />

    <OutcomeEditorialSection
      eyebrow="Core product capabilities"
      title="Different jobs, one consistent operating model."
      text="Each part of AutoDropshipPrime uses the same hierarchy and status language so sellers do not have to relearn the product every time they switch tasks."
      items={[
        {title:'Product research',text:'Compare product, supplier, source-price and margin context before listing.',Icon:PackageSearch,tone:'#6d28d9',soft:'#f3edff'},
        {title:'Stock and price monitoring',text:'Keep supplier changes visible with the product and margin context required to review them.',Icon:RefreshCcw,tone:'#1689f5',soft:'#eef7ff'},
        {title:'Orders and operations',text:'Review processing state, buyer details and supplier order context in one workflow.',Icon:ShoppingCart,tone:'#ff6b14',soft:'#fff3e8'},
        {title:'Sheets and analytics',text:'Keep order economics organized for profit review and spreadsheet-ready records.',Icon:FileSpreadsheet,tone:'#16a36a',soft:'#ecfbf3'},
      ]}
      soft
    />

    <WorkflowRail
      eyebrow="How the product connects"
      title="A single sequence instead of separate tools."
      text="The same visual language follows the seller from research through listings, monitoring, orders, Google Sheets and profit review."
    />

    <section className="section bg-white">
      <div className="container-site">
        <SectionHeading
          center
          eyebrow="Capabilities"
          title="Explore the platform by workflow."
          text="The product stays scannable through varied bento modules instead of repeating the same generic card everywhere."
        />
        <div className="mt-9"><BentoFeatures/></div>
      </div>
    </section>

    <WalletPaymentsShowcase />

    <DashboardStorySection
      eyebrow="Profit and calculation visibility"
      title="Operational records become useful when the numbers stay connected to the orders behind them."
      text="Use the calculation workspace to review cost, shipping, earnings, profit and ROI alongside the underlying order rows instead of relying on isolated headline metrics."
      src={dashboardAssets.calculations}
      alt="AutoDropshipPrime calculations dashboard"
      points={['Review cost and earnings together','Keep order rows available for context','Use the same data in reporting workflows']}
      cta={{label:'Explore Analytics',href:'/features/analytics'}}
    />

    <section className="section border-y border-[#eee8f4] bg-[#faf8ff]">
      <div className="container-site grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
        <div>
          <div className="eyebrow">Choose the next workflow</div>
          <h2 className="mt-4 text-[30px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[38px]">Go deeper into the feature that matches your next seller task.</h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['/features/product-hunting','Product Hunting',PackageSearch],
            ['/features/price-monitoring','Price Monitoring',Tags],
            ['/features/google-sheets','Google Sheets',FileSpreadsheet],
            ['/features/analytics','Profit Dashboard',BarChart3],
            ['/features/reports','Reports',BarChart3],
            ['/contact','Talk to Sales',ShoppingCart],
          ].map(([href,label,Icon]:any)=><Link key={label} href={href} className="flex min-h-[64px] items-center justify-between gap-3 border-b border-[#e6deef] px-2 py-3 text-[12px] font-extrabold text-[#2c2340] transition hover:text-[#6d28d9]"><span className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-[11px] bg-white text-[#6d28d9]"><Icon size={17}/></span>{label}</span><ArrowRight size={14}/></Link>)}
        </div>
      </div>
    </section>

    <MarketingCta title="Bring every seller workflow into one consistent product system." text="Start with the core workflow, then expand into monitoring, Sheets, wallet activity and analytics as your operation grows."/>
  </>;
}
