import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Globe2,
  PlayCircle,
  ShoppingBag,
  Sparkles,
  Star,
} from 'lucide-react';

const HERO_BANNER_IMAGE =
  'https://res.cloudinary.com/agymx2xx/image/upload/v1791403375/1d7f308c-2870-4a54-a666-74a053dd75c1.png';

const brandLogo = (name: string) => `https://img.icons8.com/color/96/${name}.png`;

const activeMarketplaces = [
  ['eBay', 'ebay', '→ eBay'],
  ['AliExpress', 'aliexpress', '→ eBay'],
  ['Etsy', 'etsy', '→ eBay'],
  ['Amazon', 'amazon', '→ eBay'],
] as const;

const comingSoon = [
  ['Etsy', 'etsy', 'Listings'],
  ['Amazon', 'amazon', 'Listings'],
  ['Shopify', 'shopify', 'Listings'],
  ['Wix', 'wix', 'Listings'],
] as const;

export default function HomepageHeroCompact() {
  return (
    <section className="relative overflow-hidden border-b border-[#ece6f5] bg-[radial-gradient(circle_at_82%_10%,#eee5ff_0,transparent_30%),linear-gradient(180deg,#ffffff_0%,#faf7ff_100%)]">
      <div className="container-site pt-8 sm:pt-10 lg:pt-12">
        <div className="grid items-center gap-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-7 xl:grid-cols-[.72fr_1.28fr]">
          <div className="min-w-0 lg:pb-8">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#ded1f4] bg-[#f7f1ff] px-3.5 py-2 text-[9px] font-black uppercase tracking-[.09em] text-[#6d28d9] sm:text-[10px]">
              <Sparkles size={13} className="shrink-0" />
              <span className="truncate">The All-In-One eBay Dropshipping Automation Tool</span>
            </div>

            <h1 className="mt-5 max-w-[560px] text-[42px] font-[900] leading-[.94] tracking-[-.055em] text-[#15102a] sm:text-[52px] lg:text-[58px] xl:text-[66px]">
              Automate Your <span className="gradient-text">eBay Business.</span>
            </h1>

            <div className="mt-4 h-[3px] w-24 rounded-full bg-[linear-gradient(90deg,#7c3aed,#ef2eb8)]" />

            <p className="mt-5 max-w-[550px] text-[14px] leading-6 text-[#6c657a] sm:text-[15px] sm:leading-7 lg:text-[16px]">
              Find winning products, create eBay listings, process orders automatically, track shipments, monitor stock & prices, and grow your eBay business — all in one powerful platform.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[13px] bg-[linear-gradient(135deg,#6d28d9,#8b3dff)] px-6 text-[13px] font-extrabold text-white transition hover:-translate-y-0.5 sm:text-sm"
              >
                Start Free Trial <ArrowRight size={16} />
              </Link>
              <a
                href="#everything"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[13px] border border-[#ddd4e9] bg-white px-6 text-[13px] font-extrabold text-[#4f3f69] transition hover:border-[#cbb9e8] sm:text-sm"
              >
                <PlayCircle size={17} className="text-[#7c3aed]" /> Watch Demo
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-[10px] font-bold text-[#665f73] sm:text-[11px]">
              {['No Credit Card Required', 'Easy Setup', '24/7 Support'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#efe8ff] text-[#6d28d9]">
                    <Check size={11} />
                  </span>
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 grid max-w-[520px] gap-3 sm:grid-cols-2">
              <div className="flex min-h-[70px] items-center gap-3 rounded-[16px] border border-[#e9e1f1] bg-white px-4 py-3">
                <div className="flex -space-x-2">
                  {['A', 'M', 'S', 'R'].map((letter, index) => (
                    <span
                      key={`${letter}-${index}`}
                      className="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-[linear-gradient(135deg,#d8b4fe,#7c3aed)] text-[10px] font-black text-white"
                    >
                      {letter}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="text-[15px] font-black text-[#171230]">10,000+</div>
                  <div className="text-[9px] text-[#80778a]">eBay sellers trust us</div>
                </div>
              </div>

              <div className="flex min-h-[70px] items-center gap-3 rounded-[16px] border border-[#e9e1f1] bg-white px-4 py-3">
                <div className="flex gap-0.5 text-[#f59e0b]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={13} fill="currentColor" />
                  ))}
                </div>
                <div>
                  <div className="text-[15px] font-black text-[#171230]">4.9/5</div>
                  <div className="text-[9px] text-[#80778a]">Based on 1,200+ reviews</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-w-0 lg:-mr-5 xl:-mr-10">
            <img
              src={HERO_BANNER_IMAGE}
              alt="AutoDropshipPrime dashboard showcase"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="mx-auto block h-auto w-full max-w-[860px] object-contain lg:max-w-[920px] xl:max-w-[980px]"
            />
          </div>
        </div>

        <div className="mt-7 grid gap-2 pb-5 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-9">
          <div className="flex min-h-[94px] items-center gap-3 rounded-[18px] bg-[linear-gradient(135deg,#5b20d6,#9633ff)] px-4 py-4 text-white sm:col-span-2 lg:col-span-1">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[13px] bg-white/14">
              <ShoppingBag size={22} />
            </span>
            <div>
              <div className="text-[11px] font-black leading-4">List Products</div>
              <div className="text-[9px] font-semibold text-white/85">to eBay from</div>
            </div>
          </div>

          {activeMarketplaces.map(([name, icon, note]) => (
            <div
              key={name}
              className="flex min-h-[94px] flex-col items-center justify-center rounded-[18px] border border-[#ebe3f3] bg-white px-3 py-3 text-center"
            >
              <img src={brandLogo(icon)} alt={`${name} logo`} className="h-8 w-8 object-contain" loading="lazy" />
              <div className="mt-1.5 text-[10px] font-black text-[#2b2340]">{name}</div>
              <div className="text-[8px] font-semibold text-[#81788d]">{note}</div>
            </div>
          ))}

          {comingSoon.map(([name, icon, note], index) => (
            <div
              key={`${name}-${note}`}
              className="relative flex min-h-[94px] flex-col items-center justify-center rounded-[18px] border border-[#f0eaf6] bg-[#fbf9fe] px-3 py-3 text-center opacity-80"
            >
              {index === 0 && (
                <span className="absolute -top-2 rounded-full bg-[#efe7ff] px-2 py-0.5 text-[7px] font-black uppercase tracking-[.05em] text-[#7c3aed]">
                  Coming Soon
                </span>
              )}
              <img src={brandLogo(icon)} alt={`${name} logo`} className="h-7 w-7 object-contain grayscale-[.15]" loading="lazy" />
              <div className="mt-1.5 text-[9px] font-black text-[#675e75]">{name}</div>
              <div className="text-[7.5px] font-semibold text-[#9a92a3]">{note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
