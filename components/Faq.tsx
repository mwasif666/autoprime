'use client';
import { Collapse } from 'antd';

const items=[
  ['What is AutoDropshipPrime?','AutoDropshipPrime is positioned as one connected workspace for product research, listing workflows, monitoring, orders, Google Sheets updates, calculations, profit analytics and reports.'],
  ['How does Auto Product Hunting work?','The product-hunting interface is designed to bring product, supplier, source price, estimated selling price, margin and stock context into one research workflow.'],
  ['Can I automate product listings?','The planned listing workflow supports preparing product information, pricing, quantity and listing details in one structured flow. Final automation behavior should match the production backend and marketplace integration.'],
  ['How does stock monitoring work?','The monitoring experience surfaces active, low-stock and out-of-stock states and makes supplier changes visible from a single view.'],
  ['How does price monitoring work?','Price monitoring compares supplier price changes with current store pricing and margin context so changes are easier to review.'],
  ['Can AutoDropshipPrime update my Google Sheets?','Google Sheets profit and order updates are a core product requirement. The live implementation should use the final Google integration and field mapping agreed for production.'],
  ['How are profits calculated?','The interface can combine sale price, product cost, marketplace fees, shipping, tax and other costs to calculate net profit, margin, ROI and break-even values.'],
  ['Can I export reports?','The product brief includes report export controls. Exact formats should be enabled only when the backend supports them.'],
  ['Which marketplaces are supported?','eBay is the confirmed marketplace focus in the current brief. Additional marketplace support should only be listed once confirmed.'],
  ['Can I manage multiple stores?','Store limits and multi-store support have not been finalized in the provided requirements, so they should remain configurable rather than claimed.'],
  ['How do I get started?','Create an account or contact the AutoDropshipPrime team to configure the workflow for your store.'],
];
export default function Faq(){return <Collapse accordion items={items.map(([label,children],i)=>({key:String(i),label:<span className="font-bold">{label}</span>,children:<p className="muted leading-7">{children}</p>}))} className="bg-white"/>}
