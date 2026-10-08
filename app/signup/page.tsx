import type { Metadata } from 'next';
import Image from 'next/image';
import { Check, Sparkles } from 'lucide-react';
import { SignupForm } from '@/components/Forms';
import { dashboardAssets } from '@/components/MarketingPageSections';

export const metadata: Metadata = { title:'Create Account', description:'Create an AutoDropshipPrime account.' };

const setupPath = [
  'Start with product research',
  'Move selected products into listing work',
  'Keep monitoring, orders and profit connected',
] as const;

export default function SignupPage(){return <section className="border-y border-[#eee8f4] bg-[radial-gradient(circle_at_82%_10%,#eee5ff_0,transparent_30%),linear-gradient(180deg,#ffffff_0%,#faf7ff_100%)] py-7 sm:py-10">
  <div className="container-site grid overflow-hidden rounded-[26px] border border-[#e4daef] bg-white lg:min-h-[720px] lg:grid-cols-[.88fr_1.12fr]">
    <div className="flex min-w-0 flex-col p-5 sm:p-8 lg:p-10 xl:p-12">
      <Image src="/logo.png" alt="AutoDropshipPrime" width={210} height={110} className="h-[48px] w-auto self-start object-contain"/>
      <div className="mx-auto my-auto w-full max-w-[460px] py-10">
        <div className="eyebrow"><Sparkles size={13}/>Create workspace</div>
        <h1 className="mt-4 text-[36px] leading-[1.04] font-[900] tracking-[-.045em] text-[#171230] sm:text-[42px]">Start your <span className="gradient-text">connected seller workflow.</span></h1>
        <div className="mt-4 h-[3px] w-16 rounded-full bg-[linear-gradient(90deg,#7c3aed,#ef2eb8)]"/>
        <p className="muted mt-4 text-[15px] leading-7">Create your AutoDropshipPrime workspace and begin with product research, then keep listings, monitoring, orders and financial visibility in the same operating system.</p>
        <SignupForm/>
      </div>
    </div>

    <div className="relative hidden min-w-0 overflow-hidden border-l border-[#e7deef] bg-[#faf7ff] p-7 lg:flex lg:flex-col lg:justify-center xl:p-10">
      <div className="relative min-w-0">
        <div className="mb-6 max-w-xl">
          <div className="eyebrow"><Sparkles size={13}/>Start with product discovery</div>
          <h2 className="mt-4 text-[29px] leading-[1.08] font-[880] tracking-[-.04em] text-[#171230] xl:text-[34px]">Bring product, supplier and marketplace context into one workspace from day one.</h2>
          <p className="muted mt-3 max-w-[570px] text-[13px] leading-6">Research opportunities first, then carry the selected product into the rest of the AutoDropshipPrime workflow without rebuilding the context.</p>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-[#e2d8ef] bg-white p-2.5">
          <div className="mb-2 flex items-center gap-1.5 px-1.5 py-1"><span className="h-2 w-2 rounded-full bg-[#f2a7c8]"/><span className="h-2 w-2 rounded-full bg-[#f3c978]"/><span className="h-2 w-2 rounded-full bg-[#8adbb8]"/><span className="ml-2 text-[8px] font-bold uppercase tracking-[.08em] text-[#8b8296]">Marketplace workspace</span></div>
          <img src={dashboardAssets.marketplace} alt="AutoDropshipPrime marketplace dashboard" loading="eager" decoding="async" className="block h-auto w-full rounded-[14px] object-contain"/>
        </div>

        <div className="mt-5 border-t border-[#e7deef]">
          {setupPath.map(item=><div key={item} className="flex items-center gap-3 border-b border-[#e7deef] py-3 text-[11px] font-bold text-[#554d62]"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#efe8ff] text-[#6d28d9]"><Check size={12}/></span>{item}</div>)}
        </div>
      </div>
    </div>
  </div>
</section>}
