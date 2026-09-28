import type { Metadata } from 'next';
import { Check, MessageSquareText, ShieldCheck } from 'lucide-react';
import { ContactForm } from '@/components/Forms';
import MarketingCta from '@/components/MarketingCta';
import { ProductDashboardPreview } from '@/components/ProductVisuals';

export const metadata: Metadata = { title:'Contact', description:'Contact AutoDropshipPrime about your seller workflow.' };

export default function ContactPage(){return <>
  <section className="hero-mesh border-b border-[#eee9f4]">
    <div className="container-site grid items-start gap-10 py-14 lg:grid-cols-[.76fr_1.24fr] lg:py-18">
      <div className="lg:sticky lg:top-[104px]">
        <div className="eyebrow"><MessageSquareText size={13}/>Contact</div>
        <h1 className="mt-4 text-[38px] leading-[1.05] font-[850] tracking-[-.04em] sm:text-[48px]">Talk to AutoDropshipPrime.</h1>
        <p className="muted mt-5 max-w-xl text-[16px] leading-7">Tell us how your store works today and where you want more automation, visibility or reporting.</p>
        <div className="mt-7 space-y-3">{['Product hunting and listing workflows','Stock, price and order monitoring','Google Sheets, profit analytics and reporting'].map(x=><div key={x} className="flex items-center gap-2 text-sm font-semibold"><Check size={15} className="text-[#6d28d9]"/>{x}</div>)}</div>

        <div className="mt-8 rounded-[16px] border border-[#e7e0ef] bg-white p-5">
          <div className="flex items-center gap-2 text-sm font-extrabold"><ShieldCheck size={17} className="text-[#6d28d9]"/>Focused product conversation</div>
          <p className="muted mt-2 text-[12px] leading-5">Use the form to share your current workflow and the areas you want to automate or measure more clearly.</p>
        </div>
      </div>

      <div className="product-frame p-5 sm:p-7 lg:p-8">
        <h2 className="text-[20px] font-extrabold">Tell us about your store</h2>
        <p className="muted mt-2 text-[13px]">Share the workflow you want to improve.</p>
        <div className="mt-6"><ContactForm/></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="container-site grid items-center gap-10 lg:grid-cols-[.68fr_1.32fr]">
      <div>
        <div className="eyebrow">What we can discuss</div>
        <h2 className="mt-3 text-[30px] leading-[1.1] font-[820] tracking-[-.03em] sm:text-[38px]">Bring the current workflow. We can map the product around it.</h2>
        <p className="muted mt-4 text-[15px] leading-7">Use the product view as a reference for the areas that can be connected: products, supplier cost, selling price, stock, margin and reporting.</p>
      </div>
      <ProductDashboardPreview/>
    </div>
  </section>

  <MarketingCta title="Ready to see the workflow in one place?" text="Start with a focused product setup or talk through the operating model with the team."/>
</>}