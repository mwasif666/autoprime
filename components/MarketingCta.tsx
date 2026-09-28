import Link from 'next/link';

export default function MarketingCta({
  title = 'Run your dropshipping operation from one place.',
  text = 'Bring product research, listings, monitoring, orders and profit into one connected workflow.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section">
      <div className="container-site">
        <div className="rounded-[18px] border border-[#d9ccef] bg-[#261064] px-6 py-10 text-center text-white sm:px-10 sm:py-12">
          <h2 className="mx-auto max-w-3xl text-[28px] leading-[1.1] font-[820] tracking-[-.03em] sm:text-[36px]">{title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-[14px] leading-6 text-white/65">{text}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/signup" className="cta-primary">Start Free</Link>
            <Link href="/contact" className="cta-secondary">Book Demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
