import type { Metadata } from 'next';
import Image from 'next/image';
import { BadgeCheck, BarChart3, Boxes, Sparkles } from 'lucide-react';
import { LoginForm } from '@/components/Forms';
import { ProductDashboardPreview } from '@/components/ProductVisuals';

export const metadata: Metadata = { title:'Login', description:'Sign in to AutoDropshipPrime.' };

export default function LoginPage() {
  return (
    <section className="bg-[linear-gradient(145deg,#f5f1fb,#fff_45%,#f9f3ff)] py-6 sm:py-8 lg:py-10">
      <div className="container-site grid overflow-hidden rounded-[20px] border border-[#e7e2ed] bg-white lg:min-h-[700px] lg:grid-cols-[.9fr_1.1fr]">
        <div className="flex min-w-0 flex-col p-5 sm:p-8 lg:p-10 xl:p-12">
          <Image src="/logo.png" alt="AutoDropshipPrime" width={220} height={115} className="h-[48px] w-auto self-start object-contain sm:h-[52px]" priority/>
          <div className="mx-auto my-auto w-full max-w-[440px] py-10 sm:py-12">
            <div className="eyebrow"><Sparkles size={14}/>Secure workspace access</div>
            <h1 className="mt-4 text-[36px] leading-[1.03] font-[850] tracking-[-.04em] sm:text-[42px]">Welcome back.</h1>
            <p className="muted mt-3 text-[15px] leading-7 sm:text-[16px]">Sign in to continue to your AutoDropshipPrime workspace.</p>
            <LoginForm/>
          </div>
          <div className="flex flex-col gap-2 text-[11px] text-[#8a8295] sm:flex-row sm:justify-between">
            <span>© AutoDropshipPrime</span>
            <a href="/contact" className="font-semibold hover:text-[#6d28d9]">Need help? Contact Support</a>
          </div>
        </div>

        <div className="relative hidden min-w-0 overflow-hidden bg-[#211062] p-7 text-white lg:flex lg:flex-col lg:justify-center xl:p-10">
          <div className="absolute inset-0 dot-grid opacity-[.08]" />
          <div className="relative min-w-0">
            <div className="mb-6 max-w-xl">
              <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.14em] text-[#d2c0fb]"><BadgeCheck size={13}/>One connected operating view</div>
              <h2 className="mt-3 text-[29px] leading-[1.07] font-[840] tracking-[-.035em] xl:text-[34px]">Everything your dropshipping business needs, in one place.</h2>
              <p className="mt-3 text-[13px] leading-6 text-white/65">Research products, operate listings, monitor changes and understand profit in the same product system.</p>
            </div>
            <div className="rounded-[18px] bg-white p-2 text-[#171230]"><ProductDashboardPreview/></div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[[Boxes,'Listings'],[BarChart3,'Profit'],[BadgeCheck,'Monitoring']].map(([Icon,title]: any)=><div key={title} className="rounded-xl border border-white/10 bg-white/[.06] p-3"><Icon size={15} className="text-[#d8c4ff]"/><div className="mt-2 text-[11px] font-extrabold">{title}</div></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
