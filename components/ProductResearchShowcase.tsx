import type { ReactNode } from 'react';

const icon8 = (name: string) => `https://img.icons8.com/color/96/${name}.png`;

const productImages = {
  headphones: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=420&q=82',
  watch: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=420&q=82',
  sneakers: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=420&q=82',
};

function NumberBadge({ children }: { children: string }) {
  return (
    <span className="grid h-10 min-w-10 place-items-center rounded-[11px] bg-[linear-gradient(135deg,#6d28d9,#a02cff)] px-2 text-[13px] font-black text-white">
      {children}
    </span>
  );
}

function ColorIcon({ name }: { name: string }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[13px] border border-[#ebe3f5] bg-[#fbf8ff]">
      <img src={icon8(name)} alt="" className="h-8 w-8 object-contain" loading="lazy" />
    </span>
  );
}

function CardHeader({ number, title, text, icon }: { number: string; title: string; text: string; icon: string }) {
  return (
    <div className="relative z-10 flex items-start gap-3">
      <NumberBadge>{number}</NumberBadge>
      <div className="min-w-0 flex-1 pt-0.5">
        <h3 className="text-[16px] font-[850] leading-5 tracking-[-.025em] text-[#171230]">{title}</h3>
        <p className="mt-1.5 max-w-[330px] text-[11px] leading-[1.5] text-[#6c647c]">{text}</p>
      </div>
      <ColorIcon name={icon} />
    </div>
  );
}

function BentoCard({ children, className = '', accent = '#7c3aed' }: { children: ReactNode; className?: string; accent?: string }) {
  return (
    <article
      className={`group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[24px] border border-[#e5ddf0] bg-white p-5 transition-transform duration-300 hover:-translate-y-1 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 100% 0%, ${accent}12, transparent 32%), linear-gradient(180deg,#ffffff 0%,#fefcff 100%)`,
      }}
    >
      <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,#8b3dff55,transparent)]" />
      <span className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full border border-[#eee6f7] opacity-70 transition-transform duration-500 group-hover:scale-110" />
      {children}
    </article>
  );
}

function ResearchCard() {
  const products = [
    ['Headphones', '$25.99', productImages.headphones],
    ['Smart Watch', '$18.50', productImages.watch],
    ['Sneakers', '$32.00', productImages.sneakers],
  ];

  return (
    <BentoCard accent="#7c3aed">
      <CardHeader number="01" title="Product Finder & Research" text="Find products, compare marketplaces and shortlist useful opportunities from one visual workspace." icon="search--v1" />
      <div className="relative z-10 mt-5 flex flex-1 flex-col rounded-[18px] border border-[#e8e0f2] bg-[#faf8ff] p-3.5">
        <div className="flex items-center gap-2 rounded-[11px] border border-[#e4dbef] bg-white px-3 py-2.5 text-[10px] text-[#675f76]">
          <img src={icon8('search--v1')} alt="" className="h-4 w-4" />
          Wireless headphones
          <span className="ml-auto rounded-lg bg-[#6d28d9] px-3 py-1.5 font-extrabold text-white">Search</span>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2 text-center text-[9px] font-extrabold">
          {[
            ['AliExpress', '#ff5a22'],
            ['Amazon', '#111827'],
            ['Etsy', '#f1641e'],
            ['eBay', '#2563eb'],
          ].map(([label, color]) => (
            <div key={label} className="rounded-[9px] border border-[#ebe4f2] bg-white px-1 py-2.5" style={{ color }}>{label}</div>
          ))}
        </div>

        <div className="mt-3 grid flex-1 grid-cols-3 gap-2">
          {products.map(([name, price, image]) => (
            <div key={name} className="flex min-h-[148px] flex-col rounded-[12px] border border-[#e8e0ef] bg-white p-2.5 text-center">
              <img src={image} alt={name} className="mx-auto h-[72px] w-full rounded-md object-contain" loading="lazy" />
              <div className="mt-auto pt-2 text-[10px] font-black text-[#171230]">{price}</div>
              <div className="mt-1.5 rounded-md bg-[linear-gradient(90deg,#6d28d9,#8b3dff)] px-1 py-1.5 text-[8px] font-extrabold text-white">Shortlist</div>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function ListingCard() {
  return (
    <BentoCard accent="#9b2cff">
      <CardHeader number="02" title="Listing Optimization" text="Prepare cleaner titles, descriptions, pricing and product details before publishing." icon="checklist" />
      <div className="relative z-10 mt-5 flex flex-1 flex-col rounded-[18px] border border-[#e8e0f2] bg-[#faf8ff] p-3.5">
        <div className="grid grid-cols-[96px_1fr] gap-3">
          <div className="grid place-items-center rounded-[12px] border border-[#e6deee] bg-white p-2">
            <img src={productImages.headphones} alt="Wireless headphones" className="h-[104px] w-full object-contain" loading="lazy" />
          </div>
          <div>
            <div className="text-[9px] font-extrabold text-[#171230]">Optimized title</div>
            <div className="mt-1.5 rounded-[10px] border border-[#e5ddee] bg-white px-2.5 py-2 text-[9px] leading-4 text-[#423b57]">
              Wireless Bluetooth Headphones · Over Ear · Noise Cancelling
            </div>
            <div className="mt-3 h-2 rounded-full bg-[#ded5ee]" />
            <div className="mt-1.5 h-2 w-4/5 rounded-full bg-[#ece5f3]" />
          </div>
        </div>

        <div className="mt-3 grid flex-1 content-end gap-2 text-[9px] font-semibold text-[#39324d]">
          {['SEO title & description', 'Product tags & keywords', 'Pricing and margin review', 'Marketplace-ready details'].map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-2">
              <span className="grid h-4 w-4 place-items-center rounded-full bg-[#daf8e8] text-[9px] text-[#159455]">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function OrdersCard() {
  const stages = [
    ['1', 'Order received', '#16a34a'],
    ['2', 'Review details', '#f97316'],
    ['3', 'Track fulfilment', '#2563eb'],
    ['4', 'Status updated', '#7c3aed'],
  ];

  return (
    <BentoCard accent="#6d28d9">
      <CardHeader number="03" title="Order Workflow" text="Keep every order organized from receipt through fulfilment and status updates." icon="shopping-cart--v1" />
      <div className="relative z-10 mt-5 flex flex-1 flex-col rounded-[18px] border border-[#e8e0f2] bg-[#faf8ff] p-3.5">
        <div className="space-y-3">
          {stages.map(([n, title, color], index) => (
            <div key={title} className="relative flex items-center gap-3">
              {index < stages.length - 1 && <span className="absolute left-[17px] top-8 h-6 w-px bg-[#d8cbed]" />}
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[11px] font-black text-white" style={{ background: color }}>{n}</span>
              <div className="min-w-0">
                <div className="text-[10px] font-extrabold text-[#171230]">{title}</div>
                <div className="mt-0.5 text-[8px] text-[#736b82]">Connected seller status</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto rounded-[10px] bg-[linear-gradient(90deg,#6d28d9,#9a2cff)] px-3 py-2.5 text-center text-[9px] font-extrabold text-white">Connected order processing</div>
      </div>
    </BentoCard>
  );
}

function TrackingCard() {
  return (
    <BentoCard accent="#2563eb">
      <CardHeader number="04" title="Tracking & Returns" text="Keep shipment progress and return status visible without switching tools." icon="delivery" />
      <div className="relative z-10 mt-5 flex flex-1 flex-col gap-3">
        <div className="flex-1 rounded-[18px] border border-[#e8e0f2] bg-[#faf8ff] p-3.5">
          <div className="flex items-center justify-between">
            <div><div className="text-[10px] font-extrabold text-[#171230]">Order tracking</div><div className="mt-1 text-[9px] text-[#5f5771]">LP1234567890</div></div>
            <span className="rounded-full bg-[#dcf8e7] px-2.5 py-1 text-[8px] font-bold text-[#14844c]">In transit</span>
          </div>
          <div className="mt-5 flex items-center">
            {[0,1,2,3,4].map((i) => <div key={i} className="contents"><span className={`h-3.5 w-3.5 rounded-full border-2 ${i < 4 ? 'border-[#6d28d9] bg-white' : 'border-[#a49dab] bg-white'}`} />{i < 4 && <span className={`h-[2px] flex-1 ${i < 3 ? 'bg-[#6d28d9]' : 'bg-[#ddd5e7]'}`} />}</div>)}
          </div>
          <div className="mt-2 grid grid-cols-5 text-center text-[7px] font-semibold text-[#645d73]"><span>Placed</span><span>Processed</span><span>Shipped</span><span>Transit</span><span>Delivered</span></div>
        </div>

        <div className="rounded-[16px] border border-[#e8e0f2] bg-white p-3.5">
          <div className="flex items-center gap-3">
            <img src={icon8('return-purchase')} alt="" className="h-10 w-10" />
            <div><div className="text-[10px] font-extrabold text-[#171230]">Return visibility</div><div className="mt-1 text-[8.5px] leading-4 text-[#6d657e]">Track return requests and keep record updates together.</div></div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

function SheetsCard() {
  const rows = [
    ['#1001', 'Headphones', '$39.99', 'Shipped'],
    ['#1002', 'Smart Watch', '$45.50', 'Processing'],
    ['#1003', 'Sneakers', '$28.20', 'Delivered'],
  ];

  return (
    <BentoCard accent="#22a65a">
      <CardHeader number="05" title="Google Sheets Sync" text="Keep order, price, status and profit records organized in one spreadsheet flow." icon="google-sheets" />
      <div className="relative z-10 mt-5 flex flex-1 flex-col overflow-hidden rounded-[18px] border border-[#dfece3] bg-white">
        <div className="flex items-center justify-between bg-[#f4fbf6] px-3 py-2.5">
          <div className="flex items-center gap-2 text-[9px] font-extrabold"><img src={icon8('google-sheets')} alt="" className="h-5 w-5" />Orders & profit sheet</div>
          <span className="rounded-full bg-[#daf8e6] px-2 py-1 text-[8px] font-bold text-[#18824e]">Synced</span>
        </div>
        <div className="grid grid-cols-[.8fr_1.25fr_.8fr_1fr] bg-[#faf9fc] px-2.5 py-2 text-[7.5px] font-black text-[#6e667d]"><span>Order</span><span>Product</span><span>Price</span><span>Status</span></div>
        {rows.map((r) => (
          <div key={r[0]} className="grid flex-1 grid-cols-[.8fr_1.25fr_.8fr_1fr] items-center border-t border-[#eeeaf2] px-2.5 py-2 text-[8px]">
            <span>{r[0]}</span><span className="font-semibold">{r[1]}</span><span>{r[2]}</span><span className="rounded-md bg-[#edf8ff] px-1 py-1 text-center text-[7px] font-bold text-[#2563eb]">{r[3]}</span>
          </div>
        ))}
        <div className="grid grid-cols-4 border-t border-[#eeeaf2] bg-[#fbfaff] py-2.5 text-center text-[7.5px] font-bold text-[#5f5771]"><span>Orders</span><span>Stock</span><span>Reports</span><span>Profit</span></div>
      </div>
    </BentoCard>
  );
}

function StockCard() {
  const products = [
    ['Headphones', 'In stock · 250', '#22a75a', productImages.headphones],
    ['Smart Watch', 'Low stock · 3', '#e79a15', productImages.watch],
    ['Sneakers', 'Out of stock', '#e34665', productImages.sneakers],
  ];

  return (
    <BentoCard accent="#22a65a">
      <CardHeader number="06" title="Stock Monitoring" text="Spot supplier stock changes quickly and keep attention states visible." icon="database" />
      <div className="relative z-10 mt-5 flex flex-1 flex-col overflow-hidden rounded-[18px] border border-[#e8e0f2] bg-[#faf8ff]">
        {products.map(([name, status, color, image]) => (
          <div key={name} className="flex flex-1 items-center gap-3 border-b border-[#ebe5f3] bg-white px-3 py-3 last:border-b-0">
            <img src={image} alt={name} className="h-11 w-11 rounded-md object-contain" loading="lazy" />
            <div className="min-w-0 flex-1"><div className="text-[9px] font-extrabold text-[#171230]">{name}</div><div className="mt-0.5 text-[8px] font-bold" style={{ color }}>{status}</div></div>
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
          </div>
        ))}
        <div className="grid grid-cols-3 bg-[#fbf9ff] py-2.5 text-center text-[7px] font-bold text-[#655d77]"><span>Real-time check</span><span>Low-stock alerts</span><span>Attention states</span></div>
      </div>
    </BentoCard>
  );
}

function PriceCard() {
  return (
    <BentoCard accent="#f59e0b">
      <CardHeader number="07" title="Price Monitoring" text="Compare supplier movement with your selling price and margin context at a glance." icon="price-tag" />
      <div className="relative z-10 mt-5 grid flex-1 gap-3 lg:grid-cols-[1.35fr_.65fr]">
        <div className="rounded-[18px] border border-[#e8e0f2] bg-[#faf8ff] p-4">
          <div className="flex items-center justify-between text-[9px]"><b className="text-[#171230]">Supplier vs store</b><span className="text-[#6c6480]">Last 30 days</span></div>
          <div className="mt-3 rounded-[12px] border border-[#e7e0ef] bg-white p-3">
            <svg viewBox="0 0 420 120" className="h-[120px] w-full" aria-label="Price trend chart">
              <path d="M8 91 L62 64 L118 70 L174 48 L230 59 L286 34 L342 42 L412 18" fill="none" stroke="#7c3aed" strokeWidth="3" />
              <path d="M8 103 L62 82 L118 86 L174 74 L230 78 L286 61 L342 66 L412 51" fill="none" stroke="#0ea5e9" strokeWidth="3" />
              {[8,62,118,174,230,286,342,412].map((x,i)=><circle key={x} cx={x} cy={[91,64,70,48,59,34,42,18][i]} r="3" fill="#fff" stroke="#7c3aed" strokeWidth="2" />)}
            </svg>
          </div>
        </div>
        <div className="grid gap-2.5">
          {[
            ['Supplier price', '$18.50', '#0ea5e9'],
            ['Store price', '$32.99', '#7c3aed'],
            ['Margin context', '20%', '#159455'],
            ['Price alerts', 'On', '#e57b19'],
          ].map(([label, value, color]) => (
            <div key={label} className="flex items-center justify-between rounded-[14px] border border-[#e8e0f2] bg-white px-3 py-2.5 text-[9px]">
              <span className="font-semibold text-[#5c546b]">{label}</span><span className="font-black" style={{ color }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function ProfitCard() {
  return (
    <BentoCard accent="#16a34a">
      <CardHeader number="08" title="Profit Analytics" text="Review sales, costs, fees and profit trends from one compact reporting view." icon="money-bag" />
      <div className="relative z-10 mt-5 grid flex-1 gap-3 sm:grid-cols-[.9fr_1.1fr] xl:grid-cols-1 2xl:grid-cols-[.9fr_1.1fr]">
        <div className="grid grid-cols-2 gap-2">
          {[
            ['Sales', '$9.0K', '#6d28d9'],
            ['Profit', '$2.2K', '#159455'],
            ['Orders', '174', '#2563eb'],
            ['Margin', '24.7%', '#e57b19'],
          ].map(([label, value, color]) => (
            <div key={label} className="rounded-[13px] border border-[#e8e2ef] bg-white p-3">
              <div className="text-[8px] font-bold uppercase tracking-[.08em] text-[#827a90]">{label}</div>
              <div className="mt-1 text-[17px] font-black" style={{ color }}>{value}</div>
            </div>
          ))}
        </div>
        <div className="rounded-[16px] border border-[#e8e2ef] bg-[#faf8ff] p-3.5">
          <div className="flex items-center justify-between text-[9px]"><b className="text-[#171230]">Weekly profit</b><span className="text-[#159455]">+12.4%</span></div>
          <div className="mt-4 flex h-[88px] items-end gap-2">{[32,50,44,66,55,78,70].map((h,i)=><span key={i} className="flex-1 rounded-t-md bg-[linear-gradient(180deg,#9a52ff,#6d28d9)]" style={{ height: `${h}%`, opacity: .52 + i * .06 }} />)}</div>
        </div>
      </div>
    </BentoCard>
  );
}

export default function ProductResearchShowcase() {
  return (
    <section id="product-research-showcase" className="section border-y border-[#eee8f4] bg-[linear-gradient(180deg,#ffffff_0%,#faf8ff_100%)]">
      <div className="container-site">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="eyebrow">Product research & automation</div>
          <h2 className="mt-4 text-[32px] font-[850] leading-[1.04] tracking-[-.045em] sm:text-[42px]">
            One Workspace for the <span className="gradient-text">Full Selling Workflow.</span>
          </h2>
          <p className="muted mx-auto mt-4 max-w-[720px] text-[14px] leading-7">
            A denser bento-style overview keeps every important module visible without wasted space, from product research and listing prep to monitoring, Sheets and profit.
          </p>
        </div>

        <div className="mt-11 grid gap-4 md:grid-cols-2 xl:grid-cols-12 xl:items-stretch">
          <div className="xl:col-span-5"><ResearchCard /></div>
          <div className="xl:col-span-4"><ListingCard /></div>
          <div className="xl:col-span-3"><OrdersCard /></div>

          <div className="xl:col-span-4"><TrackingCard /></div>
          <div className="xl:col-span-4"><SheetsCard /></div>
          <div className="xl:col-span-4"><StockCard /></div>

          <div className="xl:col-span-7"><PriceCard /></div>
          <div className="xl:col-span-5"><ProfitCard /></div>
        </div>
      </div>
    </section>
  );
}
