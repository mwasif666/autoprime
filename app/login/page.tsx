import type { Metadata } from 'next';
import Image from 'next/image';
import { Check, Sparkles } from 'lucide-react';
import { LoginForm } from '@/components/Forms';
import { dashboardAssets } from '@/components/MarketingPageSections';

export const metadata: Metadata = { title:'Login', description:'Sign in to AutoDropshipPrime.' };

const proof = [
  'Review orders and processing status',
  'Keep monitoring and product context close',
  'Move from operations into profit visibility',
] as const;

export default function LoginPage() {
  return (
    <section className="border-y border-[#eee8f4] bg-[radial-gradient(circle_at_82%_10%,#eee5ff_0,transparent_30%),linear-gradient(180deg,#ffffff_0%,#faf7ff_100%)] py-7 sm:py-10">
      <div className="container-site grid overflow-hidden rounded-[26px] border border-[#e4daef] bg-white lg:min-h-[720px] lg:grid-cols-[.88fr_1.12fr]">
        <div className="flex min-w-0 flex-col p-5 sm:p-8 lg:p-10 xl:p-12">
          <Image src="/logo.png" alt="AutoDropshipPrime" width={220} height={115} className="h-[48px] w-auto self-start object-contain sm:h-[52px]" priority/>
          <div className="mx-auto my-auto w-full max-w-[440px] py-10 sm:py-12">
            <div className="eyebrow"><Sparkles size={14}/>Secure workspace access</div>
            <h1 className="mt-4 text-[36px] leading-[1.03] font-[900] tracking-[-.045em] text-[#171230] sm:text-[42px]">Welcome back to your <span className="gradient-text">seller workspace.</span></h1>
            <div className="mt-4 h-[3px] w-16 rounded-full bg-[linear-gradient(90deg,#7c3aed,#ef2eb8)]"/>
            <p className="muted mt-4 text-[15px] leading-7 sm:text-[16px]">Sign in to continue managing products, monitoring, orders and profit from one connected system.</p>
            <LoginForm/>
          </div>
          <div className="flex flex-col gap-2 border-t border-[#eee8f4] pt-4 text-[11px] text-[#8a8295] sm:flex-row sm:justify-between"><span>© AutoDropshipPrime</span><a href="/contact" className="font-semibold hover:text-[#6d28d9]">Need help? Contact Support</a></div>
        </div>

        <div className="relative hidden min-w-0 overflow-hidden border-l border-[#e7deef] bg-[#faf7ff] p-7 lg:flex lg:flex-col lg:justify-center xl:p-10">
          <div className="relative min-w-0">
            <div className="mb-6 max-w-xl">
              <div className="eyebrow"><Sparkles size={13}/>One connected operating view</div>
              <h2 className="mt-4 text-[29px] leading-[1.07] font-[880] tracking-[-.04em] text-[#171230] xl:text-[34px]">Pick up where you left off without rebuilding the context.</h2>
              <p className="muted mt-3 max-w-[570px] text-[13px] leading-6">Orders, monitoring and financial visibility stay part of the same seller workflow after you sign in.</p>
            </div>

            <img src={dashboardAssets.orders} alt="AutoDropshipPrime orders dashboard" loading="eager" decoding="async" className="block h-auto w-full object-contain"/>

            <div className="mt-5 border-t border-[#e7deef]">
              {proof.map(item=><div key={item} className="flex items-center gap-3 border-b border-[#e7deef] py-3 text-[11px] font-bold text-[#554d62]"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#efe8ff] text-[#6d28d9]"><Check size={12}/></span>{item}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
