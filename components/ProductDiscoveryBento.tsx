import Link from 'next/link';
import { ArrowRight, Check, Search, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

const icon8 = (name: string, size = 96) => `https://img.icons8.com/color/${size}/${name}.png`;

const marketplaces = [
  ['eBay', 'ebay'],
  ['AliExpress', 'aliexpress'],
  ['Etsy', 'etsy'],
  ['Amazon', 'amazon'],
] as const;

const products = [
  { name: 'Wireless Headphones', cost: '$18.50', profit: '$14.69', icon: 'headphones' },
  { name: 'Smart Watch', cost: '$22.00', profit: '$17.99', icon: 'smart-watch' },
  { name: 'Running Shoes', cost: '$34.00', profit: '$19.99', icon: 'trainers' },
] as const;

function MarketplaceStrip() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {marketplaces.map(([label, icon]) => (
        <div key={label} className="flex min-h-[54px] items-center justify-center gap-2 rounded-[12px] border border-[#e8e0f1] bg-white px-3">
          <img src={icon8(icon)} alt="" className="h-7 w-7 object-contain" loading="lazy" />
          <span className="text-[9px] font-extrabold text-[#241d36]">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function ProductDiscoveryBento() {
  return (
    <section id="product-discovery-bento" className="section border-y border-[#eee8f4] bg-[linear-gradient(180deg,#ffffff_0%,#fbf9ff_100%)]">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <div className="eyebrow">Find winning products or let our experts help</div>
            <h2 className="mt-4 max-w-[760px] text-[32px] font-[880] leading-[1.04] tracking-[-.045em] text-[#171230] sm:text-[42px] lg:text-[46px]">
              Discover profitable products with <span className="gradient-text">more control.</span>
            </h2>
          </div>
          <p className="muted max-w-[620px] text-[14px] leading-7 sm:text-[15px] lg:justify-self-end">
            Research trending opportunities yourself, or use the guided sourcing workflow when you want curated product ideas and supplier support.
          </p>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-12">
          <article className="rounded-[24px] border border-[#e5ddf0] bg-white p-5 lg:col-span-7 lg:row-span-2 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] border border-[#e5d8ff] bg-[#f5efff] text-[#6d28d9]"><Search size={20}/></span>
                <div>
                  <h3 className="text-[18px] font-[850] tracking-[-.03em] text-[#171230]">Advanced Product Research</h3>
                  <p className="mt-1 max-w-[520px] text-[10px] leading-5 text-[#716a7e]">Compare marketplaces, review source cost and profit potential, then shortlist products that fit your store.</p>
                </div>
              </div>
              <span className="rounded-full border border-[#e6dcef] bg-[#faf7ff] px-3 py-1.5 text-[8px] font-black uppercase tracking-[.08em] text-[#6d28d9]">Research workspace</span>
            </div>

            <div className="mt-5"><MarketplaceStrip /></div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {products.map((product, index) => (
                <div key={product.name} className="rounded-[16px] border border-[#e8e0f1] bg-[#fcfbff] p-3.5">
                  <div className="flex h-[118px] items-center justify-center rounded-[13px] bg-white">
                    <img src={icon8(product.icon)} alt="" className="h-20 w-20 object-contain" loading="lazy" />
                  </div>
                  <div className="mt-3 text-[10px] font-black text-[#171230]">{product.name}</div>
                  <div className="mt-2 flex items-center justify-between text-[8px]"><span className="text-[#7f778a]">Cost {product.cost}</span><span className="font-black text-[#159455]">Profit {product.profit}</span></div>
                  <button type="button" className="mt-3 flex min-h-[36px] w-full items-center justify-center gap-1.5 rounded-[10px] border border-[#d9c9ee] bg-white text-[9px] font-extrabold text-[#6d28d9]">Shortlist <ArrowRight size={11}/></button>
                </div>
              ))}
            </div>
          </article>

          <article className="overflow-hidden rounded-[24px] border border-[#e5ddf0] bg-[linear-gradient(145deg,#f9f4ff,#fff8fb)] p-5 lg:col-span-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] border border-[#d8f0e2] bg-[#effcf4] text-[#159455]"><ShieldCheck size={20}/></span>
              <div>
                <h3 className="text-[18px] font-[850] tracking-[-.03em] text-[#171230]">Hand-Picked Products</h3>
                <p className="mt-1 text-[10px] leading-5 text-[#716a7e]">Use a more guided path when you want curated product ideas instead of researching from scratch.</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ['headphones','Audio'],
                ['smart-watch','Wearables'],
                ['handbag','Fashion'],
              ].map(([icon,label], index) => (
                <div key={label} className="rounded-[16px] border border-white bg-white/80 p-3 text-center">
                  <img src={icon8(icon)} alt="" className="mx-auto h-14 w-14 object-contain" loading="lazy" />
                  <div className="mt-2 text-[8px] font-extrabold text-[#5d536d]">{label}</div>
                  <div className="mt-1 text-[7px] text-[#91889c]">Pick {index + 1}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {['Demand checked','Margin reviewed','Store-ready ideas'].map((item) => <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-[#e3d9ee] bg-white px-3 py-1.5 text-[8px] font-bold text-[#62596f]"><Check size={10} className="text-[#16a36a]"/>{item}</span>)}
            </div>
          </article>

          <article className="rounded-[24px] border border-[#e5ddf0] bg-white p-5 lg:col-span-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[9px] font-black uppercase tracking-[.1em] text-[#6d28d9]">Guided sourcing</div>
                <h3 className="mt-2 text-[18px] font-[850] tracking-[-.03em] text-[#171230]">You request. We research.</h3>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-[15px] border border-[#ffe2c7] bg-[#fff5e9]"><img src={icon8('factory')} alt="" className="h-8 w-8 object-contain" loading="lazy"/></span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                ['1','Share request'],
                ['2','We research'],
                ['3','Review options'],
              ].map(([n,label]) => <div key={n} className="rounded-[13px] bg-[#faf8ff] p-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#7c3aed] text-[8px] font-black text-white">{n}</span><div className="mt-2 text-[8px] font-extrabold text-[#2c2340]">{label}</div></div>)}
            </div>
            <Link href="/contact" className="mt-4 inline-flex min-h-[40px] items-center gap-2 rounded-[11px] bg-[linear-gradient(90deg,#5b20d6,#972cff)] px-4 text-[9px] font-extrabold text-white">Submit Sourcing Request <ArrowRight size={12}/></Link>
          </article>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <div className="eyebrow">Choose the path that fits the task</div>
            <h3 className="mt-3 max-w-[620px] text-[26px] font-[850] leading-[1.08] tracking-[-.04em] text-[#171230] sm:text-[32px]">Research when you want control. Use sourcing when you want help.</h3>
            <p className="muted mt-3 max-w-[650px] text-[13px] leading-6 sm:text-[14px]">Both workflows lead back into the same listing and monitoring system, so product discovery stays connected to the rest of the store workflow.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              [TrendingUp,'Trend signals','Spot products with stronger demand context','#6d28d9','#f3edff'],
              [Sparkles,'Curated ideas','Use hand-picked opportunities when useful','#f22eb7','#fff0f7'],
              [ShieldCheck,'Supplier context','Keep sourcing and supplier decisions organized','#16a36a','#ecfbf3'],
            ].map(([Icon,title,text,tone,soft]: any) => (
              <div key={title} className="rounded-[17px] border border-[#e8e0f1] bg-white p-4">
                <span className="grid h-9 w-9 place-items-center rounded-[11px]" style={{color:tone,background:soft}}><Icon size={17}/></span>
                <div className="mt-3 text-[10px] font-extrabold text-[#171230]">{title}</div>
                <p className="mt-1 text-[8px] leading-4 text-[#756d80]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
