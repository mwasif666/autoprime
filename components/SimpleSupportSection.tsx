import Link from 'next/link';
import { ArrowRight, Clock3, Headset, MessageCircleMore, ShieldCheck } from 'lucide-react';

const items = [
  { title: 'Quick response', text: 'Get help with day-to-day questions and account issues.', Icon: MessageCircleMore, tone: '#7c3aed', soft: '#f3edff' },
  { title: 'Expert team', text: 'Support for orders, billing, sourcing and product workflows.', Icon: Headset, tone: '#1689f5', soft: '#eef7ff' },
  { title: '24/7 availability', text: 'Reach support whenever you need assistance.', Icon: Clock3, tone: '#ff6b14', soft: '#fff3e8' },
  { title: 'Secure assistance', text: 'Clear guidance while keeping account activity organized.', Icon: ShieldCheck, tone: '#16a36a', soft: '#ecfbf3' },
];

export default function SimpleSupportSection() {
  return (
    <section id="simple-support" className="section border-y border-[#eee8f4] bg-[linear-gradient(180deg,#ffffff_0%,#faf8ff_100%)]">
      <div className="container-site">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="eyebrow">24/7 customer support</div>
          <h2 className="mt-4 text-[32px] font-[900] leading-[1.05] tracking-[-.045em] text-[#171230] sm:text-[40px]">
            Help When You <span className="gradient-text">Need It.</span>
          </h2>
          <p className="muted mx-auto mt-4 max-w-[650px] text-[14px] leading-7 sm:text-[15px]">
            Get assistance with orders, technical issues, sourcing questions, billing and general product guidance from one support team.
          </p>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, text, Icon, tone, soft }) => (
            <article key={title} className="rounded-[18px] border border-[#e6def0] bg-white p-5 text-left">
              <span className="grid h-11 w-11 place-items-center rounded-[13px]" style={{ color: tone, background: soft }}>
                <Icon size={21} strokeWidth={2.2} />
              </span>
              <h3 className="mt-4 text-[14px] font-[850] text-[#171230]">{title}</h3>
              <p className="mt-2 text-[11px] leading-5 text-[#756d80]">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-primary min-h-[44px] px-5 text-[12px]">Contact Support <ArrowRight size={14} /></Link>
          <Link href="/resources" className="btn-secondary min-h-[44px] px-5 text-[12px]">Browse Resources</Link>
        </div>
      </div>
    </section>
  );
}
