import type { Metadata } from 'next';
import { Check, MessageSquareText } from 'lucide-react';
import { ContactForm } from '@/components/Forms';

export const metadata: Metadata = { title:'Contact', description:'Contact AutoDropshipPrime about your seller workflow.' };

export default function ContactPage(){return <section className="section hero-mesh"><div className="container-site grid gap-10 lg:grid-cols-[.78fr_1.22fr]">
  <div><div className="eyebrow"><MessageSquareText size={13}/>Contact</div><h1 className="mt-4 text-[38px] leading-[1.05] font-[850] tracking-[-.04em] sm:text-[48px]">Talk to AutoDropshipPrime.</h1><p className="muted mt-5 text-[16px] leading-7">Tell us how your store works today and where you want more automation or visibility.</p><div className="mt-7 space-y-3">{['Product hunting and listing workflows','Stock, price and order monitoring','Google Sheets, profit analytics and reporting'].map(x=><div key={x} className="flex items-center gap-2 text-sm font-semibold"><Check size={15} className="text-[#6d28d9]"/>{x}</div>)}</div></div>
  <div className="product-frame p-6 sm:p-8"><h2 className="text-[19px] font-extrabold">Tell us about your store</h2><p className="muted mt-2 text-[13px]">Share the workflow you want to improve.</p><div className="mt-6"><ContactForm/></div></div>
</div></section>}