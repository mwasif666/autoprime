import type { Metadata } from 'next';
import { Check, Sparkles } from 'lucide-react';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import SectionHeading from '@/components/SectionHeading';
import MarketingCta from '@/components/MarketingCta';
import { ProductDashboardPreview } from '@/components/ProductVisuals';

export const metadata: Metadata = { title:'Pricing', description:'AutoDropshipPrime plans for product hunting, monitoring, analytics and reporting.' };

export default function PricingPage(){return <>
  <section className="hero-mesh border-b border-[#eee9f4]">
    <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-[.78fr_1.22fr] lg:py-20">
      <div>
        <div className="eyebrow"><Sparkles size={13}/>Pricing</div>
        <h1 className="mt-4 max-w-3xl text-[38px] leading-[1.05] font-[850] tracking-[-.04em] sm:text-[48px] lg:text-[52px]">Choose a plan around the workflow you need.</h1>
        <p className="muted mt-5 max-w-2xl text-[16px] leading-7">Start with research and listings, then add monitoring, Google Sheets, profit analytics and reports as your operation grows.</p>
        <div className="mt-7 space-y-3">{['Core product workflow','Monitoring and analytics','Configurable plan limits'].map(x=><div key={x} className="flex items-center gap-2 text-[13px] font-semibold"><Check size={14} className="text-[#6d28d9]"/>{x}</div>)}</div>
      </div>
      <ProductDashboardPreview/>
    </div>
  </section>

  <section className="section">
    <div className="container-site">
      <SectionHeading center eyebrow="Plans" title="Simple plan structure with room to scale." text="Final prices and limits remain configurable until commercial terms are approved."/>
      <div className="mt-8"><Pricing full/></div>
    </div>
  </section>

  <section className="section bg-[#fbfaff]">
    <div className="container-site grid gap-9 lg:grid-cols-[.72fr_1.28fr]">
      <SectionHeading eyebrow="Billing FAQ" title="Plan and billing questions." text="Compare included workflows and understand how plan configuration can map to your store."/>
      <Faq/>
    </div>
  </section>

  <MarketingCta title="Start with the workflow you need today." text="Keep the product experience consistent as your store adds more monitoring, reporting and automation."/>
</>}