import type { Metadata } from 'next';
import { Sparkles } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ConnectedWorkflowShowcase from '@/components/ConnectedWorkflowShowcase';
import MarketingCta from '@/components/MarketingCta';
import { ProductDashboardPreview, SheetPreview } from '@/components/ProductVisuals';

export const metadata: Metadata = { title:'About', description:'The product direction behind AutoDropshipPrime.' };

const icon8 = (name:string) => `https://img.icons8.com/color/96/${name}.png`;

const principles = [
  ['One connected system','Keep research, listing, monitoring, wallet activity and analytics operationally connected.','workflow'],
  ['Clear operating states','Show inputs, statuses and next actions without decorative clutter.','checklist'],
  ['Useful visibility','Bring pricing, stock, orders, Sheets and profit into one consistent view.','combo-chart--v1'],
  ['Seller-first context','Keep product, supplier, pricing and order context close to the task at hand.','shopping-cart--v1'],
];

export default function AboutPage(){return <>
  <PageHero
    eyebrow={<><Sparkles size={13}/>About AutoDropshipPrime</>}
    title={<>Less fragmented work. <span className="gradient-text">More operational clarity.</span></>}
    description="AutoDropshipPrime is designed around a simple idea: product research, listings, monitoring, orders, payments and profit analytics should feel like one connected operating workflow."
    bullets={['Product-first workflows','Clear status and next actions','Consistent analytics language','Reusable operating patterns']}
    primary={{label:'Explore Features',href:'/features'}}
    secondary={{label:'Talk to Us',href:'/contact'}}
    visual={<ProductDashboardPreview/>}
  />

  <section className="section bg-white">
    <div className="container-site">
      <div className="mx-auto max-w-[820px] text-center">
        <div className="eyebrow">Product principles</div>
        <h2 className="mt-4 text-[31px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[40px]">Built around the work sellers repeat every day.</h2>
        <p className="muted mx-auto mt-4 max-w-[700px] text-[14px] leading-7">The design system favors realistic operating states, colorful visual cues and reusable product patterns over disconnected screens.</p>
      </div>
      <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {principles.map(([title,text,icon],index)=><article key={title} className="relative min-h-[230px] rounded-[22px] border border-[#e7e0ef] bg-[#fdfcff] p-5">
          <span className="absolute right-4 top-4 grid h-8 min-w-8 place-items-center rounded-[9px] bg-[linear-gradient(135deg,#6d28d9,#9a2cff)] px-2 text-[10px] font-black text-white">0{index+1}</span>
          <span className="grid h-16 w-16 place-items-center rounded-[18px] border border-[#eee6f7] bg-[#faf7ff]"><img src={icon8(icon)} alt="" className="h-12 w-12 object-contain"/></span>
          <h3 className="mt-5 text-[17px] font-extrabold tracking-[-.02em] text-[#171230]">{title}</h3>
          <p className="muted mt-2 text-[12px] leading-6">{text}</p>
        </article>)}
      </div>
    </div>
  </section>

  <ConnectedWorkflowShowcase
    eyebrow="Operating model"
    title="One sequence from research to insight."
    text="Context stays visible as a product moves through research, listing preparation, monitoring, orders, Google Sheets and profitability review."
  />

  <section className="section bg-white">
    <div className="container-site grid items-center gap-10 lg:grid-cols-[.7fr_1.3fr]">
      <div>
        <div className="eyebrow">Finance visibility</div>
        <h2 className="mt-4 text-[31px] font-[850] leading-[1.08] tracking-[-.04em] sm:text-[40px]">Operational data should stay usable outside a single dashboard.</h2>
        <p className="muted mt-4 text-[15px] leading-7">Order value, supplier cost, fees and profit can stay structured in a sheet-ready workflow while the application remains the main operating view.</p>
      </div>
      <div className="rounded-[24px] border border-[#e2d8ef] bg-white p-3 sm:p-4"><SheetPreview/></div>
    </div>
  </section>

  <MarketingCta title="Build your operation around one connected seller workflow." text="Keep research, monitoring, orders and financial visibility consistent as your store grows."/>
</>}
