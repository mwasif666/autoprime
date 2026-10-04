import type { Metadata } from 'next';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { LoginForm } from '@/components/Forms';
import { ProductDashboardPreview } from '@/components/ProductVisuals';

export const metadata: Metadata = { title:'Login', description:'Sign in to AutoDropshipPrime.' };
const icon8=(name:string)=>`https://img.icons8.com/color/96/${name}.png`;

export default function LoginPage() {
  return (
    <section className="border-y border-[#eee8f4] bg-[linear-gradient(180deg,#fbf8ff_0%,#ffffff_60%,#faf8ff_100%)] py-7 sm:py-10">
      <div className="container-site grid overflow-hidden rounded-[26px] border border-[#e4daef] bg-white lg:min-h-[720px] lg:grid-cols-[.88fr_1.12fr]">
        <div className="flex min-w-0 flex-col p-5 sm:p-8 lg:p-10 xl:p-12">
          <Image src="/logo.png" alt="AutoDropshipPrime" width={220} height={115} className="h-[48px] w-auto self-start object-contain sm:h-[52px]" priority/>
          <div className="mx-auto my-auto w-full max-w-[440px] py-10 sm:py-12">
            <div className="eyebrow"><Sparkles size={14}/>Secure workspace access</div>
            <h1 className="mt-4 text-[36px] leading-[1.03] font-[850] tracking-[-.04em] sm:text-[42px]">Welcome back to your <span className="gradient-text">seller workspace.</span></h1>
            <p className="muted mt-3 text-[15px] leading-7 sm:text-[16px]">Sign in to continue managing products, monitoring, orders and profit from one connected system.</p>
            <LoginForm/>
          </div>
          <div className="flex flex-col gap-2 text-[11px] text-[#8a8295] sm:flex-row sm:justify-between"><span>© AutoDropshipPrime</span><a href="/contact" className="font-semibold hover:text-[#6d28d9]">Need help? Contact Support</a></div>
        </div>

        <div className="relative hidden min-w-0 overflow-hidden border-l border-[#e7deef] bg-[#faf7ff] p-7 lg:flex lg:flex-col lg:justify-center xl:p-10">
          <span className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#e6dcf2]"/>
          <div className="relative min-w-0">
            <div className="mb-6 max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ddd0f4] bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[.12em] text-[#6d28d9]"><Sparkles size={13}/>One connected operating view</div>
              <h2 className="mt-4 text-[29px] leading-[1.07] font-[850] tracking-[-.04em] text-[#171230] xl:text-[34px]">Everything your dropshipping business needs, in one place.</h2>
              <p className="muted mt-3 text-[13px] leading-6">The login experience now uses the same light purple visual system as the homepage.</p>
            </div>
            <div className="rounded-[22px] border border-[#e2d8ef] bg-white p-3"><ProductDashboardPreview/></div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                ['checklist','Listings'],['combo-chart--v1','Monitoring'],['money-bag','Profit']
              ].map(([icon,title])=><div key={title} className="rounded-[16px] border border-[#e6deef] bg-white p-3 text-center"><img src={icon8(icon)} alt="" className="mx-auto h-9 w-9 object-contain"/><div className="mt-2 text-[10px] font-extrabold text-[#171230]">{title}</div></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
