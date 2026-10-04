const icon8 = (name: string) => `https://img.icons8.com/color/96/${name}.png`;

function ColorIcon({ name, alt }: { name: string; alt: string }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#eee7f8] bg-[#fbf8ff]">
      <img src={icon8(name)} alt={alt} className="h-8 w-8 object-contain" loading="lazy" />
    </span>
  );
}

function NumberBadge({ children }: { children: string }) {
  return (
    <span className="grid h-10 min-w-10 place-items-center rounded-[10px] bg-[linear-gradient(135deg,#6d28d9,#9b2cff)] px-2 text-sm font-black text-white">
      {children}
    </span>
  );
}

function CardHeader({
  number,
  title,
  text,
  icon,
}: {
  number: string;
  title: string;
  text: string;
  icon: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <NumberBadge>{number}</NumberBadge>
      <div className="min-w-0 flex-1 pt-1">
        <h3 className="text-[15px] font-[850] leading-5 tracking-[-.02em] text-[#171230]">{title}</h3>
        <p className="mt-1 text-[11px] leading-[1.45] text-[#625b77]">{text}</p>
      </div>
      <ColorIcon name={icon} alt="" />
    </div>
  );
}

function ResearchCard() {
  return (
    <article className="rounded-[18px] border border-[#e6def1] bg-white p-4">
      <CardHeader number="01" title="Product Finder & Research" text="Review product opportunities, source cost and selling context in one place." icon="search--v1" />
      <div className="mt-4 rounded-[14px] border border-[#ebe5f3] bg-[#fbf9ff] p-3">
        <div className="flex items-center gap-2 rounded-[10px] border border-[#e5ddf0] bg-white px-3 py-2 text-[10px] text-[#6c6480]">
          <img src={icon8('search--v1')} alt="" className="h-4 w-4" />
          Wireless headphones
          <span className="ml-auto rounded-md bg-[#6d28d9] px-3 py-1.5 font-bold text-white">Search</span>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2 text-center text-[9px] font-bold">
          {[
            ['AliExpress', '#ff5a22'],
            ['Amazon', '#111827'],
            ['Etsy', '#f1641e'],
            ['eBay', '#2563eb'],
          ].map(([label, color]) => (
            <div key={label} className="rounded-lg border border-[#ebe5f3] bg-white px-1 py-2" style={{ color }}>{label}</div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ['Headphones', '$25.99', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80'],
            ['Smart Watch', '$18.50', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80'],
            ['Sneakers', '$32.00', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80'],
          ].map(([name, price, image]) => (
            <div key={name} className="rounded-[10px] border border-[#e9e2f2] bg-white p-2 text-center">
              <img src={image} alt={name} className="mx-auto h-14 w-full rounded-md object-contain" loading="lazy" />
              <div className="mt-1 text-[9px] font-bold text-[#171230]">{price}</div>
              <div className="mt-1 rounded-md bg-[#6d28d9] px-1 py-1 text-[8px] font-bold text-white">Shortlist</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function ListingCard() {
  return (
    <article className="rounded-[18px] border border-[#e6def1] bg-white p-4">
      <CardHeader number="02" title="Listing Optimization" text="Prepare clean titles, descriptions, pricing and product details before publishing." icon="checklist" />
      <div className="mt-4 rounded-[14px] border border-[#ebe5f3] bg-[#fbf9ff] p-3">
        <div className="grid grid-cols-[92px_1fr] gap-3">
          <div className="rounded-[10px] border border-[#e8e1f0] bg-white p-2">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=350&q=82" alt="Headphones" className="h-24 w-full object-contain" loading="lazy" />
          </div>
          <div>
            <div className="text-[9px] font-extrabold text-[#171230]">Optimized title</div>
            <div className="mt-1 rounded-lg border border-[#e5dfee] bg-white px-2 py-2 text-[9px] leading-4 text-[#423b57]">Wireless Bluetooth Headphones · Over Ear · Noise Cancelling</div>
            <div className="mt-2 h-2 rounded-full bg-[#ded5ee]" />
            <div className="mt-1 h-2 w-4/5 rounded-full bg-[#e8e1f1]" />
          </div>
        </div>
        <div className="mt-3 grid gap-1.5 text-[9px] font-semibold text-[#39324d]">
          {['SEO title & description', 'Product tags & keywords', 'Pricing and margin review', 'Marketplace-ready details'].map((item) => (
            <div key={item} className="flex items-center gap-2"><span className="grid h-4 w-4 place-items-center rounded-full bg-[#daf8e8] text-[9px] text-[#159455]">✓</span>{item}</div>
          ))}
        </div>
      </div>
    </article>
  );
}

function OrdersCard() {
  const stages = [
    ['1', 'Order received', 'Order appears in your workspace', '#16a34a'],
    ['2', 'Review details', 'Customer and product details together', '#f97316'],
    ['3', 'Track fulfilment', 'Keep supplier progress visible', '#2563eb'],
    ['4', 'Status updated', 'Keep the order record current', '#7c3aed'],
  ];
  return (
    <article className="rounded-[18px] border border-[#e6def1] bg-white p-4">
      <CardHeader number="03" title="Order Workflow" text="Keep each order organized from receipt through fulfilment and status updates." icon="shopping-cart--v1" />
      <div className="mt-4 rounded-[14px] border border-[#ebe5f3] bg-[#fbf9ff] p-3">
        <div className="space-y-2.5">
          {stages.map(([n, title, text, color], index) => (
            <div key={title} className="relative flex items-center gap-3">
              {index < stages.length - 1 && <span className="absolute left-[17px] top-8 h-5 w-px bg-[#d9ccee]" />}
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[11px] font-black text-white" style={{ background: color }}>{n}</span>
              <div><div className="text-[10px] font-extrabold text-[#171230]">{title}</div><div className="mt-0.5 text-[8.5px] text-[#6d657e]">{text}</div></div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-[linear-gradient(90deg,#6d28d9,#8b3dff)] px-3 py-2 text-center text-[9px] font-extrabold text-white">Connected order processing</div>
      </div>
    </article>
  );
}

function TrackingCard() {
  return (
    <article className="rounded-[18px] border border-[#e6def1] bg-white p-4">
      <CardHeader number="04" title="Tracking & Status" text="See shipment progress and keep delivery or return status easy to review." icon="delivery" />
      <div className="mt-4 space-y-3">
        <div className="rounded-[14px] border border-[#ebe5f3] bg-[#fbf9ff] p-3">
          <div className="flex items-center justify-between"><div><div className="text-[10px] font-extrabold text-[#171230]">Order tracking</div><div className="mt-1 text-[9px] text-[#5f5771]">LP1234567890</div></div><span className="rounded-full bg-[#ddf9e8] px-2 py-1 text-[8px] font-bold text-[#14844c]">In transit</span></div>
          <div className="mt-4 flex items-center">
            {[0,1,2,3,4].map((i) => <div key={i} className="contents"><span className={`h-3 w-3 rounded-full border-2 ${i < 4 ? 'border-[#6d28d9] bg-white' : 'border-[#9f98ac] bg-white'}`} />{i<4&&<span className={`h-[2px] flex-1 ${i<3?'bg-[#6d28d9]':'bg-[#d8d1e4]'}`} />}</div>)}
          </div>
          <div className="mt-2 grid grid-cols-5 text-center text-[7.5px] font-semibold text-[#5f5771]"><span>Placed</span><span>Processed</span><span>Shipped</span><span>Transit</span><span>Delivered</span></div>
        </div>
        <div className="rounded-[14px] border border-[#ebe5f3] bg-white p-3">
          <div className="flex items-center gap-3"><img src={icon8('return-purchase')} alt="" className="h-9 w-9" /><div><div className="text-[10px] font-extrabold text-[#171230]">Return visibility</div><div className="mt-1 text-[8.5px] leading-4 text-[#6d657e]">Keep return requests and record updates in one place.</div></div></div>
        </div>
      </div>
    </article>
  );
}

function SheetsCard() {
  const rows = [['#1001','Headphones','$39.99','Shipped'],['#1002','Smart Watch','$45.50','Processing'],['#1003','Sneakers','$28.20','Delivered']];
  return (
    <article className="rounded-[18px] border border-[#e6def1] bg-white p-4">
      <CardHeader number="05" title="Google Sheets Sync" text="Keep order, price, status and profit records organized in your sheet workflow." icon="google-sheets" />
      <div className="mt-4 overflow-hidden rounded-[14px] border border-[#dfece3] bg-white">
        <div className="flex items-center justify-between bg-[#f4fbf6] px-3 py-2"><div className="flex items-center gap-2 text-[9px] font-extrabold"><img src={icon8('google-sheets')} alt="" className="h-5 w-5" />Orders & profit sheet</div><span className="rounded-full bg-[#daf8e6] px-2 py-1 text-[8px] font-bold text-[#18824e]">Synced</span></div>
        <div className="grid grid-cols-[.8fr_1.25fr_.8fr_1fr] bg-[#faf9fc] px-2 py-2 text-[7.5px] font-black text-[#6e667d]"><span>Order</span><span>Product</span><span>Price</span><span>Status</span></div>
        {rows.map((r) => <div key={r[0]} className="grid grid-cols-[.8fr_1.25fr_.8fr_1fr] items-center border-t border-[#eeeaf2] px-2 py-2 text-[8px]"><span>{r[0]}</span><span className="font-semibold">{r[1]}</span><span>{r[2]}</span><span className="rounded-md bg-[#edf8ff] px-1 py-1 text-center text-[7px] font-bold text-[#2563eb]">{r[3]}</span></div>)}
        <div className="grid grid-cols-4 border-t border-[#eeeaf2] bg-[#fbfaff] py-2 text-center text-[7.5px] font-bold text-[#5f5771]"><span>Orders</span><span>Stock</span><span>Reports</span><span>Profit</span></div>
      </div>
    </article>
  );
}

function StockCard() {
  const products = [
    ['Headphones','In stock · 250','#22a75a','https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=160&q=80'],
    ['Smart Watch','Low stock · 3','#e79a15','https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=160&q=80'],
    ['Sneakers','Out of stock','#e34665','https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=160&q=80'],
  ];
  return (
    <article className="rounded-[18px] border border-[#e6def1] bg-white p-4">
      <CardHeader number="06" title="Stock Monitoring" text="Spot supplier stock changes quickly and keep attention states visible." icon="database" />
      <div className="mt-4 overflow-hidden rounded-[14px] border border-[#ebe5f3] bg-[#fbf9ff]">
        {products.map(([name,status,color,image]) => <div key={name} className="flex items-center gap-3 border-b border-[#ebe5f3] bg-white px-3 py-2.5 last:border-b-0"><img src={image} alt={name} className="h-9 w-9 rounded-md object-contain" loading="lazy" /><div className="min-w-0 flex-1"><div className="text-[9px] font-extrabold text-[#171230]">{name}</div><div className="mt-0.5 text-[8px] font-bold" style={{color}}>{status}</div></div><span className="h-2.5 w-2.5 rounded-full" style={{background:color}} /></div>)}
        <div className="grid grid-cols-3 bg-[#fbf9ff] py-2 text-center text-[7.5px] font-bold text-[#655d77]"><span>Real-time check</span><span>Low stock alerts</span><span>Attention states</span></div>
      </div>
    </article>
  );
}

function PriceCard() {
  return (
    <article className="rounded-[18px] border border-[#e6def1] bg-white p-4">
      <CardHeader number="07" title="Price Monitoring" text="Compare supplier movement with your selling price and margin context." icon="price-tag" />
      <div className="mt-4 rounded-[14px] border border-[#ebe5f3] bg-[#fbf9ff] p-3">
        <div className="flex items-center justify-between text-[9px]"><b className="text-[#171230]">Price monitoring</b><span className="text-[#6c6480]">Supplier vs store</span></div>
        <div className="mt-3 rounded-[10px] border border-[#e7e0ef] bg-white p-2">
          <svg viewBox="0 0 240 92" className="h-[92px] w-full" aria-label="Price trend chart">
            <path d="M5 74 L36 55 L68 60 L98 43 L128 52 L158 32 L190 38 L235 15" fill="none" stroke="#7c3aed" strokeWidth="2.4" />
            <path d="M5 82 L36 70 L68 73 L98 65 L128 68 L158 54 L190 58 L235 45" fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
            {[5,36,68,98,128,158,190,235].map((x,i)=><circle key={x} cx={x} cy={[74,55,60,43,52,32,38,15][i]} r="2.6" fill="#fff" stroke="#7c3aed" strokeWidth="2"/>)}
          </svg>
        </div>
        <div className="mt-3 space-y-2 text-[8.5px] font-semibold text-[#4e475f]">
          {[['Supplier price change','On'],['Margin context','20%'],['Price alerts','On']].map(([l,v])=><div key={l} className="flex items-center justify-between rounded-lg bg-white px-3 py-2"><span>{l}</span><span className="font-extrabold text-[#6d28d9]">{v}</span></div>)}
        </div>
      </div>
    </article>
  );
}

function ProfitCard() {
  return (
    <article className="rounded-[18px] border border-[#e6def1] bg-white p-4">
      <CardHeader number="08" title="Profit Analytics" text="Review sales, costs, fees and profit trends from one reporting view." icon="money-bag" />
      <div className="mt-4 rounded-[14px] border border-[#ebe5f3] bg-[#fbf9ff] p-3">
        <div className="grid grid-cols-2 gap-2">
          {[["Sales","$9.0K","#6d28d9"],["Profit","$2.2K","#159455"],["Orders","174","#2563eb"],["Margin","24.7%","#e57b19"]].map(([label,value,color])=><div key={label} className="rounded-[10px] border border-[#e8e2ef] bg-white p-3"><div className="text-[8px] font-bold uppercase tracking-[.08em] text-[#827a90]">{label}</div><div className="mt-1 text-[16px] font-black" style={{color}}>{value}</div></div>)}
        </div>
        <div className="mt-3 rounded-[10px] border border-[#e8e2ef] bg-white p-3">
          <div className="flex items-center justify-between text-[9px]"><b className="text-[#171230]">Weekly profit</b><span className="text-[#159455]">+12.4%</span></div>
          <div className="mt-3 flex h-[68px] items-end gap-2">{[32,50,44,66,55,78,70].map((h,i)=><span key={i} className="flex-1 rounded-t-md bg-[linear-gradient(180deg,#8b3dff,#6d28d9)]" style={{height:`${h}%`,opacity:.52+i*.06}} />)}</div>
        </div>
      </div>
    </article>
  );
}

export default function ProductResearchShowcase() {
  return (
    <section id="product-research-showcase" className="section border-y border-[#eee8f4] bg-[linear-gradient(180deg,#ffffff_0%,#fbf9ff_100%)]">
      <div className="container-site">
        <div className="mx-auto max-w-[850px] text-center">
          <div className="eyebrow">Product research & automation</div>
          <h2 className="mt-4 text-[32px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[42px]">A Visual Workflow for Research, Listings, Monitoring and Profit.</h2>
          <p className="muted mx-auto mt-4 max-w-[720px] text-[14px] leading-7">See the core selling workflow in practical modules, from finding products and preparing listings to monitoring supplier changes, organizing records and reviewing profit.</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <ResearchCard />
          <ListingCard />
          <OrdersCard />
          <TrackingCard />
          <SheetsCard />
          <StockCard />
          <PriceCard />
          <ProfitCard />
        </div>
      </div>
    </section>
  );
}
