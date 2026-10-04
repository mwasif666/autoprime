import type { Metadata } from 'next';
import { MessageSquareText } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ConnectedWorkflowShowcase from '@/components/ConnectedWorkflowShowcase';
import MarketingCta from '@/components/MarketingCta';
import { ContactForm } from '@/components/Forms';

export const metadata: Metadata = { title:'Contact', description:'Contact AutoDropshipPrime about your seller workflow.' };

const icon8 = (name:string) => `https://img.icons8.com/color/96/${name}.png`;

const topics = [
  ['Product research','Map sourcing, supplier, price and margin context.','search--v1'],
  ['Listings & orders','Connect listing preparation with order visibility.','checklist'],
  ['Monitoring','Review stock and supplier price changes.','combo-chart--v1'],
  ['Sheets & profit','Keep financial records, wallet activity and reporting connected.','google-sheets'],
];

export default function ContactPage(){return <>
  <PageHero
    eyebrow={<><MessageSquareText size={13}/>Contact AutoDropshipPrime</>}
    title={<>Tell us where your workflow needs <span className="gradient-text">more automation.</span></>}
    description="Share how your store works today and which parts of product research, listings, monitoring, orders, wallet activity or reporting you want to simplify."
    bullets={['Product hunting and listing workflows','Stock, price and order monitoring','Google Sheets and profit visibility','Custom plan and integration requirements']}
    visual={<div className="p-2 sm:p-4"><div className="mb-5"><div className="text-[20px] font-extrabold tracking-[-.02em] text-[#171230]">Tell us about your store</div><p className="muted mt-1 text-[12px] leading-5">Share the workflow you want to improve.</p></div><ContactForm/></div>}
  />

  <section className="section bg-white">
    <div className="container-site">
      <div className="mx-auto max-w-[820px] text-center">
        <div className="eyebrow">What we can discuss</div>
        <h2 className="mt-4 text-[31px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[40px]">Bring the current workflow. We can map the product around it.</h2>
        <p className="muted mx-auto mt-4 max-w-[700px] text-[14px] leading-7">Use the same product modules shown across the homepage as reference points for the conversation.</p>
      </div>
      <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {topics.map(([title,text,icon],index)=><article key={title} className="relative rounded-[22px] border border-[#e7e0ef] bg-[#fdfcff] p-5">
          <span className="absolute right-4 top-4 grid h-8 min-w-8 place-items-center rounded-[9px] bg-[linear-gradient(135deg,#6d28d9,#9a2cff)] px-2 text-[10px] font-black text-white">0{index+1}</span>
          <span className="grid h-16 w-16 place-items-center rounded-[18px] border border-[#eee6f7] bg-[#faf7ff]"><img src={icon8(icon)} alt="" className="h-12 w-12 object-contain"/></span>
          <h3 className="mt-5 text-[16px] font-extrabold text-[#171230]">{title}</h3>
          <p className="muted mt-2 text-[12px] leading-6">{text}</p>
        </article>)}
      </div>
    </div>
  </section>

  <ConnectedWorkflowShowcase
    eyebrow="Conversation map"
    title="Talk through the workflow in the same order your team operates it."
    text="Start with product discovery, then map listing, monitoring, orders, Sheets and profitability so the discussion stays practical and connected."
  />

  <MarketingCta title="Ready to map your seller workflow?" text="Use the contact form above or create an account when you are ready to start configuring the platform."/>
</>}
