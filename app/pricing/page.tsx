import type { Metadata } from 'next';
import { Crown, Sparkles } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import MarketingCta from '@/components/MarketingCta';

export const metadata: Metadata = { title:'Pricing', description:'AutoDropshipPrime plans for product hunting, monitoring, analytics and reporting.' };

const planPreview = [
  ['Trial','$1','3 days','#10b981','#effcf7'],
  ['Starter','$19','/month','#1689f5','#eef7ff'],
  ['Professional','$49','/month','#7c22f4','#f5efff'],
  ['Enterprise','$99','/month','#ff6b14','#fff5e8'],
] as const;

function PricingPreview(){return <div className="grid gap-3 sm:grid-cols-2">
  {planPreview.map(([name,price,suffix,accent,soft],index)=><div key={name} className="relative rounded-[18px] border border-[#e8e0f1] p-4" style={{background:soft}}>
    {index===2&&<span className="absolute right-3 top-3 rounded-full bg-[#f7d7ff] px-2 py-1 text-[7px] font-black uppercase tracking-[.05em] text-[#7c22f4]">Most Popular</span>}
    <div className="flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-[10px] bg-white" style={{color:accent}}>{index===2?<Crown size={18}/>:<Sparkles size={17}/>}</span><span className="text-[12px] font-extrabold text-[#171230]">{name}</span></div>
    <div className="mt-4 flex items-end gap-1"><span className="text-[30px] font-black leading-none tracking-[-.04em] text-[#171230]">{price}</span><span className="mb-1 text-[9px] font-bold text-[#6d6578]">{suffix}</span></div>
  </div>)}
</div>}

export default function PricingPage(){return <>
  <PageHero
    eyebrow={<><Crown size={13}/>Flexible plans for every seller</>}
    title={<>Choose Your Plan & <span className="gradient-text">Start Automating Today.</span></>}
    description="Start with the $1 trial, then choose the listing limits, store capacity, support level and automation features that fit your operation."
    bullets={['$1 / 3-day trial','Starter from $19/month','Professional from $49/month','Custom limits available']}
    primary={{label:'Start 3-Day Trial',href:'/signup'}}
    secondary={{label:'Contact Sales',href:'/contact'}}
    visual={<PricingPreview/>}
  />

  <section className="section bg-white">
    <div className="container-site"><Pricing full/></div>
  </section>

  <section className="section border-y border-[#eee8f4] bg-[#faf8ff]">
    <div className="container-site">
      <div className="mx-auto mb-9 max-w-[820px] text-center"><div className="eyebrow">Frequently asked questions</div><h2 className="mt-4 text-[31px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[40px]">Plans, features and billing answers.</h2><p className="muted mx-auto mt-4 max-w-[680px] text-[14px] leading-7">Review the trial, store limits, payment methods, upgrades, support and custom-plan options before getting started.</p></div>
      <Faq/>
    </div>
  </section>

  <MarketingCta title="Start with the plan that fits today." text="Use the trial to explore the workflow, then move into the plan and add-ons that match your store as it grows."/>
</>}
