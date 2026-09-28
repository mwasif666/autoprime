'use client';

import { useMemo, useState } from 'react';
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

const ranges = {
  Today: {
    stats: { sales: 1380, profit: 344, orders: 27, fees: 154, margin: 24.9 },
    change: { sales: '+4.1%', profit: '+5.8%', orders: '+3.8%', fees: '-0.6%', margin: '+0.5%' },
    trend: [
      {d:'9am',sales:120,profit:28,orders:2},{d:'11am',sales:260,profit:62,orders:5},{d:'1pm',sales:430,profit:102,orders:8},
      {d:'3pm',sales:690,profit:170,orders:13},{d:'5pm',sales:980,profit:244,orders:19},{d:'7pm',sales:1180,profit:294,orders:23},{d:'Now',sales:1380,profit:344,orders:27},
    ],
    products: [{name:'Wireless Charger',profit:96},{name:'Portable Blender',profit:82},{name:'Mini Projector',profit:68},{name:'Smart Lamp',profit:52}],
  },
  '7 Days': {
    stats: { sales: 9010, profit: 2223, orders: 180, fees: 1026, margin: 24.7 },
    change: { sales: '+8.4%', profit: '+11.2%', orders: '+6.1%', fees: '-1.8%', margin: '+1.4%' },
    trend: [
      {d:'Sep 12',sales:920,profit:214,orders:18},{d:'Sep 13',sales:1180,profit:286,orders:23},{d:'Sep 14',sales:1080,profit:254,orders:21},
      {d:'Sep 15',sales:1360,profit:342,orders:27},{d:'Sep 16',sales:1490,profit:374,orders:31},{d:'Sep 17',sales:1310,profit:326,orders:26},{d:'Sep 18',sales:1670,profit:427,orders:34},
    ],
    products: [{name:'Wireless Charger',profit:612},{name:'Mini Projector',profit:498},{name:'Portable Blender',profit:423},{name:'Smart Lamp',profit:356}],
  },
  '30 Days': {
    stats: { sales: 38240, profit: 9684, orders: 748, fees: 4312, margin: 25.3 },
    change: { sales: '+13.8%', profit: '+15.4%', orders: '+10.7%', fees: '+2.4%', margin: '+1.9%' },
    trend: [
      {d:'W1',sales:7920,profit:1880,orders:153},{d:'W2',sales:8840,profit:2160,orders:171},{d:'W3',sales:10060,profit:2630,orders:198},{d:'W4',sales:11420,profit:3014,orders:226},
    ],
    products: [{name:'Wireless Charger',profit:2310},{name:'Mini Projector',profit:1984},{name:'Portable Blender',profit:1740},{name:'Smart Lamp',profit:1328}],
  },
  Custom: {
    stats: { sales: 21480, profit: 5288, orders: 421, fees: 2476, margin: 24.6 },
    change: { sales: '+6.9%', profit: '+8.2%', orders: '+5.4%', fees: '+0.8%', margin: '+0.7%' },
    trend: [
      {d:'P1',sales:2780,profit:652,orders:54},{d:'P2',sales:3260,profit:778,orders:63},{d:'P3',sales:3140,profit:744,orders:61},
      {d:'P4',sales:3890,profit:982,orders:77},{d:'P5',sales:4180,profit:1044,orders:82},{d:'P6',sales:4230,profit:1088,orders:84},
    ],
    products: [{name:'Wireless Charger',profit:1324},{name:'Portable Blender',profit:1118},{name:'Mini Projector',profit:1036},{name:'Smart Lamp',profit:810}],
  },
} as const;

type RangeKey = keyof typeof ranges;

export default function AnalyticsPanel(){
  const [range,setRange]=useState<RangeKey>('Today');
  const current=ranges[range];

  const statItems = [
    {label:'Gross Sales',value:'$'+current.stats.sales.toLocaleString(),change:current.change.sales,positive:true,icon:CircleDollarSign},
    {label:'Net Profit',value:'$'+current.stats.profit.toLocaleString(),change:current.change.profit,positive:true,icon:ArrowUpRight},
    {label:'Orders',value:current.stats.orders.toLocaleString(),change:current.change.orders,positive:true,icon:ShoppingBag},
    {label:'Fees',value:'$'+current.stats.fees.toLocaleString(),change:current.change.fees,positive:!current.change.fees.startsWith('+'),icon:Receipt},
    {label:'Profit Margin',value:current.stats.margin.toFixed(1)+'%',change:current.change.margin,positive:true,icon:Percent},
  ];

  const costMix=useMemo(()=>[
    {name:'Product cost',value:Math.round(current.stats.sales*.605),color:'#cbb9ee'},
    {name:'Marketplace fees',value:current.stats.fees,color:'#9d73e7'},
    {name:'Net profit',value:current.stats.profit,color:'#5d25c7'},
  ],[current]);

  return <div className="product-frame overflow-hidden">
    <div className="flex flex-col gap-3 border-b border-[#e9e4ef] bg-[#fbfaff] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <div><div className="text-sm font-extrabold">Profit dashboard</div><div className="mt-1 text-xs text-[#847c91]">Revenue, costs, margin and product performance</div></div>
      <div className="flex flex-wrap gap-1 rounded-lg border border-[#e7e2ee] bg-white p-1">
        {(Object.keys(ranges) as RangeKey[]).map(x=><button key={x} onClick={()=>setRange(x)} className={'rounded-md px-3 py-2 text-[11px] font-bold transition ' + (range===x?'bg-[#211062] text-white':'text-[#71697e] hover:bg-[#f3ecff] hover:text-[#5f25c3]')}>{x}</button>)}
      </div>
    </div>

    <div className="grid border-b border-[#eee9f4] sm:grid-cols-2 lg:grid-cols-5">
      {statItems.map(({label,value,change,positive,icon:Icon})=><div key={label} className="border-r border-b border-[#eee9f4] p-4 last:border-r-0 sm:border-b-0">
        <div className="flex items-center justify-between gap-3"><span className="text-[10px] font-bold uppercase tracking-[.08em] text-[#81798e]">{label}</span><Icon size={14} className="text-[#6d28d9]"/></div>
        <div className="mt-2 text-[22px] font-extrabold tracking-[-.03em]">{value}</div>
        <div className={'mt-1 flex items-center gap-1 text-[10px] font-bold ' + (positive?'text-[#14866d]':'text-[#a76416]')}>{positive?<ArrowUpRight size={11}/>:<ArrowDownRight size={11}/>} {change}</div>
      </div>)}
    </div>

    <div className="grid gap-0 xl:grid-cols-[1.55fr_.9fr]">
      <div className="border-b border-[#eee9f4] p-4 sm:p-5 xl:border-b-0 xl:border-r">
        <div className="flex items-center justify-between gap-4"><div><div className="text-xs font-extrabold">Profit trend</div><div className="mt-1 text-[10px] text-[#8a8296]">{range} sales and profit</div></div><div className="flex gap-3 text-[9px] font-bold"><span className="text-[#6d28d9]">● Sales</span><span className="text-[#ec46b8]">● Profit</span></div></div>
        <div className="mt-3 h-[270px]"><ResponsiveContainer width="100%" height="100%"><AreaChart data={current.trend} margin={{left:-20,right:8,top:10,bottom:0}}><defs><linearGradient id="salesFill2" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#6d28d9" stopOpacity={.16}/><stop offset="95%" stopColor="#6d28d9" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#f0edf5" vertical={false}/><XAxis dataKey="d" tick={{fontSize:9,fill:'#8a8296'}} axisLine={false} tickLine={false}/><YAxis tick={{fontSize:9,fill:'#8a8296'}} axisLine={false} tickLine={false}/><Tooltip contentStyle={{borderRadius:8,border:'1px solid #e8e3ef',fontSize:10,boxShadow:'none'}}/><Area type="monotone" dataKey="sales" stroke="#6d28d9" strokeWidth={2} fill="url(#salesFill2)"/><Area type="monotone" dataKey="profit" stroke="#ec46b8" strokeWidth={2} fill="transparent"/></AreaChart></ResponsiveContainer></div>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-1">
        <div className="border-b border-[#eee9f4] p-4 sm:border-b-0 sm:border-r sm:p-5 xl:border-b xl:border-r-0">
          <div className="text-xs font-extrabold">Cost mix</div>
          <div className="mt-1 text-[10px] text-[#8a8296]">How sales are distributed</div>
          <div className="mt-2 grid grid-cols-[145px_1fr] items-center gap-2">
            <div className="h-[145px]"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={costMix} dataKey="value" nameKey="name" innerRadius={40} outerRadius={60} paddingAngle={3}>{costMix.map(item=><Cell key={item.name} fill={item.color}/>)}</Pie><Tooltip contentStyle={{borderRadius:8,border:'1px solid #e8e3ef',fontSize:10,boxShadow:'none'}}/></PieChart></ResponsiveContainer></div>
            <div className="space-y-2">{costMix.map(item=><div key={item.name} className="flex items-center justify-between gap-3 text-[10px]"><span className="flex items-center gap-2 text-[#756d82]"><span className="h-2 w-2 rounded-full" style={{background:item.color}}/>{item.name}</span><b>{'$'+item.value.toLocaleString()}</b></div>)}</div>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="text-xs font-extrabold">Profit by product</div>
          <div className="mt-1 text-[10px] text-[#8a8296]">Top contributors in this period</div>
          <div className="mt-4 space-y-3">{current.products.map((item,i)=><div key={item.name}><div className="flex items-center justify-between gap-3 text-[10px]"><span className="font-semibold">{item.name}</span><b>{'$'+item.profit}</b></div><div className="mt-1.5 h-1.5 rounded-full bg-[#f0ebf6]"><div className="h-full rounded-full bg-[#6d28d9]" style={{width:String(92-i*13)+'%'}}/></div></div>)}</div>
        </div>
      </div>
    </div>

    <div className="border-t border-[#eee9f4] p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between"><div className="text-xs font-extrabold">Order volume</div><div className="text-[10px] text-[#8a8296]">{range}</div></div>
      <div className="h-[150px]"><ResponsiveContainer width="100%" height="100%"><BarChart data={current.trend} margin={{left:-28,right:8,top:5,bottom:0}}><CartesianGrid stroke="#f0edf5" vertical={false}/><XAxis dataKey="d" tick={{fontSize:9,fill:'#8a8296'}} axisLine={false} tickLine={false}/><YAxis tick={{fontSize:9,fill:'#8a8296'}} axisLine={false} tickLine={false}/><Tooltip contentStyle={{borderRadius:8,border:'1px solid #e8e3ef',fontSize:10,boxShadow:'none'}}/><Bar dataKey="orders" fill="#8b3dff" radius={[4,4,0,0]} maxBarSize={28}/></BarChart></ResponsiveContainer></div>
    </div>
  </div>
}
