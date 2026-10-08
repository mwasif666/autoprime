import type { Metadata } from 'next';
import { BarChart3, ListChecks, ShoppingCart, Sparkles, Workflow } from 'lucide-react';
import PageHero from '@/components/PageHero';
import MarketingCta from '@/components/MarketingCta';
import { ProductDashboardPreview } from '@/components/ProductVisuals';
import {
  DashboardStorySection,
  OutcomeEditorialSection,
  SourceMarketplaceStrip,
  WorkflowRail,
  dashboardAssets,
} from '@/components/MarketingPageSections';

export const metadata: Metadata = { title:'About', description:'The product direction behind AutoDropshipPrime.' };

export default function AboutPage(){return <>
  <PageHero
    eyebrow={<><Sparkles size={13}/>About AutoDropshipPrime</>}
    title={<>Less fragmented work. <span className="gradient-text">More operational clarity.</span></>}
    description="AutoDropshipPrime is designed around a simple idea: product research, listings, monitoring, orders, payments and profit analytics should feel like one connected operating workflow."
    bullets={['Product-first workflows','Clear status and next actions','Consistent analytics language','Reusable operating patterns']}
    primary={{label:'Explore Features',href:'/features'}}
    secondary={{label:'Talk to Us',href:'/contact'}}
    visual={<ProductDashboardPreview/>}
  />

  <SourceMarketplaceStrip
    eyebrow="Where the workflow starts"
    title="Research and import product opportunities from the marketplaces sellers already use."
  />

  <DashboardStorySection
    eyebrow="Why the product exists"
    title="The operating screen should make the next seller decision easier to understand."
    text="The platform is shaped around practical seller work: finding products, keeping product context nearby, understanding order state and seeing the economics behind each operation."
    src={dashboardAssets.marketplace}
    alt="AutoDropshipPrime marketplace dashboard"
    points={['Keep product and supplier context close','Use clear operating states instead of decorative UI','Move selected products into the next workflow without losing context']}
  />

  <OutcomeEditorialSection
    eyebrow="Product principles"
    title="Built around the work sellers repeat every day."
    text="The design system favors realistic operating states, colorful visual cues and reusable product patterns over disconnected screens or decorative dashboard chrome."
    items={[
      {title:'One connected system',text:'Keep research, listing, monitoring, wallet activity and analytics operationally connected.',Icon:Workflow,tone:'#6d28d9',soft:'#f3edff'},
      {title:'Clear operating states',text:'Show inputs, statuses and next actions without decorative clutter.',Icon:ListChecks,tone:'#1689f5',soft:'#eef7ff'},
      {title:'Useful visibility',text:'Bring pricing, stock, orders, Sheets and profit into one consistent view.',Icon:BarChart3,tone:'#16a36a',soft:'#ecfbf3'},
      {title:'Seller-first context',text:'Keep product, supplier, pricing and order context close to the task at hand.',Icon:ShoppingCart,tone:'#ff6b14',soft:'#fff3e8'},
    ]}
    soft
  />

  <WorkflowRail
    eyebrow="Operating model"
    title="One sequence from research to insight."
    text="Context stays visible as a product moves through research, listing preparation, monitoring, orders, Google Sheets and profitability review."
  />

  <DashboardStorySection
    eyebrow="Finance visibility"
    title="Operational data should stay usable outside a single dashboard."
    text="Order value, supplier cost, fees and profit can stay structured in a sheet-ready workflow while the application remains the main operating view."
    src={dashboardAssets.calculations}
    alt="AutoDropshipPrime calculations dashboard"
    points={['Keep costs connected to order rows','Review profit before scaling decisions','Use structured records for reporting and Sheets']}
    reverse
  />

  <MarketingCta title="Build your operation around one connected seller workflow." text="Keep research, monitoring, orders and financial visibility consistent as your store grows."/>
</>}
