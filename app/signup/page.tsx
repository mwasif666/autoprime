import type { Metadata } from 'next';
import Image from 'next/image';
import { BadgeCheck, Sparkles } from 'lucide-react';
import { SignupForm } from '@/components/Forms';
import { ProductHunterPreview } from '@/components/ProductVisuals';

export const metadata: Metadata = { title:'Create Account', description:'Create an AutoDropshipPrime account.' };

export default function SignupPage(){return <section className="bg-[linear-gradient(145deg,#f5f1fb,#fff_45%,#f9f3ff)] py-6 sm:py-8 lg:py-10">
  <div className="container-site grid overflow-hidden rounded-[20px] border border-[#e7e2ed] bg-white lg:min-h-[700px] lg:grid-cols-[.9fr_1.1fr]">
    <div className="flex min-w-0 flex-col p-5 sm:p-8 lg:p-10 xl:p-12">
      <Image src="/logo.png" alt="AutoDropshipPrime" width={210} height={110} className="h-[48px] w-auto self-start object-contain"/>
      <div className="mx-auto my-auto w-full max-w-[460px] py-10">
        <div className="eyebrow"><Sparkles size={13}/>Create workspace</div>
        <h1 className="mt-4 text-[36px] leading-[1.04] font-[850] tracking-[-.04em] sm:text-[40px]">Create your account.</h1>
        <p className="muted mt-2 text-[15px] leading-7">Set up your AutoDropshipPrime workspace.</p>
        <SignupForm/>
      </div>
    </div>
    <div className="relative hidden min-w-0 overflow-hidden bg-[#211062] p-7 text-white lg:flex lg:flex-col lg:justify-center xl:p-10">
      <div className="absolute inset-0 dot-grid opacity-[.08]"/>
      <div className="relative min-w-0">
        <div className="mb-6 max-w-xl">
          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.14em] text-[#d2c0fb]"><BadgeCheck size={13}/>One connected workflow</div>
          <h2 className="mt-3 text-[29px] leading-[1.08] font-[830] tracking-[-.035em] xl:text-[34px]">Start with product discovery. Keep the context as you scale.</h2>
          <p className="mt-3 text-[13px] leading-6 text-white/65">Research price, margin and stock before a product moves into listing and monitoring.</p>
        </div>
        <div className="rounded-[18px] bg-white p-2 text-[#171230]"><ProductHunterPreview/></div>
      </div>
    </div>
  </div>
</section>}