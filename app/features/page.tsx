import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ProductResearchShowcase from '@/components/ProductResearchShowcase';
import WalletPaymentsShowcase from '@/components/WalletPaymentsShowcase';
import ConnectedWorkflowShowcase from '@/components/ConnectedWorkflowShowcase';
import BentoFeatures from '@/components/BentoFeatures';
import SectionHeading from '@/components/SectionHeading';
import MarketingCta from '@/components/MarketingCta';
import { ProductDashboardPreview, SheetPreview } from '@/components/ProductVisuals';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore AutoDropshipPrime product research, listing, monitoring, finance and reporting workflows.',
};

export default function FeaturesPage(){
  return <>
    <PageHero
      eyebrow={<><Sparkles size={13}/>Connected product system</>}
      title={<>One platform for your <span className="gradient-text">dropshipping workflow.</span></>}
      description="Research products, prepare listings, monitor supplier changes, track orders and understand profit from one consistent product experience."
      bullets={['Product research','Listing optimization','Stock + price monitoring','Sheets, wallet and profit visibility']}
      primary={{label:'Start Free',href:'/signup'}}
      secondary={{label:'See Pricing',href:'/pricing'}}
      visual={<ProductDashboardPreview/>}
    />

    <ProductResearchShowcase />

    <ConnectedWorkflowShowcase
      eyebrow="How the product connects"
      title="A single sequence instead of separate tools."
      text="The same visual language follows the seller from research through listings, monitoring, orders, Google Sheets and profit review."
    />

    <WalletPaymentsShowcase />

    <section className="section bg-white">
      <div className="container-site">
        <SectionHeading
          center
          eyebrow="Capabilities"
          title="Explore the platform by workflow."
          text="The product stays scannable through varied bento modules instead of repeating the same generic card everywhere."
        />
        <div className="mt-9"><BentoFeatures/></div>
      </div>
    </section>

    <section className="section border-y border-[#eee8f4] bg-[#faf8ff]">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <div className="eyebrow">Finance workflow</div>
          <h2 className="mt-4 text-[31px] font-[850] leading-[1.08] tracking-[-.04em] sm:text-[40px]">Orders and profit stay visible beyond the dashboard.</h2>
          <p className="muted mt-4 text-[15px] leading-7">Keep a structured sheet-ready record of sale value, cost, fees, profit and status while the main workspace stays focused on day-to-day operations.</p>
          <Link href="/features/google-sheets" className="outline-action mt-6">Explore Google Sheets <ArrowRight size={15}/></Link>
        </div>
        <div className="rounded-[24px] border border-[#e2d8ef] bg-white p-3 sm:p-4"><SheetPreview/></div>
      </div>
    </section>

    <MarketingCta title="Bring every seller workflow into one consistent product system." text="Start with the core workflow, then expand into monitoring, Sheets, wallet activity and analytics as your operation grows."/>
  </>;
}
