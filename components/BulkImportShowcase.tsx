import {
  ArrowRight,
  CalendarDays,
  Check,
  CircleDollarSign,
  Clock3,
  PackageSearch,
  RefreshCcw,
  Settings2,
  SlidersHorizontal,
  Tags,
} from 'lucide-react';

const brandLogo = (name: string) => `https://img.icons8.com/color/96/${name}.png`;

const stores = [
  ['Amazon', 'amazon', 'Import catalog'],
  ['eBay', 'ebay', 'List & manage'],
  ['AliExpress', 'aliexpress', 'Source products'],
  ['Etsy', 'etsy', 'Import products'],
] as const;

function AccentIcon({
  children,
  tone = '#6d28d9',
  soft = '#f3edff',
}: {
  children: React.ReactNode;
  tone?: string;
  soft?: string;
}) {
  return (
    <span
      className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] border border-black/[.04]"
      style={{ color: tone, background: soft }}
    >
      {children}
    </span>
  );
}

function MarketplacePanel() {
  return (
    <div className="rounded-[24px] border border-[#e6ddf0] bg-white p-4 sm:p-5 lg:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.09em] text-[#6d28d9]">
            <PackageSearch size={15} /> One-click import
          </div>
          <h3 className="mt-2 text-[21px] font-[850] tracking-[-.035em] text-[#171230]">Bring products into one workspace.</h3>
          <p className="mt-2 max-w-[560px] text-[10px] leading-5 text-[#746c80]">
            Start from the marketplace you already use. Product images, details and variations stay together before you prepare the listing.
          </p>
        </div>
        <span className="rounded-full bg-[#efe7ff] px-3 py-1.5 text-[8px] font-black text-[#6d28d9]">Ready to import</span>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
        {stores.map(([label, icon, note]) => (
          <div key={label} className="flex min-h-[70px] items-center gap-3 rounded-[14px] border border-[#e9e2f0] bg-[#fdfcff] px-3.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[11px] bg-white">
              <img src={brandLogo(icon)} alt={`${label} logo`} className="h-8 w-8 object-contain" loading="lazy" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-extrabold text-[#241d36]">{label}</div>
              <div className="mt-0.5 text-[7.5px] text-[#81798c]">{note}</div>
            </div>
            <ArrowRight size={13} className="shrink-0 text-[#8b3dff]" />
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {['Images', 'Product details', 'Variants', 'Supplier info'].map((item) => (
          <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-[#f7f4fb] px-3 py-1.5 text-[8px] font-bold text-[#5f586c]">
            <Check size={10} className="text-[#16a36a]" /> {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function VariationsPanel() {
  return (
    <article className="rounded-[24px] border border-[#e6ddf0] bg-white p-5 lg:col-span-5">
      <div className="flex items-start gap-3">
        <AccentIcon tone="#1689f5" soft="#eef7ff"><SlidersHorizontal size={21} /></AccentIcon>
        <div>
          <div className="text-[9px] font-black uppercase tracking-[.08em] text-[#1689f5]">Manage variations</div>
          <h3 className="mt-1 text-[18px] font-[850] tracking-[-.03em] text-[#171230]">Keep options organized before publishing.</h3>
        </div>
      </div>

      <div className="mt-5 grid gap-4 rounded-[17px] border border-[#e9e2f0] bg-[#fbf9ff] p-4 sm:grid-cols-[.8fr_1.2fr]">
        <div className="overflow-hidden rounded-[13px] bg-[linear-gradient(145deg,#f2eaff,#fff5fa)] p-3">
          <img src="/placeholders/product-selection.svg" alt="Product variation preview" className="h-[150px] w-full object-cover object-center" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-[11px] font-black text-[#171230]">Wireless Headphones</div>
          <div className="mt-3 space-y-2.5">
            {['Color options imported', 'Size variants organized', 'SKU mapping ready'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[8.5px] font-semibold text-[#675f75]">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#e8fff2] text-[#16a36a]"><Check size={10} /></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {[['Black','#171230'],['Blue','#2563eb'],['Pink','#e94f98'],['White','#f3f4f6']].map(([label,color]) => (
          <span key={label} className="inline-flex items-center gap-2 rounded-full border border-[#e5dced] bg-white px-3 py-2 text-[8px] font-bold text-[#5f586c]">
            <span className="h-3 w-3 rounded-full border border-black/10" style={{ background: color }} /> {label}
          </span>
        ))}
        {['S','M','L','XL'].map((size, index) => (
          <span key={size} className={`rounded-full border px-3 py-2 text-[8px] font-black ${index === 1 ? 'border-[#8b3dff] bg-[#f2ebff] text-[#6d28d9]' : 'border-[#e5dced] bg-white text-[#655d72]'}`}>{size}</span>
        ))}
      </div>
    </article>
  );
}

function PricingPanel() {
  return (
    <article className="rounded-[24px] border border-[#e6ddf0] bg-white p-5 lg:col-span-4">
      <div className="flex items-start gap-3">
        <AccentIcon tone="#ff6b14" soft="#fff3e8"><Tags size={21} /></AccentIcon>
        <div>
          <div className="text-[9px] font-black uppercase tracking-[.08em] text-[#ff6b14]">Price, profit & stock</div>
          <h3 className="mt-1 text-[18px] font-[850] tracking-[-.03em] text-[#171230]">Set the numbers once, then keep them monitored.</h3>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {[['Cost','$20'],['Profit','$6'],['Price','$26']].map(([label,value]) => (
          <div key={label} className="rounded-[13px] border border-[#e8e0f1] bg-[#fdfcff] p-3 text-center">
            <div className="text-[7px] uppercase tracking-[.06em] text-[#81788d]">{label}</div>
            <div className="mt-1 text-[15px] font-black text-[#171230]">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-[14px] border border-[#e8e0f1] bg-[#fffaf6] p-3.5">
        <div className="flex items-center justify-between gap-3">
          <div className="text-[9px] font-extrabold text-[#171230]">Profit margin</div>
          <span className="rounded-lg bg-[#fff1e7] px-2.5 py-1 text-[8px] font-black text-[#ff6b14]">30%</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#f0ebf5]"><span className="block h-full w-[30%] rounded-full bg-[linear-gradient(90deg,#ff8a30,#ff6b14)]" /></div>
      </div>

      <div className="mt-3 space-y-2">
        {[
          [RefreshCcw, 'Auto price monitoring'],
          [PackageSearch, 'Auto stock monitoring'],
          [Settings2, 'Sync with supplier'],
        ].map(([Icon, label]: any) => (
          <div key={label} className="flex items-center justify-between gap-3 rounded-[12px] border border-[#e8e0f1] bg-white px-3 py-2.5">
            <div className="flex items-center gap-2"><Icon size={13} className="text-[#7c3aed]" /><span className="text-[8.5px] font-extrabold text-[#3b3447]">{label}</span></div>
            <span className="flex h-5 w-9 items-center rounded-full bg-[#7c3aed] p-1"><span className="ml-auto block h-3 w-3 rounded-full bg-white" /></span>
          </div>
        ))}
      </div>
    </article>
  );
}

function SchedulePanel() {
  const active = new Set([5, 10, 16, 22, 27]);
  return (
    <article className="rounded-[24px] border border-[#e6ddf0] bg-[linear-gradient(180deg,#fff,#fff9fd)] p-5 lg:col-span-3">
      <div className="flex items-start gap-3">
        <AccentIcon tone="#f22eb7" soft="#fff0f7"><CalendarDays size={21} /></AccentIcon>
        <div>
          <div className="text-[9px] font-black uppercase tracking-[.08em] text-[#d62484]">Schedule listings</div>
          <h3 className="mt-1 text-[17px] font-[850] tracking-[-.03em] text-[#171230]">Publish when your store is ready.</h3>
        </div>
      </div>

      <div className="mt-5 rounded-[15px] border border-[#e8e0f1] bg-white p-3.5">
        <div className="flex items-center justify-between">
          <div><div className="text-[9px] font-black">October 2026</div><div className="mt-0.5 text-[7px] text-[#837a90]">Publishing calendar</div></div>
          <CalendarDays size={17} className="text-[#f22eb7]" />
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1.5">
          {['M','T','W','T','F','S','S'].map((d,i) => <span key={`${d}-${i}`} className="text-center text-[7px] font-black text-[#9a91a4]">{d}</span>)}
          {Array.from({ length: 28 }).map((_, i) => {
            const day = i + 1;
            const isActive = active.has(day);
            return <span key={day} className={`grid h-7 place-items-center rounded-[8px] text-[8px] font-bold ${isActive ? 'bg-[#7c3aed] text-white' : 'bg-[#faf8ff] text-[#655d72]'}`}>{day}</span>;
          })}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-[12px] border border-[#e8e0f1] bg-white p-3">
          <div className="text-[7px] uppercase tracking-[.06em] text-[#81788d]">Window</div>
          <div className="mt-1 text-[11px] font-black text-[#6d28d9]">30 days</div>
        </div>
        <div className="rounded-[12px] border border-[#e8e0f1] bg-white p-3">
          <div className="text-[7px] uppercase tracking-[.06em] text-[#81788d]">Queue</div>
          <div className="mt-1 text-[11px] font-black text-[#171230]">12 listings</div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-[12px] bg-[#fff0f7] px-3 py-2.5 text-[8px] font-bold text-[#a41b65]">
        <Clock3 size={13} /> Next publish · Tomorrow, 10:30 AM
      </div>
    </article>
  );
}

export default function BulkImportShowcase() {
  return (
    <section id="bulk-import-improved" className="section border-y border-[#eee8f4] bg-[linear-gradient(180deg,#fbf9ff_0%,#ffffff_100%)]">
      <div className="container-site">
        <div className="grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">From any store to your eBay store</div>
            <h2 className="mt-4 max-w-[620px] text-[32px] font-[880] leading-[1.04] tracking-[-.045em] text-[#171230] sm:text-[42px] lg:text-[46px]">
              Import once. <span className="gradient-text">Prepare smarter.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pb-1">
            <p className="muted max-w-[720px] text-[14px] leading-7 sm:text-[15px]">
              Bring products in from Amazon, eBay, AliExpress or Etsy, organize variations, set your pricing rules and decide when each listing should go live. The workflow stays connected without turning every step into a separate tool.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-12"><MarketplacePanel /></div>
          <VariationsPanel />
          <PricingPanel />
          <SchedulePanel />
        </div>

        <div className="mt-5 grid items-center gap-5 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="text-[22px] font-[850] tracking-[-.035em] text-[#171230]">Less repetitive setup, more control before publishing.</h3>
            <p className="mt-2 max-w-[560px] text-[11px] leading-6 text-[#746c80]">
              The important decisions stay visible: what you imported, which options belong to the product, how the margin works and when the listing is scheduled.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:col-span-7">
            {[
              [Settings2, 'Custom settings', 'Keep variations and rules together.', '#16a36a', '#ecfbf3'],
              [CalendarDays, '30-day scheduling', 'Plan publishing ahead of time.', '#2563eb', '#eef7ff'],
              [CircleDollarSign, 'Profit visibility', 'Review margin before listings go live.', '#f22eb7', '#fff0f7'],
            ].map(([Icon, title, text, tone, soft]: any) => (
              <div key={title} className="flex min-h-[104px] items-start gap-3 rounded-[17px] border border-[#e8e0f1] bg-white p-3.5">
                <AccentIcon tone={tone} soft={soft}><Icon size={19} /></AccentIcon>
                <div><div className="text-[9.5px] font-extrabold text-[#171230]">{title}</div><div className="mt-1 text-[8px] leading-4 text-[#786f85]">{text}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
