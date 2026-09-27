'use client';

import { useMemo, useState } from 'react';
import { Bell, ChevronDown, CircleDollarSign, LayoutDashboard, PackageSearch, Search, ShoppingBag, Tags, TrendingUp, Boxes, FileSpreadsheet, BarChart3, Settings, RefreshCcw } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar } from 'recharts';

const revenueData = [
  { d: 'Mon', revenue: 720, profit: 184 }, { d: 'Tue', revenue: 980, profit: 250 }, { d: 'Wed', revenue: 860, profit: 218 },
  { d: 'Thu', revenue: 1210, profit: 318 }, { d: 'Fri', revenue: 1090, profit: 276 }, { d: 'Sat', revenue: 1420, profit: 374 }, { d: 'Sun', revenue: 1320, profit: 352 },
];
const products = [
  ['#ADP-1284','Wireless Charger','eBay','$39.99','$18.40','$16.39','Completed'],
  ['#ADP-1283','Portable Blender','eBay','$44.99','$22.50','$15.70','Processing'],
  ['#ADP-1282','Smart Lamp','eBay','$31.99','$14.20','$12.21','Completed'],
];

const nav = [
  ['Overview', LayoutDashboard], ['Product Hunter', PackageSearch], ['Products', Boxes], ['Listings', Tags], ['Orders', ShoppingBag], ['Monitoring', RefreshCcw], ['Analytics', BarChart3], ['Google Sheets', FileSpreadsheet], ['Settings', Settings],
] as const;

export default function DashboardPreview({ compact = false }: { compact?: boolean }) {
  const [tab, setTab] = useState('Overview');
  const chart = useMemo(() => tab === 'Orders' ? revenueData.map(x => ({...x, revenue: Math.round(x.revenue/44), profit: Math.round(x.profit/32)})) : revenueData, [tab]);
  return <div className="product-frame overflow-hidden text-left" aria-label="AutoDropshipPrime demo dashboard">
    <div className="flex min-h-[500px] bg-[#f8f7fb]">
      {!compact && <aside className="hidden w-[190px] shrink-0 border-r border-[#e9e5f0] bg-white p-3 md:block">
        <div className="mb-4 px-2 py-2 text-xs font-extrabold text-[#3c286f]">ADP Workspace</div>
        <div className="space-y-1">{nav.map(([label,Icon])=><button key={label} onClick={()=>setTab(label)} className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12px] font-semibold ${tab===label?'bg-[#f1eaff] text-[#6126ca]':'text-[#716a7e] hover:bg-[#faf8ff]'}`}><Icon size={14}/>{label}</button>)}</div>
      </aside>}
      <div className="min-w-0 flex-1">
        <div className="flex h-[54px] items-center justify-between border-b border-[#e8e4ef] bg-white px-4">
          <div className="flex items-center gap-2 rounded-lg bg-[#f7f5fa] px-3 py-2 text-[11px] text-[#8b8497]"><Search size={13}/>Search dashboard</div>
          <div className="flex items-center gap-3"><Bell size={15} className="text-[#756d84]"/><div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#32158c] to-[#f22eb7]"/><span className="hidden text-[11px] font-bold sm:inline">Alex Morgan</span><ChevronDown size={12}/></div>
        </div>
        <div className={`${compact?'p-3':'p-4 sm:p-5'}`}>
          <div className="mb-4 flex items-end justify-between gap-3"><div><div className="text-[10px] font-bold uppercase tracking-[.12em] text-[#8b8497]">Demo workspace</div><h3 className="mt-1 text-[18px] font-extrabold tracking-[-.02em]">Good morning, Alex</h3></div><div className="hidden rounded-lg border border-[#e7e2ef] bg-white px-3 py-2 text-[10px] font-semibold text-[#716a7e] sm:block">Last 7 days</div></div>
          <div className="grid grid-cols-2 gap-2.5 xl:grid-cols-4">
            {[
              ['Total Revenue','$7,600','+8.4%',CircleDollarSign],['Net Profit','$1,972','26.0%',TrendingUp],['Orders','174','7 days',ShoppingBag],['Active Listings','1,248','32 monitored',Tags]
            ].map(([label,value,detail,Icon]: any)=><div key={label} className="rounded-xl border border-[#e8e3ef] bg-white p-3"><div className="flex items-center justify-between"><span className="text-[10px] font-semibold text-[#817a8e]">{label}</span><Icon size={14} className="text-[#7a3ee7]"/></div><div className="mt-2 text-lg font-extrabold">{value}</div><div className="mt-1 text-[9px] font-semibold text-[#7f758c]">{detail}</div></div>)}
          </div>
          <div className="mt-3 grid gap-3 xl:grid-cols-[1.7fr_1fr]">
            <div className="rounded-xl border border-[#e8e3ef] bg-white p-3"><div className="mb-2 flex items-center justify-between"><div><div className="text-[11px] font-bold">Revenue & Profit</div><div className="text-[9px] text-[#8a8296]">Demo values</div></div><div className="flex gap-2 text-[9px] font-semibold"><span className="text-[#6d28d9]">● Revenue</span><span className="text-[#ec46b8]">● Profit</span></div></div><div className="h-[190px]"><ResponsiveContainer width="100%" height="100%"><AreaChart data={chart} margin={{left:-24,right:4,top:8,bottom:0}}><defs><linearGradient id="rev" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#6d28d9" stopOpacity={.22}/><stop offset="95%" stopColor="#6d28d9" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#f0edf5" vertical={false}/><XAxis dataKey="d" tick={{fontSize:9,fill:'#8a8296'}} axisLine={false} tickLine={false}/><YAxis tick={{fontSize:9,fill:'#8a8296'}} axisLine={false} tickLine={false}/><Tooltip contentStyle={{borderRadius:10,border:'1px solid #e8e3ef',fontSize:10}}/><Area type="monotone" dataKey="revenue" stroke="#6d28d9" fill="url(#rev)" strokeWidth={2}/><Area type="monotone" dataKey="profit" stroke="#ec46b8" fill="transparent" strokeWidth={1.8}/></AreaChart></ResponsiveContainer></div></div>
            <div className="grid grid-rows-2 gap-3"><div className="rounded-xl border border-[#e8e3ef] bg-white p-3"><div className="text-[11px] font-bold">Monitoring</div><div className="mt-3 space-y-2 text-[10px]"><div className="flex justify-between"><span>Products monitored</span><b>32</b></div><div className="flex justify-between"><span>Price changes</span><b className="text-[#a76416]">4</b></div><div className="flex justify-between"><span>Low stock</span><b className="text-[#a93354]">3</b></div></div></div><div className="rounded-xl border border-[#e8e3ef] bg-white p-3"><div className="text-[11px] font-bold">Google Sheets</div><div className="mt-3 flex items-center gap-2"><span className="status good">Synced</span><span className="text-[9px] text-[#81798f]">2 min ago</span></div><div className="mt-3 h-[45px]"><ResponsiveContainer width="100%" height="100%"><BarChart data={[{v:4},{v:8},{v:5},{v:11},{v:9},{v:13}]}><Bar dataKey="v" fill="#8b3dff" radius={[3,3,0,0]}/></BarChart></ResponsiveContainer></div></div></div>
          </div>
          {!compact && <div className="mt-3 rounded-xl border border-[#e8e3ef] bg-white"><div className="flex items-center justify-between border-b border-[#eeeaf4] px-3 py-2.5"><div className="text-[11px] font-bold">Recent orders</div><span className="text-[9px] font-semibold text-[#6d28d9]">View all</span></div><div className="overflow-x-auto"><table className="w-full min-w-[580px] text-[10px]"><thead className="text-[#8a8296]"><tr>{['Order','Product','Channel','Sale','Cost','Profit','Status'].map(h=><th key={h} className="px-3 py-2 text-left font-semibold">{h}</th>)}</tr></thead><tbody>{products.map(row=><tr key={row[0]} className="border-t border-[#f0edf5]">{row.map((cell,i)=><td key={i} className="px-3 py-2.5 font-medium">{i===6?<span className={cell==='Completed'?'status good':'status neutral'}>{cell}</span>:cell}</td>)}</tr>)}</tbody></table></div></div>}
        </div>
      </div>
    </div>
  </div>;
}
