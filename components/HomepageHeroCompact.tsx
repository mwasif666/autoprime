import Link from 'next/link';
import {
  ArrowRight,
  Check,
  PlayCircle,
  ShoppingBag,
  Sparkles,
  Star,
} from 'lucide-react';

const HERO_BANNER_IMAGE =
  'https://res.cloudinary.com/agymx2xx/image/upload/v1791403375/1d7f308c-2870-4a54-a666-74a053dd75c1.png';

const brandLogo = (name: string) => `https://img.icons8.com/color/96/${name}.png`;

const marketplaces = [
  ['eBay', 'ebay', '→ eBay', false],
  ['AliExpress', 'aliexpress', '→ eBay', false],
  ['Etsy', 'etsy', '→ eBay', false],
  ['Amazon', 'amazon', '→ eBay', false],
  ['Etsy', 'etsy', 'Listings', true],
  ['Amazon', 'amazon', 'Listings', true],
  ['Shopify', 'shopify', 'Listings', true],
  ['Wix', 'wix', 'Listings', true],
] as const;

function MarketplaceLoop() {
  return (
    <div className="flex shrink-0 items-stretch gap-3 pr-3">
      {marketplaces.map(([name, icon, note, soon], index) => (
        <div
          key={`${name}-${note}-${index}`}
          className={`relative flex min-h-[72px] w-[132px] shrink-0 items-center gap-2 rounded-[16px] border px-3 py-3 ${
            soon
              ? 'border-[#eee8f5] bg-[#fbf9fe] opacity-80'
              : 'border-[#e9e1f1] bg-white'
          }`}
        >
          {soon && index === 4 && (
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#efe7ff] px-2 py-0.5 text-[6.5px] font-black uppercase tracking-[.05em] text-[#7c3aed]">
              Coming Soon
            </span>
          )}
          <img
            src={brandLogo(icon)}
            alt={`${name} logo`}
            className={`h-8 w-8 shrink-0 object-contain ${soon ? 'grayscale-[.12]' : ''}`}
            loading="lazy"
          />
          <div className="min-w-0">
            <div className={`truncate text-[9px] font-black ${soon ? 'text-[#6f687a]' : 'text-[#2b2340]'}`}>
              {name}
            </div>
            <div className={`text-[7px] font-semibold ${soon ? 'text-[#9a92a3]' : 'text-[#81788d]'}`}>
              {note}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HomepageHeroCompact() {
  return (
    <section className="relative overflow-hidden border-b border-[#ece6f5] bg-[radial-gradient(circle_at_82%_10%,#eee5ff_0,transparent_30%),linear-gradient(180deg,#ffffff_0%,#faf7ff_100%)]">
      <style>{`
        @keyframes hero-marketplace-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .hero-marketplace-track {
          width: max-content;
          animation: hero-marketplace-marquee 30s linear infinite;
        }
        .hero-marketplace-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .hero-marketplace-track { animation: none; }
        }
      `}</style>

      <div className="container-site pt-7 sm:pt-9 lg:pt-10">
        <div className="grid items-center gap-7 lg:grid-cols-[.82fr_1.18fr] lg:gap-5 xl:grid-cols-[.8fr_1.2fr]">
          <div className="min-w-0 lg:pb-2">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#ded1f4] bg-[#f7f1ff] px-3.5 py-2 text-[9px] font-black uppercase tracking-[.09em] text-[#6d28d9] sm:text-[10px]">
              <Sparkles size={13} className="shrink-0" />
              <span className="truncate">The All-In-One eBay Dropshipping Automation Tool</span>
            </div>

            <h1 className="mt-5 max-w-[540px] text-[40px] font-[900] leading-[.95] tracking-[-.055em] text-[#15102a] sm:text-[50px] lg:text-[55px] xl:text-[61px]">
              Automate Your <span className="gradient-text">eBay Business.</span>
            </h1>

            <div className="mt-4 h-[3px] w-20 rounded-full bg-[linear-gradient(90deg,#7c3aed,#ef2eb8)]" />

            <p className="mt-5 max-w-[525px] text-[14px] leading-6 text-[#6c657a] sm:text-[15px] sm:leading-7">
              Find winning products, create eBay listings, process orders automatically, track shipments, monitor stock & prices, and grow your eBay business — all in one powerful platform.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/signup"
                style={{ color: '#ffffff' }}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[13px] bg-[linear-gradient(135deg,#6d28d9,#8b3dff)] px-6 text-[13px] font-extrabold !text-white transition hover:-translate-y-0.5 sm:text-sm"
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

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-[10px] font-bold text-[#665f73] sm:text-[11px]">
              {['No Credit Card Required', 'Easy Setup', '24/7 Support'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#efe8ff] text-[#6d28d9]">
                    <Check size={11} />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex min-w-0 items-center justify-center lg:justify-end">
            <img
              src={HERO_BANNER_IMAGE}
              alt="AutoDropshipPrime dashboard showcase"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="block h-auto w-full max-w-[680px] object-contain sm:max-w-[720px] lg:max-w-[760px] xl:max-w-[810px]"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 pb-5 lg:flex-row lg:items-stretch">
          <div className="grid shrink-0 gap-3 sm:grid-cols-3 lg:grid-cols-[190px_190px_170px]">
            <div className="flex min-h-[72px] items-center gap-3 rounded-[16px] border border-[#e9e1f1] bg-white px-4 py-2.5">
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

            <div className="flex min-h-[72px] items-center gap-3 rounded-[16px] border border-[#e9e1f1] bg-white px-4 py-2.5">
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

            <div className="flex min-h-[72px] items-center gap-3 rounded-[16px] bg-[linear-gradient(135deg,#5b20d6,#9633ff)] px-4 py-3 text-white lg:sticky lg:left-0 lg:z-20">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] bg-white/15">
                <ShoppingBag size={20} />
              </span>
              <div>
                <div className="text-[10px] font-black leading-4 text-white">List Products</div>
                <div className="text-[8px] font-semibold text-white/85">to eBay from</div>
              </div>
            </div>
          </div>

          <div className="relative min-w-0 flex-1 overflow-hidden border-y border-[#ece5f4] bg-white/72 py-0 backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-12" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-12" />
            <div className="hero-marketplace-track flex">
              <MarketplaceLoop />
              <MarketplaceLoop />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
