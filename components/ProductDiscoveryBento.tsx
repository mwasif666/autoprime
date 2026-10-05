import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Factory,
  Footprints,
  Headphones,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Watch,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const icon8 = (name: string, size = 96) => `https://img.icons8.com/color/${size}/${name}.png`;

const marketplaces = [
  ['eBay', 'ebay'],
  ['AliExpress', 'aliexpress'],
  ['Etsy', 'etsy'],
  ['Amazon', 'amazon'],
] as const;

const products: Array<{
  name: string;
  category: string;
  cost: string;
  profit: string;
  Icon: LucideIcon;
  tone: string;
  soft: string;
}> = [
  { name: 'Wireless Headphones', category: 'Audio', cost: '$18.50', profit: '$14.69', Icon: Headphones, tone: '#6d28d9', soft: '#f3edff' },
  { name: 'Smart Watch', category: 'Wearables', cost: '$22.00', profit: '$17.99', Icon: Watch, tone: '#1689f5', soft: '#eef7ff' },
  { name: 'Running Shoes', category: 'Fitness', cost: '$34.00', profit: '$19.99', Icon: Footprints, tone: '#ff6b14', soft: '#fff3e8' },
];

function MarketplaceStrip() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {marketplaces.map(([label, icon]) => (
        <div key={label} className="flex min-h-[52px] items-center justify-center gap-2 rounded-[12px] border border-[#e8e0f1] bg-white px-3">
          <img src={icon8(icon)} alt={`${label} logo`} className="h-7 w-7 object-contain" loading="lazy" />
          <span className="text-[9px] font-extrabold text-[#241d36]">{label}</span>
        </div>
      ))}
    </div>
  );
}

function ProductVisual({ Icon, tone, soft, size = 28 }: { Icon: LucideIcon; tone: string; soft: string; size?: number }) {
  return (
    <span className="grid place-items-center rounded-[16px]" style={{ background: soft, color: tone }}>
      <Icon size={size} strokeWidth={2.1} />
    </span>
  );
}

export default function ProductDiscoveryBento() {
  const featured = products[0];
  const secondary = products.slice(1);

  return (
    <section id="product-discovery-bento" className="section border-y border-[#eee8f4] bg-[linear-gradient(180deg,#ffffff_0%,#fbf9ff_100%)]">
      <div className="container-site">
        <div className="grid gap-7 lg:grid-cols-[1.02fr_.98fr] lg:items-end">
          <div>
            <div className="eyebrow">Find winning products or let our experts help</div>
            <h2 className="mt-4 max-w-[720px] text-[32px] font-[880] leading-[1.04] tracking-[-.045em] text-[#171230] sm:text-[40px] lg:text-[44px]">
              Discover profitable products with <span className="gradient-text">more control.</span>
            </h2>
          </div>
          <p className="muted max-w-[600px] text-[14px] leading-7 sm:text-[15px] lg:justify-self-end">
            Research trending opportunities yourself, or use the guided sourcing workflow when you want curated product ideas and supplier support.
          </p>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-12">
          <article className="rounded-[24px] border border-[#e5ddf0] bg-white p-5 lg:col-span-8 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] border border-[#e5d8ff] bg-[#f5efff] text-[#6d28d9]"><Search size={20}/></span>
                <div>
                  <h3 className="text-[18px] font-[850] tracking-[-.03em] text-[#171230]">Advanced Product Research</h3>
                  <p className="mt-1 max-w-[580px] text-[10px] leading-5 text-[#716a7e]">Compare marketplaces, source cost and margin potential before adding a product to your shortlist.</p>
                </div>
              </div>
              <span className="rounded-full border border-[#e6dcef] bg-[#faf7ff] px-3 py-1.5 text-[8px] font-black uppercase tracking-[.08em] text-[#6d28d9]">Research workspace</span>
            </div>

            <div className="mt-5"><MarketplaceStrip /></div>

            <div className="mt-4 grid gap-3 md:grid-cols-5">
              <div className="rounded-[18px] border border-[#e8e0f1] bg-[#fcfbff] p-4 md:col-span-3">
                <div className="grid gap-4 sm:grid-cols-[150px_1fr] sm:items-center">
                  <ProductVisual Icon={featured.Icon} tone={featured.tone} soft={featured.soft} size={48} />
                  <div>
                    <div className="text-[8px] font-black uppercase tracking-[.09em] text-[#81788d]">Featured opportunity · {featured.category}</div>
                    <h4 className="mt-2 text-[16px] font-[850] text-[#171230]">{featured.name}</h4>
                    <div className="mt-3 flex flex-wrap gap-2 text-[9px]">
                      <span className="rounded-full bg-white px-3 py-1.5 text-[#716a7e]">Source cost <b className="text-[#171230]">{featured.cost}</b></span>
                      <span className="rounded-full bg-[#ecfbf3] px-3 py-1.5 font-black text-[#159455]">Profit {featured.profit}</span>
                    </div>
                    <button type="button" className="mt-4 inline-flex min-h-[38px] items-center gap-2 rounded-[10px] border border-[#d8c7ef] bg-white px-4 text-[9px] font-extrabold text-[#6d28d9]">Add to shortlist <ArrowRight size={11}/></button>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 md:col-span-2">
                {secondary.map((product) => (
                  <div key={product.name} className="flex items-center gap-3 rounded-[16px] border border-[#e8e0f1] bg-[#fcfbff] p-3">
                    <span className="h-14 w-14 shrink-0"><ProductVisual Icon={product.Icon} tone={product.tone} soft={product.soft} size={25} /></span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[8px] text-[#81788d]">{product.category}</div>
                      <div className="mt-0.5 truncate text-[10px] font-black text-[#171230]">{product.name}</div>
                      <div className="mt-1.5 flex items-center gap-2 text-[8px]"><span className="text-[#7f778a]">{product.cost}</span><span className="font-black text-[#159455]">+{product.profit}</span></div>
                    </div>
                    <ArrowRight size={13} className="shrink-0 text-[#8b3dff]" />
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-[24px] border border-[#e5ddf0] bg-[linear-gradient(145deg,#f9f4ff,#fff8fb)] p-5 lg:col-span-4 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] border border-[#d8f0e2] bg-[#effcf4] text-[#159455]"><ShieldCheck size={20}/></span>
              <div>
                <h3 className="text-[18px] font-[850] tracking-[-.03em] text-[#171230]">Hand-Picked Products</h3>
                <p className="mt-1 text-[10px] leading-5 text-[#716a7e]">Use curated opportunities when you want a faster path than researching from scratch.</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                [Headphones, 'Audio', '#6d28d9', '#f3edff'],
                [Watch, 'Wearables', '#1689f5', '#eef7ff'],
                [ShoppingBag, 'Fashion', '#f22eb7', '#fff0f7'],
              ].map(([Icon, label, tone, soft]: any) => (
                <div key={label} className="rounded-[15px] border border-white bg-white/80 p-3 text-center">
                  <span className="mx-auto block h-14 w-14"><ProductVisual Icon={Icon} tone={tone} soft={soft} size={25} /></span>
                  <div className="mt-2 text-[8px] font-extrabold text-[#5d536d]">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2">
              {['Demand reviewed','Margin checked','Store-ready shortlist'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[9px] font-bold text-[#62596f]"><span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[#16a36a]"><Check size={10}/></span>{item}</div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="eyebrow">Choose the path that fits the task</div>
            <h3 className="mt-3 max-w-[560px] text-[25px] font-[850] leading-[1.08] tracking-[-.04em] text-[#171230] sm:text-[30px]">Research when you want control. Use sourcing when you want help.</h3>
            <p className="muted mt-3 max-w-[570px] text-[13px] leading-6 sm:text-[14px]">Both workflows connect back into listing, price monitoring and stock management, so product discovery does not become a separate tool.</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                [TrendingUp, 'Trend signals', '#6d28d9', '#f3edff'],
                [Sparkles, 'Curated ideas', '#f22eb7', '#fff0f7'],
                [ShieldCheck, 'Supplier context', '#16a36a', '#ecfbf3'],
              ].map(([Icon, label, tone, soft]: any) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-[#e8e0f1] bg-white px-3 py-2 text-[8px] font-extrabold text-[#544b61]"><span className="grid h-6 w-6 place-items-center rounded-full" style={{ color: tone, background: soft }}><Icon size={12}/></span>{label}</span>
              ))}
            </div>
          </div>

          <article className="rounded-[24px] border border-[#e5ddf0] bg-white p-5 lg:col-span-7 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-[9px] font-black uppercase tracking-[.1em] text-[#6d28d9]">Guided sourcing</div>
                <h3 className="mt-2 text-[20px] font-[850] tracking-[-.03em] text-[#171230]">You request. We research. You choose.</h3>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-[15px] border border-[#ffe2c7] bg-[#fff5e9] text-[#ff6b14]"><Factory size={24}/></span>
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              {[
                ['1','Share request','Tell us the product, niche or target cost.'],
                ['2','We research','Compare suppliers, pricing and basic demand context.'],
                ['3','Review options','Choose the option that best fits your store.'],
              ].map(([n,label,text]) => (
                <div key={n} className="rounded-[14px] bg-[#faf8ff] p-3.5">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#7c3aed] text-[8px] font-black text-white">{n}</span>
                  <div className="mt-2 text-[9px] font-extrabold text-[#2c2340]">{label}</div>
                  <p className="mt-1 text-[8px] leading-4 text-[#7a7186]">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#eee8f4] pt-4">
              <p className="max-w-[440px] text-[9px] leading-5 text-[#756d80]">Best when you already know the niche or product type but want help comparing sourcing options.</p>
              <Link href="/contact" className="inline-flex min-h-[40px] items-center gap-2 rounded-[11px] bg-[linear-gradient(90deg,#5b20d6,#972cff)] px-4 text-[9px] font-extrabold text-white">Submit Sourcing Request <ArrowRight size={12}/></Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
