import type { Metadata } from 'next';
import { BarChart3, Crown, FileSpreadsheet, RefreshCcw, ShoppingCart } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import MarketingCta from '@/components/MarketingCta';
import {
  DashboardStorySection,
  OutcomeEditorialSection,
  WorkflowRail,
  dashboardAssets,
} from '@/components/MarketingPageSections';

export const metadata: Metadata = { title:'Pricing', description:'AutoDropshipPrime plans for product hunting, monitoring, analytics and reporting.' };

function PricingHeroVisual(){
  return (
    <div className="relative overflow-hidden rounded-[18px] bg-[#f8f5ff]">
      <div className="flex items-center justify-between border-b border-[#e8e0f1] bg-white px-4 py-3 sm:px-5">
        <div>
          <div className="text-[9px] font-black uppercase tracking-[.12em] text-[#7c3aed]">AutoDropshipPrime workspace</div>
          <div className="mt-1 text-[12px] font-extrabold text-[#171230] sm:text-[13px]">See the product your plan unlocks</div>
        </div>
        <span className="rounded-full bg-[#efe8ff] px-3 py-1.5 text-[9px] font-black text-[#6d28d9]">Live product view</span>
      </div>

      <div className="relative bg-[linear-gradient(180deg,#fbf9ff_0%,#ffffff_100%)] p-2.5 sm:p-3.5">
        <img
          src={dashboardAssets.calculations}
          alt="AutoDropshipPrime calculations dashboard"
          className="block aspect-[16/9] w-full rounded-[14px] border border-[#e8e0f1] bg-white object-cover object-top"
          loading="eager"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-x-8 bottom-5 h-16 rounded-full bg-[#7c3aed]/10 blur-2xl" />
      </div>

      <div className="grid border-t border-[#e8e0f1] bg-white sm:grid-cols-3">
        {[
          ['Research','Find products'],
          ['Automate','Run daily workflows'],
          ['Review','Track profit'],
        ].map(([label,text])=><div key={label} className="border-b border-[#eee8f4] px-4 py-3 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
          <div className="text-[8px] font-black uppercase tracking-[.1em] text-[#8b3dff]">{label}</div>
          <div className="mt-1 text-[10px] font-bold text-[#4f465d]">{text}</div>
        </div>)}
      </div>
    </div>
  );
}

export default function PricingPage(){return <>
  <PageHero
    eyebrow={<><Crown size={13}/>Flexible plans for every seller</>}
    title={<>Choose a plan that <span className="gradient-text">fits your workflow.</span></>}
    description="Start with the $1 trial, then choose the listing limits, store capacity, support level and automation features that fit your operation."
    bullets={['$1 / 3-day trial','Starter from $19/month','Professional from $49/month','Custom limits available']}
    primary={{label:'Start 3-Day Trial',href:'/signup'}}
    secondary={{label:'Contact Sales',href:'/contact'}}
    visual={<PricingHeroVisual/>}
    titleSize="compact"
  />

  <section className="section bg-white">
    <div className="container-site"><Pricing full/></div>
  </section>

  <OutcomeEditorialSection
    eyebrow="Choose by workflow, not just limits"
    title="The plan should match how much of the operating system your store needs today."
    text="Use the pricing table for exact limits, then think about which connected workflows matter most to your current stage."
    items={[
      {title:'Start with core operations',text:'Use product research, listing and day-to-day order workflows as the foundation.',Icon:ShoppingCart,tone:'#6d28d9',soft:'#f3edff'},
      {title:'Add monitoring as volume grows',text:'Keep stock and supplier-price changes visible when more listings need attention.',Icon:RefreshCcw,tone:'#1689f5',soft:'#eef7ff'},
      {title:'Keep finance records structured',text:'Use Sheets and calculation workflows when cost, fee and profit visibility becomes more important.',Icon:FileSpreadsheet,tone:'#16a36a',soft:'#ecfbf3'},
      {title:'Use analytics for review',text:'Move into deeper profit and reporting views when you need clearer operating visibility across the store.',Icon:BarChart3,tone:'#f22eb7',soft:'#fff0f7'},
    ]}
    soft
  />

  <DashboardStorySection
    eyebrow="What the plans power"
    title="Pricing sits behind a real operating workspace, not a list of disconnected feature names."
    text="The same plan supports the workflows shown across the site: order processing, calculations, monitoring, Sheets and reporting inside one consistent product experience."
    src={dashboardAssets.orderProcessing}
    alt="AutoDropshipPrime order processing dashboard"
    points={['Keep processing status visible','Use consistent product and order context','Move from operations into finance and reporting']}
  />

  <WorkflowRail
    eyebrow="One product system"
    title="Whichever plan you choose, the workflow stays connected."
    text="Research, listings, monitoring, orders, Sheets and profitability keep the same product language as you move through the platform."
  />

  <section className="section border-y border-[#eee8f4] bg-[#faf8ff]">
    <div className="container-site">
      <div className="mx-auto mb-9 max-w-[820px] text-center"><div className="eyebrow">Frequently asked questions</div><h2 className="mt-4 text-[31px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[40px]">Plans, features and billing answers.</h2><p className="muted mx-auto mt-4 max-w-[680px] text-[14px] leading-7">Review the trial, store limits, payment methods, upgrades, support and custom-plan options before getting started.</p></div>
      <Faq/>
    </div>
  </section>

  <MarketingCta title="Start with the plan that fits today." text="Use the trial to explore the workflow, then move into the plan and add-ons that match your store as it grows."/>
</>}
