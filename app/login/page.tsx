import type { Metadata } from 'next';
import Image from 'next/image';
import { BadgeCheck, BarChart3, Boxes, Sparkles } from 'lucide-react';
import { LoginForm } from '@/components/Forms';
import { ReferenceVisual } from '@/components/ReferenceMedia';

export const metadata: Metadata = { title:'Login', description:'Sign in to AutoDropshipPrime.' };

export default function LoginPage() {
  return (
    <section className="min-h-[760px] bg-[linear-gradient(145deg,#f5f1fb,#fff_45%,#f9f3ff)] py-7 sm:py-10">
      <div className="container-site grid min-h-[720px] overflow-hidden rounded-[26px] border border-[#e7e2ed] bg-white shadow-[0_34px_100px_rgba(37,20,80,.14)] lg:grid-cols-[.92fr_1.08fr]">
        <div className="flex flex-col p-6 sm:p-10 lg:p-12">
          <Image src="/logo.png" alt="AutoDropshipPrime" width={220} height={115} className="h-[52px] w-auto self-start object-contain" priority/>
          <div className="mx-auto my-auto w-full max-w-[440px] py-12">
            <div className="eyebrow"><Sparkles size={14}/>Secure workspace access</div>
            <h1 className="mt-4 text-[42px] leading-[1.03] font-[860] tracking-[-.045em]">Welcome back.</h1>
            <p className="muted mt-3 text-[16px] leading-7">Sign in to continue to your AutoDropshipPrime workspace.</p>
            <LoginForm/>
          </div>
          <div className="flex flex-col gap-2 text-[11px] text-[#8a8295] sm:flex-row sm:justify-between">
            <span>© AutoDropshipPrime</span>
            <a href="/contact" className="font-semibold hover:text-[#6d28d9]">Need help? Contact Support</a>
          </div>
        </div>

        <div className="relative hidden overflow-hidden bg-[#211062] p-8 text-white lg:flex lg:flex-col lg:justify-center xl:p-12">
          <div className="absolute inset-0 dot-grid opacity-[.10]" />
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#8b3dff]/30 blur-3xl" />
          <div className="absolute -bottom-24 left-8 h-72 w-72 rounded-full bg-[#f22eb7]/20 blur-3xl" />
          <div className="relative">
            <div className="mb-7 max-w-xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[.14em] text-[#d2c0fb]"><BadgeCheck size={14}/>One connected operating view</div>
              <h2 className="mt-4 text-[34px] leading-[1.06] font-[850] tracking-[-.04em]">Everything your dropshipping business needs, finally in one place.</h2>
              <p className="mt-4 text-sm leading-6 text-white/65">Product research, listing operations, monitoring, orders and profit analytics in one consistent product experience.</p>
            </div>

            <ReferenceVisual asset="sellerHero" title="Temporary staging reference" />

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                [Boxes, 'Listings', 'One workflow'],
                [BarChart3, 'Profit', 'Visible context'],
                [BadgeCheck, 'Monitoring', 'Clear status'],
              ].map(([Icon,title,text]: any) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/[.06] p-3">
                  <Icon size={15} className="text-[#d8c4ff]"/>
                  <div className="mt-2 text-xs font-extrabold">{title}</div>
                  <div className="mt-1 text-[10px] text-white/50">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
