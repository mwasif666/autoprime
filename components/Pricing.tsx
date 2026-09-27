'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name:'Starter',
    eyebrow:'Start operating',
    desc:'For a focused seller workflow with the core research and listing tools.',
    price:'$XX',
    features:['Product Hunting','Auto Listing','Stock Monitoring','Orders Dashboard'],
  },
  {
    name:'Growth',
    eyebrow:'Most complete',
    desc:'For stores that want monitoring, sheet workflows and profit visibility in one place.',
    price:'$XX',
    featured:true,
    features:['Everything in Starter','Price Monitoring','Google Sheets Sync','Profit Analytics','Reports'],
  },
  {
    name:'Pro',
    eyebrow:'Configured around you',
    desc:'For broader operational requirements that need custom limits and support structure.',
    price:'Custom',
    features:['Everything in Growth','Expanded store requirements','Reporting configuration','Support configuration'],
  },
];

export default function Pricing({full=false}:{full?:boolean}) {
  const [annual,setAnnual]=useState(false);

  return (
    <div>
      <div className="mb-9 flex flex-col items-center gap-3">
        <div className="inline-flex rounded-xl border border-[#e6e0ef] bg-white p-1 text-sm shadow-sm">
          <button
            className={`rounded-lg px-4 py-2 font-bold transition ${!annual?'bg-[#211062] text-white shadow-sm':'text-[#6e657b] hover:bg-[#faf8ff]'}`}
            onClick={()=>setAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`rounded-lg px-4 py-2 font-bold transition ${annual?'bg-[#211062] text-white shadow-sm':'text-[#6e657b] hover:bg-[#faf8ff]'}`}
            onClick={()=>setAnnual(true)}
          >
            Annual
          </button>
        </div>
        <div className="text-[11px] font-semibold text-[#8c8398]">Annual billing UI is ready; final approved discount can be added later.</div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative overflow-hidden rounded-[22px] border p-6 sm:p-7 ${p.featured
              ? 'border-[#9a63ff] bg-[linear-gradient(180deg,#fdfbff,#f8f3ff)] shadow-[0_28px_80px_rgba(77,42,164,.14)]'
              : 'border-[#e8e2ef] bg-white shadow-[0_12px_40px_rgba(35,20,77,.045)]'}`}
          >
            {p.featured && <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#e9dcff] blur-3xl" />}
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div className="text-[10px] font-black uppercase tracking-[.13em] text-[#8a6db3]">{p.eyebrow}</div>
                {p.featured && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#efe6ff] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.08em] text-[#6d28d9]">
                    <Sparkles size={11}/>Featured
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-2xl font-extrabold tracking-[-.02em]">{p.name}</h3>
              <p className="muted mt-3 min-h-[72px] text-sm leading-6">{p.desc}</p>

              <div className="mt-7 border-y border-[#ede7f3] py-5">
                <div className="flex items-end gap-1">
                  <span className="text-[44px] leading-none font-black tracking-[-.045em]">{p.price}</span>
                  {p.price!=='Custom'&&<span className="mb-1 text-sm text-[#7a7287]">/mo</span>}
                </div>
                <div className="mt-2 text-xs text-[#8a8296]">{p.price==='Custom'?'Contact sales for approved commercial terms':'Configurable placeholder pricing'}</div>
              </div>

              <Link href={p.name==='Pro'?'/contact':'/signup'} className={`${p.featured?'btn-primary':'btn-secondary'} mt-6 w-full text-sm`}>
                {p.name==='Pro'?'Contact Sales':'Start Free'} <ArrowRight size={15}/>
              </Link>

              <div className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-[#f0e8ff] text-[#6d28d9]"><Check size={11}/></span>
                    <span className="font-semibold">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {full && (
        <div className="mt-14">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <div className="eyebrow">Plan comparison</div>
              <h2 className="mt-3 text-2xl font-extrabold tracking-[-.025em]">Compare capabilities without invented limits.</h2>
            </div>
            <div className="staging-note max-w-md">Exact store counts, listing limits, support levels and pricing remain configurable until commercial data is approved.</div>
          </div>
          <div className="table-shell">
            <table>
              <thead><tr><th>Capability</th><th>Starter</th><th>Growth</th><th>Pro</th></tr></thead>
              <tbody>
                {['Stores','Active Listings','Product Hunting','Auto Listing','Stock Monitoring','Price Monitoring','Google Sheets Sync','Orders Dashboard','Calculation Dashboard','Profit Dashboard','Reports','Support'].map((r,i)=>(
                  <tr key={r}>
                    <td className="font-bold">{r}</td>
                    <td>{i<5?'Included':'—'}</td>
                    <td>{i<11?'Included':'Configured'}</td>
                    <td>Configured</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
