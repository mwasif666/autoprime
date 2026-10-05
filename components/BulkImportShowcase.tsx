import {
  ArrowRight,
  CalendarDays,
  Check,
  CircleDollarSign,
  PackageSearch,
  RefreshCcw,
  Settings2,
  SlidersHorizontal,
  Tags,
} from 'lucide-react';

const brandLogo = (name: string) => `https://img.icons8.com/color/96/${name}.png`;

const stores = [
  ['Amazon', 'amazon'],
  ['eBay', 'ebay'],
  ['AliExpress', 'aliexpress'],
  ['Etsy', 'etsy'],
] as const;

const accents = [
  ['#6d28d9', '#f3edff'],
  ['#1689f5', '#eef7ff'],
  ['#ff6b14', '#fff3e8'],
  ['#f22eb7', '#fff0f7'],
] as const;

function HeaderIcon({ index }: { index: number }) {
  const icons = [PackageSearch, SlidersHorizontal, Tags, CalendarDays];
  const Icon = icons[index];
  const [tone, soft] = accents[index];
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[13px] border border-black/[.04]" style={{ color: tone, background: soft }}>
      <Icon size={21} strokeWidth={2.25} />
    </span>
  );
}

function StepHeader({ number, title, text, index }: { number: string; title: string; text: string; index: number }) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid h-11 min-w-11 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#6d28d9,#9b2cff)] px-2 text-[12px] font-black text-white">{number}</span>
      <div className="min-w-0 flex-1 pt-0.5">
        <h3 className="text-[16px] font-[850] leading-5 tracking-[-.025em] text-[#171230]">{title}</h3>
        <p className="mt-1.5 text-[10px] leading-5 text-[#716a7e]">{text}</p>
      </div>
      <HeaderIcon index={index} />
    </div>
  );
}

function ImportCard() {
  return (
    <article className="flex h-full flex-col rounded-[22px] border border-[#e5dcf0] bg-white p-5">
      <StepHeader number="01" title="Import Products" text="Import products from your favorite stores with one clean workflow." index={0} />
      <div className="mt-5 flex flex-1 flex-col rounded-[17px] border border-[#e8e0f1] bg-[#fbf9ff] p-3.5">
        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
          {stores.map(([label, icon]) => (
            <div key={label} className="flex min-h-[58px] items-center gap-3 rounded-[11px] border border-[#e6dfee] bg-white px-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-[#faf8ff]">
                <img src={brandLogo(icon)} alt={`${label} logo`} className="h-7 w-7 object-contain" loading="lazy" />
              </span>
              <span className="min-w-0 flex-1 text-[10px] font-extrabold text-[#241d36]">{label}</span>
              <ArrowRight size={13} className="shrink-0 text-[#8b3dff]" />
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-[12px] border border-[#e6dfee] bg-white p-3">
          <div className="flex items-center justify-between gap-3">
            <div><div className="text-[9px] font-black text-[#171230]">One-click import</div><div className="mt-1 text-[8px] text-[#7c7488]">Bring product details into one workspace.</div></div>
            <span className="rounded-full bg-[#efe7ff] px-2.5 py-1 text-[8px] font-black text-[#6d28d9]">Ready</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {['Images','Details','Variants'].map((item) => <div key={item} className="flex items-center justify-center gap-1.5 rounded-lg bg-[#faf8ff] px-2 py-2 text-[8px] font-bold"><Check size={10} className="text-[#16a36a]"/>{item}</div>)}
          </div>
        </div>
      </div>
    </article>
  );
}

function VariationsCard() {
  return (
    <article className="flex h-full flex-col rounded-[22px] border border-[#e5dcf0] bg-white p-5">
      <StepHeader number="02" title="Manage Variations" text="Import sizes, colors, styles and useful variation details." index={1} />
      <div className="mt-5 flex flex-1 flex-col rounded-[17px] border border-[#e8e0f1] bg-[#fbf9ff] p-3.5">
        <div className="grid gap-3 rounded-[13px] border border-[#e5dced] bg-white p-3 sm:grid-cols-[.8fr_1.2fr] xl:grid-cols-1 2xl:grid-cols-[.82fr_1.18fr]">
          <div className="overflow-hidden rounded-[11px] bg-[linear-gradient(145deg,#f2eaff,#fff5fa)] p-2">
            <img src="/placeholders/product-selection.svg" alt="Product variation placeholder" className="h-[128px] w-full object-cover object-center" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-[9px] font-black text-[#171230]">Wireless Headphones</div>
            <div className="mt-2 space-y-2">
              {['Color options imported','Size variants organized','SKU mapping ready'].map((item) => <div key={item} className="flex items-center gap-2 text-[8px] font-semibold text-[#675f75]"><span className="grid h-4 w-4 place-items-center rounded-full bg-[#e8fff2] text-[#16a36a]"><Check size={9}/></span>{item}</div>)}
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="mb-2 text-[8px] font-black uppercase tracking-[.08em] text-[#81788d]">Color</div>
          <div className="grid grid-cols-4 gap-2">
            {[['Black','#171230'],['Blue','#2563eb'],['Pink','#e94f98'],['White','#f3f4f6']].map(([label,color]) => <div key={label} className="rounded-[10px] border border-[#e3d9ee] bg-white px-2 py-2 text-center text-[8px] font-bold"><span className="mx-auto mb-1.5 block h-3.5 w-3.5 rounded-full border border-black/10" style={{background:color}}/><span>{label}</span></div>)}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2">
          {['S','M','L','XL'].map((size,i) => <div key={size} className={`rounded-[9px] border px-2 py-2 text-center text-[8px] font-black ${i===1?'border-[#8b3dff] bg-[#f2ebff] text-[#6d28d9]':'border-[#e3d9ee] bg-white text-[#655d72]'}`}>{size}</div>)}
        </div>
      </div>
    </article>
  );
}

function PricingCard() {
  return (
    <article className="flex h-full flex-col rounded-[22px] border border-[#e5dcf0] bg-white p-5">
      <StepHeader number="03" title="Set Price, Profit & Stock" text="Review cost, margin, stock and monitoring before listing." index={2} />
      <div className="mt-5 flex flex-1 flex-col rounded-[17px] border border-[#e8e0f1] bg-[#fbf9ff] p-3.5">
        <div className="grid grid-cols-3 gap-2">
          {[['Cost','$20.00'],['Profit','$6.00'],['Price','$26.00']].map(([a,b]) => <div key={a} className="rounded-[11px] border border-[#e8e0f1] bg-white p-3 text-center"><div className="text-[7px] uppercase tracking-[.06em] text-[#81788d]">{a}</div><div className="mt-1 text-[14px] font-black text-[#171230]">{b}</div></div>)}
        </div>

        <div className="mt-3 rounded-[12px] border border-[#e8e0f1] bg-white p-3">
          <div className="flex items-center justify-between"><span className="text-[9px] font-extrabold">Profit margin</span><span className="rounded-lg bg-[#fff1e7] px-2 py-1 text-[8px] font-black text-[#ff6b14]">30%</span></div>
          <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-[#f0ebf5]"><span className="w-[30%] rounded-full bg-[linear-gradient(90deg,#ff8a30,#ff6b14)]"/></div>
        </div>

        <div className="mt-3 space-y-2">
          {[[RefreshCcw,'Auto Price Monitoring'],[PackageSearch,'Auto Stock Monitoring'],[Settings2,'Sync with Supplier']].map(([Icon,label]:any) => <div key={label} className="flex items-center justify-between gap-3 rounded-[11px] border border-[#e8e0f1] bg-white px-3 py-2.5"><div className="flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-lg bg-[#f3edff] text-[#6d28d9]"><Icon size={13}/></span><span className="text-[8px] font-extrabold">{label}</span></div><span className="flex h-5 w-9 items-center rounded-full bg-[#7c3aed] p-1"><span className="ml-auto block h-3 w-3 rounded-full bg-white"/></span></div>)}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-[10px] bg-[#ecfbf3] px-3 py-2 text-[8px] font-bold text-[#128557]">In stock · 250</div>
          <div className="rounded-[10px] bg-[#fff4e9] px-3 py-2 text-[8px] font-bold text-[#c25d13]">Supplier synced</div>
        </div>
      </div>
    </article>
  );
}

function ScheduleCard() {
  const active = new Set([5,10,16,22,27]);
  return (
    <article className="flex h-full flex-col rounded-[22px] border border-[#e5dcf0] bg-white p-5">
      <StepHeader number="04" title="Schedule Listings" text="Choose the day and time your listing should go live." index={3} />
      <div className="mt-5 flex flex-1 flex-col rounded-[17px] border border-[#e8e0f1] bg-[#fbf9ff] p-3.5">
        <div className="rounded-[13px] border border-[#e8e0f1] bg-white p-3">
          <div className="flex items-center justify-between"><div><div className="text-[9px] font-black">October 2026</div><div className="mt-0.5 text-[7px] text-[#837a90]">Publishing calendar</div></div><CalendarDays size={17} className="text-[#f22eb7]"/></div>
          <div className="mt-3 grid grid-cols-7 gap-1.5">
            {['M','T','W','T','F','S','S'].map((d,i)=><span key={`${d}-${i}`} className="text-center text-[7px] font-black text-[#9a91a4]">{d}</span>)}
            {Array.from({length:28}).map((_,i)=>{const day=i+1; const isActive=active.has(day); return <span key={day} className={`grid h-7 place-items-center rounded-[8px] text-[8px] font-bold ${isActive?'bg-[#7c3aed] text-white':'bg-[#faf8ff] text-[#655d72]'}`}>{day}</span>;})}
          </div>
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
          <div className="rounded-[11px] border border-[#e8e0f1] bg-white p-3"><div className="text-[7px] uppercase tracking-[.06em] text-[#81788d]">Schedule window</div><div className="mt-1 text-[11px] font-black text-[#6d28d9]">30 Days</div></div>
          <div className="rounded-[11px] border border-[#e8e0f1] bg-white p-3"><div className="text-[7px] uppercase tracking-[.06em] text-[#81788d]">Queue</div><div className="mt-1 text-[11px] font-black text-[#171230]">12 Listings</div></div>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-[11px] border border-[#e8e0f1] bg-white px-3 py-2.5"><div><div className="text-[8px] font-extrabold">Next publish</div><div className="mt-0.5 text-[7px] text-[#81788d]">Tomorrow · 10:30 AM</div></div><span className="rounded-lg bg-[#fff0f7] px-2.5 py-1.5 text-[8px] font-black text-[#d62484]">Scheduled</span></div>
      </div>
    </article>
  );
}

export default function BulkImportShowcase() {
  return (
    <section id="bulk-import-improved" className="section border-y border-[#eee8f4] bg-[linear-gradient(180deg,#fbf9ff_0%,#ffffff_100%)]">
      <div className="container-site">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="eyebrow">From any store to your eBay store</div>
          <h2 className="mt-4 text-[32px] font-[880] leading-[1.04] tracking-[-.045em] text-[#171230] sm:text-[42px] lg:text-[46px]">Bulk Import & <span className="gradient-text">Schedule Listings</span></h2>
          <p className="muted mx-auto mt-4 max-w-[760px] text-[14px] leading-7 sm:text-[15px]">Import products from Amazon, eBay, AliExpress, Etsy and more, organize variations, set price and stock rules, then schedule listings up to 30 days in advance.</p>
        </div>

        <div className="mt-10 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">
          <ImportCard />
          <VariationsCard />
          <PricingCard />
          <ScheduleCard />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [PackageSearch,'Bulk import','Bring products into one clean queue','#7c3aed','#f3edff'],
            [Settings2,'Custom settings','Keep variations, pricing and stock organized','#16a36a','#ecfbf3'],
            [CalendarDays,'Schedule listings','Plan publishing up to 30 days ahead','#2563eb','#eef7ff'],
            [CircleDollarSign,'Save time','Reduce repetitive listing setup work','#f22eb7','#fff0f7'],
          ].map(([Icon,title,text,tone,soft]:any)=><div key={title} className="flex items-center gap-3 rounded-[14px] border border-[#e8e0f1] bg-white p-3.5"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-[11px]" style={{color:tone,background:soft}}><Icon size={18}/></span><div><div className="text-[10px] font-extrabold text-[#171230]">{title}</div><div className="mt-1 text-[8px] leading-4 text-[#7b7388]">{text}</div></div></div>)}
        </div>
      </div>
    </section>
  );
}
