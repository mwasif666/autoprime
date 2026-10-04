const icon8 = (name: string) => `https://img.icons8.com/color/96/${name}.png`;

const steps = [
  ['01', 'Research', 'Find useful product opportunities.', 'search--v1'],
  ['02', 'Prepare', 'Build listing-ready product details.', 'checklist'],
  ['03', 'Monitor', 'Watch supplier stock and price changes.', 'combo-chart--v1'],
  ['04', 'Orders', 'Keep fulfilment and status organized.', 'shopping-cart--v1'],
  ['05', 'Sheets', 'Keep operating records synchronized.', 'google-sheets'],
  ['06', 'Profit', 'Review sales, costs and margin.', 'money-bag'],
];

export default function ConnectedWorkflowShowcase({
  eyebrow = 'Connected workflow',
  title = 'One visual language from product discovery to profit.',
  text = 'The same cards, status patterns and operating context follow the seller across research, listings, monitoring, orders, Google Sheets and analytics.',
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section className="section border-y border-[#eee8f4] bg-[#faf8ff]">
      <div className="container-site">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="mt-4 text-[31px] font-[850] leading-[1.06] tracking-[-.04em] sm:text-[40px]">{title}</h2>
          <p className="muted mx-auto mt-4 max-w-[700px] text-[14px] leading-7">{text}</p>
        </div>

        <div className="mt-9 rounded-[24px] border border-[#e6ddee] bg-white p-4 sm:p-5">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1fr_34px_1fr_34px_1fr_34px_1fr_34px_1fr_34px_1fr] xl:items-stretch">
            {steps.map(([number, label, description, icon], index) => (
              <div key={label} className="contents">
                <article className="relative flex min-h-[174px] flex-col rounded-[18px] border border-[#e9e2f1] bg-[#fdfcff] p-4">
                  <span className="absolute left-3 top-3 grid h-8 min-w-8 place-items-center rounded-[9px] bg-[linear-gradient(135deg,#6d28d9,#9a2cff)] px-2 text-[10px] font-black text-white">{number}</span>
                  <span className="mx-auto mt-2 grid h-16 w-16 place-items-center rounded-[18px] border border-[#eee6f7] bg-[#faf7ff]">
                    <img src={icon8(icon)} alt="" className="h-12 w-12 object-contain" loading="lazy" />
                  </span>
                  <h3 className="mt-3 text-center text-[13px] font-extrabold text-[#171230]">{label}</h3>
                  <p className="mt-1 text-center text-[9px] leading-4 text-[#746c80]">{description}</p>
                </article>
                {index < steps.length - 1 && (
                  <div className="hidden items-center justify-center xl:flex">
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-[#d9c9ee] bg-white text-[18px] font-bold text-[#7c3aed]">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
