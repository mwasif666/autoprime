import {
  ArrowRight,
  BarChart3,
  Check,
  ClipboardList,
  FileImage,
  FileSpreadsheet,
  ImagePlus,
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
    ['Wireless Charger','Supplier A','$18.40','$39.99','40.9%','In Stock'],
    ['Portable Blender','Supplier B','$22.50','$44.99','34.9%','Low Stock'],
    ['Smart Lamp','Supplier C','$14.20','$31.99','38.2%','In Stock'],
    ['Mini Projector','Supplier D','$46.80','$89.99','36.4%','In Stock'],
  ];
  return <div className="product-frame p-4 sm:p-5">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex flex-1 items-center gap-2 rounded-lg border border-[#e7e2ee] bg-white px-3 py-2.5 text-xs text-[#8a8295]"><Search size={14}/>Search products</div>
      <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-[#e7e2ee] px-3 text-xs font-bold text-[#625a70]"><SlidersHorizontal size={14}/>Filters</button>
    </div>
    <div className="mt-4 table-shell"><table><thead><tr>{['Product','Supplier','Source','Sell','Margin','Stock'].map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{rows.map(r=><tr key={r[0]}><td className="font-bold">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td className="font-bold text-[#6d28d9]">{r[4]}</td><td><span className={r[5]==='Low Stock'?'status warn':'status good'}>{r[5]}</span></td></tr>)}</tbody></table></div>
  </div>
}

export function ListingPreview(){
  return <div className="product-frame p-5">
    <div className="flex items-center justify-between border-b border-[#eeeaf4] pb-4">
      <div><div className="text-[10px] font-bold uppercase tracking-[.1em] text-[#81798e]">Listing editor</div><div className="mt-1 text-base font-extrabold">Portable mini blender</div></div>
      <span className="status neutral">Draft</span>
    </div>
    <div className="mt-5 grid gap-4 sm:grid-cols-[150px_1fr]">
      <div className="grid min-h-[175px] place-items-center rounded-xl border border-[#e9e3f1] bg-[linear-gradient(145deg,#f5efff,#fff6fb)]">
        <div className="grid h-20 w-20 place-items-center rounded-2xl border border-[#decdf4] bg-white text-[#6d28d9]"><FileImage size={32}/></div>
      </div>
      <div className="space-y-3">
        <label className="block"><span className="mb-1 block text-[10px] font-bold uppercase text-[#81798e]">Title</span><div className="rounded-lg border border-[#e7e2ee] px-3 py-2.5 text-sm font-semibold">Portable USB Rechargeable Blender</div></label>
        <label className="block"><span className="mb-1 block text-[10px] font-bold uppercase text-[#81798e]">Description</span><div className="min-h-[64px] rounded-lg border border-[#e7e2ee] px-3 py-2.5 text-xs leading-5 text-[#6f687b]">Compact personal blender with rechargeable battery and travel cup.</div></label>
        <div className="grid grid-cols-3 gap-2">{[['Cost','$22.50'],['Selling price','$44.99'],['Margin','34.9%']].map(([l,v])=><div key={l} className="rounded-lg border border-[#e7e2ee] p-2"><div className="text-[9px] uppercase text-[#8a8295]">{l}</div><div className="mt-1 text-xs font-extrabold">{v}</div></div>)}</div>
      </div>
    </div>
    <div className="mt-4 flex justify-end gap-2"><button className="btn-secondary min-h-[38px] px-4 text-xs">Save Draft</button><button className="btn-primary min-h-[38px] px-4 text-xs">Create Listing</button></div>
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
        {[
          ['Monitored','128'],
          ['Price changes','12'],
          ['Attention','5'],
        ].map(([label,value])=><div key={label} className="min-w-[92px] border-r border-[#ebe7f1] px-3 py-3 last:border-r-0 sm:py-4"><div className="text-[9px] font-bold uppercase tracking-[.08em] text-[#8a8295]">{label}</div><div className="mt-1 text-lg font-extrabold">{value}</div></div>)}
      </div>
    </div>
    <div className="table-shell rounded-none border-0"><table><thead><tr>{['Product','Old cost','New cost','Store price','Stock','Status'].map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{rows.map(r=><tr key={r[0]}><td className="font-bold">{r[0]}</td><td>{r[1]}</td><td className={r[1]!==r[2]?'font-bold text-[#a76416]':''}>{r[2]}</td><td>{r[3]}</td><td><span className={r[4]==='In Stock'?'status good':r[4]==='Low Stock'?'status warn':'status bad'}>{r[4]}</span></td><td className="font-semibold">{r[5]}</td></tr>)}</tbody></table></div>
  </div>
}

export function SheetPreview(){
  const rows=[
    ['Sep 18','#ADP-1284','Wireless Charger','$39.99','$18.40','$5.20','$16.39','40.9%','Completed'],
    ['Sep 18','#ADP-1283','Portable Blender','$44.99','$22.50','$6.79','$15.70','34.9%','Processing'],
    ['Sep 17','#ADP-1282','Smart Lamp','$31.99','$14.20','$5.58','$12.21','38.2%','Completed'],
  ];
  return <div className="grid gap-5 lg:grid-cols-[1.55fr_.75fr]">
    <div className="product-frame overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#e5eee6] bg-[#f5fbf6] px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-extrabold"><FileSpreadsheet size={17} className="text-[#218a49]"/> Orders & Profit Sheet</div><span className="status good">Synced</span>
      </div>
      <div className="table-shell rounded-none border-0"><table><thead><tr>{['Date','Order','Product','Sale','Cost','Fees','Profit','Margin','Status'].map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{rows.map(r=><tr key={r[1]}>{r.map((c,i)=><td key={i} className={i===6?'font-extrabold text-[#137b66]':''}>{c}</td>)}</tr>)}</tbody></table></div>
    </div>
    <div className="rounded-[18px] border border-[#e8e3ef] bg-white p-5">
      <div className="text-[10px] font-black uppercase tracking-[.12em] text-[#7d748a]">Automatic flow</div>
      {[
        ['New order',ShoppingBag],
        ['Calculate cost + fees',Tags],
        ['Calculate profit',BarChart3],
        ['Update sheet',FileSpreadsheet],
      ].map(([s,Icon]:any,i)=><div key={s} className="relative flex items-center gap-3 py-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#e5ddf1] bg-[#faf8ff] text-[#6d28d9]"><Icon size={16}/></span>
        <span className="text-sm font-bold">{s}</span>
        {i<3&&<span className="absolute left-[18px] top-[46px] h-4 border-l border-dashed border-[#beaee0]"/>}
      </div>)}
    </div>
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
  return <div className="grid gap-3 md:grid-cols-6">{steps.map(([label,Icon]:any,i)=><div key={label} className={i<steps.length-1?'flow-arrow':''}>
    <div className="flex min-h-[118px] flex-col items-center justify-center rounded-[14px] border border-[#e8e1f1] bg-white px-3 text-center">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f1eaff] text-[#6d28d9]"><Icon size={19}/></span>
      <span className="mt-3 text-[12px] font-extrabold">{label}</span>
    </div>
  </div>)}</div>
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
      <div className="flex gap-2"><button className="btn-secondary min-h-[34px] px-3 text-[11px]">CSV</button><button className="btn-secondary min-h-[34px] px-3 text-[11px]">Spreadsheet</button><button className="btn-secondary min-h-[34px] px-3 text-[11px]">PDF</button></div>
    </div>
    <div className="grid gap-0 lg:grid-cols-[1.2fr_.8fr]">
      <div className="grid sm:grid-cols-2">{reports.map(([title,desc],i)=><div key={title} className="border-b border-r border-[#eeeaf4] p-4 sm:p-5">
        <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#f2ecff] text-[#6d28d9]"><TrendingUp size={16}/></span><div className="text-sm font-extrabold">{title}</div></div>
        <div className="mt-3 text-[11px] leading-5 text-[#81798e]">{desc}</div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#f0ebf6]"><div className="h-full rounded-full bg-[#8b3dff]" style={{width:`${44+i*7}%`}}/></div>
      </div>)}</div>
      <div className="p-5">
        <div className="text-[10px] font-black uppercase tracking-[.12em] text-[#81788d]">Report summary</div>
        <div className="mt-4 grid grid-cols-2 gap-3">{[['Sales','$9.0K'],['Profit','$2.2K'],['Orders','174'],['Margin','24.7%']].map(([l,v])=><div key={l} className="rounded-xl border border-[#e8e3ef] p-3"><div className="text-[9px] text-[#8a8295]">{l}</div><div className="mt-1 text-lg font-extrabold">{v}</div></div>)}</div>
        <div className="mt-4 rounded-xl border border-[#e8e3ef] p-4">
          <div className="text-xs font-bold">Weekly performance</div>
          <div className="mt-4 flex h-[110px] items-end gap-2">{[42,68,54,80,72,92,84].map((h,i)=><div key={i} className="flex-1 rounded-t-md bg-[#7a36e3]" style={{height:`${h}%`,opacity:.38+i*.07}} />)}</div>
        </div>
      </div>
    </div>
  </div>
}

export function ImageStudioPreview(){
  return <div className="product-frame overflow-hidden">
    <div className="flex items-center justify-between border-b border-[#e9e4ef] bg-[#fbfaff] px-4 py-3">
      <div className="flex items-center gap-2 text-sm font-extrabold"><WandSparkles size={17} className="text-[#6d28d9]"/> Product Image Studio</div>
      <button className="btn-secondary min-h-[34px] px-3 text-[11px]"><ImagePlus size={14}/>Add image</button>
    </div>
    <div className="grid md:grid-cols-[1.15fr_.85fr]">
      <div className="grid min-h-[300px] place-items-center border-b border-[#e9e4ef] bg-[linear-gradient(145deg,#f5f1fb,#fff)] p-8 md:border-b-0 md:border-r">
        <div className="grid h-[210px] w-[210px] place-items-center rounded-[24px] border border-[#ddd3ea] bg-white">
          <div className="grid h-24 w-24 place-items-center rounded-[18px] bg-[#f1eaff] text-[#6d28d9]"><FileImage size={44}/></div>
        </div>
      </div>
      <div className="p-5">
        <div className="text-[10px] font-black uppercase tracking-[.12em] text-[#81788d]">Quick tools</div>
        <div className="mt-4 space-y-2">{[
          ['Remove background',Sparkles],
          ['Resize for marketplace',SlidersHorizontal],
          ['Create clean product scene',WandSparkles],
          ['Export optimized image',FileImage],
        ].map(([label,Icon]:any)=><button key={label} className="flex w-full items-center gap-3 rounded-xl border border-[#e8e3ef] bg-white px-3 py-3 text-left text-xs font-bold hover:bg-[#faf8ff]"><span className="grid h-8 w-8 place-items-center rounded-lg bg-[#f3edff] text-[#6d28d9]"><Icon size={15}/></span>{label}<ArrowRight size={14} className="ml-auto text-[#9b8bab]"/></button>)}</div>
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
      <div className="flex gap-2"><button className="btn-secondary min-h-[36px] px-3 text-[11px]"><SlidersHorizontal size={14}/>Filters</button><button className="btn-primary min-h-[36px] px-3 text-[11px]">Add product</button></div>
    </div>
    <div className="grid border-b border-[#eeeaf4] sm:grid-cols-4">{[['Active','1,248'],['Monitored','128'],['Price changes','12'],['Low stock','5']].map(([l,v])=><div key={l} className="border-r border-[#eeeaf4] p-4 last:border-r-0"><div className="text-[9px] font-bold uppercase tracking-[.08em] text-[#8a8295]">{l}</div><div className="mt-1 text-xl font-extrabold">{v}</div></div>)}</div>
    <div className="table-shell rounded-none border-0"><table><thead><tr>{['Product','SKU','Cost','Selling price','Stock','Margin'].map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{products.map(r=><tr key={r[1]}><td className="font-bold"><div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-lg bg-[#f1eaff] text-[#6d28d9]"><Tags size={14}/></span>{r[0]}</div></td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td><span className={r[4]==='In Stock'?'status good':r[4]==='Low Stock'?'status warn':'status bad'}>{r[4]}</span></td><td className="font-extrabold text-[#6d28d9]">{r[5]}</td></tr>)}</tbody></table></div>
  </div>
}
