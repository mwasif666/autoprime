import {
  Calculator,
  ImagePlus,
  ListChecks,
  ShoppingBag,
  ShoppingCart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const dashboardScreens = [
  {
    id: 'marketplace-dashboard',
    title: 'Marketplace',
    eyebrow: 'Real marketplace workspace',
    text: 'Browse products, filter suppliers and categories, and move selected products into your store from the same dashboard.',
    src: 'https://res.cloudinary.com/agymx2xx/image/upload/v1791403180/marketplace.png',
    Icon: ShoppingBag,
    tone: '#6d28d9',
    soft: '#f3edff',
  },
  {
    id: 'order-processing-dashboard',
    title: 'Order Processing',
    eyebrow: 'Connected supplier workflow',
    text: 'See pending orders, sync new orders, review processing status, and keep supplier order work visible in one screen.',
    src: 'https://res.cloudinary.com/agymx2xx/image/upload/v1791403172/order-processing.png',
    Icon: ShoppingCart,
    tone: '#ff6b14',
    soft: '#fff3e8',
  },
  {
    id: 'orders-dashboard',
    title: 'Orders',
    eyebrow: 'Live order records',
    text: 'Keep buyer, product, pricing, order status and supplier details together in a real operational order view.',
    src: 'https://res.cloudinary.com/agymx2xx/image/upload/v1791403171/orders.png',
    Icon: ListChecks,
    tone: '#1689f5',
    soft: '#eef7ff',
  },
  {
    id: 'calculations-dashboard',
    title: 'Calculations',
    eyebrow: 'Profit and cost visibility',
    text: 'Review totals, shipping, earnings, profit and ROI with detailed order rows and sheet-ready calculation data.',
    src: 'https://res.cloudinary.com/agymx2xx/image/upload/v1791403172/calculations.png',
    Icon: Calculator,
    tone: '#16a36a',
    soft: '#ecfbf3',
  },
  {
    id: 'ai-image-generator-dashboard',
    title: 'AI Image Generator',
    eyebrow: 'Creative product workspace',
    text: 'Upload product images, place your logo, choose output ratios and prepare polished listing visuals from the dashboard.',
    src: 'https://res.cloudinary.com/agymx2xx/image/upload/v1791403172/AI_Image_Generator_Dashboard.png',
    Icon: ImagePlus,
    tone: '#f22eb7',
    soft: '#fff0f7',
  },
] satisfies Array<{
  id: string;
  title: string;
  eyebrow: string;
  text: string;
  src: string;
  Icon: LucideIcon;
  tone: string;
  soft: string;
}>;

function DashboardCard({ item, large = false }: { item: (typeof dashboardScreens)[number]; large?: boolean }) {
  const { Icon } = item;
  return (
    <article id={item.id} className={`overflow-hidden rounded-[24px] border border-[#e8e0f1] bg-white ${large ? 'lg:col-span-7' : 'lg:col-span-5'}`}>
      <div className="flex items-start gap-3 px-5 pb-4 pt-5 sm:px-6 sm:pt-6">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[13px]" style={{ color: item.tone, background: item.soft }}>
          <Icon size={21} strokeWidth={2.2} />
        </span>
        <div className="min-w-0">
          <div className="text-[8px] font-black uppercase tracking-[.1em] text-[#7c3aed]">{item.eyebrow}</div>
          <h3 className="mt-1 text-[18px] font-[850] tracking-[-.03em] text-[#171230] sm:text-[20px]">{item.title}</h3>
          <p className="mt-1.5 max-w-[620px] text-[10px] leading-5 text-[#746c80] sm:text-[11px]">{item.text}</p>
        </div>
      </div>

      <div className="border-t border-[#eee8f4] bg-[#faf8fe] p-2 sm:p-3">
        <img
          src={item.src}
          alt={`${item.title} dashboard screenshot`}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full rounded-[16px] object-contain"
        />
      </div>
    </article>
  );
}

export default function RealDashboardShowcase() {
  return (
    <section className="section border-y border-[#eee8f4] bg-[linear-gradient(180deg,#fbf9ff_0%,#ffffff_100%)]">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <div className="eyebrow">Real dashboard previews</div>
            <h2 className="mt-4 max-w-[700px] text-[30px] font-[880] leading-[1.05] tracking-[-.045em] text-[#171230] sm:text-[38px] lg:text-[43px]">
              See the actual <span className="gradient-text">AutoDropshipPrime workspace.</span>
            </h2>
          </div>
          <p className="muted max-w-[650px] text-[13px] leading-6 sm:text-[14px] lg:justify-self-end">
            These are real product dashboard screens for marketplace research, order processing, calculations, orders and AI image generation — shown directly inside the homepage so the product feels tangible and credible.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <DashboardCard item={dashboardScreens[0]} large />
          <DashboardCard item={dashboardScreens[4]} />
          <DashboardCard item={dashboardScreens[1]} />
          <DashboardCard item={dashboardScreens[2]} large />
          <article id={dashboardScreens[3].id} className="overflow-hidden rounded-[24px] border border-[#e8e0f1] bg-white lg:col-span-12">
            <div className="grid gap-0 lg:grid-cols-[.32fr_.68fr] lg:items-stretch">
              <div className="flex items-center p-5 sm:p-6 lg:p-8">
                <div>
                  <span className="grid h-11 w-11 place-items-center rounded-[13px]" style={{ color: dashboardScreens[3].tone, background: dashboardScreens[3].soft }}>
                    <Calculator size={21} strokeWidth={2.2} />
                  </span>
                  <div className="mt-4 text-[8px] font-black uppercase tracking-[.1em] text-[#7c3aed]">{dashboardScreens[3].eyebrow}</div>
                  <h3 className="mt-1 text-[20px] font-[850] tracking-[-.03em] text-[#171230]">{dashboardScreens[3].title}</h3>
                  <p className="mt-2 max-w-[360px] text-[10px] leading-5 text-[#746c80] sm:text-[11px]">{dashboardScreens[3].text}</p>
                </div>
              </div>
              <div className="border-t border-[#eee8f4] bg-[#faf8fe] p-2 sm:p-3 lg:border-l lg:border-t-0">
                <img
                  src={dashboardScreens[3].src}
                  alt="Calculations dashboard screenshot"
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full rounded-[16px] object-contain"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
