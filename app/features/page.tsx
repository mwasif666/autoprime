import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart3, Boxes, FileSpreadsheet, PackageSearch, RefreshCcw, Tags } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import DashboardPreview from '@/components/DashboardPreview';
import { allFeatures } from '@/data/site';
import { Workflow } from '@/components/ProductVisuals';

export const metadata: Metadata = { title: 'Features', description: 'Explore AutoDropshipPrime product research, listing, monitoring, finance and reporting workflows.' };

const groups=[
  {title:'Product discovery',icon:PackageSearch,items:['Auto Product Hunting'],text:'Research product opportunities with supplier, price, margin and stock context.'},
  {title:'Listing & operations',icon:Boxes,items:['Auto Listing','Orders'],text:'Move products through listing preparation and keep order context visible.'},
  {title:'Monitoring',icon:RefreshCcw,items:['Stock Monitoring','Price Monitoring'],text:'Surface supplier stock and price changes from one operating view.'},
  {title:'Finance & analytics',icon:BarChart3,items:['Google Sheets Automation','Calculation Dashboard','Profit Dashboard','Reports'],text:'Turn order and cost data into calculations, profit analysis and reporting.'},
];

export default function FeaturesPage(){return <>
<section className="border-b border-[#eee9f4] bg-[linear-gradient(180deg,#fff,#fbf9ff)]"><div className="container-site py-24 text-center"><div className="eyebrow">Connected product system</div><h1 className="mx-auto mt-5 max-w-4xl text-[44px] leading-[1.04] font-[850] tracking-[-.05em] sm:text-[62px]">One Platform for Your Entire Dropshipping Workflow.</h1><p className="muted mx-auto mt-6 max-w-2xl text-[18px] leading-8">Research products, prepare listings, monitor supplier changes, track orders and understand profit without presenting the product as a pile of disconnected tools.</p></div></section>
<section className="section"><div className="container-site"><Workflow/><div className="mt-14 grid gap-5 md:grid-cols-2">{groups.map(g=><div key={g.title} className="card p-6"><div className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f1eaff] text-[#6d28d9]"><g.icon size={20}/></span><div><h2 className="text-xl font-extrabold">{g.title}</h2><p className="muted mt-2 text-sm leading-6">{g.text}</p><div className="mt-5 flex flex-wrap gap-2">{g.items.map(x=><span key={x} className="rounded-lg border border-[#e8e2ef] bg-[#fcfbff] px-3 py-2 text-xs font-bold">{x}</span>)}</div></div></div></div>)}</div></div></section>
<section className="section bg-[#fbfaff]"><div className="container-site"><SectionHeading eyebrow="Capabilities" title="Explore the product by workflow." text="Each page uses the same product language, design system and realistic UI patterns."/><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{allFeatures.slice(0,8).map(f=><Link href={f.href} key={f.title} className="card group p-5"><div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f1eaff] text-[#6d28d9]"><f.icon size={18}/></span><ArrowRight size={16} className="text-[#9a90aa] group-hover:text-[#6d28d9]"/></div><h3 className="mt-5 font-extrabold">{f.title}</h3><p className="muted mt-2 text-sm leading-6">{f.text}</p></Link>)}</div></div></section>
<section className="section"><div className="container-site"><SectionHeading center eyebrow="Interface" title="A consistent dashboard across the whole product." text="The same navigation, status language, charts and table styling carry across product modules."/><div className="mt-10"><DashboardPreview/></div></div></section>
</>}
