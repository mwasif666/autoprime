import type { Metadata } from 'next';
import { BarChart3, FileSpreadsheet, MessageSquareText, PackageSearch, RefreshCcw } from 'lucide-react';
import PageHero from '@/components/PageHero';
import MarketingCta from '@/components/MarketingCta';
import { ContactForm } from '@/components/Forms';
import {
  DashboardStorySection,
  OutcomeEditorialSection,
  WorkflowRail,
  dashboardAssets,
} from '@/components/MarketingPageSections';

export const metadata: Metadata = { title:'Contact', description:'Contact AutoDropshipPrime about your seller workflow.' };

export default function ContactPage(){return <>
  <PageHero
    eyebrow={<><MessageSquareText size={13}/>Contact AutoDropshipPrime</>}
    title={<>Tell us where your workflow needs <span className="gradient-text">more automation.</span></>}
    description="Share how your store works today and which parts of product research, listings, monitoring, orders, wallet activity or reporting you want to simplify."
    bullets={['Product hunting and listing workflows','Stock, price and order monitoring','Google Sheets and profit visibility','Custom plan and integration requirements']}
    visual={<div className="p-2 sm:p-4"><div className="mb-5"><div className="text-[20px] font-extrabold tracking-[-.02em] text-[#171230]">Tell us about your store</div><p className="muted mt-1 text-[12px] leading-5">Share the workflow you want to improve.</p></div><ContactForm/></div>}
  />

  <OutcomeEditorialSection
    eyebrow="What we can discuss"
    title="Bring the current workflow. We can map the product around it."
    text="Use the same product modules shown across the homepage as reference points for the conversation, then focus on the part of the operation that needs the clearest improvement."
    items={[
      {title:'Product research',text:'Map sourcing, supplier, price and margin context before products move forward.',Icon:PackageSearch,tone:'#6d28d9',soft:'#f3edff'},
      {title:'Listings and monitoring',text:'Connect listing preparation with stock and supplier-price visibility.',Icon:RefreshCcw,tone:'#1689f5',soft:'#eef7ff'},
      {title:'Sheets and profit',text:'Keep financial records, calculations and reporting connected to the operating data.',Icon:FileSpreadsheet,tone:'#16a36a',soft:'#ecfbf3'},
      {title:'Reporting and visibility',text:'Clarify the metrics and records your team needs to review regularly.',Icon:BarChart3,tone:'#f22eb7',soft:'#fff0f7'},
    ]}
    soft
  />

  <DashboardStorySection
    eyebrow="Talk about the real workflow"
    title="Use the same screens your team works in as the starting point for the conversation."
    text="Instead of describing automation in abstract terms, point to the actual order-processing, product, monitoring or finance step that feels slow or disconnected today."
    src={dashboardAssets.orderProcessing}
    alt="AutoDropshipPrime order processing dashboard"
    points={['Explain the current manual step','Identify the status or data that needs to stay visible','Map the next action and the screen that should own it']}
    reverse
  />

  <WorkflowRail
    eyebrow="Conversation map"
    title="Talk through the workflow in the same order your team operates it."
    text="Start with product discovery, then map listing, monitoring, orders, Sheets and profitability so the discussion stays practical and connected."
  />

  <MarketingCta title="Ready to map your seller workflow?" text="Use the contact form above or create an account when you are ready to start configuring the platform."/>
</>}
