import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileSpreadsheet, PackageSearch, RefreshCcw, Sparkles, BarChart3 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ConnectedWorkflowShowcase from '@/components/ConnectedWorkflowShowcase';
import Faq from '@/components/Faq';
import MarketingCta from '@/components/MarketingCta';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Guides and workflow resources for AutoDropshipPrime product research, listing, monitoring, Google Sheets, profit analytics and reporting.',
};

const guides = [
  ['Getting started with AutoDropshipPrime','Understand how research, listings, monitoring, orders and profit connect.','/features',BookOpen,'Start here'],
  ['Product research checklist','Review supplier, source price, selling price, stock and margin before moving forward.','/features/product-hunting',PackageSearch,'Research'],
  ['Build a cleaner listing workflow','Organize titles, descriptions, pricing and product details before publishing.','/features/auto-listing',BookOpen,'Listings'],
  ['Monitor stock and price changes','Keep supplier changes visible and understand which products need attention first.','/features/stock-monitoring',RefreshCcw,'Monitoring'],
  ['Keep order and profit data in Sheets','Structure sales, costs, fees, profit and status in a spreadsheet-ready flow.','/features/google-sheets',FileSpreadsheet,'Google Sheets'],
  ['Read your profit dashboard','Use revenue, costs, fees and margin to understand store health.','/features/analytics',BarChart3,'Analytics'],
] as const;

function ResourcePreview(){return <div className="grid gap-3 sm:grid-cols-2">
  {guides.slice(0,4).map(([title,,href,Icon,label])=><Link key={title} href={href} className="group rounded-[16px] border border-[#e8e2ef] bg-[#fbfaff] p-4">
    <div className="flex items-start justify-between gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#efe8ff] text-[#6d28d9]"><Icon size={18}/></span><ArrowRight size={14} className="text-[#9e8caf]"/></div>
    <div className="mt-4 text-[9px] font-black uppercase tracking-[.1em] text-[#8b3dff]">{label}</div>
    <div className="mt-1 text-[13px] font-extrabold leading-5 text-[#171230]">{title}</div>
  </Link>)}
</div>}

export default function ResourcesPage(){return <>
  <PageHero
    eyebrow={<><Sparkles size={13}/>Resource library</>}
    title={<>Guides for building a cleaner <span className="gradient-text">dropshipping workflow.</span></>}
    description="Learn the platform in the same visual language used on the homepage: research products, prepare listings, monitor changes, keep records and understand profit."
    bullets={['Workflow-first guidance','Product-specific learning paths','Pricing and billing answers','Direct links to each feature']}
    primary={{label:'Browse Guides',href:'#guides'}}
    secondary={{label:'Explore Product',href:'/features'}}
    visual={<ResourcePreview/>}
  />

  <ConnectedWorkflowShowcase
    eyebrow="Learn by workflow"
    title="Follow the product in the same order you operate it."
    text="The resource path mirrors the connected seller workflow, so each guide stays close to the feature and operating context it explains."
  />

  <section id="guides" className="section bg-white">
    <div className="container-site">
      <div className="mx-auto max-w-[820px] text-center"><div className="eyebrow">Featured guides</div><h2 className="mt-4 text-[31px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[40px]">Practical resources for each stage of the seller workflow.</h2><p className="muted mx-auto mt-4 max-w-[700px] text-[14px] leading-7">Each resource links directly to the product area it explains.</p></div>
      <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {guides.map(([title,text,href,Icon,label],index)=><Link key={title} href={href} className="relative flex min-h-[245px] flex-col rounded-[22px] border border-[#e7e0ef] bg-[#fdfcff] p-5 sm:p-6">
          <span className="absolute right-4 top-4 grid h-8 min-w-8 place-items-center rounded-[9px] bg-[linear-gradient(135deg,#6d28d9,#9a2cff)] px-2 text-[10px] font-black text-white">0{index+1}</span>
          <span className="grid h-14 w-14 place-items-center rounded-[16px] border border-[#eee6f7] bg-[#faf7ff] text-[#6d28d9]"><Icon size={24}/></span>
          <div className="mt-5 text-[9px] font-black uppercase tracking-[.1em] text-[#8b3dff]">{label}</div>
          <h3 className="mt-2 text-[17px] font-extrabold leading-6 text-[#171230]">{title}</h3>
          <p className="muted mt-2 text-[12px] leading-6">{text}</p>
          <span className="mt-auto pt-5 inline-flex items-center gap-2 text-[10px] font-extrabold text-[#6d28d9]">Open guide <ArrowRight size={12}/></span>
        </Link>)}
      </div>
    </div>
  </section>

  <section className="section border-y border-[#eee8f4] bg-[#faf8ff]">
    <div className="container-site">
      <div className="mb-8 text-center"><div className="eyebrow">Quick answers</div><h2 className="mt-4 text-[30px] font-[850] tracking-[-.04em] sm:text-[38px]">Plans, billing and product questions.</h2></div>
      <Faq/>
    </div>
  </section>

  <MarketingCta title="Ready to move from learning into the product?" text="Explore the connected workflow or create an account when you are ready to start configuring your store."/>
</>}
