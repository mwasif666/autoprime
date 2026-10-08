import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Check,
  ClipboardList,
  FileSpreadsheet,
  PackageCheck,
  PackageSearch,
  RefreshCcw,
  ShoppingCart,
  Tags,
  type LucideIcon,
} from 'lucide-react';

export const dashboardAssets = {
  marketplace: 'https://res.cloudinary.com/agymx2xx/image/upload/v1791403180/marketplace.png',
  orderProcessing: 'https://res.cloudinary.com/agymx2xx/image/upload/v1791403172/order-processing.png',
  orders: 'https://res.cloudinary.com/agymx2xx/image/upload/v1791403171/orders.png',
  calculations: 'https://res.cloudinary.com/agymx2xx/image/upload/v1791403172/calculations.png',
  aiImageGenerator: 'https://res.cloudinary.com/agymx2xx/image/upload/v1791403172/AI_Image_Generator_Dashboard.png',
} as const;

export function HeroDashboardImage({
  src,
  alt,
  position = 'top',
}: {
  src: string;
  alt: string;
  position?: 'top' | 'center';
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="eager"
      decoding="async"
      className={`block h-auto max-h-[470px] w-full object-contain ${position === 'top' ? 'object-top' : 'object-center'}`}
    />
  );
}

const sourceMarkets = [
  ['eBay', 'ebay', 'Import products'],
  ['AliExpress', 'aliexpress', 'Source products'],
  ['Etsy', 'etsy', 'Import products'],
  ['Amazon', 'amazon', 'Import products'],
] as const;

function BrandMark({ brand }: { brand: string }) {
  if (brand === 'ebay') {
    return (
      <span className="flex items-end text-[23px] font-black leading-none tracking-[-.12em]" aria-label="eBay">
        <span className="text-[#e53238]">e</span><span className="text-[#0064d2]">b</span><span className="text-[#f5af02]">a</span><span className="text-[#86b817]">y</span>
      </span>
    );
  }
  if (brand === 'aliexpress') {
    return <span className="grid h-9 w-9 place-items-center rounded-[9px] bg-[#ff4747] text-[10px] font-black text-white" aria-label="AliExpress">Ali</span>;
  }
  if (brand === 'etsy') {
    return <span className="text-[34px] font-serif font-black leading-none text-[#f1641e]" aria-label="Etsy">E</span>;
  }
  return (
    <span className="relative pb-1 text-[31px] font-black leading-none text-[#232f3e]" aria-label="Amazon">
      a<span className="absolute -bottom-0.5 left-0 h-[3px] w-8 rotate-[-5deg] rounded-full bg-[#ff9900]" />
    </span>
  );
}

export function SourceMarketplaceStrip({
  eyebrow = 'Source marketplaces',
  title = 'Bring product opportunities into one research workflow.',
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="border-y border-[#eee8f4] bg-[#fcfaff]">
      <div className="container-site grid gap-5 py-6 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <p className="mt-2 max-w-[460px] text-[17px] font-[820] leading-6 tracking-[-.02em] text-[#171230] sm:text-[19px]">{title}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
          {sourceMarkets.map(([name, brand, note]) => (
            <div key={name} className="flex min-h-[58px] items-center gap-3 border-l border-[#e4dced] pl-4 first:border-l-0 sm:first:border-l">
              <BrandMark brand={brand} />
              <div className="min-w-0">
                <div className="text-[10px] font-black text-[#241d36]">{name}</div>
                <div className="mt-0.5 text-[8px] text-[#857c90]">{note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type DashboardStoryProps = {
  eyebrow: string;
  title: string;
  text: string;
  src: string;
  alt: string;
  points?: string[];
  reverse?: boolean;
  cta?: { label: string; href: string };
};

export function DashboardStorySection({ eyebrow, title, text, src, alt, points = [], reverse = false, cta }: DashboardStoryProps) {
  return (
    <section className="section bg-white">
      <div className={`container-site grid items-center gap-9 lg:grid-cols-[.78fr_1.22fr] lg:gap-12 ${reverse ? 'lg:grid-cols-[1.22fr_.78fr]' : ''}`}>
        <div className={reverse ? 'lg:order-2' : ''}>
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="mt-4 max-w-[580px] text-[30px] font-[860] leading-[1.06] tracking-[-.045em] text-[#171230] sm:text-[38px] lg:text-[42px]">{title}</h2>
          <p className="muted mt-4 max-w-[580px] text-[14px] leading-7 sm:text-[15px]">{text}</p>
          {points.length > 0 && (
            <div className="mt-6 border-t border-[#eee8f4]">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3 border-b border-[#eee8f4] py-3.5 text-[12px] font-bold text-[#4f465d]">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#efe8ff] text-[#6d28d9]"><Check size={12} /></span>
                  {point}
                </div>
              ))}
            </div>
          )}
          {cta && <Link href={cta.href} className="outline-action mt-6">{cta.label}<ArrowRight size={14}/></Link>}
        </div>

        <div className={`min-w-0 ${reverse ? 'lg:order-1' : ''}`}>
          <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full object-contain" />
        </div>
      </div>
    </section>
  );
}

export type OutcomeItem = {
  title: string;
  text: string;
  Icon: LucideIcon;
  tone?: string;
  soft?: string;
};

export function OutcomeEditorialSection({
  eyebrow,
  title,
  text,
  items,
  soft = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  items: OutcomeItem[];
  soft?: boolean;
}) {
  return (
    <section className={`section border-y border-[#eee8f4] ${soft ? 'bg-[#faf8ff]' : 'bg-white'}`}>
      <div className="container-site grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="mt-4 max-w-[520px] text-[30px] font-[860] leading-[1.06] tracking-[-.045em] text-[#171230] sm:text-[38px]">{title}</h2>
          <p className="muted mt-4 max-w-[520px] text-[14px] leading-7">{text}</p>
        </div>
        <div className="border-t border-[#e8e1ef]">
          {items.map(({ title: itemTitle, text: itemText, Icon, tone = '#6d28d9', soft: itemSoft = '#f3edff' }, index) => (
            <div key={itemTitle} className="grid gap-4 border-b border-[#e8e1ef] py-5 sm:grid-cols-[54px_1fr_auto] sm:items-center">
              <span className="grid h-12 w-12 place-items-center rounded-[14px]" style={{ color: tone, background: itemSoft }}><Icon size={22}/></span>
              <div>
                <h3 className="text-[15px] font-[820] text-[#171230]">{itemTitle}</h3>
                <p className="mt-1 text-[11px] leading-5 text-[#746c80]">{itemText}</p>
              </div>
              <span className="hidden text-[11px] font-black text-[#b2a8bf] sm:block">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const defaultWorkflow = [
  { label: 'Research', Icon: PackageSearch, tone: '#4F7CFF', tone2: '#6D3DFF', soft: 'rgba(79,124,255,.11)' },
  { label: 'List', Icon: ClipboardList, tone: '#F044C7', tone2: '#8B3DFF', soft: 'rgba(240,68,199,.10)' },
  { label: 'Monitor', Icon: RefreshCcw, tone: '#2ED3A6', tone2: '#16A36A', soft: 'rgba(46,211,166,.10)' },
  { label: 'Orders', Icon: ShoppingCart, tone: '#FF9B45', tone2: '#F25C72', soft: 'rgba(255,155,69,.10)' },
  { label: 'Sheets', Icon: FileSpreadsheet, tone: '#31A8FF', tone2: '#326BFF', soft: 'rgba(49,168,255,.10)' },
  { label: 'Profit', Icon: BarChart3, tone: '#A14CFF', tone2: '#6D28D9', soft: 'rgba(161,76,255,.11)' },
] as const;

export function WorkflowRail({
  eyebrow = 'One connected system',
  title = 'The context moves with the product.',
  text = 'Research, listing, monitoring, orders, Sheets and profitability stay part of one operating sequence.',
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section
      className="relative overflow-hidden py-[88px] text-white sm:py-[104px]"
      style={{
        background:
          'radial-gradient(circle at 82% 5%, rgba(124,58,237,.28) 0%, transparent 29%), radial-gradient(circle at 4% 108%, rgba(67,56,202,.22) 0%, transparent 31%), linear-gradient(135deg,#120827 0%,#1d0d49 47%,#15082f 100%)',
      }}
    >
      <div className="pointer-events-none absolute -right-[150px] -top-[280px] h-[520px] w-[520px] rounded-full border border-[#7c3aed]/30" />
      <div className="pointer-events-none absolute -right-[65px] -top-[215px] h-[390px] w-[390px] rounded-full border border-[#8b5cf6]/20" />
      <div className="pointer-events-none absolute -bottom-[360px] -left-[220px] h-[560px] w-[760px] rounded-[50%] border border-[#6d5cff]/20" />

      <div className="container-site relative">
        <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[.16em] text-[#aa8cff] sm:text-[11px]">
              <span className="h-[4px] w-10 rounded-full bg-[linear-gradient(90deg,#8b5cf6,#a14cff)]" />
              {eyebrow}
            </div>
            <h2 className="mt-5 max-w-[650px] text-[34px] font-[900] leading-[1.02] tracking-[-.045em] text-white sm:text-[43px] lg:text-[50px]">
              {title}
            </h2>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-12">
            <p className="max-w-[650px] text-[15px] leading-7 text-[#c8c0db] sm:text-[17px] sm:leading-8 lg:text-[18px]">
              {text}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[.08em] text-white/45">
              <span>Research</span><span>Listings</span><span>Monitoring</span><span>Orders</span><span>Sheets</span><span>Profit</span>
            </div>
          </div>
        </div>

        <div className="relative mt-11 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-6 lg:gap-4">
          <div className="pointer-events-none absolute left-[7%] right-[7%] top-[94px] hidden h-px bg-[linear-gradient(90deg,transparent,rgba(139,92,246,.68),rgba(129,87,255,.38),transparent)] lg:block" />

          {defaultWorkflow.map(({ label, Icon, tone, tone2, soft }, index) => (
            <div
              key={label}
              className="group relative z-10 min-h-[190px] rounded-[22px] border bg-white/[.035] p-5 backdrop-blur-[2px] transition duration-200 hover:-translate-y-1 hover:bg-white/[.055] sm:min-h-[176px] lg:min-h-[208px] lg:p-5"
              style={{ borderColor: `${tone}55`, backgroundImage: `linear-gradient(180deg, ${soft} 0%, rgba(255,255,255,.025) 58%, rgba(255,255,255,.018) 100%)` }}
            >
              <div
                className="grid h-16 w-16 place-items-center rounded-[18px] text-white sm:h-[68px] sm:w-[68px]"
                style={{ background: `linear-gradient(135deg, ${tone}, ${tone2})` }}
              >
                <Icon size={28} strokeWidth={1.9} />
              </div>

              <div className="mt-7 flex items-end justify-between gap-3 lg:mt-9">
                <div>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[.07] px-2.5 py-1 text-[9px] font-black tracking-[.06em] text-[#dcd3ed]">0{index + 1}</span>
                  <div className="mt-2 text-[16px] font-[850] tracking-[-.02em] text-white sm:text-[17px]">{label}</div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[.08em] text-white/30">Step</span>
              </div>

              {index < defaultWorkflow.length - 1 && (
                <span className="absolute -right-[30px] top-[75px] z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-[#8b5cf6]/65 bg-[#190b3a] text-[#c6b5ff] lg:flex">
                  <ArrowRight size={15} />
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>One connected operating sequence from discovery to profit review.</span>
          <span className="font-bold text-[#ad96e9]">AutoDropshipPrime workflow</span>
        </div>
      </div>
    </section>
  );
}

export const defaultOutcomeItems: OutcomeItem[] = [
  { title: 'Less manual switching', text: 'Keep daily seller tasks in one operating context instead of reopening disconnected tools.', Icon: PackageCheck, tone: '#6d28d9', soft: '#f3edff' },
  { title: 'Clearer supplier changes', text: 'Make price and stock changes visible where product and margin context already exists.', Icon: Tags, tone: '#ff6b14', soft: '#fff3e8' },
  { title: 'Structured finance records', text: 'Keep order, cost and profit information ready for Sheets and reporting workflows.', Icon: FileSpreadsheet, tone: '#16a36a', soft: '#ecfbf3' },
  { title: 'Better operating visibility', text: 'Use consistent status language across research, listings, orders and analytics.', Icon: BarChart3, tone: '#1689f5', soft: '#eef7ff' },
];
