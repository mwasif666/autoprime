import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Check,
  ClipboardList,
  FileSpreadsheet,
  PackageSearch,
  RefreshCcw,
  SearchCheck,
  ShoppingBag,
  Sparkles,
  WandSparkles,
} from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import Pricing from './Pricing';
import Faq from './Faq';
import AnalyticsPanel from './AnalyticsPanel';
import BentoFeatures from './BentoFeatures';
import { ReferenceGallery, ReferenceVisual } from './ReferenceMedia';
import {
  ImageStudioPreview,
  ListingPreview,
  MonitoringPreview,
  ProductDashboardPreview,
  ProductHunterPreview,
  ReportsPreview,
  SheetPreview,
  Workflow,
} from './ProductVisuals';

function Hero() {
  return (
    <section className="hero-mesh relative overflow-hidden border-b border-[#efeaf5]">
      <div className="hero-glow" />
      <div className="container-site relative grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[.88fr_1.12fr]">
        <Reveal>
          <div className="eyebrow mb-4"><Sparkles size={13}/>All-in-one dropshipping automation</div>
          <h1 className="max-w-[620px] text-[40px] leading-[1.04] font-[850] tracking-[-.045em] sm:text-[48px] lg:text-[54px]">
            Automate Your <span className="gradient-text">Dropshipping Business.</span>
          </h1>
          <p className="muted mt-5 max-w-[610px] text-[16px] leading-7 sm:text-[17px]">
            Product hunting, auto listing, stock and price monitoring, profit tracking, reports and Google Sheets updates — all in one place.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/signup">Start Free <ArrowRight size={16}/></Link>
            <a className="btn-secondary" href="#product-dashboard">View Product</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-semibold text-[#6f667c]">
            {['Product research','Monitoring','Profit analytics'].map(item=><span key={item} className="flex items-center gap-2"><Check size={13} className="text-[#6d28d9]"/>{item}</span>)}
          </div>
        </Reveal>
        <Reveal delay={.06}>
          <ReferenceVisual asset="sellerHero" className="min-h-[360px]" imageClassName="min-h-[360px] object-cover object-center" />
        </Reveal>
      </div>
    </section>
  );
}

function VisualDirection() {
  return (
    <section className="section bg-[#fbfaff]">
      <div className="container-site">
        <div className="max-w-2xl">
          <div className="eyebrow">Product experience</div>
          <h2 className="mt-3 text-[30px] leading-[1.1] font-[820] tracking-[-.03em] sm:text-[38px]">Built around real seller workflows.</h2>
          <p className="muted mt-4 text-[15px] leading-7">The interface keeps product research, listing and monitoring visuals close to the operational experience sellers already understand.</p>
        </div>
        <div className="mt-8"><ReferenceGallery/></div>
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section className="section-tight">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow">Integrations</div>
          <h2 className="mt-3 text-[28px] font-[820] tracking-[-.025em] sm:text-[34px]">Simple connections to the tools that matter.</h2>
        </div>
        <div className="mx-auto mt-8 flex max-w-xl flex-col items-center justify-center gap-7 sm:flex-row sm:gap-14">
          <div className="flex items-center gap-3">
            <div className="text-[26px] font-black tracking-[-.07em]"><span className="text-[#e53238]">e</span><span className="text-[#0064d2]">b</span><span className="text-[#f5af02]">a</span><span className="text-[#86b817]">y</span></div>
            <div><div className="text-sm font-extrabold">eBay</div><div className="text-[11px] text-[#82798e]">Marketplace workflow</div></div>
          </div>
          <div className="hidden h-10 border-l border-[#e8e2ef] sm:block" />
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#eaf7ee] text-[#218a49]"><FileSpreadsheet size={22}/></span>
            <div><div className="text-sm font-extrabold">Google Sheets</div><div className="text-[11px] text-[#82798e]">Orders & profit sync</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectedWorkflow() {
  return (
    <section className="section bg-[#211062] text-white">
      <div className="container-site">
        <div className="grid gap-9 lg:grid-cols-[.66fr_1.34fr] lg:items-center">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[.14em] text-[#cdbbfa]">Connected workflow</div>
            <h2 className="mt-3 text-[31px] leading-[1.08] font-[820] tracking-[-.035em] sm:text-[39px]">One flow from product discovery to profit.</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/65">Research, listings, monitoring, orders, sheets and profit move through one connected sequence.</p>
          </div>
          <div className="rounded-[18px] border border-white/10 bg-white/[.04] p-4 text-[#171230] sm:p-5"><Workflow/></div>
        </div>
      </div>
    </section>
  );
}

function StorySection({
  eyebrow,
  title,
  text,
  visual,
  reverse = false,
  href,
  bullets,
}: {
  eyebrow:string;
  title:string;
  text:string;
  visual:React.ReactNode;
  reverse?:boolean;
  href:string;
  bullets:string[];
}) {
  return (
    <section className="section">
      <div className={'container-site grid items-center gap-11 lg:grid-cols-2 ' + (reverse?'lg:[&>*:first-child]:order-2':'')}>
        <Reveal>{visual}</Reveal>
        <Reveal>
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="mt-3 text-[31px] leading-[1.09] font-[820] tracking-[-.035em] sm:text-[40px]">{title}</h2>
          <p className="muted mt-4 text-[15px] leading-7 sm:text-[16px]">{text}</p>
          <div className="mt-6 space-y-3">{bullets.map(item=><div key={item} className="flex items-start gap-3 text-sm font-semibold"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[#ded3ed] text-[#6d28d9]"><Check size={12}/></span><span className="pt-0.5">{item}</span></div>)}</div>
          <Link href={href} className="outline-action mt-7">Explore feature <ArrowRight size={15}/></Link>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {title:'Discover',text:'Find products',icon:SearchCheck,color:'#ef5a70',bg:'#ffe9ed'},
    {title:'Review',text:'Check margin',icon:PackageSearch,color:'#3ea8ba',bg:'#e2f7fa'},
    {title:'List',text:'Prepare listing',icon:ClipboardList,color:'#6075d8',bg:'#e8edff'},
    {title:'Monitor',text:'Watch changes',icon:RefreshCcw,color:'#df9f26',bg:'#fff2d4'},
    {title:'Track',text:'Manage orders',icon:ShoppingBag,color:'#7b50d6',bg:'#eee5ff'},
    {title:'Analyze',text:'Profit & reports',icon:BarChart3,color:'#d451a5',bg:'#ffe5f5'},
  ];

  return (
    <section className="section bg-[#fbfaff]">
      <div className="container-site">
        <SectionHeading center eyebrow="How it works" title="A clear process from product idea to business insight." text="Six connected stages keep the workflow easy to follow from research through reporting."/>

        <div className="mt-12 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-2">
          {steps.map((step,index)=>{
            const Icon=step.icon;
            return <div key={step.title} className="contents">
              <div className={'how-step flex-1 ' + (index%2===1?'lg:translate-y-7':'lg:-translate-y-2')}>
                <div className="text-[10px] font-black" style={{color:step.color}}>0{index+1}</div>
                <div className="mt-2 grid h-[64px] w-[64px] place-items-center rounded-full" style={{background:step.bg,color:step.color}}><Icon size={23}/></div>
                <div className="mt-3 text-[15px] font-extrabold">{step.title}</div>
                <div className="mt-1 text-[11px] text-[#81798d]">{step.text}</div>
              </div>
              {index<steps.length-1&&<div className={'how-connector ' + (index%2===0?'lg:translate-y-4':'lg:-translate-y-4')}>
                <span className="hidden h-px flex-1 bg-[#c9badb] lg:block"/>
                <ArrowRight size={19} strokeWidth={1.7}/>
                <span className="hidden h-px flex-1 bg-[#c9badb] lg:block"/>
              </div>}
            </div>
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="section">
      <div className="container-site">
        <div className="rounded-[18px] border border-[#d9ccef] bg-[#261064] px-6 py-11 text-center text-white sm:px-10">
          <h2 className="text-[29px] font-[820] tracking-[-.03em] sm:text-[36px]">Run your dropshipping operation from one place.</h2>
          <p className="mx-auto mt-3 max-w-xl text-[14px] leading-6 text-white/65">Research, list, monitor and understand profit without switching between disconnected tools.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/signup" className="cta-primary">Start Free</Link>
            <Link href="/contact" className="cta-secondary">Book Demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return <>
    <Hero/>
    <VisualDirection/>
    <Integrations/>
    <ConnectedWorkflow/>

    <StorySection
      eyebrow="Product research"
      title="Find products with useful selling context."
      text="Review supplier, source price, estimated selling price, stock and margin before a product moves into your listing workflow."
      visual={<ProductHunterPreview/>}
      href="/features/product-hunting"
      bullets={['Search and filter opportunities','Compare source cost and selling price','Move selected products into listing preparation']}
    />

    <StorySection
      reverse
      eyebrow="Auto listing"
      title="Move from product research to a ready listing."
      text="Prepare titles, descriptions, pricing and product details in a structured workflow instead of repeating the same work across tools."
      visual={<ListingPreview/>}
      href="/features/auto-listing"
      bullets={['Import product context','Review content and pricing','Save drafts or create listings']}
    />

    <section className="section bg-[#fbfaff]">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[.68fr_1.32fr]">
        <div>
          <div className="eyebrow">Stock + price monitoring</div>
          <h2 className="mt-3 text-[31px] leading-[1.09] font-[820] tracking-[-.035em] sm:text-[40px]">See supplier changes before they become store problems.</h2>
          <p className="muted mt-4 text-[15px] leading-7">Price movement, stock state and attention items stay visible from one monitoring view.</p>
          <Link href="/features/stock-monitoring" className="outline-action mt-6">Explore monitoring <ArrowRight size={15}/></Link>
        </div>
        <MonitoringPreview/>
      </div>
    </section>

    <section className="section">
      <div className="container-site">
        <div className="max-w-2xl">
          <div className="eyebrow">Google Sheets automation</div>
          <h2 className="mt-3 text-[31px] leading-[1.09] font-[820] tracking-[-.035em] sm:text-[40px]">Keep orders and profit records updated automatically.</h2>
          <p className="muted mt-4 text-[15px] leading-7">Order value, product cost, fees, profit and status stay organized in a spreadsheet-ready flow.</p>
        </div>
        <div className="mt-8"><SheetPreview/></div>
      </div>
    </section>

    <section className="section bg-[#fbfaff]">
      <div className="container-site">
        <SectionHeading eyebrow="Profit dashboard" title="See what is selling, what it costs and what you actually keep." text="Change the time range to update sales, profit, orders, fees and product performance."/>
        <div className="mt-8"><AnalyticsPanel/></div>
      </div>
    </section>

    <section className="section">
      <div className="container-site">
        <SectionHeading eyebrow="Reports" title="Turn store activity into useful reports." text="Review sales, orders, product performance, inventory and price changes with consistent reporting controls."/>
        <div className="mt-8"><ReportsPreview/></div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <div className="eyebrow"><WandSparkles size={13}/>Image tools</div>
            <h3 className="mt-3 text-[28px] leading-[1.1] font-[820] tracking-[-.03em] sm:text-[34px]">Preview product-image improvements before publishing.</h3>
            <p className="muted mt-4 text-[15px] leading-7">Compare original and cleaned product imagery, then use focused tools for background cleanup, sizing and export.</p>
          </div>
          <ImageStudioPreview/>
        </div>
      </div>
    </section>

    <section className="section bg-[#fbfaff]">
      <div className="container-site">
        <SectionHeading eyebrow="All-in-one" title="Everything you need, arranged around the work you actually do." text="A responsive bento layout keeps the platform compact while making each capability easy to scan."/>
        <div className="mt-8"><BentoFeatures/></div>
      </div>
    </section>

    <section id="product-dashboard" className="section">
      <div className="container-site">
        <SectionHeading center eyebrow="Product dashboard" title="Manage products from one focused operating screen." text="A product-first view for listings, cost, selling price, stock and margin."/>
        <div className="mt-8"><ProductDashboardPreview/></div>
      </div>
    </section>

    <HowItWorks/>

    <section className="section">
      <div className="container-site">
        <SectionHeading center eyebrow="Pricing" title="Simple plans for growing sellers." text="Commercial pricing remains configurable until final plan details are approved."/>
        <div className="mt-8"><Pricing/></div>
      </div>
    </section>

    <section id="faq" className="section bg-[#fbfaff]">
      <div className="container-site grid gap-9 lg:grid-cols-[.72fr_1.28fr]">
        <SectionHeading eyebrow="FAQ" title="Clear answers about the workflow." text="Capabilities and integrations stay aligned with approved product requirements."/>
        <Faq/>
      </div>
    </section>

    <FinalCta/>
  </>;
}
