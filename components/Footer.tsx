import Image from 'next/image';
import Link from 'next/link';

const LinkedInIcon = () => <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.54V9H7.1v11.45Z"/></svg>;
const TwitterIcon = () => <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.53 8.53 0 0 1-2.71 1.04A4.26 4.26 0 0 0 11.9 9.26 12.1 12.1 0 0 1 3.12 4.8a4.26 4.26 0 0 0 1.32 5.69 4.2 4.2 0 0 1-1.93-.53v.05a4.27 4.27 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.27 4.27 0 0 0 3.98 2.96 8.56 8.56 0 0 1-5.29 1.82c-.34 0-.68-.02-1.02-.06a12.07 12.07 0 0 0 6.54 1.92c7.85 0 12.14-6.5 12.14-12.14l-.01-.55A8.66 8.66 0 0 0 22.46 6Z"/></svg>;
const YouTubeIcon = () => <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.5 6.19a3 3 0 0 0-2.12-2.12C19.5 3.56 12 3.56 12 3.56s-7.5 0-9.38.51A3 3 0 0 0 .5 6.19 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.81 3 3 0 0 0 2.12 2.12c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3 3 0 0 0 2.12-2.12A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.81ZM9.6 15.6V8.4l6.24 3.6-6.24 3.6Z"/></svg>;

const cols = [
  { title:'Product', links:[['Product Hunting','/features/product-hunting'],['Auto Listing','/features/auto-listing'],['Monitoring','/features/stock-monitoring'],['Google Sheets','/features/google-sheets'],['Analytics','/features/analytics'],['Reports','/features/reports']] },
  { title:'Company', links:[['About','/about'],['Contact','/contact'],['Pricing','/pricing']] },
  { title:'Resources', links:[['Help Center','#'],['Documentation','#'],['Blog','#'],['FAQ','/#faq']] },
  { title:'Legal', links:[['Privacy','#'],['Terms','#'],['Cookies','#']] },
];

export default function Footer(){return <footer className="border-t border-[#ebe6f3] bg-[#fbfaff]">
  <div className="container-site grid gap-10 py-14 lg:grid-cols-[1.35fr_3fr]">
    <div className="max-w-sm"><Image src="/logo.png" alt="AutoDropshipPrime" width={220} height={115} className="h-[48px] w-auto object-contain"/><p className="muted mt-4 text-[13px] leading-6">A connected workspace for product research, listing operations, monitoring, orders and profit analytics.</p><div className="mt-5 flex gap-2"><a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-lg border border-[#e5dff0] bg-white"><LinkedInIcon/></a><a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-lg border border-[#e5dff0] bg-white"><TwitterIcon/></a><a href="#" aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-lg border border-[#e5dff0] bg-white"><YouTubeIcon/></a></div></div>
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">{cols.map(c=><div key={c.title}><div className="mb-4 text-[13px] font-extrabold">{c.title}</div><div className="space-y-3">{c.links.map(([label,href])=><Link key={label} href={href} className="block text-[13px] text-[#70697c] hover:text-[#6d28d9]">{label}</Link>)}</div></div>)}</div>
  </div>
  <div className="border-t border-[#ebe6f3]"><div className="container-site flex flex-col gap-2 py-5 text-[11px] text-[#81798f] sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} AutoDropshipPrime</span><span>Privacy · Terms · Cookies</span></div></div>
</footer>}