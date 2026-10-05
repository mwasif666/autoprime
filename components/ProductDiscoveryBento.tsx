import Link from 'next/link';
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  Check,
  Factory,
  Footprints,
  Headphones,
  PackageCheck,
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
  score: string;
  Icon: LucideIcon;
  tone: string;
  soft: string;
}> = [
  { name: 'Wireless Headphones', category: 'Audio', cost: '$18.50', profit: '$14.69', score: '92%', Icon: Headphones, tone: '#6d28d9', soft: '#f3edff' },
  { name: 'Smart Watch', category: 'Wearables', cost: '$22.00', profit: '$17.99', score: '88%', Icon: Watch, tone: '#1689f5', soft: '#eef7ff' },
  { name: 'Running Shoes', category: 'Fitness', cost: '$34.00', profit: '$19.99', score: '84%', Icon: Footprints, tone: '#ff6b14', soft: '#fff3e8' },
];

function ProductIcon({ Icon, tone, soft, size = 30 }: { Icon: LucideIcon; tone: string; soft: string; size?: number }) {
  return (
    <span className="grid h-full w-full place-items-center rounded-[18px]" style={{ color: tone, background: soft }}>
      <Icon size={size} strokeWidth={2.05} />
    </span>
  );
}

export default function ProductDiscoveryBento() {
  const featured = products[0];
  const secondary = products.slice(1);

  return (
    <section id="product-discovery-bento" className="section border-y border-[#eee8f4] bg-[linear-gradient(180deg,#ffffff_0%,#fbf9ff_100%)]">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <div className="eyebrow">Find winning products or let our experts help</div>
            <h2 className="mt-4 max-w-[690px] text-[31px] font-[880] leading-[1.04] tracking-[-.045em] text-[#171230] sm:text-[39px] lg:text-[43px]">
              Discover profitable products with <span className="gradient-text">more control.</span>
            </h2>
          </div>
          <p className="muted max-w-[610px] text-[14px] leading-7 sm:text-[15px] lg:justify-self-end">
            Compare marketplaces and margin potential yourself, or use the guided sourcing path when you want curated product ideas and supplier help.
          </p>
        </div>

        <div className="mt-9 grid gap-7 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4 lg:pt-2">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-[#f3edff] text-[#6d28d9]"><Search size={20}/></span>
              <div>
                <h3 className="text-[20px] font-[850] tracking-[-.03em] text-[#171230]">Advanced Product Research</h3>
                <p className="mt-2 max-w-[430px] text-[12px] leading-6 text-[#716a7e]">Review source cost, potential profit and demand context before a product reaches your listing workflow.</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2">
              {marketplaces.map(([label, icon]) => (
                <div key={label} className="flex min-h-[56px] items-center gap-2.5 rounded-[13px] border border-[#e8e0f1] bg-white px-3.5">
                  <img src={icon8(icon)} alt={`${label} logo`} className="h-7 w-7 object-contain" loading="lazy" />
                  <span className="text-[9px] font-extrabold text-[#241d36]">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {[
                [TrendingUp, 'Demand signals', 'Compare products with clearer demand context.'],
                [BadgeDollarSign, 'Margin context', 'See cost and expected profit before shortlisting.'],
                [PackageCheck, 'Listing ready', 'Move selected opportunities into the same workflow.'],
              ].map(([Icon, title, text]: any) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-[#faf7ff] text-[#7c3aed]"><Icon size={15}/></span>
                  <div>
                    <div className="text-[10px] font-extrabold text-[#171230]">{title}</div>
                    <p className="mt-0.5 text-[9px] leading-4 text-[#766e81]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-5">
            <article className="rounded-[22px] border border-[#e5ddf0] bg-white p-5 sm:col-span-2 lg:col-span-3 lg:row-span-2">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#f5efff] px-3 py-1.5 text-[8px] font-black uppercase tracking-[.08em] text-[#6d28d9]">Top opportunity</span>
                <span className="text-[9px] font-black text-[#159455]">Match {featured.score}</span>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-[150px_1fr] sm:items-center">
                <div className="h-[150px]"><ProductIcon Icon={featured.Icon} tone={featured.tone} soft={featured.soft} size={54}/></div>
                <div>
                  <div className="text-[8px] font-black uppercase tracking-[.08em] text-[#81788d]">{featured.category}</div>
                  <h4 className="mt-1.5 text-[19px] font-[850] tracking-[-.03em] text-[#171230]">{featured.name}</h4>
                  <p className="mt-2 text-[9px] leading-5 text-[#746c80]">Strong margin example with enough room for marketplace fees and price changes.</p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-[12px] bg-[#faf8ff] p-3">
                      <div className="text-[7px] uppercase tracking-[.06em] text-[#8b8296]">Source cost</div>
                      <div className="mt-1 text-[14px] font-black text-[#171230]">{featured.cost}</div>
                    </div>
                    <div className="rounded-[12px] bg-[#ecfbf3] p-3">
                      <div className="text-[7px] uppercase tracking-[.06em] text-[#678374]">Potential profit</div>
                      <div className="mt-1 text-[14px] font-black text-[#159455]">{featured.profit}</div>
                    </div>
                  </div>

                  <button type="button" className="mt-4 inline-flex min-h-[38px] items-center gap-2 rounded-[10px] border border-[#d9c9ee] bg-white px-4 text-[9px] font-extrabold text-[#6d28d9]">Add to shortlist <ArrowRight size={11}/></button>
                </div>
              </div>
            </article>

            {secondary.map((product) => (
              <article key={product.name} className="rounded-[20px] border border-[#e8e0f1] bg-white p-4 lg:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="h-14 w-14 shrink-0"><ProductIcon Icon={product.Icon} tone={product.tone} soft={product.soft} size={24}/></div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[7px] uppercase tracking-[.07em] text-[#8b8296]">{product.category}</div>
                    <div className="mt-1 text-[11px] font-black text-[#171230]">{product.name}</div>
                    <div className="mt-2 flex items-center gap-2 text-[8px]"><span className="text-[#7e7689]">{product.cost}</span><span className="font-black text-[#159455]">+{product.profit}</span></div>
                  </div>
                  <span className="text-[8px] font-black text-[#6d28d9]">{product.score}</span>
                </div>
              </article>
            ))}

            <article className="rounded-[20px] border border-[#e8e0f1] bg-[linear-gradient(145deg,#f8f3ff,#fff9fb)] p-4 lg:col-span-2">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[13px] bg-white text-[#f22eb7]"><BarChart3 size={20}/></span>
                <div>
                  <div className="text-[10px] font-black text-[#171230]">Compare before listing</div>
                  <p className="mt-1 text-[8px] leading-4 text-[#766e81]">Cost, profit and demand stay visible in one view.</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="my-10 h-px bg-[#eee8f4]" />

        <div className="grid gap-7 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <div className="eyebrow">Hand-picked products</div>
            <h3 className="mt-3 max-w-[470px] text-[26px] font-[850] leading-[1.08] tracking-[-.04em] text-[#171230] sm:text-[31px]">Skip the hunt when you want a curated shortlist.</h3>
            <p className="muted mt-3 max-w-[470px] text-[13px] leading-6">Use curated product ideas when speed matters more than building the shortlist yourself.</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                [Headphones, 'Audio', '#6d28d9', '#f3edff'],
                [Watch, 'Wearables', '#1689f5', '#eef7ff'],
                [ShoppingBag, 'Fashion', '#f22eb7', '#fff0f7'],
              ].map(([Icon, label, tone, soft]: any) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-[#e8e0f1] bg-white px-3 py-2 text-[8px] font-extrabold text-[#544b61]"><span className="grid h-6 w-6 place-items-center rounded-full" style={{ color: tone, background: soft }}><Icon size={12}/></span>{label}</span>
              ))}
            </div>

            <div className="mt-5 space-y-2">
              {['Demand reviewed','Margin checked','Store-ready shortlist'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[9px] font-bold text-[#62596f]"><span className="grid h-5 w-5 place-items-center rounded-full bg-[#ecfbf3] text-[#16a36a]"><Check size={10}/></span>{item}</div>
              ))}
            </div>
          </div>

          <article className="rounded-[24px] border border-[#e5ddf0] bg-white p-5 lg:col-span-8 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-[9px] font-black uppercase tracking-[.1em] text-[#6d28d9]">Guided sourcing</div>
                <h3 className="mt-2 text-[20px] font-[850] tracking-[-.03em] text-[#171230]">You request. We research. You choose.</h3>
                <p className="mt-2 max-w-[560px] text-[9px] leading-5 text-[#756d80]">Useful when you already know the niche or product type but want help comparing sourcing options.</p>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-[15px] bg-[#fff5e9] text-[#ff6b14]"><Factory size={24}/></span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                ['01','Share request','Tell us the product, niche or target cost.'],
                ['02','We research','Compare suppliers, pricing and demand context.'],
                ['03','Review options','Choose the option that best fits your store.'],
              ].map(([n,label,text]) => (
                <div key={n} className="border-l-2 border-[#e7ddf3] pl-4 first:border-[#7c3aed]">
                  <div className="text-[8px] font-black text-[#7c3aed]">{n}</div>
                  <div className="mt-1 text-[10px] font-extrabold text-[#2c2340]">{label}</div>
                  <p className="mt-1 text-[8px] leading-4 text-[#7a7186]">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#eee8f4] pt-4">
              <div className="flex items-center gap-2 text-[8px] font-bold text-[#62596f]"><Sparkles size={13} className="text-[#f22eb7]"/> Curated product and supplier options in the same workflow.</div>
              <Link href="/contact" className="inline-flex min-h-[40px] items-center gap-2 rounded-[11px] bg-[linear-gradient(90deg,#5b20d6,#972cff)] px-4 text-[9px] font-extrabold text-white">Submit Sourcing Request <ArrowRight size={12}/></Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
