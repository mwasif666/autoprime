'use client';

import { useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ArrowDownRight, ArrowUpRight, CircleDollarSign, Percent, Receipt, ShoppingBag } from 'lucide-react';

const trend = [
  {d:'Sep 12',sales:920,cost:590,profit:214,orders:18},
  {d:'Sep 13',sales:1180,cost:710,profit:286,orders:23},
  {d:'Sep 14',sales:1080,cost:680,profit:254,orders:21},
  {d:'Sep 15',sales:1360,cost:805,profit:342,orders:27},
  {d:'Sep 16',sales:1490,cost:900,profit:374,orders:31},
  {d:'Sep 17',sales:1310,cost:786,profit:326,orders:26},
  {d:'Sep 18',sales:1670,cost:980,profit:427,orders:34},
];

const products = [
  {name:'Wireless Charger', profit:612},
  {name:'Mini Projector', profit:498},
  {name:'Portable Blender', profit:423},
  {name:'Smart Lamp', profit:356},
];

const mix = [
  {name:'Product cost', value:5451, color:'#cbb9ee'},
  {name:'Marketplace fees', value:1026, color:'#9d73e7'},
  {name:'Net profit', value:2223, color:'#5d25c7'},
];

export default function AnalyticsPanel(){
  const [range,setRange]=useState('7 Days');
  const stats = [
    {label:'Gross Sales',value:'$9,010',change:'+8.4%',positive:true,icon:CircleDollarSign},
    {label:'Net Profit',value:'$2,223',change:'+11.2%',positive:true,icon:ArrowUpRight},
    {label:'Orders',value:'180',change:'+6.1%',positive:true,icon:ShoppingBag},
    {label:'Fees',value:'$1,026',change:'-1.8%',positive:false,icon:Receipt},
    {label:'Profit Margin',value:'24.7%',change:'+1.4%',positive:true,icon:Percent},
  ];

  return <div className="product-frame overflow-hidden">
    <div className="flex flex-col gap-3 border-b border-[#e9e4ef] bg-[#fbfaff] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <div><div className="text-sm font-extrabold">Profit dashboard</div><div className="mt-1 text-xs text-[#847c91]">Revenue, costs, margin and product performance</div></div>
      <div className="flex flex-wrap gap-1 rounded-lg border border-[#e7e2ee] bg-white p-1">{['Today','7 Days','30 Days','Custom'].map(x=><button key={x} onClick={()=>setRange(x)} className={'rounded-md px-2.5 py-1.5 text-[10px] font-bold ' + (range===x?'bg-[#211062] text-white':'text-[#71697e] hover:bg-[#faf8ff]')}>{x}</button>)}</div>
    </div>

    <div className="grid border-b border-[#eee9f4] sm:grid-cols-2 lg:grid-cols-5">
      {stats.map(({label,value,change,positive,icon:Icon})=><div key={label} className="border-r border-b border-[#eee9f4] p-4 last:border-r-0 sm:border-b-0">
        <div className="flex items-center justify-between gap-3"><span className="text-[10px] font-bold uppercase tracking-[.08em] text-[#81798e]">{label}</span><Icon size={14} className="text-[#6d28d9]"/></div>
        <div className="mt-2 text-[22px] font-extrabold tracking-[-.03em]">{value}</div>
        <div className={'mt-1 flex items-center gap-1 text-[10px] font-bold ' + (positive?'text-[#14866d]':'text-[#a76416]')}>{positive?<ArrowUpRight size={11}/>:<ArrowDownRight size={11}/>} {change}</div>
      </div>)}
    </div>

    <div className="grid gap-0 xl:grid-cols-[1.55fr_.9fr]">
      <div className="border-b border-[#eee9f4] p-4 sm:p-5 xl:border-b-0 xl:border-r">
        <div className="flex items-center justify-between gap-4"><div><div className="text-xs font-extrabold">Profit trend</div><div className="mt-1 text-[10px] text-[#8a8296]">Sales and profit across the selected period</div></div><div className="flex gap-3 text-[9px] font-bold"><span className="text-[#6d28d9]">● Sales</span><span className="text-[#ec46b8]">● Profit</span></div></div>
        <div className="mt-3 h-[270px]"><ResponsiveContainer width="100%" height="100%"><AreaChart data={trend} margin={{left:-20,right:8,top:10,bottom:0}}><defs><linearGradient id="salesFill2" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#6d28d9" stopOpacity={.16}/><stop offset="95%" stopColor="#6d28d9" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#f0edf5" vertical={false}/><XAxis dataKey="d" tick={{fontSize:9,fill:'#8a8296'}} axisLine={false} tickLine={false}/><YAxis tick={{fontSize:9,fill:'#8a8296'}} axisLine={false} tickLine={false}/><Tooltip contentStyle={{borderRadius:8,border:'1px solid #e8e3ef',fontSize:10,boxShadow:'none'}}/><Area type="monotone" dataKey="sales" stroke="#6d28d9" strokeWidth={2} fill="url(#salesFill2)"/><Area type="monotone" dataKey="profit" stroke="#ec46b8" strokeWidth={2} fill="transparent"/></AreaChart></ResponsiveContainer></div>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-1">
        <div className="border-b border-[#eee9f4] p-4 sm:border-b-0 sm:border-r sm:p-5 xl:border-b xl:border-r-0">
          <div className="text-xs font-extrabold">Cost mix</div>
          <div className="mt-1 text-[10px] text-[#8a8296]">How gross sales are distributed</div>
          <div className="mt-2 grid grid-cols-[150px_1fr] items-center gap-2">
            <div className="h-[150px]"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={mix} dataKey="value" nameKey="name" innerRadius={42} outerRadius={62} paddingAngle={3}>{mix.map(item=><Cell key={item.name} fill={item.color}/>)}</Pie><Tooltip contentStyle={{borderRadius:8,border:'1px solid #e8e3ef',fontSize:10,boxShadow:'none'}}/></PieChart></ResponsiveContainer></div>
            <div className="space-y-2">{mix.map(item=><div key={item.name} className="flex items-center justify-between gap-3 text-[10px]"><span className="flex items-center gap-2 text-[#756d82]"><span className="h-2 w-2 rounded-full" style={{background:item.color}}/>{item.name}</span><b>{'$' + item.value.toLocaleString()}</b></div>)}</div>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="text-xs font-extrabold">Profit by product</div>
          <div className="mt-1 text-[10px] text-[#8a8296]">Top contributors in this period</div>
          <div className="mt-4 space-y-3">{products.map((item,i)=><div key={item.name}><div className="flex items-center justify-between gap-3 text-[10px]"><span className="font-semibold">{item.name}</span><b>{'$' + item.profit}</b></div><div className="mt-1.5 h-1.5 rounded-full bg-[#f0ebf6]"><div className="h-full rounded-full bg-[#6d28d9]" style={{width:String(92-i*13)+'%'}}/></div></div>)}</div>
        </div>
      </div>
    </div>

    <div className="border-t border-[#eee9f4] p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between"><div className="text-xs font-extrabold">Orders & margin</div><div className="text-[10px] text-[#8a8296]">Daily order volume</div></div>
      <div className="h-[150px]"><ResponsiveContainer width="100%" height="100%"><BarChart data={trend} margin={{left:-28,right:8,top:5,bottom:0}}><CartesianGrid stroke="#f0edf5" vertical={false}/><XAxis dataKey="d" tick={{fontSize:9,fill:'#8a8296'}} axisLine={false} tickLine={false}/><YAxis tick={{fontSize:9,fill:'#8a8296'}} axisLine={false} tickLine={false}/><Tooltip contentStyle={{borderRadius:8,border:'1px solid #e8e3ef',fontSize:10,boxShadow:'none'}}/><Bar dataKey="orders" fill="#8b3dff" radius={[4,4,0,0]} maxBarSize={28}/></BarChart></ResponsiveContainer></div>
    </div>
  </div>
}
