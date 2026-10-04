import type { Metadata } from 'next';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { SignupForm } from '@/components/Forms';
import { ProductHunterPreview } from '@/components/ProductVisuals';

export const metadata: Metadata = { title:'Create Account', description:'Create an AutoDropshipPrime account.' };
const icon8=(name:string)=>`https://img.icons8.com/color/96/${name}.png`;

export default function SignupPage(){return <section className="border-y border-[#eee8f4] bg-[linear-gradient(180deg,#fbf8ff_0%,#ffffff_60%,#faf8ff_100%)] py-7 sm:py-10">
  <div className="container-site grid overflow-hidden rounded-[26px] border border-[#e4daef] bg-white lg:min-h-[720px] lg:grid-cols-[.88fr_1.12fr]">
    <div className="flex min-w-0 flex-col p-5 sm:p-8 lg:p-10 xl:p-12">
      <Image src="/logo.png" alt="AutoDropshipPrime" width={210} height={110} className="h-[48px] w-auto self-start object-contain"/>
      <div className="mx-auto my-auto w-full max-w-[460px] py-10">
        <div className="eyebrow"><Sparkles size={13}/>Create workspace</div>
        <h1 className="mt-4 text-[36px] leading-[1.04] font-[850] tracking-[-.04em] sm:text-[42px]">Start your <span className="gradient-text">connected seller workflow.</span></h1>
        <p className="muted mt-3 text-[15px] leading-7">Create your AutoDropshipPrime workspace and begin with the same product-first experience shown across the homepage.</p>
        <SignupForm/>
      </div>
    </div>
    <div className="relative hidden min-w-0 overflow-hidden border-l border-[#e7deef] bg-[#faf7ff] p-7 lg:flex lg:flex-col lg:justify-center xl:p-10">
      <span className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#e6dcf2]"/>
      <div className="relative min-w-0">
        <div className="mb-6 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ddd0f4] bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[.12em] text-[#6d28d9]"><Sparkles size={13}/>Start with product discovery</div>
          <h2 className="mt-4 text-[29px] leading-[1.08] font-[850] tracking-[-.04em] text-[#171230] xl:text-[34px]">Keep product, supplier, pricing and margin context from day one.</h2>
          <p className="muted mt-3 text-[13px] leading-6">The signup page now carries the same light, realistic dashboard language as the homepage.</p>
        </div>
        <div className="rounded-[22px] border border-[#e2d8ef] bg-white p-3"><ProductHunterPreview/></div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            ['search--v1','Research'],['checklist','Listings'],['google-sheets','Sheets']
          ].map(([icon,title])=><div key={title} className="rounded-[16px] border border-[#e6deef] bg-white p-3 text-center"><img src={icon8(icon)} alt="" className="mx-auto h-9 w-9 object-contain"/><div className="mt-2 text-[10px] font-extrabold text-[#171230]">{title}</div></div>)}
        </div>
      </div>
    </div>
  </div>
</section>}
