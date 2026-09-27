'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Menu, X, PackageSearch, ClipboardList, RefreshCcw, Tags, BarChart3, ReceiptText, FileSpreadsheet, Boxes, Plug, WandSparkles } from 'lucide-react';
import Tooltip from '@mui/material/Tooltip';

const groups = [
  { title: 'Automation', items: [
    { label: 'Auto Product Hunting', href: '/features/product-hunting', icon: PackageSearch, text: 'Research products and margin context.' },
    { label: 'Auto Listing', href: '/features/auto-listing', icon: ClipboardList, text: 'Prepare listings in one workflow.' },
    { label: 'Price Monitoring', href: '/features/price-monitoring', icon: Tags, text: 'Review supplier price changes.' },
    { label: 'Stock Monitoring', href: '/features/stock-monitoring', icon: RefreshCcw, text: 'Track stock-state changes.' },
  ]},
  { title: 'Analytics', items: [
    { label: 'Profit Dashboard', href: '/features/analytics', icon: BarChart3, text: 'Understand revenue, costs and margin.' },
    { label: 'Reports', href: '/features/reports', icon: ReceiptText, text: 'Review sales, orders and inventory.' },
    { label: 'Google Sheets Sync', href: '/features/google-sheets', icon: FileSpreadsheet, text: 'Keep finance records structured.' },
    { label: 'Product Image Studio', href: '/features/auto-listing', icon: WandSparkles, text: 'Prepare listing-ready product visuals.' },
  ]},
  { title: 'Operations', items: [
    { label: 'Products', href: '/features', icon: Boxes, text: 'Manage product workflows.' },
    { label: 'Orders', href: '/features', icon: ClipboardList, text: 'Review sales, costs and statuses.' },
    { label: 'Integrations', href: '/features', icon: Plug, text: 'Connect confirmed workflow tools.' },
  ]},
];

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [mega, setMega] = useState(false);

  return <header className="sticky top-0 z-50 border-b border-[#eeeaf4] bg-white/95 backdrop-blur-md">
    <div className="container-site flex h-[72px] items-center justify-between gap-8">
      <Link href="/" className="flex shrink-0 items-center" aria-label="AutoDropshipPrime home">
        <Image src="/logo.png" alt="AutoDropshipPrime" width={210} height={110} className="h-[42px] w-auto object-contain" priority />
      </Link>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
        <div className="relative" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
          <button className="flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-[#faf8ff]" aria-expanded={mega}>Product <ChevronDown size={15}/></button>
          {mega && <div className="absolute left-1/2 top-full w-[880px] -translate-x-[42%] pt-3">
            <div className="grid grid-cols-3 gap-4 rounded-[16px] border border-[#e9e4f2] bg-white p-5">
              {groups.map(group=><div key={group.title}>
                <div className="mb-2 px-2 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#80768f]">{group.title}</div>
                <div className="space-y-1">{group.items.map(item=><Link key={item.label} href={item.href} className="group flex gap-3 rounded-xl p-2.5 hover:bg-[#faf8ff]">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#f4efff] text-[#6d28d9]"><item.icon size={17}/></span>
                  <span><span className="block text-[13px] font-bold">{item.label}</span><span className="mt-0.5 block text-[11px] leading-4 text-[#736c80]">{item.text}</span></span>
                </Link>)}</div>
              </div>)}
            </div>
          </div>}
        </div>
        <Link href="/features" className="rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-[#faf8ff]">Solutions</Link>
        <Tooltip title="Resources pages are prepared for future content"><span className="cursor-help rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-[#faf8ff]">Resources</span></Tooltip>
        <Link href="/pricing" className="rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-[#faf8ff]">Pricing</Link>
      </nav>
      <div className="hidden items-center gap-3 lg:flex"><Link href="/login" className="px-3 py-2 text-sm font-bold">Login</Link><Link href="/signup" className="btn-primary text-sm">Get Started</Link></div>
      <button className="grid h-10 w-10 place-items-center rounded-xl border border-[#e9e4f2] lg:hidden" aria-label="Open menu" onClick={() => setMobile(!mobile)}>{mobile?<X/>:<Menu/>}</button>
    </div>
    {mobile&&<div className="border-t border-[#eeeaf4] bg-white lg:hidden"><div className="container-site py-5">
      <div className="mb-2 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#80768f]">Product</div>
      <div className="grid gap-1 sm:grid-cols-2">{groups.flatMap(g=>g.items).slice(0,8).map(item=><Link key={item.label} onClick={()=>setMobile(false)} href={item.href} className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-[#faf8ff]"><item.icon size={17} className="text-[#6d28d9]"/><span className="text-sm font-semibold">{item.label}</span></Link>)}</div>
      <div className="mt-4 grid gap-2 border-t border-[#eeeaf4] pt-4"><Link href="/features" onClick={()=>setMobile(false)} className="rounded-xl px-3 py-2.5 font-semibold">Solutions</Link><Link href="/pricing" onClick={()=>setMobile(false)} className="rounded-xl px-3 py-2.5 font-semibold">Pricing</Link><div className="mt-2 grid grid-cols-2 gap-3"><Link href="/login" className="btn-secondary text-sm">Login</Link><Link href="/signup" className="btn-primary text-sm">Get Started</Link></div></div>
    </div></div>}
  </header>;
}
