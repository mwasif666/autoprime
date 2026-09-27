import type { Metadata } from 'next';
import Image from 'next/image';
import { BadgeCheck, Sparkles } from 'lucide-react';
import { SignupForm } from '@/components/Forms';
import { ReferenceVisual } from '@/components/ReferenceMedia';

export const metadata: Metadata = { title:'Create Account', description:'Create an AutoDropshipPrime account.' };

export default function SignupPage(){return <section className="min-h-[760px] bg-[linear-gradient(145deg,#f5f1fb,#fff_45%,#f9f3ff)] py-7 sm:py-10">
  <div className="container-site grid min-h-[700px] overflow-hidden rounded-[22px] border border-[#e7e2ed] bg-white lg:grid-cols-[.92fr_1.08fr]">
    <div className="flex flex-col p-6 sm:p-10 lg:p-12">
      <Image src="/logo.png" alt="AutoDropshipPrime" width={210} height={110} className="h-[48px] w-auto self-start object-contain"/>
      <div className="mx-auto my-auto w-full max-w-[460px] py-10">
        <div className="eyebrow"><Sparkles size={13}/>Create workspace</div>
        <h1 className="mt-4 text-[38px] font-[850] tracking-[-.04em]">Create your account.</h1>
        <p className="muted mt-2 text-[15px]">Set up your AutoDropshipPrime workspace.</p>
        <SignupForm/>
      </div>
    </div>
    <div className="relative hidden overflow-hidden bg-[#211062] p-8 text-white lg:flex lg:flex-col lg:justify-center xl:p-12">
      <div className="absolute inset-0 dot-grid opacity-[.08]"/>
      <div className="relative">
        <div className="mb-6 max-w-xl">
          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.14em] text-[#d2c0fb]"><BadgeCheck size={13}/>One connected workflow</div>
          <h2 className="mt-3 text-[30px] leading-[1.08] font-[830] tracking-[-.035em]">From product discovery to profit tracking.</h2>
        </div>
        <ReferenceVisual asset="productResearch" className="min-h-[300px]" imageClassName="min-h-[300px] object-cover object-center"/>
      </div>
    </div>
  </div>
</section>}