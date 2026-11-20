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

const PLANS_API = 'https://app.autodropshipprime.com/api/plans';
const REGISTER_URL = 'https://panel.autodropshipprime.com/user/register';

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

type AddonId = 'order_processing' | 'hand_picked' | 'sourcing_5' | 'sourcing_20';

const ADDON_LABELS: Record<AddonId, string> = {
  order_processing: 'Order Processing',
  hand_picked: 'Hand-Picked Products',
  sourcing_5: 'Sourcing (5 products)',
  sourcing_20: 'Sourcing (20 products)',
};

// e.g. ?plan_id=2&billing_cycle=annual&addons=order_processing,sourcing_5
function buildRegisterUrl(planId: number, cycle: Cycle, addons: AddonId[]) {
  const params = new URLSearchParams({ plan_id: String(planId), billing_cycle: cycle });
  if (addons.length) params.set('addons', addons.join(','));
  return `${REGISTER_URL}?${params.toString().replace(/%2C/g, ',')}`;
}

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

function PlanCard({ plan, index, cycle, maxDiscount, addons }: { plan: ApiPlan; index: number; cycle: Cycle; maxDiscount: number; addons: AddonId[] }) {
  const [expanded, setExpanded] = useState(false);
  const theme = themes[index % themes.length];
  const Icon = theme.Icon;
  const featured = plan.title.trim().toLowerCase() === 'pro';
  const oneTime = plan.billing_type === 'one_time';
  const monthly = plan.monthly_price ?? plan.price;
  const annual = cycle === 'annual';
  // Use the API's annual price when present; otherwise apply the max annual discount to 12 months.
  const discount = plan.annual_price != null ? plan.annual_discount_percent : maxDiscount;
  const yearlyOriginal = Math.round(monthly * 12 * 100) / 100;
  const yearlyPrice = plan.annual_price ?? Math.round(yearlyOriginal * (1 - discount / 100) * 100) / 100;

  let price: number;
  let suffix: string;
  if (annual) {
    price = yearlyPrice;
    suffix = '/year';
  } else if (oneTime) {
    price = plan.price;
    suffix = `/ ${plan.billing_interval_label}`;
  } else {
    price = monthly;
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
          {annual && discount > 0 ? (
            <>
              <span className="mr-1 text-[#9a93a8] line-through">{money(yearlyOriginal, plan.currency)}</span>
              {discount}% OFF · {money(Math.round((yearlyPrice / 12) * 100) / 100, plan.currency)}/month
            </>
          ) : ''}
        </p>

        <Link
          href={buildRegisterUrl(plan.id, annual ? 'annual' : 'monthly', addons)}
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
  selected,
  onToggle,
}: {
  Icon: LucideIcon;
  title: string;
  text: string;
  price: string;
  suffix: string;
  accent: string;
  soft: string;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="flex h-full flex-col rounded-[16px] border p-4 transition-shadow"
      style={{ background: soft, borderColor: selected ? accent : '#e8e0ef', boxShadow: selected ? `0 0 0 3px ${accent}26` : undefined }}
    >
      <div className="flex items-start gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] border border-white bg-white" style={{ color: accent }}>
          <Icon size={24} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-black leading-5 text-[#171230]">{title}</div>
          <p className="mt-0.5 text-[11px] leading-[1.45] text-[#6f687b]">{text}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-1 items-end justify-between gap-3 border-t border-black/5 pt-3">
        <div className="leading-none">
          <span className="text-[24px] font-black tracking-[-.03em]" style={{ color: accent }}>{price}</span>
          <span className="ml-1 text-[11px] font-semibold text-[#6f687b]">{suffix}</span>
        </div>
        <button
          type="button"
          aria-pressed={selected}
          onClick={onToggle}
          className="inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-[10px] border px-4 text-[12px] font-extrabold transition-colors"
          style={selected ? { color: '#fff', background: accent, borderColor: accent } : { color: accent, background: '#fff', borderColor: accent }}
        >
          {selected ? <><Check size={14} strokeWidth={3} /> Added</> : <>+ Add</>}
        </button>
      </div>
    </div>
  );
}

export default function Pricing({ full = false }: { full?: boolean }) {
  const [plans, setPlans] = useState<ApiPlan[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [cycle, setCycle] = useState<Cycle>('monthly');
  const [maxDiscount, setMaxDiscount] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState<AddonId[]>([]);

  const toggleAddon = (id: AddonId) =>
    setSelectedAddons((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      // Sourcing packs are mutually exclusive.
      const base = id.startsWith('sourcing_') ? prev.filter((x) => !x.startsWith('sourcing_')) : prev;
      return [...base, id];
    });

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

  const hasAnnual = useMemo(() => plans.some((p) => p.billing_type !== 'one_time'), [plans]);

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
          {plans.map((plan, i) => <PlanCard key={plan.id} plan={plan} index={i} cycle={cycle} maxDiscount={maxDiscount} addons={selectedAddons} />)}
        </div>
      )}

      {/* <div className="mt-4 rounded-[18px] border border-[#e7e0ef] bg-white p-4">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <div className="flex items-center gap-2 text-[16px] font-black tracking-[-.02em] text-[#171230]">
            <PackageSearch size={19} className="text-[#6d28d9]" /> Add-On Services
          </div>
          <span className="text-[10px] text-[#766e82]">
            Optional. Tick the add-ons you want, then press Get Started on a plan. Your selection is carried to checkout.
          </span>
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
            selected={selectedAddons.includes('order_processing')}
            onToggle={() => toggleAddon('order_processing')}
          />
          <AddOnCard
            Icon={PackageSearch}
            title="Hand-Picked Winning Products"
            text="Get curated, high-demand products researched by the team."
            price="$4.99"
            suffix="/month"
            accent="#f97316"
            soft="#fff8f1"
            selected={selectedAddons.includes('hand_picked')}
            onToggle={() => toggleAddon('hand_picked')}
          />
          <div
            className="flex h-full flex-col rounded-[16px] border p-4 transition-shadow"
            style={{
              background: '#f5fff9',
              borderColor: selectedAddons.some((a) => a.startsWith('sourcing_')) ? '#10b981' : '#d7efe3',
              boxShadow: selectedAddons.some((a) => a.startsWith('sourcing_')) ? '0 0 0 3px #10b98126' : undefined,
            }}
          >
            <div className="flex items-start gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] border border-white bg-white text-[#10b981]"><Search size={24} /></span>
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-black leading-5 text-[#171230]">Sourcing Request (from Factory)</div>
                <p className="mt-0.5 text-[11px] leading-[1.45] text-[#6f687b]">Send product questions to suppliers and get detailed sourcing answers.</p>
              </div>
            </div>
            <div className="mt-4 grid flex-1 grid-cols-2 gap-2.5 border-t border-black/5 pt-3">
              {([['sourcing_5', 'Up to 5 Products', '$20'], ['sourcing_20', 'Up to 20 Products', '$50']] as const).map(([id, label, price]) => {
                const on = selectedAddons.includes(id);
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggleAddon(id)}
                    className={`relative flex flex-col items-center justify-center rounded-[12px] border px-2 py-3 text-center transition-colors ${on ? 'border-[#10b981] bg-[#e6faf2]' : 'border-[#cfead9] bg-white hover:border-[#10b981]'}`}
                  >
                    <span className={`absolute right-2 top-2 grid h-4 w-4 place-items-center rounded-full border ${on ? 'border-[#10b981] bg-[#10b981] text-white' : 'border-[#b7d9c8] bg-white text-transparent'}`}>
                      <Check size={10} strokeWidth={3} />
                    </span>
                    <span className="text-[11px] font-semibold text-[#5f7469]">{label}</span>
                    <span className="mt-1 text-[24px] font-black leading-none tracking-[-.03em] text-[#0b8159]">{price}</span>
                    <span className="mt-1 text-[10px] text-[#6f687b]">one-time</span>
                    <span className={`mt-2.5 inline-flex min-h-[32px] w-full items-center justify-center rounded-[9px] border text-[12px] font-extrabold ${on ? 'border-[#10b981] bg-[#10b981] text-white' : 'border-[#10b981] bg-white text-[#0b8159]'}`}>
                      {on ? 'Added' : '+ Add'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="mt-3 text-[11px] font-semibold text-[#6e6680]">
          {selectedAddons.length === 0
            ? 'No add-ons selected.'
            : `Selected: ${selectedAddons.map((id) => ADDON_LABELS[id]).join(', ')}`}
        </p>
      </div> */}
    </div>
  );
}
