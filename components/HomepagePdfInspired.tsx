import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  Boxes,
  CalendarDays,
  Check,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Factory,
  FileSpreadsheet,
  Globe2,
  Headphones,
  Headset,
  ListChecks,
  Package,
  PackageCheck,
  PackageSearch,
  RefreshCcw,
  RotateCcw,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Tags,
  Truck,
  Users,
  Wallet,
  WandSparkles,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ProductResearchShowcase from './ProductResearchShowcase';
import WalletPaymentsShowcase from './WalletPaymentsShowcase';
import Pricing from './Pricing';
import Faq from './Faq';

const brandLogo = (name: string) => `https://img.icons8.com/color/96/${name}.png`;

const marketplaces = [
  ['eBay', 'ebay'],
  ['AliExpress', 'aliexpress'],
  ['Etsy', 'etsy'],
  ['Amazon', 'amazon'],
] as const;

function IconTile({ Icon, tone = '#6d28d9', soft = '#f3edff', size = 22 }: { Icon: LucideIcon; tone?: string; soft?: string; size?: number }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[13px] border border-black/[.04]" style={{ color: tone, background: soft }}>
      <Icon size={size} strokeWidth={2.25} />
    </span>
  );
}

function SectionIntro({ eyebrow, title, text, center = true }: { eyebrow: string; title: React.ReactNode; text: string; center?: boolean }) {
  return (
    <div className={center ? 'mx-auto max-w-[900px] text-center' : 'max-w-[760px]'}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="mt-4 text-[32px] font-[880] leading-[1.04] tracking-[-.045em] text-[#171230] sm:text-[42px] lg:text-[46px]">{title}</h2>
      <p className={`muted mt-4 text-[14px] leading-7 sm:text-[15px] ${center ? 'mx-auto max-w-[760px]' : 'max-w-[680px]'}`}>{text}</p>
    </div>
  );
}

function MarketplaceRow() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {marketplaces.map(([label, icon]) => (
        <div key={label} className="flex min-h-[62px] items-center justify-center gap-2 rounded-[13px] border border-[#e8e0f1] bg-white px-3">
          <img src={brandLogo(icon)} alt="" className="h-8 w-8 object-contain" loading="lazy" />
          <span className="text-[10px] font-extrabold text-[#2b2340]">{label}</span>
        </div>
      ))}
    </div>
  );
}

function HeroSection() {
  const chips = [
    [Search, 'Product Research', 'Find winning products', '#6d28d9', '#f3edff'],
    [ShoppingCart, 'Auto Orders', 'Process orders faster', '#1689f5', '#eef7ff'],
    [BarChart3, 'Stock & Prices', 'Stay competitive 24/7', '#16a36a', '#ecfbf3'],
    [WandSparkles, 'AI Listing Content', 'Create cleaner listings', '#f22eb7', '#fff0f7'],
  ] as const;

  return (
    <section className="relative overflow-hidden border-b border-[#ece6f5] bg-[radial-gradient(circle_at_82%_10%,#efe5ff_0,transparent_32%),linear-gradient(180deg,#ffffff_0%,#faf7ff_100%)]">
      <div className="container-site grid min-h-[720px] items-center gap-11 py-14 lg:grid-cols-[.82fr_1.18fr] lg:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dfd2f3] bg-[#f7f1ff] px-4 py-2 text-[10px] font-black uppercase tracking-[.11em] text-[#6d28d9]">
            <Zap size={13} /> The All-In-One eBay / Dropshipping Automation Tool
          </div>
          <h1 className="mt-6 max-w-[630px] text-[46px] font-[900] leading-[.96] tracking-[-.06em] text-[#15102a] sm:text-[58px] lg:text-[68px]">
            Automate Your <span className="gradient-text">eBay Business.</span>
          </h1>
          <p className="muted mt-6 max-w-[610px] text-[16px] leading-7 sm:text-[17px]">
            Find winning products, create eBay listings, process orders automatically, track shipments, monitor stock and prices, and grow your business from one powerful platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/signup" className="btn-primary min-h-[50px] px-6 text-sm">Start Free Trial <ArrowRight size={16} /></Link>
            <a href="#everything" className="btn-secondary min-h-[50px] px-6 text-sm">See How It Works</a>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-[11px] font-bold text-[#665e73]">
            {['No credit card required', 'Easy setup', '24/7 support'].map((item) => (
              <span key={item} className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-[#efe8ff] text-[#6d28d9]"><Check size={11}/></span>{item}</span>
            ))}
          </div>
        </div>

        <div className="relative min-w-0 lg:pl-4">
          <div className="grid gap-2 sm:grid-cols-2 lg:absolute lg:-top-8 lg:left-2 lg:right-0 lg:z-10 lg:grid-cols-2">
            {chips.map(([Icon, title, text, tone, soft]) => (
              <div key={title} className="flex items-center gap-3 rounded-[16px] border border-[#e4d9f1] bg-white/95 px-3 py-2.5 backdrop-blur-sm">
                <IconTile Icon={Icon} tone={tone} soft={soft} size={20}/>
                <div><div className="text-[10px] font-extrabold text-[#171230]">{title}</div><div className="mt-0.5 text-[8px] text-[#756d82]">{text}</div></div>
              </div>
            ))}
          </div>
          <div className="mt-4 overflow-hidden rounded-[28px] border border-[#e4d8f2] bg-white p-2 lg:mt-10">
            <Image src="/hero-banner-right.webp" alt="AutoDropshipPrime dashboard preview" width={1200} height={900} priority className="h-auto w-full object-contain" />
          </div>
        </div>
      </div>

      <div className="border-t border-[#ece6f5] bg-white/90">
        <div className="container-site grid gap-3 py-5 sm:grid-cols-3 lg:grid-cols-6">
          {[
            ['eBay', 'ebay', 'List & sell'], ['AliExpress', 'aliexpress', 'Source & order'], ['Etsy', 'etsy', 'Import products'], ['Amazon', 'amazon', 'Import products'], ['Shopify', 'shopify', 'Coming soon'], ['Wix', 'wix', 'Coming soon'],
          ].map(([label, icon, note]) => (
            <div key={label} className="flex min-h-[58px] items-center justify-center gap-2 rounded-[13px] border border-[#eee7f4] bg-[#fcfbff] px-3">
              <img src={brandLogo(icon)} alt="" className="h-7 w-7 object-contain" loading="lazy" />
              <div><div className="text-[10px] font-extrabold">{label}</div><div className="text-[7px] text-[#837a90]">{note}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BulkImportSection() {
  const steps = [
    { n:'01', title:'Import Products', text:'Import products from your favorite stores with one clean workflow.', Icon:PackageSearch, tone:'#6d28d9', soft:'#f3edff' },
    { n:'02', title:'Manage Variations', text:'Import sizes, colors, styles and other useful variation details.', Icon:Settings2, tone:'#1689f5', soft:'#eef7ff' },
    { n:'03', title:'Set Price, Profit & Stock', text:'Review cost, margin, stock and monitoring options before listing.', Icon:Tags, tone:'#ff6b14', soft:'#fff4e9' },
    { n:'04', title:'Schedule Listings', text:'Choose the day and time your listing should go live.', Icon:CalendarDays, tone:'#f22eb7', soft:'#fff0f7' },
  ];
  return (
    <section className="section border-y border-[#eee8f4] bg-[linear-gradient(180deg,#fbf9ff,#ffffff)]">
      <div className="container-site">
        <SectionIntro eyebrow="From any store to your eBay store" title={<>Bulk Import & <span className="gradient-text">Schedule Listings</span></>} text="Import products from Amazon, eBay, AliExpress, Etsy and more, customize variations, set profit margin, manage price and stock, and schedule listings up to 30 days in advance." />
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="flex min-h-[360px] flex-col rounded-[22px] border border-[#e5dcf0] bg-white p-5">
              <div className="flex items-start gap-3"><span className="grid h-10 w-10 place-items-center rounded-[11px] bg-[linear-gradient(135deg,#6d28d9,#9b2cff)] text-[12px] font-black text-white">{step.n}</span><div className="min-w-0 flex-1"><h3 className="text-[15px] font-[850] leading-5">{step.title}</h3><p className="mt-1 text-[10px] leading-5 text-[#716a7e]">{step.text}</p></div><IconTile Icon={step.Icon} tone={step.tone} soft={step.soft}/></div>
              <div className="mt-5 flex flex-1 flex-col rounded-[16px] border border-[#ebe4f2] bg-[#fbf9ff] p-3.5">
                {index === 0 && <MarketplaceRow/>}
                {index === 1 && <><img src="/placeholders/product-selection.svg" alt="Product variation placeholder" className="h-[170px] w-full rounded-[12px] border border-[#e8e0f1] bg-white object-cover"/><div className="mt-3 grid grid-cols-4 gap-2">{['Black','Blue','Pink','White'].map((x,i)=><span key={x} className="rounded-lg border border-[#e2d8ef] bg-white px-2 py-2 text-center text-[8px] font-bold" style={{color:['#171230','#2563eb','#e74b96','#766d82'][i]}}>{x}</span>)}</div></>}
                {index === 2 && <><div className="grid grid-cols-3 gap-2">{[['Cost','$20.00'],['Profit','$6.00'],['Price','$26.00']].map(([a,b])=><div key={a} className="rounded-[11px] border border-[#e8e0f1] bg-white p-3 text-center"><div className="text-[7px] uppercase text-[#81788d]">{a}</div><div className="mt-1 text-[13px] font-black">{b}</div></div>)}</div><div className="mt-3 space-y-2">{['Auto Price Monitoring','Auto Stock Monitoring','Sync with Supplier'].map(x=><div key={x} className="flex items-center justify-between rounded-[10px] border border-[#e8e0f1] bg-white px-3 py-2 text-[9px] font-bold"><span>{x}</span><span className="h-5 w-9 rounded-full bg-[#7c3aed] p-1"><span className="ml-auto block h-3 w-3 rounded-full bg-white"/></span></div>)}</div></>}
                {index === 3 && <><div className="grid grid-cols-7 gap-1">{Array.from({length:28}).map((_,i)=><span key={i} className={`grid h-7 place-items-center rounded-md text-[8px] font-bold ${[4,9,15,21,26].includes(i)?'bg-[#7c3aed] text-white':'bg-white text-[#756d80]'}`}>{i+1}</span>)}</div><div className="mt-3 rounded-[11px] border border-[#e8e0f1] bg-white px-3 py-3 text-[9px]"><b>Schedule for</b><span className="float-right rounded-md bg-[#efe7ff] px-2 py-1 font-black text-[#6d28d9]">30 Days</span></div></>}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {[[Boxes,'Bulk import'],[Settings2,'Custom settings'],[CalendarDays,'Schedule listings'],[RefreshCcw,'Auto price monitoring'],[PackageCheck,'Auto stock monitoring'],[Zap,'Save time']].map(([Icon,title]:any,i)=><div key={title} className="flex items-center gap-2 rounded-[13px] border border-[#ebe3f3] bg-white px-3 py-3"><IconTile Icon={Icon} size={18} tone={['#7c3aed','#10b981','#2563eb','#ff7a1a','#7c3aed','#e84d91'][i]} soft={['#f3edff','#ecfbf3','#eef7ff','#fff3e8','#f3edff','#fff0f7'][i]}/><span className="text-[9px] font-extrabold">{title}</span></div>)}
        </div>
      </div>
    </section>
  );
}

function OrdersSheetsReturnsSection() {
  const flow = [
    ['1','eBay Order Received','Customer places an order',Store,'#2563eb','#eef5ff'],
    ['2','Auto Process Order','Prepare details automatically',Settings2,'#7c3aed','#f3edff'],
    ['3','Auto Order on AliExpress','Send order to supplier',ShoppingCart,'#ff6b14','#fff2e8'],
    ['4','Tracking Updates','Push tracking to eBay',Truck,'#1689f5','#eef7ff'],
    ['5','Google Sheets Sync','Keep records updated',FileSpreadsheet,'#16a36a','#ecfbf3'],
    ['6','Returns & Refunds','Track return status',RotateCcw,'#f22eb7','#fff0f7'],
  ] as const;
  return (
    <section className="section bg-white">
      <div className="container-site">
        <SectionIntro eyebrow="Smart automation, real-time updates" title={<>Real-Time <span className="text-[#16a36a]">Google Sheets</span>, Auto <span className="text-[#ff6b14]">AliExpress</span> Orders & Easy Returns</>} text="Keep order, tracking, stock, price and refund records organized in real time while repetitive order-processing work stays connected." />
        <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-6">
          {flow.map(([n,title,text,Icon,tone,soft]) => <div key={title} className="relative rounded-[18px] border border-[#e8e0f1] bg-[#fcfbff] p-4"><div className="flex items-start justify-between gap-3"><span className="grid h-8 w-8 place-items-center rounded-[9px] bg-[#7c3aed] text-[11px] font-black text-white">{n}</span><IconTile Icon={Icon} tone={tone} soft={soft} size={19}/></div><div className="mt-4 text-[11px] font-extrabold">{title}</div><div className="mt-1 text-[8px] leading-4 text-[#766f80]">{text}</div></div>)}
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="rounded-[20px] border border-[#e2dbea] bg-[#fafffc] p-5"><div className="flex items-center gap-3"><IconTile Icon={FileSpreadsheet} tone="#159455" soft="#eafaf1"/><div><h3 className="text-[15px] font-extrabold">Real-Time Google Sheets Update</h3><p className="mt-1 text-[9px] text-[#716a7e]">Orders, stock and profit data stay organized.</p></div></div><div className="mt-4 overflow-hidden rounded-[12px] border border-[#dcebe2] bg-white"><div className="grid grid-cols-4 bg-[#effaf4] px-3 py-2 text-[7px] font-black"><span>Order</span><span>Product</span><span>Status</span><span>Tracking</span></div>{[['#1001','Headphones','Shipped','LP12345'],['#1002','Watch','Processing','LP67890'],['#1003','Sneakers','Delivered','LP54321']].map(r=><div key={r[0]} className="grid grid-cols-4 border-t border-[#edf1ee] px-3 py-2 text-[7px] text-[#5f5868]">{r.map((c,i)=><span key={c} className={i===2?'font-bold text-[#159455]':''}>{c}</span>)}</div>)}</div></div>
          <div className="rounded-[20px] border border-[#e6dff0] bg-[#fcfaff] p-5"><div className="flex items-center gap-3"><IconTile Icon={ShoppingCart} tone="#ff6b14" soft="#fff3e8"/><div><h3 className="text-[15px] font-extrabold">Auto AliExpress Orders Process</h3><p className="mt-1 text-[9px] text-[#716a7e]">Supplier order workflow without repetitive manual steps.</p></div></div><img src="/placeholders/product-selection.svg" alt="AliExpress order placeholder" className="mt-4 h-[150px] w-full rounded-[14px] border border-[#e7e0ef] object-cover"/><div className="mt-3 grid gap-2">{['Auto select supplier','Auto fill customer details','Tracking connected'].map(x=><div key={x} className="flex items-center gap-2 text-[9px] font-bold"><span className="grid h-4 w-4 place-items-center rounded-full bg-[#e6f8ee] text-[#159455]"><Check size={9}/></span>{x}</div>)}</div></div>
          <div className="rounded-[20px] border border-[#f0dce8] bg-[#fffafd] p-5"><div className="flex items-center gap-3"><IconTile Icon={RotateCcw} tone="#f22769" soft="#fff0f6"/><div><h3 className="text-[15px] font-extrabold">Returns & Refund Management</h3><p className="mt-1 text-[9px] text-[#716a7e]">Keep return requests, tracking and refunds visible.</p></div></div><div className="mt-5 space-y-2">{[['Return Requested',Bell,'#f22769'],['Return Tracking',Truck,'#2563eb'],['Refund Processed',CircleDollarSign,'#159455'],['Updated in Google Sheets',FileSpreadsheet,'#159455']].map(([title,Icon,tone]:any)=><div key={title} className="flex items-center gap-3 rounded-[11px] border border-[#eee5ef] bg-white px-3 py-3"><Icon size={16} color={tone}/><span className="text-[9px] font-extrabold">{title}</span><span className="ml-auto h-2 w-2 rounded-full" style={{background:tone}}/></div>)}</div></div>
        </div>
      </div>
    </section>
  );
}

function ProductDiscoverySection() {
  return (
    <section className="section border-y border-[#eee8f4] bg-[linear-gradient(180deg,#fbf9ff,#ffffff)]">
      <div className="container-site">
        <SectionIntro eyebrow="Find winning products or let our experts do it for you" title={<>Discover Profitable Products or <span className="gradient-text">Get Hand-Picked Selections</span></>} text="Use product research tools to find trending and high-profit products, or use the sourcing workflow when you want a more guided product-selection process." />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.18fr_.82fr]">
          <div className="rounded-[22px] border border-[#e3daef] bg-white p-5"><div className="flex items-center gap-3"><IconTile Icon={Search} tone="#6d28d9" soft="#f3edff"/><div><h3 className="text-[17px] font-[850]">Advanced Product Research</h3><p className="mt-1 text-[10px] text-[#716a7e]">Filter trending, high-demand and higher-margin product opportunities.</p></div></div><div className="mt-4"><MarketplaceRow/></div><div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{['Wireless Headphones','Smart Watch','Running Shoes','Women Handbag'].map((name,i)=><div key={name} className="rounded-[14px] border border-[#e8e0f1] bg-[#fbf9ff] p-3"><div className="grid h-[110px] place-items-center rounded-[10px] border border-[#ece4f3] bg-white"><PackageSearch size={36} color={['#6d28d9','#2563eb','#ff6b14','#e84d91'][i]}/></div><div className="mt-3 text-[9px] font-extrabold">{name}</div><div className="mt-1 text-[8px] text-[#776f82]">Cost ${[18.5,22,34,25][i].toFixed(2)}</div><div className="mt-1 text-[10px] font-black text-[#159455]">Profit ${[14.69,17.99,19.99,22.5][i].toFixed(2)}</div><button className="mt-3 w-full rounded-lg bg-[#6d28d9] px-2 py-2 text-[8px] font-extrabold text-white">Import to eBay</button></div>)}</div></div>
          <div className="rounded-[22px] border border-[#e3daef] bg-white p-5"><div className="flex items-center gap-3"><IconTile Icon={ShieldCheck} tone="#159455" soft="#eafaf1"/><div><h3 className="text-[17px] font-[850]">Hand-Picked Products & Sourcing Service</h3><p className="mt-1 text-[10px] text-[#716a7e]">Get curated product ideas or submit a sourcing request.</p></div></div><img src="/placeholders/product-selection.svg" alt="Hand-picked products placeholder" className="mt-4 h-[220px] w-full rounded-[16px] border border-[#e7e0ef] object-cover"/><div className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">{[['1','You Request'],['2','We Research'],['3','You Get Results']].map(([n,t])=><div key={n} className="rounded-[12px] border border-[#ebe4f2] bg-[#faf8ff] p-3"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#7c3aed] text-[9px] font-black text-white">{n}</span><div className="mt-2 text-[9px] font-extrabold">{t}</div></div>)}</div><Link href="/contact" className="btn-primary mt-4 w-full text-sm">Submit Sourcing Request <ArrowRight size={14}/></Link></div>
        </div>
      </div>
    </section>
  );
}

function SourcingServiceSection() {
  const steps = [
    ['1','Submit Your Request',ListChecks,'Share product name, details and target requirements.','#7c3aed','#f3edff'],
    ['2','Our Team Sources',Users,'Search trusted suppliers and factories.','#2563eb','#eef5ff'],
    ['3','Get the Best Options',Search,'Compare supplier, MOQ and pricing options.','#10b981','#ecfbf3'],
    ['4','Samples & Confirmation',PackageCheck,'Review samples and quality before scaling.','#ff6b14','#fff3e8'],
    ['5','Place Bulk Order',Boxes,'Move forward with the approved supplier.','#f22769','#fff0f6'],
  ] as const;
  return (
    <section className="section bg-white">
      <div className="container-site">
        <div className="grid items-center gap-8 lg:grid-cols-[.95fr_1.05fr]">
          <div><div className="eyebrow">Sourcing request service</div><h2 className="mt-4 text-[36px] font-[900] leading-[1.02] tracking-[-.05em] sm:text-[46px]">Can’t Find the Product? <span className="gradient-text">We Source It for You!</span></h2><p className="muted mt-4 max-w-[680px] text-[15px] leading-7">Submit a product request and let the sourcing workflow search suppliers, factories and wholesale options that fit the target criteria.</p><div className="mt-6 grid gap-3 sm:grid-cols-3">{[['Any product','Any niche'],['Direct factory','Sourcing'],['Verified supplier','Network']].map(([a,b])=><div key={a} className="rounded-[14px] border border-[#e7e0ef] bg-[#fbf9ff] p-4"><div className="text-[10px] font-black text-[#6d28d9]">{a}</div><div className="mt-1 text-[9px] text-[#766f80]">{b}</div></div>)}</div></div>
          <img src="/placeholders/sourcing-team.svg" alt="Sourcing team placeholder" className="w-full rounded-[24px] border border-[#e2d9ef] bg-[#faf8ff]"/>
        </div>
        <div className="mt-9 grid gap-3 md:grid-cols-2 xl:grid-cols-5">{steps.map(([n,title,Icon,text,tone,soft])=><div key={title} className="rounded-[18px] border border-[#e7e0ef] bg-[#fcfbff] p-4"><div className="flex items-center justify-between"><span className="grid h-8 w-8 place-items-center rounded-[9px] bg-[#7c3aed] text-[10px] font-black text-white">{n}</span><IconTile Icon={Icon} tone={tone} soft={soft} size={18}/></div><h3 className="mt-4 text-[11px] font-extrabold">{title}</h3><p className="mt-1 text-[8px] leading-4 text-[#756e80]">{text}</p></div>)}</div>
        <div className="mt-4 flex flex-col gap-5 rounded-[22px] border border-[#5d21d8] bg-[linear-gradient(100deg,#32158c,#6d28d9_58%,#8b3dff)] px-5 py-6 text-white lg:flex-row lg:items-center lg:justify-between"><div className="flex items-center gap-4"><IconTile Icon={Globe2} tone="#6d28d9" soft="#ffffff"/><div><div className="text-[15px] font-extrabold">Source from Trusted Suppliers Worldwide</div><div className="mt-1 text-[9px] text-white/70">Compare supplier options across multiple sourcing regions and marketplaces.</div></div></div><Link href="/contact" className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-[10px] bg-white px-5 text-[10px] font-extrabold text-[#5d21d8]">Submit Sourcing Request <ArrowRight size={13}/></Link></div>
      </div>
    </section>
  );
}

function PriceStockSection() {
  const top = [
    [PackageSearch,'Supplier Stock Monitoring','Track supplier stock levels.','#6d28d9','#f3edff'],
    [Tags,'eBay Price Monitoring','Monitor competitive pricing.','#10b981','#ecfbf3'],
    [Bell,'Price-Change Alerts','Get instant change alerts.','#ff6b14','#fff3e8'],
    [Package,'Out-of-Stock Alerts','Spot unavailable products.','#f22769','#fff0f6'],
    [RefreshCcw,'Automatic Updates','Keep listing context current.','#1689f5','#eef7ff'],
  ] as const;
  return (
    <section className="section border-y border-[#eee8f4] bg-[linear-gradient(180deg,#fbf9ff,#ffffff)]">
      <div className="container-site">
        <SectionIntro eyebrow="Stay ahead, stay profitable" title={<>Price & Stock <span className="gradient-text">Intelligence</span></>} text="Automatically monitor supplier stock and eBay prices, get alerts on changes, and keep your listing decisions connected to current supplier information." />
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{top.map(([Icon,title,text,tone,soft])=><div key={title} className="rounded-[16px] border border-[#e7e0ef] bg-white p-4"><IconTile Icon={Icon} tone={tone} soft={soft}/><div className="mt-3 text-[10px] font-extrabold">{title}</div><div className="mt-1 text-[8px] leading-4 text-[#756e80]">{text}</div></div>)}</div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="rounded-[20px] border border-[#e5ddf0] bg-white p-5"><h3 className="text-[14px] font-extrabold">Supplier Stock Monitoring</h3><div className="mt-4 space-y-2">{[['Wireless Headphones','In Stock · 250','#16a36a'],['Smart Watch','Low stock · 3','#f59e0b'],['Sneakers','Out of stock','#e84b64'],['Women Handbag','Low stock · 5','#f59e0b']].map(([n,s,c])=><div key={n} className="flex items-center gap-3 rounded-[12px] border border-[#eee7f3] bg-[#fcfbff] p-3"><Package size={20} color={c}/><div className="min-w-0 flex-1"><div className="text-[9px] font-extrabold">{n}</div><div className="mt-0.5 text-[8px] font-bold" style={{color:c}}>{s}</div></div><span className="h-2.5 w-2.5 rounded-full" style={{background:c}}/></div>)}</div></div>
          <div className="rounded-[20px] border border-[#e5ddf0] bg-white p-5"><div className="flex items-center justify-between"><h3 className="text-[14px] font-extrabold">Automatic Price Monitoring</h3><span className="text-[8px] font-bold text-[#159455]">Live</span></div><div className="mt-5 h-[190px] rounded-[14px] border border-[#ebe3f2] bg-[#faf8ff] p-4"><svg viewBox="0 0 360 150" className="h-full w-full"><path d="M10 120 C55 80,80 95,120 62 S190 105,230 55 S300 78,350 30" fill="none" stroke="#7c3aed" strokeWidth="4"/><path d="M10 132 C55 108,95 118,140 86 S220 112,270 76 S320 89,350 65" fill="none" stroke="#0ea5e9" strokeWidth="4"/><line x1="10" x2="350" y1="138" y2="138" stroke="#ddd4e8"/><line x1="10" x2="10" y1="18" y2="138" stroke="#ddd4e8"/></svg></div><div className="mt-3 grid grid-cols-2 gap-2"><div className="rounded-[10px] bg-[#f3edff] p-3 text-[8px]">Supplier <b className="float-right text-[#7c3aed]">$18.50</b></div><div className="rounded-[10px] bg-[#eef7ff] p-3 text-[8px]">eBay <b className="float-right text-[#1689f5]">$32.99</b></div></div></div>
          <div className="rounded-[20px] border border-[#e5ddf0] bg-white p-5"><h3 className="text-[14px] font-extrabold">Smart Alerts & Automatic Updates</h3><div className="mt-4 space-y-2">{[['Price increased','From $29.99 to $34.99','#e84b64'],['Price decreased','From $39.99 to $34.99','#159455'],['Low stock alert','Supplier stock is running low','#f59e0b'],['Out of stock alert','Supplier listing unavailable','#e84b64']].map(([a,b,c])=><div key={a} className="rounded-[12px] border border-[#eee7f3] bg-[#fcfbff] p-3"><div className="flex items-center gap-2"><Bell size={14} color={c}/><b className="text-[9px]">{a}</b><span className="ml-auto text-[7px] font-black" style={{color:c}}>Alert</span></div><div className="mt-1 pl-6 text-[7px] text-[#7a7286]">{b}</div></div>)}</div></div>
        </div>
      </div>
    </section>
  );
}

function SupportSection() {
  const benefits = [
    [Zap,'Quick response','Fast and friendly support.','#6d28d9','#f3edff'],
    [Users,'Expert team','Friendly and professional.','#1689f5','#eef7ff'],
    [Clock3,'24/7 availability','Help when you need it.','#ff6b14','#fff3e8'],
    [ShieldCheck,'Support for all features','Orders, billing, sourcing and more.','#7c3aed','#f3edff'],
  ] as const;
  return (
    <section className="section border-y border-[#eee8f4] bg-[linear-gradient(180deg,#ffffff,#faf8ff)]">
      <div className="container-site">
        <div className="grid items-center gap-8 lg:grid-cols-[.85fr_1.3fr_.85fr]">
          <img src="/placeholders/customer-support.svg" alt="Customer support placeholder" className="w-full rounded-[24px] border border-[#e2d9ef] bg-white"/>
          <div className="text-center"><div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#e3d6f7] bg-[#f5efff] px-4 py-2 text-[10px] font-black uppercase tracking-[.11em] text-[#6d28d9]"><Headphones size={13}/>24/7 customer support</div><h2 className="mt-5 text-[38px] font-[900] leading-[1.02] tracking-[-.05em] sm:text-[48px]">Always Here to Help You <span className="gradient-text">24/7 Customer Support</span></h2><p className="muted mx-auto mt-4 max-w-[650px] text-[14px] leading-7">Get expert assistance anytime you need. Our support workflow can help with orders, technical issues, sourcing questions, billing and general product guidance.</p></div>
          <div className="rounded-[24px] border border-[#e2d8ef] bg-white p-5"><div className="grid h-[180px] place-items-center rounded-[18px] bg-[linear-gradient(145deg,#f3edff,#fff)]"><Bot size={84} color="#6d28d9"/><div className="sr-only">Support assistant placeholder</div></div><div className="mt-4 rounded-[12px] border border-[#e6dff0] bg-[#fbf9ff] p-3"><div className="text-[9px] font-black text-[#6d28d9]">Need help?</div><div className="mt-1 text-[8px] text-[#756d80]">We’re here across the product workflow.</div></div></div>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">{benefits.map(([Icon,title,text,tone,soft])=><div key={title} className="flex items-center gap-3 rounded-[15px] border border-[#e7e0ef] bg-white p-4"><IconTile Icon={Icon} tone={tone} soft={soft}/><div><div className="text-[10px] font-extrabold">{title}</div><div className="mt-1 text-[8px] leading-4 text-[#756d80]">{text}</div></div></div>)}</div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-site"><Pricing /></div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section border-y border-[#eee8f4] bg-[#faf8ff]">
      <div className="container-site">
        <SectionIntro eyebrow="Frequently asked questions" title="Questions Before You Get Started?" text="Find answers to the most common questions about plans, features, billing, support and product access." />
        <div className="mt-9"><Faq /></div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="section bg-white">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[28px] border border-[#4b22b5] bg-[linear-gradient(100deg,#211062,#5d21d8_58%,#8b3dff)] px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full border border-white/10"/><div className="relative"><div className="text-[10px] font-black uppercase tracking-[.13em] text-[#ddd0ff]">Ready to start your dropshipping journey?</div><h2 className="mt-3 text-[28px] font-[900] tracking-[-.04em] sm:text-[36px]">Start Automating Your Business Today.</h2><p className="mt-2 text-[11px] text-white/70">Start with the 3-day trial and explore the connected workflow.</p></div><Link href="/signup" className="relative mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[12px] bg-white px-6 text-[12px] font-extrabold text-[#5d21d8] lg:mt-0">Start 3-Day Trial for $1 <ArrowRight size={14}/></Link>
        </div>
      </div>
    </section>
  );
}

export default function HomepagePdfInspired() {
  return (
    <>
      <HeroSection />
      <div id="everything"><ProductResearchShowcase /></div>
      <BulkImportSection />
      <OrdersSheetsReturnsSection />
      <ProductDiscoverySection />
      <SourcingServiceSection />
      <PriceStockSection />
      <WalletPaymentsShowcase />
      <SupportSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
