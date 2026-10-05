import Link from 'next/link';
import { ArrowRight, Check, Zap } from 'lucide-react';

export default function HomepageHeroCompact() {
  return (
    <section className="relative overflow-hidden border-b border-[#ece6f5] bg-[radial-gradient(circle_at_82%_10%,#efe5ff_0,transparent_32%),linear-gradient(180deg,#ffffff_0%,#faf7ff_100%)]">
      <div className="container-site grid items-center gap-8 py-12 sm:py-14 lg:min-h-[620px] lg:grid-cols-[.78fr_1.22fr] lg:gap-10 lg:py-16 xl:grid-cols-[.74fr_1.26fr]">
        <div className="min-w-0">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#dfd2f3] bg-[#f7f1ff] px-3.5 py-2 text-[9px] font-black uppercase tracking-[.1em] text-[#6d28d9] sm:text-[10px]">
            <Zap size={12} className="shrink-0" />
            <span className="truncate">The All-In-One eBay / Dropshipping Automation Tool</span>
          </div>

          <h1 className="mt-5 max-w-[570px] text-[38px] font-[900] leading-[1.01] tracking-[-.05em] text-[#15102a] sm:text-[46px] lg:text-[52px] xl:text-[56px]">
            Automate Your <span className="gradient-text">eBay Business.</span>
          </h1>

          <p className="muted mt-5 max-w-[560px] text-[14px] leading-6 sm:text-[15px] sm:leading-7 lg:text-[16px]">
            Find winning products, create eBay listings, process orders automatically, track shipments, monitor stock and prices, and manage your business from one connected platform.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/signup" className="btn-primary min-h-[46px] px-5 text-[13px] sm:px-6 sm:text-sm">
              Start Free Trial <ArrowRight size={15} />
            </Link>
            <a href="#everything" className="btn-secondary min-h-[46px] px-5 text-[13px] sm:px-6 sm:text-sm">
              See How It Works
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2.5 text-[10px] font-bold text-[#665e73] sm:text-[11px]">
            {['No credit card required', 'Easy setup', '24/7 support'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#efe8ff] text-[#6d28d9]"><Check size={11}/></span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-w-0 lg:pl-2">
          <img
            src="/hero-banner.png"
            alt="AutoDropshipPrime automation dashboard"
            width="1448"
            height="1086"
            loading="eager"
            fetchPriority="high"
            className="mx-auto block h-auto w-full max-w-[760px] object-contain lg:max-h-[560px] xl:max-w-[820px]"
          />
        </div>
      </div>
    </section>
  );
}
