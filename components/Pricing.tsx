'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

const plans = [
  {name:'Starter',eyebrow:'Core workflow',desc:'For getting product research, listings and stock visibility into one place.',price:'$XX',features:['Product Hunting','Auto Listing','Stock Monitoring','Orders Dashboard']},
  {name:'Growth',eyebrow:'Most popular',desc:'For stores that need price monitoring, sheet updates, analytics and reports.',price:'$XX',featured:true,features:['Everything in Starter','Price Monitoring','Google Sheets Sync','Profit Analytics','Reports']},
  {name:'Pro',eyebrow:'Custom scale',desc:'For broader operations that need custom limits, reporting and support.',price:'Custom',features:['Everything in Growth','Expanded store requirements','Reporting configuration','Support configuration']},
];

export default function Pricing({full=false}:{full?:boolean}) {
  const [annual,setAnnual]=useState(false);
  return <div>
    <div className="mb-8 flex justify-center">
      <div className="inline-flex rounded-xl border border-[#e6e0ef] bg-white p-1 text-sm">
        <button className={'rounded-lg px-4 py-2 font-bold transition ' + (!annual?'bg-[#211062] text-white':'text-[#6e657b] hover:bg-[#faf8ff]')} onClick={()=>setAnnual(false)}>Monthly</button>
        <button className={'rounded-lg px-4 py-2 font-bold transition ' + (annual?'bg-[#211062] text-white':'text-[#6e657b] hover:bg-[#faf8ff]')} onClick={()=>setAnnual(true)}>Annual</button>
      </div>
    </div>

    <div className="grid gap-4 lg:grid-cols-3">
      {plans.map(p=><div key={p.name} className={'relative overflow-hidden rounded-[18px] border p-6 ' + (p.featured?'border-[#9a63ff] bg-[#fbf8ff]':'border-[#e8e2ef] bg-white')}>
        <div className="flex items-center justify-between gap-4">
          <div className="text-[10px] font-black uppercase tracking-[.13em] text-[#8a6db3]">{p.eyebrow}</div>
          {p.featured&&<span className="inline-flex items-center gap-1 rounded-full bg-[#efe6ff] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.08em] text-[#6d28d9]"><Sparkles size={11}/>Featured</span>}
        </div>
        <h3 className="mt-4 text-[22px] font-extrabold tracking-[-.02em]">{p.name}</h3>
        <p className="muted mt-3 min-h-[68px] text-sm leading-6">{p.desc}</p>
        <div className="mt-6 border-y border-[#ede7f3] py-5"><div className="flex items-end gap-1"><span className="text-[40px] leading-none font-black tracking-[-.04em]">{p.price}</span>{p.price!=='Custom'&&<span className="mb-1 text-sm text-[#7a7287]">/mo</span>}</div></div>
        <Link href={p.name==='Pro'?'/contact':'/signup'} className={(p.featured?'btn-primary':'btn-secondary') + ' mt-6 w-full text-sm'}>{p.name==='Pro'?'Contact Sales':'Start Free'} <ArrowRight size={15}/></Link>
        <div className="mt-6 space-y-3">{p.features.map(f=><div key={f} className="flex items-center gap-2.5 text-sm"><span className="grid h-5 w-5 place-items-center rounded-full bg-[#f0e8ff] text-[#6d28d9]"><Check size={11}/></span><span className="font-semibold">{f}</span></div>)}</div>
      </div>)}
    </div>

    {full&&<div className="mt-12">
      <div className="mb-5"><div className="eyebrow">Plan comparison</div><h2 className="mt-3 text-[25px] font-extrabold tracking-[-.025em]">Compare the core capabilities.</h2></div>
      <div className="table-shell"><table><thead><tr><th>Capability</th><th>Starter</th><th>Growth</th><th>Pro</th></tr></thead><tbody>
        {['Stores','Active Listings','Product Hunting','Auto Listing','Stock Monitoring','Price Monitoring','Google Sheets Sync','Orders Dashboard','Profit Dashboard','Reports','Support'].map((row,i)=><tr key={row}><td className="font-bold">{row}</td><td>{i<5?'Included':'—'}</td><td>{i<10?'Included':'Configured'}</td><td>Configured</td></tr>)}
      </tbody></table></div>
    </div>}
  </div>
}
