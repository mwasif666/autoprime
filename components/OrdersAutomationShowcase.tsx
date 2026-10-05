import {
  ArrowRight,
  Check,
  CircleDollarSign,
  FileSpreadsheet,
  PackageCheck,
  RotateCcw,
  ShoppingCart,
  Truck,
  UserRoundCheck,
} from 'lucide-react';

const brandLogo = (name: string) => `https://img.icons8.com/color/96/${name}.png`;

const flow = [
  { step: '01', title: 'eBay order received', text: 'Customer places an order in your store.', icon: 'ebay' },
  { step: '02', title: 'Details prepared', text: 'Product and customer details stay together.', icon: 'google-sheets' },
  { step: '03', title: 'AliExpress order', text: 'Supplier order moves into the same workflow.', icon: 'aliexpress' },
  { step: '04', title: 'Tracking synced', text: 'Tracking is ready to push back to eBay.', icon: 'delivery' },
] as const;

export default function OrdersAutomationShowcase() {
  return (
    <section id="orders-automation-improved" className="section bg-white">
      <div className="container-site">
        <div className="grid gap-7 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <div className="eyebrow">Smart automation, real-time updates</div>
            <h2 className="mt-4 max-w-[700px] text-[31px] font-[880] leading-[1.04] tracking-[-.045em] text-[#171230] sm:text-[39px] lg:text-[43px]">
              Orders, Sheets & tracking in <span className="gradient-text">one connected flow.</span>
            </h2>
          </div>
          <p className="muted max-w-[650px] text-[14px] leading-7 sm:text-[15px] lg:justify-self-end">
            Keep order records organized, move supplier orders forward without repetitive entry, and keep tracking and refund activity visible in the same workspace.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {flow.map((item) => (
            <div key={item.step} className="flex min-h-[92px] items-center gap-3 rounded-[17px] border border-[#e8e0f1] bg-[#fcfbff] px-4 py-3.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] bg-[#f3edff] text-[10px] font-black text-[#6d28d9]">{item.step}</span>
              <img src={brandLogo(item.icon)} alt="" className="h-9 w-9 shrink-0 object-contain" loading="lazy" />
              <div className="min-w-0">
                <div className="text-[10px] font-extrabold text-[#171230]">{item.title}</div>
                <div className="mt-1 text-[8px] leading-4 text-[#766f80]">{item.text}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid items-stretch gap-4 lg:grid-cols-12">
          <article className="rounded-[24px] border border-[#dcebe2] bg-[#fafffc] p-5 lg:col-span-6 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[15px] bg-[#eafaf1]">
                <img src={brandLogo('google-sheets')} alt="Google Sheets" className="h-8 w-8 object-contain" loading="lazy" />
              </span>
              <div>
                <h3 className="text-[19px] font-[850] tracking-[-.03em] text-[#171230]">Real-Time Google Sheets Update</h3>
                <p className="mt-1.5 text-[11px] leading-5 text-[#716a7e]">Orders, stock, status and tracking stay organized in one live record.</p>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-[16px] border border-[#d9e9df] bg-white">
              <div className="grid grid-cols-4 bg-[#effaf4] px-4 py-3 text-[8px] font-black text-[#2c3d34]"><span>Order</span><span>Product</span><span>Status</span><span>Tracking</span></div>
              {[
                ['#1001', 'Headphones', 'Shipped', 'LP12345'],
                ['#1002', 'Smart Watch', 'Processing', 'LP67890'],
                ['#1003', 'Running Shoes', 'Delivered', 'LP54321'],
              ].map((row) => (
                <div key={row[0]} className="grid grid-cols-4 border-t border-[#edf1ee] px-4 py-3 text-[8.5px] text-[#5f5868]">
                  {row.map((cell, index) => <span key={cell} className={index === 2 ? 'font-black text-[#159455]' : ''}>{cell}</span>)}
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {['Order details', 'Stock changes', 'Tracking status', 'Profit records'].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[8px] font-bold text-[#62596f]"><Check size={10} className="text-[#16a36a]" />{item}</span>
              ))}
            </div>
          </article>

          <article className="rounded-[24px] border border-[#e6dff0] bg-[#fcfaff] p-5 lg:col-span-6 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[15px] bg-[#fff3e8] text-[#ff6b14]"><ShoppingCart size={24} /></span>
              <div>
                <h3 className="text-[19px] font-[850] tracking-[-.03em] text-[#171230]">Auto AliExpress Orders Process</h3>
                <p className="mt-1.5 text-[11px] leading-5 text-[#716a7e]">Move an approved order from your store to the supplier without a fake placeholder image or repeated manual entry.</p>
              </div>
            </div>

            <div className="mt-5 rounded-[18px] border border-[#e7e0ef] bg-white p-4">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                <div className="rounded-[15px] bg-[#faf8ff] p-4 text-center">
                  <img src={brandLogo('ebay')} alt="eBay" className="mx-auto h-11 w-11 object-contain" loading="lazy" />
                  <div className="mt-2 text-[9px] font-black text-[#171230]">Customer order</div>
                  <div className="mt-1 text-[7.5px] text-[#81788d]">Store details captured</div>
                </div>
                <ArrowRight size={18} className="mx-auto hidden text-[#8b3dff] sm:block" />
                <div className="rounded-[15px] bg-[#fff6ed] p-4 text-center">
                  <img src={brandLogo('aliexpress')} alt="AliExpress" className="mx-auto h-11 w-11 object-contain" loading="lazy" />
                  <div className="mt-2 text-[9px] font-black text-[#171230]">Supplier order</div>
                  <div className="mt-1 text-[7.5px] text-[#81788d]">Order prepared automatically</div>
                </div>
                <ArrowRight size={18} className="mx-auto hidden text-[#8b3dff] sm:block" />
                <div className="rounded-[15px] bg-[#eef9f4] p-4 text-center">
                  <img src={brandLogo('delivery')} alt="Tracking" className="mx-auto h-11 w-11 object-contain" loading="lazy" />
                  <div className="mt-2 text-[9px] font-black text-[#171230]">Tracking sync</div>
                  <div className="mt-1 text-[7.5px] text-[#81788d]">Status stays connected</div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {[
                [PackageCheck, 'Supplier selected', '#6d28d9', '#f3edff'],
                [UserRoundCheck, 'Customer details ready', '#1689f5', '#eef7ff'],
                [Truck, 'Tracking connected', '#159455', '#ecfbf3'],
              ].map(([Icon, label, tone, soft]: any) => (
                <div key={label} className="flex min-h-[62px] items-center gap-2.5 rounded-[13px] border border-[#e8e0f1] bg-white px-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px]" style={{ color: tone, background: soft }}><Icon size={15} /></span>
                  <span className="text-[8.5px] font-extrabold text-[#2f2839]">{label}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[22px] border border-[#f0dce8] bg-[#fffafd] p-5 lg:col-span-12">
            <div className="grid gap-5 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-[#fff0f6] text-[#f22769]"><RotateCcw size={21} /></span>
                <div>
                  <h3 className="text-[17px] font-[850] text-[#171230]">Returns & Refund Management</h3>
                  <p className="mt-1.5 max-w-[430px] text-[10px] leading-5 text-[#716a7e]">Keep return requests, tracking, refunds and sheet updates visible without adding another disconnected panel.</p>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-4">
                {[
                  [RotateCcw, 'Return requested', '#f22769', '#fff0f6'],
                  [Truck, 'Return tracking', '#2563eb', '#eef5ff'],
                  [CircleDollarSign, 'Refund processed', '#159455', '#ecfbf3'],
                  [FileSpreadsheet, 'Sheets updated', '#159455', '#ecfbf3'],
                ].map(([Icon, label, tone, soft]: any) => (
                  <div key={label} className="flex min-h-[62px] items-center gap-2.5 rounded-[13px] border border-[#eee5ef] bg-white px-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px]" style={{ color: tone, background: soft }}><Icon size={15} /></span>
                    <span className="text-[8.5px] font-extrabold text-[#352d42]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
