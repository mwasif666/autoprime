import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  ClipboardList,
  FileSpreadsheet,
  Gauge,
  HelpCircle,
  PackageSearch,
  RefreshCcw,
  SearchCheck,
  Sparkles,
  Tags,
} from 'lucide-react';
import Faq from '@/components/Faq';
import MarketingCta from '@/components/MarketingCta';
import SectionHeading from '@/components/SectionHeading';
import { Workflow } from '@/components/ProductVisuals';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Guides and workflow resources for AutoDropshipPrime product research, listing, monitoring, Google Sheets, profit analytics and reporting.',
};

const guides = [
  {
    title: 'Getting started with AutoDropshipPrime',
    text: 'Understand how product research, listing, monitoring, orders and profit connect inside one workflow.',
    href: '/features',
    icon: BookOpen,
    label: 'Start here',
  },
  {
    title: 'Product research checklist',
    text: 'Review supplier, source price, selling price, stock and margin before moving a product forward.',
    href: '/features/product-hunting',
    icon: PackageSearch,
    label: 'Research',
  },
  {
    title: 'Build a cleaner listing workflow',
    text: 'Organize titles, descriptions, pricing and product details before a listing is published.',
    href: '/features/auto-listing',
    icon: ClipboardList,
    label: 'Listings',
  },
  {
    title: 'Monitor stock and price changes',
    text: 'Keep supplier changes visible and understand which products need attention first.',
    href: '/features/stock-monitoring',
    icon: RefreshCcw,
    label: 'Monitoring',
  },
  {
    title: 'Keep order and profit data in Sheets',
    text: 'Structure sales, costs, fees, profit and status in a spreadsheet-ready operating flow.',
    href: '/features/google-sheets',
    icon: FileSpreadsheet,
    label: 'Google Sheets',
  },
  {
    title: 'Read your profit dashboard',
    text: 'Use revenue, costs, fees, margin and product performance to understand store health.',
    href: '/features/analytics',
    icon: BarChart3,
    label: 'Analytics',
  },
];

const tracks = [
  {
    title: 'Research',
    icon: SearchCheck,
    text: 'Choose products with more commercial context before creating listings.',
    items: ['Product opportunity review', 'Supplier and price context', 'Stock and margin checks'],
    href: '/features/product-hunting',
  },
  {
    title: 'Operate',
    icon: ClipboardList,
    text: 'Move products through listing and order workflows without losing context.',
    items: ['Listing preparation', 'Order visibility', 'Structured operating states'],
    href: '/features/auto-listing',
  },
  {
    title: 'Monitor',
    icon: Gauge,
    text: 'Surface supplier changes and attention items before they become store problems.',
    items: ['Stock states', 'Price changes', 'Monitoring status'],
    href: '/features/stock-monitoring',
  },
  {
    title: 'Measure',
    icon: Tags,
    text: 'Connect sales, costs and fees to profit analysis and reusable reports.',
    items: ['Google Sheets workflow', 'Profit dashboard', 'Reports and exports'],
    href: '/features/analytics',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="hero-mesh border-b border-[#eee9f4]">
        <div className="container-site grid items-center gap-11 py-16 lg:grid-cols-[.78fr_1.22fr] lg:py-20">
          <div>
            <div className="eyebrow"><Sparkles size={13}/>Resources</div>
            <h1 className="mt-4 max-w-3xl text-[38px] leading-[1.05] font-[850] tracking-[-.04em] sm:text-[48px] lg:text-[52px]">
              Guides for building a cleaner dropshipping workflow.
            </h1>
            <p className="muted mt-5 max-w-2xl text-[16px] leading-7">
              Learn how product research, listing, monitoring, Google Sheets, profit analytics and reporting fit together inside AutoDropshipPrime.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#guides" className="btn-primary">Browse guides <ArrowRight size={16}/></a>
              <Link href="/features" className="btn-secondary">Explore Product</Link>
            </div>
            <div className="mt-7 grid gap-2 sm:grid-cols-2">
              {['Workflow-first guidance','Responsive product examples','Feature-specific learning paths','Quick answers in one place'].map(item => (
                <div key={item} className="flex items-center gap-2 text-[13px] font-semibold">
                  <Check size={14} className="text-[#6d28d9]"/>{item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[20px] border border-[#e7e0ef] bg-white p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4 border-b border-[#eee9f4] pb-4">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[.12em] text-[#81788d]">Resource library</div>
                <div className="mt-1 text-base font-extrabold">Learn by workflow</div>
              </div>
              <span className="rounded-full border border-[#dfd4ee] bg-[#faf7ff] px-3 py-1 text-[10px] font-bold text-[#6d28d9]">6 guides</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {guides.slice(0,4).map(({title,icon:Icon,label}) => (
                <Link key={title} href="#guides" className="group rounded-[14px] border border-[#e8e2ef] bg-[#fbfaff] p-4 transition hover:border-[#cdb8e8] hover:bg-[#f7f1ff]">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#eee6ff] text-[#6d28d9]"><Icon size={17}/></span>
                    <ArrowRight size={14} className="text-[#a28fb7] transition group-hover:translate-x-0.5 group-hover:text-[#6d28d9]"/>
                  </div>
                  <div className="mt-4 text-[10px] font-black uppercase tracking-[.09em] text-[#8b3dff]">{label}</div>
                  <div className="mt-1 text-[13px] font-extrabold leading-5">{title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#211062] text-white">
        <div className="container-site grid gap-9 lg:grid-cols-[.64fr_1.36fr] lg:items-center">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[.14em] text-[#cdbbfa]">Start with the workflow</div>
            <h2 className="mt-3 text-[30px] leading-[1.08] font-[820] tracking-[-.03em] sm:text-[38px]">Learn the product in the same order you operate it.</h2>
            <p className="mt-4 text-[14px] leading-7 text-white/65">Use the resource library as a map from product discovery through listing, monitoring, orders, Sheets and profit.</p>
          </div>
          <div className="rounded-[18px] border border-white/10 bg-white/[.04] p-4 text-[#171230]"><Workflow/></div>
        </div>
      </section>

      <section id="guides" className="section">
        <div className="container-site">
          <SectionHeading
            eyebrow="Featured guides"
            title="Practical resources for each stage of the seller workflow."
            text="Each guide links directly to the product area it explains, so the learning path stays connected to the actual interface."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {guides.map(({title,text,href,icon:Icon,label}) => (
              <Link key={title} href={href} className="group flex min-h-[230px] flex-col rounded-[16px] border border-[#e7e0ef] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#cbb9e5] hover:bg-[#fdfbff] sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f1eaff] text-[#6d28d9]"><Icon size={19}/></span>
                  <ArrowRight size={16} className="text-[#a18eb5] transition group-hover:translate-x-0.5 group-hover:text-[#6d28d9]"/>
                </div>
                <div className="mt-6 text-[10px] font-black uppercase tracking-[.1em] text-[#8b3dff]">{label}</div>
                <h2 className="mt-2 text-[17px] font-extrabold leading-6">{title}</h2>
                <p className="muted mt-2 text-[13px] leading-6">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="help" className="section bg-[#fbfaff]">
        <div className="container-site">
          <SectionHeading
            center
            eyebrow="Learning paths"
            title="Choose the part of the workflow you want to improve."
            text="Move through the library by job: research products, operate listings, monitor supplier changes or measure performance."
          />
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {tracks.map(({title,icon:Icon,text,items,href}) => (
              <div key={title} className="rounded-[16px] border border-[#e7e0ef] bg-white p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f1eaff] text-[#6d28d9]"><Icon size={18}/></span>
                <h3 className="mt-4 text-[17px] font-extrabold">{title}</h3>
                <p className="muted mt-2 text-[12px] leading-5">{text}</p>
                <div className="mt-5 space-y-2">
                  {items.map(item => <div key={item} className="flex items-start gap-2 text-[11px] font-semibold"><Check size={12} className="mt-0.5 shrink-0 text-[#6d28d9]"/>{item}</div>)}
                </div>
                <Link href={href} className="outline-action mt-5">Open guide <ArrowRight size={14}/></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container-site grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <div className="eyebrow"><HelpCircle size={13}/>Quick answers</div>
            <h2 className="mt-3 text-[30px] leading-[1.1] font-[820] tracking-[-.03em] sm:text-[38px]">Common product and workflow questions.</h2>
            <p className="muted mt-4 text-[15px] leading-7">Use these answers as a starting point, then open the relevant feature page for the full product view.</p>
          </div>
          <Faq/>
        </div>
      </section>

      <MarketingCta
        title="Ready to move from learning into the product?"
        text="Explore the connected workflow or create an account when you are ready to start configuring your store."
      />
    </>
  );
}
