'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  Code2,
  Crown,
  FileSpreadsheet,
  FlaskConical,
  Headphones,
  Package,
  PackageSearch,
  Plug,
  RotateCcw,
  Search,
  Send,
  ShoppingCart,
  SlidersHorizontal,
  Store,
  Tags,
  Truck,
  Users,
  WandSparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = {
  label: string;
  value?: string;
  icon: LucideIcon;
  tone: string;
  soft: string;
};

type Plan = {
  name: string;
  subtitle: string;
  price: string;
  suffix?: string;
  intro: string;
  cta: string;
  href: string;
  accent: string;
  soft: string;
  border: string;
  Icon: LucideIcon;
  featured?: boolean;
  trial?: boolean;
  features: Feature[];
};

const commonFeatureIcons = {
  imports: [Package, '#6d28d9', '#f1e9ff'],
  research: [Search, '#2563eb', '#edf5ff'],
  ai: [WandSparkles, '#a21caf', '#fbecff'],
  schedule: [CalendarDays, '#0f8f8a', '#e9fbf8'],
  monitor: [Tags, '#16a34a', '#ebfaef'],
  tracking: [Truck, '#7c3aed', '#f2ebff'],
  sheets: [FileSpreadsheet, '#159455', '#eafaf1'],
  returns: [RotateCcw, '#e45d33', '#fff0ea'],
  stores: [Store, '#5b4bd8', '#efefff'],
  team: [Users, '#2563eb', '#eef5ff'],
  support: [Headphones, '#e84d91', '#fff0f7'],
} as const;

function feature(label: string, value: string | undefined, key: keyof typeof commonFeatureIcons): Feature {
  const [icon, tone, soft] = commonFeatureIcons[key];
  return { label, value, icon, tone, soft };
}

const plans: Plan[] = [
  {
    name: 'Trial Plan',
    subtitle: 'Test the platform',
    price: '$1',
    suffix: '/ 3 days',
    intro: 'Try the core workflow with a short trial before moving to the Starter Plan.',
    cta: 'Start 3-Day Trial',
    href: '/signup',
    accent: '#10b981',
    soft: '#effcf7',
    border: '#b9ecd9',
    Icon: FlaskConical,
    trial: true,
    features: [
      feature('Import Products (All Platforms)', '20 listings', 'imports'),
      feature('Product Research (Basic)', undefined, 'research'),
      feature('AI Product Content (Basic)', undefined, 'ai'),
      feature('Schedule Listings (7-Days)', undefined, 'schedule'),
      feature('Price & Stock Monitoring', undefined, 'monitor'),
      feature('Tracking Updates (Auto)', undefined, 'tracking'),
      feature('Google Sheets Real-Time Sync', undefined, 'sheets'),
      feature('Returns & Refunds Management', undefined, 'returns'),
      feature('eBay Stores', '1 store', 'stores'),
      feature('Team Members', '1 user', 'team'),
      feature('24/7 Customer Support', 'Live Chat', 'support'),
    ],
  },
  {
    name: 'Starter Plan',
    subtitle: 'Perfect for beginners',
    price: '$19',
    suffix: '/month',
    intro: 'Start your dropshipping journey with the essential automation tools.',
    cta: 'Get Started',
    href: '/signup',
    accent: '#1689f5',
    soft: '#eef7ff',
    border: '#cde5fb',
    Icon: Send,
    features: [
      feature('Import Products (All Platforms)', '400 listings', 'imports'),
      feature('Product Research (Basic)', undefined, 'research'),
      feature('AI Product Content (Titles & Descriptions)', undefined, 'ai'),
      feature('Schedule Listings (7–30 Days)', undefined, 'schedule'),
      feature('Price & Stock Monitoring', undefined, 'monitor'),
      feature('Tracking Updates (Auto)', undefined, 'tracking'),
      feature('Google Sheets Real-Time Sync', undefined, 'sheets'),
      feature('Returns & Refunds Management', undefined, 'returns'),
      feature('eBay Stores', '1 store', 'stores'),
      feature('Team Members', '1 user', 'team'),
      feature('24/7 Customer Support', 'Live Chat', 'support'),
    ],
  },
  {
    name: 'Professional Plan',
    subtitle: 'For growing sellers',
    price: '$49',
    suffix: '/month',
    intro: 'Unlock more power, higher limits and advanced automation features.',
    cta: 'Get Started',
    href: '/signup',
    accent: '#7c22f4',
    soft: '#f5efff',
    border: '#b991ff',
    Icon: Crown,
    featured: true,
    features: [
      feature('Import Products (All Platforms)', '3,000 listings', 'imports'),
      feature('Product Research (Advanced)', undefined, 'research'),
      feature('AI Product Content (Titles, Descriptions & Images)', undefined, 'ai'),
      feature('Schedule Listings (7–30 Days)', undefined, 'schedule'),
      feature('Price & Stock Monitoring', undefined, 'monitor'),
      feature('Tracking Updates (Auto)', undefined, 'tracking'),
      feature('Google Sheets Real-Time Sync', undefined, 'sheets'),
      feature('Returns & Refunds Management', undefined, 'returns'),
      feature('eBay Stores', '5 stores', 'stores'),
      feature('Team Members', '3 users', 'team'),
      feature('24/7 Customer Support', 'Priority Support', 'support'),
    ],
  },
  {
    name: 'Enterprise Plan',
    subtitle: 'For high volume sellers',
    price: '$99',
    suffix: '/month',
    intro: 'Maximum power and higher limits for serious, higher-volume operations.',
    cta: 'Get Started',
    href: '/signup',
    accent: '#ff6b14',
    soft: '#fff5e8',
    border: '#ffd7b4',
    Icon: Building2,
    features: [
      feature('Import Products (All Platforms)', '10,000 listings', 'imports'),
      feature('Product Research (Advanced)', undefined, 'research'),
      feature('AI Product Content (Full Suite)', undefined, 'ai'),
      feature('Schedule Listings (7–30 Days)', undefined, 'schedule'),
      feature('Price & Stock Monitoring', undefined, 'monitor'),
      feature('Tracking Updates (Auto)', undefined, 'tracking'),
      feature('Google Sheets Real-Time Sync', undefined, 'sheets'),
      feature('Returns & Refunds Management', undefined, 'returns'),
      feature('eBay Stores', '12 stores', 'stores'),
      feature('Team Members', '10 users', 'team'),
      feature('24/7 Customer Support', 'VIP Support', 'support'),
    ],
  },
  {
    name: 'Custom Plan',
    subtitle: 'Contact Sales',
    price: 'Custom',
    intro: 'Need a tailored solution for your business? Build a plan around your requirements.',
    cta: 'Contact Sales',
    href: '/contact',
    accent: '#f22769',
    soft: '#fff0f6',
    border: '#ffc9da',
    Icon: Headphones,
    features: [
      { label: 'Custom Import Limits', icon: Package, tone: '#f22769', soft: '#fff0f6' },
      { label: 'Custom eBay Stores', icon: Store, tone: '#7c3aed', soft: '#f2ebff' },
      { label: 'Custom Team Members', icon: Users, tone: '#2563eb', soft: '#eef5ff' },
      { label: 'Dedicated Account Manager', icon: Headphones, tone: '#159455', soft: '#eafaf1' },
      { label: 'Priority Support', icon: Check, tone: '#e45d33', soft: '#fff0ea' },
      { label: 'Custom Integrations', icon: Plug, tone: '#6d28d9', soft: '#f1e9ff' },
      { label: 'API Access (if needed)', icon: Code2, tone: '#0f8f8a', soft: '#e9fbf8' },
      { label: 'Tailored Features', icon: SlidersHorizontal, tone: '#a21caf', soft: '#fbecff' },
      { label: 'Best for Agencies & Large Businesses', icon: Building2, tone: '#f22769', soft: '#fff0f6' },
    ],
  },
];

function FeatureRow({ item }: { item: Feature }) {
  const Icon = item.icon;
  return (
    <div className="grid grid-cols-[24px_1fr_auto] items-center gap-2 border-b border-[#f0ebf4] py-2 last:border-b-0">
      <span className="grid h-5 w-5 place-items-center rounded-[6px]" style={{ color: item.tone, background: item.soft }}>
        <Icon size={11} strokeWidth={2.2} />
      </span>
      <span className="min-w-0 text-[9px] font-semibold leading-4 text-[#544d63]">{item.label}</span>
      {item.value ? (
        <span className="pl-1 text-right text-[9px] font-black text-[#24183d]">{item.value}</span>
      ) : (
        <span className="grid h-4 w-4 place-items-center rounded-full bg-[#10b981] text-white"><Check size={10} strokeWidth={3} /></span>
      )}
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const Icon = plan.Icon;
  return (
    <article
      className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-[18px] border bg-white"
      style={{ borderColor: plan.border }}
    >
      {plan.featured && (
        <div className="flex items-center justify-between bg-[linear-gradient(90deg,#6516e8,#932cff)] px-4 py-2.5 text-white">
          <div className="flex items-center gap-2">
            <Crown size={16} />
            <span className="text-[10px] font-black uppercase tracking-[.06em]">Professional</span>
          </div>
          <span className="rounded-full bg-[#ff78bd] px-2 py-1 text-[7px] font-black uppercase tracking-[.04em]">Most Popular</span>
        </div>
      )}

      <div className={`flex items-start gap-3 border-b border-[#eee8f3] p-4 ${plan.featured ? 'pt-3' : ''}`} style={{ background: plan.soft }}>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px] border border-white bg-white/80" style={{ color: plan.accent }}>
          <Icon size={24} strokeWidth={2.2} />
        </span>
        <div className="min-w-0">
          <h3 className="text-[16px] font-[900] leading-5 tracking-[-.025em] text-[#171230]">{plan.name}</h3>
          <p className="mt-0.5 text-[9px] font-semibold text-[#6e6680]">{plan.subtitle}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        {plan.trial && (
          <div className="mb-3 rounded-[10px] bg-[linear-gradient(90deg,#16c784,#10b981)] px-3 py-2 text-[10px] font-extrabold text-white">
            Start for just $1 · 3 Days Trial
          </div>
        )}

        <div className="flex min-h-[78px] items-end gap-1">
          <span className={`${plan.price === 'Custom' ? 'text-[31px]' : 'text-[38px]'} font-black leading-none tracking-[-.05em] text-[#10062b]`}>{plan.price}</span>
          {plan.suffix && <span className="mb-1 text-[10px] font-bold text-[#665e77]">{plan.suffix}</span>}
        </div>
        <p className="mt-2 min-h-[48px] text-[9px] leading-4 text-[#6b6379]">{plan.intro}</p>

        <Link
          href={plan.href}
          className="mt-3 flex min-h-[38px] items-center justify-center gap-2 rounded-[9px] border px-3 text-[10px] font-extrabold text-white"
          style={{ borderColor: plan.accent, background: plan.accent }}
        >
          {plan.cta} <ArrowRight size={13} />
        </Link>

        <div className="mt-3 flex-1">
          {plan.features.map((item) => <FeatureRow key={item.label} item={item} />)}
        </div>

        {plan.trial && (
          <div className="mt-3 rounded-[10px] border border-[#cceede] bg-[#effbf5] p-2.5 text-[8px] leading-4 text-[#24604c]">
            <b>After 3 days,</b> the plan moves to Starter ($19/month) unless you change or cancel it.
          </div>
        )}
      </div>
    </article>
  );
}

function AddOnCard({
  Icon,
  title,
  text,
  price,
  suffix,
  accent,
  soft,
}: {
  Icon: LucideIcon;
  title: string;
  text: string;
  price: string;
  suffix: string;
  accent: string;
  soft: string;
}) {
  return (
    <div className="flex h-full items-center gap-3 rounded-[16px] border border-[#e8e0ef] p-4" style={{ background: soft }}>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[15px] border border-white bg-white" style={{ color: accent }}>
        <Icon size={25} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-black text-[#171230]">{title}</div>
        <p className="mt-1 text-[8.5px] leading-4 text-[#6f687b]">{text}</p>
      </div>
      <div className="shrink-0 text-right">
        <div className="text-[18px] font-black" style={{ color: accent }}>{price}</div>
        <div className="text-[8px] font-semibold text-[#6f687b]">{suffix}</div>
        <span className="mt-2 inline-flex items-center gap-1 rounded-[7px] border bg-white px-2 py-1 text-[8px] font-extrabold" style={{ color: accent, borderColor: `${accent}55` }}>Add to Plan <ArrowRight size={9} /></span>
      </div>
    </div>
  );
}

export default function Pricing({ full = false }: { full?: boolean }) {
  return (
    <div>
      {!full && (
        <div className="mb-8 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#e3d4fb] bg-[#f4edff] px-4 py-2 text-[10px] font-black uppercase tracking-[.1em] text-[#6d28d9]">
            <Crown size={13} /> Flexible Plans for Every Seller
          </div>
          <h3 className="mt-4 text-[30px] font-[900] leading-[1.04] tracking-[-.045em] text-[#171230] sm:text-[38px]">
            Choose Your Plan & <span className="gradient-text">Start Automating Today</span>
          </h3>
          <p className="muted mx-auto mt-3 max-w-[760px] text-[13px] leading-6">
            Powerful automation tools to help you import, list, manage and grow your dropshipping business.
          </p>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {plans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}
      </div>

      <div className="mt-4 rounded-[18px] border border-[#e7e0ef] bg-white p-4">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <div className="flex items-center gap-2 text-[16px] font-black tracking-[-.02em] text-[#171230]">
            <PackageSearch size={19} className="text-[#6d28d9]" /> Add-On Services
          </div>
          <span className="text-[10px] text-[#766e82]">Enhance your plan with focused add-ons. Pay only for what you need.</span>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          <AddOnCard
            Icon={ShoppingCart}
            title="Order Processing Add-On"
            text="Automatic order processing with supplier integration and tracking updates."
            price="$9.99"
            suffix="/month"
            accent="#6d28d9"
            soft="#faf6ff"
          />
          <AddOnCard
            Icon={PackageSearch}
            title="Hand-Picked Winning Products"
            text="Get curated, high-demand products researched by the team."
            price="$4.99"
            suffix="/month"
            accent="#f97316"
            soft="#fff8f1"
          />
          <div className="rounded-[16px] border border-[#d7efe3] bg-[#f5fff9] p-4">
            <div className="flex items-start gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[15px] border border-white bg-white text-[#10b981]"><Search size={25} /></span>
              <div>
                <div className="text-[11px] font-black text-[#171230]">Sourcing Request (from Factory)</div>
                <p className="mt-1 text-[8.5px] leading-4 text-[#6f687b]">Send product questions to suppliers and get detailed sourcing answers.</p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-[11px] border border-[#cfead9] bg-white p-2.5 text-center">
                <div className="text-[8px] font-semibold text-[#5f7469]">Up to 5 Products</div>
                <div className="mt-1 text-[17px] font-black text-[#0b8159]">$20</div>
                <div className="text-[7px] text-[#6f687b]">one-time</div>
              </div>
              <div className="rounded-[11px] border border-[#cfead9] bg-white p-2.5 text-center">
                <div className="text-[8px] font-semibold text-[#5f7469]">Up to 20 Products</div>
                <div className="mt-1 text-[17px] font-black text-[#0b8159]">$50</div>
                <div className="text-[7px] text-[#6f687b]">one-time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
