import {
  ArrowRight,
  BarChart3,
  Check,
  ClipboardList,
  FileImage,
  FileSpreadsheet,
  PackageSearch,
  RefreshCcw,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Tags,
  TrendingUp,
  WandSparkles,
} from 'lucide-react';

export function ProductHunterPreview(){
  const rows=[
    {product:'Wireless Charger',supplier:'Supplier A',source:'$18.40',sell:'$39.99',margin:'40.9%',stock:'In Stock'},
    {product:'Portable Blender',supplier:'Supplier B',source:'$22.50',sell:'$44.99',margin:'34.9%',stock:'Low Stock'},
    {product:'Smart Lamp',supplier:'Supplier C',source:'$14.20',sell:'$31.99',margin:'38.2%',stock:'In Stock'},
    {product:'Mini Projector',supplier:'Supplier D',source:'$46.80',sell:'$89.99',margin:'36.4%',stock:'In Stock'},
  ];
  return <div className="product-frame p-4 sm:p-5">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex flex-1 items-center gap-2 rounded-lg border border-[#e7e2ee] bg-white px-3 py-2.5 text-xs text-[#8a8295]"><Search size={14}/>Search products</div>
      <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-[#dcd2e9] bg-white px-3 text-xs font-bold text-[#625a70] transition hover:border-[#8b3dff] hover:bg-[#f6f0ff] hover:text-[#5f25c3]"><SlidersHorizontal size={14}/>Filters</button>
    </div>

    <div className="mt-4 hidden overflow-hidden rounded-xl border border-[#e7e2ee] md:block">
      <div className="grid grid-cols-[1.55fr_1fr_.78fr_.78fr_.7fr_.78fr] bg-[#faf8fd] px-4 py-3 text-[9px] font-black uppercase tracking-[.08em] text-[#7f768f]">
        <span>Product</span><span>Supplier</span><span>Source</span><span>Sell</span><span>Margin</span><span>Stock</span>
      </div>
      {rows.map(row=><div key={row.product} className="grid grid-cols-[1.55fr_1fr_.78fr_.78fr_.7fr_.78fr] items-center border-t border-[#eeeaf4] px-4 py-4 text-[12px]">
        <span className="font-extrabold">{row.product}</span>
        <span>{row.supplier}</span>
        <span>{row.source}</span>
        <span>{row.sell}</span>
        <span className="font-extrabold text-[#6d28d9]">{row.margin}</span>
        <span><span className={row.stock==='Low Stock'?'status warn':'status good'}>{row.stock}</span></span>
      </div>)}
    </div>

    <div className="mt-4 grid gap-3 md:hidden">
      {rows.map(row=><div key={row.product} className="rounded-xl border border-[#e7e2ee] p-4">
        <div className="flex items-start justify-between gap-3"><div><div className="font-extrabold">{row.product}</div><div className="mt-1 text-[11px] text-[#80788d]">{row.supplier}</div></div><span className={row.stock==='Low Stock'?'status warn':'status good'}>{row.stock}</span></div>
        <div className="mt-4 grid grid-cols-3 gap-3 border-t border-[#eeeaf4] pt-3 text-[11px]"><div><span className="block text-[#8a8295]">Source</span><b className="mt-1 block">{row.source}</b></div><div><span className="block text-[#8a8295]">Sell</span><b className="mt-1 block">{row.sell}</b></div><div><span className="block text-[#8a8295]">Margin</span><b className="mt-1 block text-[#6d28d9]">{row.margin}</b></div></div>
      </div>)}
    </div>
  </div>
}

export function ListingPreview(){
  return <div className="product-frame p-5">
    <div className="border-b border-[#eeeaf4] pb-4">
      <div className="text-[10px] font-bold uppercase tracking-[.1em] text-[#81798e]">Listing editor</div>
      <div className="mt-1 text-base font-extrabold">Wireless over-ear headphones</div>
    </div>

    <div className="mt-5 grid gap-5 sm:grid-cols-[190px_1fr]">
      <div className="overflow-hidden rounded-xl border border-[#e9e3f1] bg-[#f7f5fa]">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=82"
          alt="Wireless headphones product"
          className="h-full min-h-[235px] w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="space-y-3">
        <label className="block"><span className="mb-1 block text-[10px] font-bold uppercase text-[#81798e]">Title</span><div className="rounded-lg border border-[#e7e2ee] px-3 py-2.5 text-sm font-semibold">Wireless Over-Ear Headphones</div></label>
        <label className="block"><span className="mb-1 block text-[10px] font-bold uppercase text-[#81798e]">Description</span><div className="min-h-[66px] rounded-lg border border-[#e7e2ee] px-3 py-2.5 text-xs leading-5 text-[#6f687b]">Comfortable over-ear headphones with wireless connectivity and a clean everyday design.</div></label>
        <div className="grid grid-cols-3 gap-2">{[['Cost','$28.40'],['Selling price','$59.99'],['Margin','38.6%']].map(([l,v])=><div key={l} className="rounded-lg border border-[#e7e2ee] p-2"><div className="text-[9px] uppercase text-[#8a8295]">{l}</div><div className="mt-1 text-xs font-extrabold">{v}</div></div>)}</div>
      </div>
    </div>

    <div className="mt-4 flex flex-wrap justify-end gap-2">
      <button className="outline-action">Save Draft</button>
      <button className="btn-primary min-h-[40px] px-4 text-xs">Create Listing</button>
    </div>
  </div>
}

export function MonitoringPreview(){
  const rows=[
    ['Wireless Headphones','$18.40','$20.10','$42.99','In Stock','Updated'],
    ['Portable Blender','$22.50','$22.50','$44.99','Low Stock','Attention'],
    ['Smart Lamp','$14.20','$14.20','$31.99','Out of Stock','Review'],
    ['USB Hub','$9.40','$10.15','$24.99','In Stock','Updated'],
  ];
  return <div className="product-frame overflow-hidden">
    <div className="grid border-b border-[#ebe7f1] bg-[#fbfaff] sm:grid-cols-[1fr_auto]">
      <div className="p-4 sm:p-5"><div className="text-sm font-extrabold">Stock & price monitoring</div><div className="mt-1 text-[11px] text-[#837b8f]">Supplier changes with store-price context</div></div>
      <div className="grid grid-cols-3 border-t border-[#ebe7f1] sm:border-l sm:border-t-0">
        {[['Monitored','128'],['Price changes','12'],['Attention','5']].map(([label,value])=><div key={label} className="border-r border-[#ebe7f1] px-3 py-3 last:border-r-0 sm:min-w-[92px] sm:py-4"><div className="text-[9px] font-bold uppercase tracking-[.08em] text-[#8a8295]">{label}</div><div className="mt-1 text-lg font-extrabold">{value}</div></div>)}
      </div>
    </div>

    <div className="hidden md:block">
      <div className="grid grid-cols-[1.5fr_.85fr_.85fr_.9fr_1fr_.8fr] bg-[#faf8fd] px-4 py-3 text-[9px] font-black uppercase tracking-[.08em] text-[#7f768f]"><span>Product</span><span>Old cost</span><span>New cost</span><span>Store price</span><span>Stock</span><span>Status</span></div>
      {rows.map(r=><div key={r[0]} className="grid grid-cols-[1.5fr_.85fr_.85fr_.9fr_1fr_.8fr] items-center border-t border-[#eeeaf4] px-4 py-3.5 text-[11px]"><span className="font-bold">{r[0]}</span><span>{r[1]}</span><span className={r[1]!==r[2]?'font-bold text-[#a76416]':''}>{r[2]}</span><span>{r[3]}</span><span><span className={r[4]==='In Stock'?'status good':r[4]==='Low Stock'?'status warn':'status bad'}>{r[4]}</span></span><span className="font-semibold">{r[5]}</span></div>)}
    </div>

    <div className="grid gap-3 p-4 md:hidden">{rows.map(r=><div key={r[0]} className="rounded-xl border border-[#e8e3ef] p-3"><div className="flex items-start justify-between gap-3"><b className="text-sm">{r[0]}</b><span className={r[4]==='In Stock'?'status good':r[4]==='Low Stock'?'status warn':'status bad'}>{r[4]}</span></div><div className="mt-3 grid grid-cols-3 gap-2 text-[10px]"><div><span className="text-[#8a8295]">Old</span><b className="mt-1 block">{r[1]}</b></div><div><span className="text-[#8a8295]">New</span><b className="mt-1 block">{r[2]}</b></div><div><span className="text-[#8a8295]">Store</span><b className="mt-1 block">{r[3]}</b></div></div></div>)}</div>
  </div>
}

export function SheetPreview(){
  const rows=[
    ['Sep 18','#ADP-1284','Wireless Charger','$39.99','$18.40','$5.20','$16.39','Completed'],
    ['Sep 18','#ADP-1283','Portable Blender','$44.99','$22.50','$6.79','$15.70','Processing'],
    ['Sep 17','#ADP-1282','Smart Lamp','$31.99','$14.20','$5.58','$12.21','Completed'],
  ];
  const flow=[
    ['New order',ShoppingBag],
    ['Calculate cost + fees',Tags],
    ['Calculate profit',BarChart3],
    ['Update sheet',FileSpreadsheet],
  ];

  return <div className="product-frame overflow-hidden">
    <div className="border-b border-[#e5eee6] bg-[#f6fbf7] px-4 py-4 sm:px-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-2 text-sm font-extrabold"><FileSpreadsheet size={18} className="text-[#218a49]"/> Orders & Profit Sheet <span className="status good ml-2">Synced</span></div>
        <div className="flex flex-wrap items-center gap-2">{flow.map(([label,Icon]:any,i)=><div key={label} className="flex items-center gap-2"><span className="inline-flex items-center gap-2 rounded-lg border border-[#ded5eb] bg-white px-2.5 py-2 text-[10px] font-bold"><Icon size={13} className="text-[#6d28d9]"/>{label}</span>{i<flow.length-1&&<ArrowRight size={13} className="hidden text-[#a08dbb] sm:block"/>}</div>)}</div>
      </div>
    </div>

    <div className="hidden md:block">
      <div className="grid grid-cols-[.72fr_.92fr_1.65fr_.75fr_.75fr_.7fr_.8fr_.95fr] bg-[#faf8fd] px-4 py-3 text-[9px] font-black uppercase tracking-[.07em] text-[#7f768f]">
        {['Date','Order','Product','Sale','Cost','Fees','Profit','Status'].map(h=><span key={h}>{h}</span>)}
      </div>
      {rows.map(r=><div key={r[1]} className="grid grid-cols-[.72fr_.92fr_1.65fr_.75fr_.75fr_.7fr_.8fr_.95fr] items-center border-t border-[#eeeaf4] px-4 py-4 text-[11px]">
        {r.map((c,i)=><span key={i} className={i===6?'font-extrabold text-[#137b66]':i===2?'font-semibold':''}>{i===7?<span className={c==='Completed'?'status good':'status neutral'}>{c}</span>:c}</span>)}
      </div>)}
    </div>

    <div className="grid gap-3 p-4 md:hidden">{rows.map(r=><div key={r[1]} className="rounded-xl border border-[#e8e3ef] p-3"><div className="flex items-start justify-between gap-3"><div><b className="text-sm">{r[2]}</b><div className="mt-1 text-[10px] text-[#81798e]">{r[0]} · {r[1]}</div></div><span className={r[7]==='Completed'?'status good':'status neutral'}>{r[7]}</span></div><div className="mt-3 grid grid-cols-4 gap-2 border-t border-[#eeeaf4] pt-3 text-[10px]"><div><span className="text-[#8a8295]">Sale</span><b className="mt-1 block">{r[3]}</b></div><div><span className="text-[#8a8295]">Cost</span><b className="mt-1 block">{r[4]}</b></div><div><span className="text-[#8a8295]">Fees</span><b className="mt-1 block">{r[5]}</b></div><div><span className="text-[#8a8295]">Profit</span><b className="mt-1 block text-[#137b66]">{r[6]}</b></div></div></div>)}</div>
  </div>
}

export function Workflow(){
  const steps=[
    ['Hunt',PackageSearch],
    ['List',ClipboardList],
    ['Monitor',RefreshCcw],
    ['Orders',ShoppingBag],
    ['Sheets',FileSpreadsheet],
    ['Profit',BarChart3],
  ];
  return <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center md:gap-2">
    {steps.map(([label,Icon]:any,i)=><div key={label} className="contents">
      <div className="flex min-h-[112px] min-w-0 flex-1 flex-col items-center justify-center rounded-[14px] border border-[#e4dbf0] bg-white px-3 text-center">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f1eaff] text-[#6d28d9]"><Icon size={19}/></span>
        <span className="mt-3 text-[12px] font-extrabold">{label}</span>
      </div>
      {i<steps.length-1&&<div className="flex h-7 shrink-0 items-center justify-center text-[#b9a6d8] md:w-7 md:flex-row"><span className="hidden h-px flex-1 bg-[#8c72b8]/35 md:block"/><ArrowRight size={18} strokeWidth={1.8} className="rotate-90 md:rotate-0"/><span className="hidden h-px flex-1 bg-[#8c72b8]/35 md:block"/></div>}
    </div>)}
  </div>
}

export function ReportsPreview(){
  const reports=[
    ['Sales Report','Orders, revenue and average order value'],
    ['Profit Report','Costs, fees, margin and net profit'],
    ['Orders Report','Order status and channel performance'],
    ['Product Performance','Revenue and profit by product'],
    ['Inventory Report','Stock state and monitoring activity'],
    ['Price Change Report','Supplier price movement over time'],
  ];
  return <div className="product-frame overflow-hidden">
    <div className="flex flex-col gap-3 border-b border-[#e9e4ef] bg-[#fbfaff] p-4 sm:flex-row sm:items-center sm:justify-between">
      <div><div className="text-sm font-extrabold">Reports workspace</div><div className="mt-1 text-xs text-[#80788d]">Reusable views for store operations</div></div>
      <div className="flex gap-2"><button className="outline-action">CSV</button><button className="outline-action">Spreadsheet</button><button className="outline-action">PDF</button></div>
    </div>
    <div className="grid gap-0 lg:grid-cols-[1.2fr_.8fr]">
      <div className="grid sm:grid-cols-2">{reports.map(([title,desc],i)=><div key={title} className="border-b border-r border-[#eeeaf4] p-4 sm:p-5">
        <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#f2ecff] text-[#6d28d9]"><TrendingUp size={16}/></span><div className="text-sm font-extrabold">{title}</div></div>
        <div className="mt-3 text-[11px] leading-5 text-[#81798e]">{desc}</div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#f0ebf6]"><div className="h-full rounded-full bg-[#8b3dff]" style={{width:String(44+i*7)+'%'}}/></div>
      </div>)}</div>
      <div className="p-5">
        <div className="text-[10px] font-black uppercase tracking-[.12em] text-[#81788d]">Report summary</div>
        <div className="mt-4 grid grid-cols-2 gap-3">{[['Sales','$9.0K'],['Profit','$2.2K'],['Orders','174'],['Margin','24.7%']].map(([l,v])=><div key={l} className="rounded-xl border border-[#e8e3ef] p-3"><div className="text-[9px] text-[#8a8295]">{l}</div><div className="mt-1 text-lg font-extrabold">{v}</div></div>)}</div>
        <div className="mt-4 rounded-xl border border-[#e8e3ef] p-4">
          <div className="text-xs font-bold">Weekly performance</div>
          <div className="mt-4 flex h-[110px] items-end gap-2">{[42,68,54,80,72,92,84].map((h,i)=><div key={i} className="flex-1 rounded-t-md bg-[#7a36e3]" style={{height:String(h)+'%',opacity:.38+i*.07}} />)}</div>
        </div>
      </div>
    </div>
  </div>
}

export function ImageStudioPreview(){
  const before='https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=82';
  const after='https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=82';

  return <div className="product-frame overflow-hidden">
    <div className="border-b border-[#e9e4ef] bg-[#fbfaff] px-4 py-4">
      <div className="flex items-center gap-2 text-sm font-extrabold"><WandSparkles size={17} className="text-[#6d28d9]"/> Product Image Studio</div>
    </div>
    <div className="grid lg:grid-cols-[1.25fr_.75fr]">
      <div className="grid gap-3 border-b border-[#e9e4ef] p-4 sm:grid-cols-2 lg:border-b-0 lg:border-r sm:p-5">
        <figure className="overflow-hidden rounded-xl border border-[#e8e2ef] bg-white">
          <img src={before} alt="Product photo before editing" className="h-[245px] w-full object-cover" loading="lazy"/>
          <figcaption className="flex items-center justify-between px-3 py-2.5 text-[11px]"><b>Before</b><span className="text-[#8a8295]">Original product photo</span></figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-[#d8caeb] bg-white">
          <img src={after} alt="Clean product photo after editing" className="h-[245px] w-full object-cover" loading="lazy"/>
          <figcaption className="flex items-center justify-between px-3 py-2.5 text-[11px]"><b className="text-[#6d28d9]">After</b><span className="text-[#8a8295]">Marketplace-ready</span></figcaption>
        </figure>
      </div>
      <div className="p-5">
        <div className="text-[10px] font-black uppercase tracking-[.12em] text-[#81788d]">Quick tools</div>
        <div className="mt-4 space-y-2">{[
          ['Remove background',Sparkles],
          ['Resize for marketplace',SlidersHorizontal],
          ['Create clean product scene',WandSparkles],
          ['Export optimized image',FileImage],
        ].map(([label,Icon]:any)=><button key={label} className="outline-tool"><span className="grid h-8 w-8 place-items-center rounded-lg bg-[#f3edff] text-[#6d28d9]"><Icon size={15}/></span>{label}<ArrowRight size={14} className="ml-auto text-[#9b8bab]"/></button>)}</div>
      </div>
    </div>
  </div>
}

export function ProductDashboardPreview(){
  const products=[
    ['Wireless charger','SKU-1042','$18.40','$39.99','In Stock','40.9%'],
    ['Portable blender','SKU-1039','$22.50','$44.99','Low Stock','34.9%'],
    ['Smart lamp','SKU-1031','$14.20','$31.99','In Stock','38.2%'],
    ['Mini projector','SKU-1028','$46.80','$89.99','In Stock','36.4%'],
    ['Desk organizer','SKU-1022','$11.70','$27.99','Out of Stock','31.6%'],
  ];
  return <div className="product-frame overflow-hidden">
    <div className="flex flex-col gap-3 border-b border-[#e9e4ef] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <div><div className="text-[10px] font-bold uppercase tracking-[.12em] text-[#8b8296]">Products</div><div className="mt-1 text-base font-extrabold">Product management</div></div>
      <div className="flex gap-2"><button className="outline-action"><SlidersHorizontal size={14}/>Filters</button><button className="btn-primary min-h-[36px] px-3 text-[11px]">Add product</button></div>
    </div>
    <div className="grid border-b border-[#eeeaf4] sm:grid-cols-4">{[['Active','1,248'],['Monitored','128'],['Price changes','12'],['Low stock','5']].map(([l,v])=><div key={l} className="border-r border-[#eeeaf4] p-4 last:border-r-0"><div className="text-[9px] font-bold uppercase tracking-[.08em] text-[#8a8295]">{l}</div><div className="mt-1 text-xl font-extrabold">{v}</div></div>)}</div>
    <div className="hidden md:block"><div className="grid grid-cols-[1.5fr_.9fr_.85fr_1fr_1fr_.75fr] bg-[#faf8fd] px-4 py-3 text-[9px] font-black uppercase tracking-[.08em] text-[#7f768f]">{['Product','SKU','Cost','Selling price','Stock','Margin'].map(h=><span key={h}>{h}</span>)}</div>{products.map(r=><div key={r[1]} className="grid grid-cols-[1.5fr_.9fr_.85fr_1fr_1fr_.75fr] items-center border-t border-[#eeeaf4] px-4 py-3.5 text-[11px]"><span className="font-bold">{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span><span>{r[3]}</span><span><span className={r[4]==='In Stock'?'status good':r[4]==='Low Stock'?'status warn':'status bad'}>{r[4]}</span></span><span className="font-extrabold text-[#6d28d9]">{r[5]}</span></div>)}</div>
    <div className="grid gap-3 p-4 md:hidden">{products.map(r=><div key={r[1]} className="rounded-xl border border-[#e8e3ef] p-3"><div className="flex items-start justify-between gap-3"><div><b>{r[0]}</b><div className="mt-1 text-[10px] text-[#8a8295]">{r[1]}</div></div><span className={r[4]==='In Stock'?'status good':r[4]==='Low Stock'?'status warn':'status bad'}>{r[4]}</span></div><div className="mt-3 grid grid-cols-3 gap-2 text-[10px]"><div><span className="text-[#8a8295]">Cost</span><b className="mt-1 block">{r[2]}</b></div><div><span className="text-[#8a8295]">Sell</span><b className="mt-1 block">{r[3]}</b></div><div><span className="text-[#8a8295]">Margin</span><b className="mt-1 block text-[#6d28d9]">{r[5]}</b></div></div></div>)}</div>
  </div>
}
