import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart3, BookOpen, FileSpreadsheet, PackageSearch, RefreshCcw, Sparkles } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Faq from '@/components/Faq';
import MarketingCta from '@/components/MarketingCta';
import {
  DashboardStorySection,
  SourceMarketplaceStrip,
  WorkflowRail,
  dashboardAssets,
} from '@/components/MarketingPageSections';

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

function ResourcePreview(){return <div className="divide-y divide-[#e8e1ef]">
  {guides.slice(0,4).map(([title,,href,Icon,label])=><Link key={title} href={href} className="group flex items-center gap-3 py-3 first:pt-0 last:pb-0">
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[11px] bg-[#efe8ff] text-[#6d28d9]"><Icon size={17}/></span>
    <div className="min-w-0 flex-1"><div className="text-[8px] font-black uppercase tracking-[.1em] text-[#8b3dff]">{label}</div><div className="mt-0.5 truncate text-[11px] font-extrabold text-[#171230]">{title}</div></div>
    <ArrowRight size={13} className="text-[#a99db9] transition group-hover:translate-x-0.5 group-hover:text-[#6d28d9]"/>
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

  <SourceMarketplaceStrip
    eyebrow="Start with product context"
    title="The resource path begins with the same source marketplaces used in the product workflow."
  />

  <section id="guides" className="section bg-white">
    <div className="container-site grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="eyebrow">Featured guide</div>
        <h2 className="mt-4 max-w-[520px] text-[31px] font-[860] leading-[1.06] tracking-[-.045em] text-[#171230] sm:text-[39px]">Learn the product in the same order the work actually happens.</h2>
        <p className="muted mt-4 max-w-[520px] text-[14px] leading-7">Start with the connected workflow, then move into the specific feature that matches the task you are trying to understand.</p>
        <Link href="/features" className="btn-primary mt-6 !text-white">Open getting-started guide <ArrowRight size={15}/></Link>
      </div>

      <div className="border-t border-[#e7dfef]">
        {guides.slice(1).map(([title,text,href,Icon,label],index)=><Link key={title} href={href} className="group grid gap-4 border-b border-[#e7dfef] py-5 sm:grid-cols-[52px_1fr_auto] sm:items-center">
          <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-[#faf7ff] text-[#6d28d9]"><Icon size={21}/></span>
          <div><div className="text-[8px] font-black uppercase tracking-[.1em] text-[#8b3dff]">{label}</div><h3 className="mt-1 text-[15px] font-extrabold text-[#171230]">{title}</h3><p className="muted mt-1 text-[10px] leading-5">{text}</p></div>
          <div className="flex items-center gap-2 text-[9px] font-black text-[#a79caf] transition group-hover:text-[#6d28d9]"><span>0{index+2}</span><ArrowRight size={13}/></div>
        </Link>)}
      </div>
    </div>
  </section>

  <DashboardStorySection
    eyebrow="Learn from the real product"
    title="Use actual dashboard context instead of abstract feature descriptions."
    text="The resources connect back to the screens sellers work in, so the guidance stays close to real product states, order rows and finance context."
    src={dashboardAssets.calculations}
    alt="AutoDropshipPrime calculations dashboard"
    points={['Read calculations in the context of orders','Understand which workflow owns each status','Move from guidance directly into the related feature']}
    reverse
    cta={{label:'Explore Analytics',href:'/features/analytics'}}
  />

  <WorkflowRail
    eyebrow="Learn by workflow"
    title="Follow the product in the same order you operate it."
    text="The resource path mirrors the connected seller workflow, so each guide stays close to the feature and operating context it explains."
  />

  <section className="section border-y border-[#eee8f4] bg-[#faf8ff]">
    <div className="container-site">
      <div className="mb-8 text-center"><div className="eyebrow">Quick answers</div><h2 className="mt-4 text-[30px] font-[850] tracking-[-.04em] sm:text-[38px]">Plans, billing and product questions.</h2></div>
      <Faq/>
    </div>
  </section>

  <MarketingCta title="Ready to move from learning into the product?" text="Explore the connected workflow or create an account when you are ready to start configuring your store."/>
</>}
