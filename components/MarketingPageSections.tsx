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
  { label: 'Research', detail: 'Find products', Icon: PackageSearch, tone: '#5B7CFF', tone2: '#6D3DFF' },
  { label: 'List', detail: 'Prepare listings', Icon: ClipboardList, tone: '#E04BDB', tone2: '#8B3DFF' },
  { label: 'Monitor', detail: 'Watch changes', Icon: RefreshCcw, tone: '#2FD1A8', tone2: '#1AAE75' },
  { label: 'Orders', detail: 'Process sales', Icon: ShoppingCart, tone: '#FF9B4A', tone2: '#F26278' },
  { label: 'Sheets', detail: 'Sync records', Icon: FileSpreadsheet, tone: '#36A7FF', tone2: '#326BFF' },
  { label: 'Profit', detail: 'Review margin', Icon: BarChart3, tone: '#A34BFF', tone2: '#6D28D9' },
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
      className="relative overflow-hidden py-[76px] text-white sm:py-[88px]"
      style={{
        background:
          'radial-gradient(circle at 84% 4%, rgba(125,63,255,.20) 0%, transparent 28%), radial-gradient(circle at 5% 108%, rgba(75,66,210,.16) 0%, transparent 28%), linear-gradient(135deg,#120927 0%,#1b0d43 50%,#15082f 100%)',
      }}
    >
      <div className="pointer-events-none absolute -right-[110px] -top-[250px] h-[430px] w-[430px] rounded-full border border-[#7c3aed]/20" />
      <div className="pointer-events-none absolute -right-[45px] -top-[190px] h-[320px] w-[320px] rounded-full border border-[#9a72ff]/12" />

      <div className="container-site relative">
        <div className="grid gap-7 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-14">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[.16em] text-[#ac92ff] sm:text-[11px]">
              <span className="h-[3px] w-9 rounded-full bg-[linear-gradient(90deg,#8b5cf6,#b05cff)]" />
              {eyebrow}
            </div>
            <h2 className="mt-4 max-w-[590px] text-[33px] font-[900] leading-[1.01] tracking-[-.045em] text-white sm:text-[40px] lg:text-[46px]">
              {title}
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-[650px] text-[14px] leading-7 text-[#c7bfd9] sm:text-[16px] sm:leading-8 lg:text-[17px]">
              {text}
            </p>
          </div>
        </div>

        <div className="relative mt-11 rounded-[26px] border border-white/[.08] bg-white/[.025] px-5 py-7 sm:px-7 sm:py-8 lg:mt-12 lg:px-8 lg:py-9">
          <div className="pointer-events-none absolute left-[8.8%] right-[8.8%] top-[72px] hidden h-px bg-[linear-gradient(90deg,rgba(126,95,255,.15),rgba(139,92,246,.7),rgba(139,92,246,.7),rgba(126,95,255,.15))] lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
            {defaultWorkflow.map(({ label, detail, Icon, tone, tone2 }, index) => (
              <div key={label} className="relative min-w-0 lg:px-3">
                <div className="relative flex items-start gap-4 lg:block">
                  <div
                    className="relative z-10 grid h-[66px] w-[66px] shrink-0 place-items-center rounded-[18px] text-white"
                    style={{ background: `linear-gradient(135deg, ${tone}, ${tone2})` }}
                  >
                    <Icon size={27} strokeWidth={1.9} />
                  </div>

                  {index < defaultWorkflow.length - 1 && (
                    <span className="absolute -right-[15px] top-[51px] z-20 hidden h-8 w-8 items-center justify-center rounded-full border border-[#8160e8]/50 bg-[#180b37] text-[#cabdff] lg:flex">
                      <ArrowRight size={13} />
                    </span>
                  )}

                  <div className="min-w-0 pt-1 lg:pt-5">
                    <div className="text-[9px] font-black uppercase tracking-[.12em] text-white/38">0{index + 1}</div>
                    <div className="mt-1 text-[16px] font-[850] tracking-[-.02em] text-white">{label}</div>
                    <div className="mt-1 text-[11px] leading-5 text-white/45">{detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-[10px] text-white/38">
          <span>One operating sequence from product discovery to profit review.</span>
          <span className="font-bold text-[#a994e5]">AutoDropshipPrime workflow</span>
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
