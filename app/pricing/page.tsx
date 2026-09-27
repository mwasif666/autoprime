import type { Metadata } from 'next';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = { title:'Pricing', description:'AutoDropshipPrime plans for product hunting, monitoring, analytics and reporting.' };

export default function PricingPage(){return <>
  <section className="hero-mesh border-b border-[#eee9f4]">
    <div className="container-site py-20 text-center">
      <div className="eyebrow">Pricing</div>
      <h1 className="mx-auto mt-4 max-w-3xl text-[38px] leading-[1.05] font-[850] tracking-[-.04em] sm:text-[48px] lg:text-[52px]">Choose the plan that fits your store.</h1>
      <p className="muted mx-auto mt-5 max-w-2xl text-[16px] leading-7">Start with the core workflow and scale into monitoring, Google Sheets, profit analytics and reporting as your operation grows.</p>
    </div>
  </section>
  <section className="section"><div className="container-site"><Pricing full/></div></section>
  <section className="section bg-[#fbfaff]"><div className="container-site grid gap-9 lg:grid-cols-[.78fr_1.22fr]"><SectionHeading eyebrow="Billing FAQ" title="Plan and billing questions." text="Compare the included workflows and choose the plan structure that matches your operation."/><Faq/></div></section>
</>}