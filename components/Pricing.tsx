'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Check,
  Crown,
  FlaskConical,
  Loader2,
  PackageSearch,
  Search,
  Send,
  ShoppingCart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const PLANS_API = 'https://autods.youbasautopilot.com/api/plans';
const REGISTER_URL = 'https://dsapp.youbasautopilot.com/user/register';

type ApiPlan = {
  id: number;
  title: string;
  description: string;
  inclusions: string[];
  price: number;
  monthly_price: number | null;
  annual_price: number | null;
  annual_monthly_equivalent: number | null;
  annual_discount_percent: number;
  has_annual_plan: boolean;
  currency: string;
  billing_type: string;
  billing_interval_label: string;
  duration_days: number | null;
  is_active: boolean;
  sort_order: number;
};

type Cycle = 'monthly' | 'annual';

const themes: { accent: string; soft: string; border: string; Icon: LucideIcon }[] = [
  { accent: '#1689f5', soft: '#eef7ff', border: '#cde5fb', Icon: Send },
  { accent: '#7c22f4', soft: '#f5efff', border: '#b991ff', Icon: Crown },
  { accent: '#10b981', soft: '#effcf7', border: '#b9ecd9', Icon: FlaskConical },
  { accent: '#ff6b14', soft: '#fff5e8', border: '#ffd7b4', Icon: Building2 },
];

function money(value: number, currency: string) {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    }).format(value);
  } catch {
    return `$${value}`;
  }
}

const VISIBLE_FEATURES = 10;

function FeatureRow({ label, tone }: { label: string; tone: string }) {
  return (
    <div className="grid grid-cols-[20px_1fr] items-start gap-2 border-b border-[#f0ebf4] py-2 last:border-b-0">
      <span className="mt-0.5 grid h-4 w-4 place-items-center rounded-full text-white" style={{ background: tone }}>
        <Check size={10} strokeWidth={3} />
      </span>
      <span className="min-w-0 text-[10px] font-semibold leading-4 text-[#544d63]">{label}</span>
    </div>
  );
}

function PlanCard({ plan, index, cycle }: { plan: ApiPlan; index: number; cycle: Cycle }) {
  const [expanded, setExpanded] = useState(false);
  const theme = themes[index % themes.length];
  const Icon = theme.Icon;
  const featured = plan.title.trim().toLowerCase() === 'pro';
  const oneTime = plan.billing_type === 'one_time';
  const annual = cycle === 'annual' && plan.has_annual_plan && plan.annual_price != null;

  let price: number;
  let suffix: string;
  if (oneTime) {
    price = plan.price;
    suffix = `/ ${plan.billing_interval_label}`;
  } else if (annual) {
    price = plan.annual_price as number;
    suffix = '/year';
  } else {
    price = plan.monthly_price ?? plan.price;
    suffix = '/month';
  }

  const features = expanded ? plan.inclusions : plan.inclusions.slice(0, VISIBLE_FEATURES);
  const hidden = plan.inclusions.length - VISIBLE_FEATURES;

  return (
    <article
      className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-[18px] border bg-white"
      style={{ borderColor: theme.border }}
    >
      {featured && (
        <div className="flex items-center justify-between bg-[linear-gradient(90deg,#6516e8,#932cff)] px-4 py-2.5 text-white">
          <div className="flex items-center gap-2">
            <Crown size={16} />
            <span className="text-[10px] font-black uppercase tracking-[.06em]">{plan.title}</span>
          </div>
          <span className="rounded-full bg-[#ff78bd] px-2 py-1 text-[7px] font-black uppercase tracking-[.04em]">Most Popular</span>
        </div>
      )}

      <div className={`flex items-start gap-3 border-b border-[#eee8f3] p-4 ${featured ? 'pt-3' : ''}`} style={{ background: theme.soft }}>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px] border border-white bg-white/80" style={{ color: theme.accent }}>
          <Icon size={24} strokeWidth={2.2} />
        </span>
        <div className="min-w-0">
          <h3 className="text-[16px] font-[900] leading-5 tracking-[-.025em] text-[#171230]">{plan.title}</h3>
          <p className="mt-0.5 text-[10px] font-semibold text-[#6e6680]">{plan.description}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex min-h-[48px] flex-wrap items-end gap-1">
          <span className="text-[38px] font-black leading-none tracking-[-.05em] text-[#10062b]">{money(price, plan.currency)}</span>
          <span className="mb-1 text-[10px] font-bold text-[#665e77]">{suffix}</span>
        </div>
        <p className="mt-1 min-h-[16px] text-[10px] font-bold text-[#0b8159]">
          {annual && plan.annual_monthly_equivalent != null
            ? `Just ${money(plan.annual_monthly_equivalent, plan.currency)}/month · save ${plan.annual_discount_percent}%`
            : ''}
        </p>

        <Link
          href={`${REGISTER_URL}?plan_id=${plan.id}${annual ? '&billing_cycle=annual' : ''}`}
          className="mt-3 flex min-h-[38px] items-center justify-center gap-2 rounded-[9px] border px-3 text-[11px] font-extrabold text-white"
          style={{ borderColor: theme.accent, background: theme.accent }}
        >
          {oneTime ? `Start ${plan.title}` : 'Get Started'} <ArrowRight size={13} />
        </Link>

        <div className="mt-3 flex-1">
          {features.map((item) => <FeatureRow key={item} label={item} tone={theme.accent} />)}
        </div>

        {hidden > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 self-start text-[10px] font-extrabold"
            style={{ color: theme.accent }}
          >
            {expanded ? 'Show less' : `+ ${hidden} more features`}
          </button>
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
  const [plans, setPlans] = useState<ApiPlan[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [cycle, setCycle] = useState<Cycle>('monthly');
  const [maxDiscount, setMaxDiscount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetch(PLANS_API, { signal: controller.signal, headers: { Accept: 'application/json' } })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!data?.success || !Array.isArray(data.plans)) throw new Error('Bad response');
        const active = (data.plans as ApiPlan[])
          .filter((p) => p.is_active)
          .sort((a, b) => a.sort_order - b.sort_order);
        setPlans(active);
        setMaxDiscount(Number(data.max_annual_discount_percent) || 0);
        setStatus('ready');
      })
      .catch((err) => {
        if (err?.name !== 'AbortError') setStatus('error');
      });
    return () => controller.abort();
  }, []);

  const hasAnnual = useMemo(() => plans.some((p) => p.has_annual_plan && p.annual_price != null), [plans]);

  return (
    <div>
      {!full && (
        <div className="mb-8 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#e3d4fb] bg-[#f4edff] px-4 py-2 text-[10px] font-black uppercase tracking-[.1em] text-[#6d28d9]">
            <Crown size={13} /> Flexible Plans for Every Seller
          </div>
          <h3 className="mt-4 text-[30px] font-[900] leading-[1.04] tracking-[-.045em] text-[#171230] sm:text-[38px]">
            Choose Your Plan &amp; <span className="gradient-text">Start Automating Today</span>
          </h3>
          <p className="muted mx-auto mt-3 max-w-[760px] text-[13px] leading-6">
            Powerful automation tools to help you import, list, manage and grow your dropshipping business.
          </p>
        </div>
      )}

      {hasAnnual && (
        <div className="mb-5 flex justify-center">
          <div className="inline-flex rounded-full border border-[#e3d4fb] bg-white p-1 text-[11px] font-black">
            {(['monthly', 'annual'] as Cycle[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCycle(c)}
                className={`rounded-full px-4 py-2 capitalize ${cycle === c ? 'bg-[#6d28d9] text-white' : 'text-[#6d28d9]'}`}
              >
                {c}
                {c === 'annual' && maxDiscount > 0 && <span className="ml-1.5 opacity-90">Save up to {maxDiscount}%</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {status === 'loading' && (
        <div className="flex items-center justify-center gap-2 py-16 text-[13px] font-semibold text-[#6e6680]">
          <Loader2 size={18} className="animate-spin" /> Loading plans…
        </div>
      )}
      {status === 'error' && (
        <div className="rounded-[18px] border border-[#ffc9da] bg-[#fff0f6] p-6 text-center text-[13px] font-semibold text-[#8a1c45]">
          We couldn&apos;t load pricing right now. Please refresh the page or try again shortly.
        </div>
      )}
      {status === 'ready' && (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, i) => <PlanCard key={plan.id} plan={plan} index={i} cycle={cycle} />)}
        </div>
      )}

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
