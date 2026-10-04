const icon8 = (name: string, size = 96) => `https://img.icons8.com/color/${size}/${name}.png`;

function IconBubble({ name, tone = 'violet', size = 32 }: { name: string; tone?: 'violet' | 'green' | 'blue' | 'orange' | 'pink'; size?: number }) {
  const tones = {
    violet: 'border-[#e5d8ff] bg-[#f5efff]',
    green: 'border-[#d5f0df] bg-[#edfff4]',
    blue: 'border-[#d9e9ff] bg-[#eff7ff]',
    orange: 'border-[#ffe4c6] bg-[#fff5e9]',
    pink: 'border-[#ffd9e8] bg-[#fff0f6]',
  };

  return (
    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-[15px] border ${tones[tone]}`}>
      <img src={icon8(name)} alt="" width={size} height={size} className="object-contain" loading="lazy" />
    </span>
  );
}

const flow = [
  { title: 'Add Funds', text: 'Top up your wallet using your preferred method.', icon: 'plus-math', tone: 'violet' as const },
  { title: 'Available Balance', text: 'See the balance ready for order processing.', icon: 'wallet--v1', tone: 'green' as const },
  { title: 'Orders Processed', text: 'Order costs are deducted from wallet funds.', icon: 'shopping-cart--v1', tone: 'orange' as const },
  { title: 'Track Everything', text: 'Review top-ups, payments and refunds.', icon: 'transaction-list', tone: 'blue' as const },
];

const transactions = [
  ['Sep 28, 2026', 'Top Up', 'Card wallet top-up', '+$200.00', 'positive'],
  ['Sep 27, 2026', 'Order', 'Supplier order #AE123456', '-$18.50', 'negative'],
  ['Sep 26, 2026', 'Refund', 'Refund for order #AE123450', '+$18.50', 'positive'],
  ['Sep 25, 2026', 'Order', 'Supplier order #AE123449', '-$32.90', 'negative'],
  ['Sep 24, 2026', 'Top Up', 'PayPal wallet top-up', '+$150.00', 'positive'],
];

export default function WalletPaymentsShowcase() {
  return (
    <section id="wallet-payments-showcase" className="section overflow-hidden border-y border-[#eee8f4] bg-[linear-gradient(180deg,#fbf9ff_0%,#ffffff_52%,#faf8ff_100%)]">
      <div className="container-site">
        <div className="grid items-start gap-8 lg:grid-cols-[1.45fr_.75fr] lg:gap-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e5d7fb] bg-[#f5efff] px-4 py-2 text-[10px] font-black uppercase tracking-[.12em] text-[#6d28d9]">
              <img src={icon8('wallet--v1')} alt="" className="h-4 w-4" /> Wallet management
            </div>
            <h2 className="mt-5 max-w-[760px] text-[36px] font-[850] leading-[1.02] tracking-[-.05em] sm:text-[46px] lg:text-[52px]">
              Wallet & <span className="gradient-text">Payments</span>
            </h2>
            <p className="muted mt-4 max-w-[760px] text-[14px] leading-7 sm:text-[15px]">
              Add funds, review your available balance, keep order deductions visible and track wallet activity from one clear payment workspace.
            </p>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ['security-checked', 'Secure payments', 'Keep wallet activity organized and visible.', 'green'],
              ['lightning-bolt', 'Automatic deductions', 'Use available funds as orders are processed.', 'blue'],
              ['time-machine', 'Full transparency', 'Review every wallet movement in one history.', 'orange'],
              ['bank-cards', 'Multiple methods', 'Keep common top-up options in one place.', 'pink'],
            ].map(([icon, title, text, tone]) => (
              <div key={title} className="flex items-center gap-3 rounded-[14px] border border-[#e8e0f1] bg-white px-3 py-2.5">
                <IconBubble name={icon} tone={tone as any} size={26} />
                <div className="text-left"><div className="text-[10px] font-extrabold text-[#171230]">{title}</div><div className="mt-0.5 text-[8px] leading-4 text-[#726a80]">{text}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[22px] border border-[#e7def2] bg-white p-3 sm:p-4">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_38px_minmax(0,1fr)_38px_minmax(0,1fr)_38px_minmax(0,1fr)] xl:gap-0">
            {flow.map((item, index) => (
              <div key={item.title} className="contents">
                <div className="flex min-h-[112px] items-center gap-3 rounded-[16px] border border-[#eee7f4] bg-[#fdfcff] px-4 py-4">
                  <IconBubble name={item.icon} tone={item.tone} />
                  <div className="min-w-0 text-left"><div className="text-[12px] font-extrabold text-[#171230]">{item.title}</div><p className="mt-1 text-[9px] leading-4 text-[#6f687b]">{item.text}</p></div>
                </div>
                {index < flow.length - 1 && (
                  <div className="hidden items-center justify-center xl:flex" aria-hidden="true">
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-[#d9c9ee] bg-white text-[19px] font-bold leading-none text-[#7c3aed]">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-12">
          <article className="flex min-h-[430px] flex-col rounded-[24px] border border-[#e5ddf0] bg-white p-5 xl:col-span-4">
            <div className="flex items-start gap-3">
              <IconBubble name="plus-math" tone="violet" />
              <div><h3 className="text-[17px] font-[850] tracking-[-.025em] text-[#171230]">Add Funds to Your Wallet</h3><p className="mt-1 text-[10px] leading-5 text-[#70687d]">Choose a preferred payment method and top up your available balance.</p></div>
            </div>

            <div className="mt-5 grid gap-2.5">
              {[
                ['bank-cards', 'Credit / Debit Card', 'Visa · Mastercard'],
                ['paypal', 'PayPal', 'PayPal balance'],
                ['stripe', 'Stripe', 'Card processing'],
                ['bank', 'Bank Transfer', 'Bank payment'],
                ['tether', 'USDT', 'Crypto top-up'],
              ].map(([icon, title, note], index) => (
                <div key={title} className="flex items-center gap-3 rounded-[13px] border border-[#e8e0f1] bg-[#fcfbff] px-3 py-3">
                  <img src={icon8(icon)} alt="" className="h-7 w-7 object-contain" loading="lazy" />
                  <div className="min-w-0 flex-1"><div className="text-[10px] font-extrabold text-[#171230]">{title}</div><div className="mt-0.5 text-[8px] text-[#777080]">{note}</div></div>
                  <span className={`h-4 w-4 rounded-full border-2 ${index === 0 ? 'border-[#7c3aed] bg-[#eee5ff]' : 'border-[#cfc7da] bg-white'}`} />
                </div>
              ))}
            </div>

            <button type="button" className="mt-auto flex min-h-[46px] items-center justify-center gap-2 rounded-[12px] border border-[#6d28d9] bg-[linear-gradient(90deg,#6d28d9,#982cff)] px-4 text-[12px] font-extrabold text-white">
              Add Funds <span aria-hidden>→</span>
            </button>
          </article>

          <article className="flex min-h-[430px] flex-col rounded-[24px] border border-[#e5ddf0] bg-white p-5 xl:col-span-4">
            <div className="flex items-start gap-3">
              <IconBubble name="wallet--v1" tone="green" />
              <div><h3 className="text-[17px] font-[850] tracking-[-.025em] text-[#171230]">Wallet Balance</h3><p className="mt-1 text-[10px] leading-5 text-[#70687d]">Keep your available wallet funds and processed order totals easy to review.</p></div>
            </div>

            <div className="mt-5 rounded-[18px] border border-[#e7e0ef] bg-[linear-gradient(135deg,#f8fff9,#fbf8ff)] p-4">
              <div className="flex items-center gap-3">
                <IconBubble name="wallet--v1" tone="green" size={30} />
                <div className="min-w-0 flex-1"><div className="text-[10px] text-[#6d6578]">Available balance</div><div className="mt-1 text-[30px] font-black tracking-[-.045em] text-[#171230]">$250.00</div></div>
                <span className="rounded-[10px] bg-[#6d28d9] px-4 py-2.5 text-[10px] font-extrabold text-white">Add Funds</span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                ['shopping-cart--v1', 'Total spent', '$1,850', 'green'],
                ['purchase-order', 'Orders', '125', 'orange'],
                ['clock--v1', 'Pending', '8', 'blue'],
              ].map(([icon, label, value, tone]) => (
                <div key={label} className="rounded-[14px] border border-[#e8e0f1] bg-[#fdfcff] p-3">
                  <IconBubble name={icon} tone={tone as any} size={24} />
                  <div className="mt-3 text-[8px] font-bold uppercase tracking-[.05em] text-[#827a90]">{label}</div>
                  <div className="mt-1 text-[16px] font-black text-[#171230]">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-auto rounded-[17px] border border-[#e4d8f2] bg-[#faf6ff] p-4">
              <div className="flex items-start gap-3">
                <IconBubble name="automatic" tone="violet" size={27} />
                <div className="min-w-0 flex-1"><div className="text-[11px] font-extrabold text-[#171230]">Automatic deduction for orders</div><p className="mt-1 text-[9px] leading-4 text-[#6e667c]">When an order is processed, the required amount can be reflected against the available wallet balance.</p></div>
                <span className="relative mt-1 h-6 w-11 rounded-full bg-[#7c3aed]"><span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white" /></span>
              </div>
            </div>
          </article>

          <article className="flex min-h-[430px] flex-col rounded-[24px] border border-[#e5ddf0] bg-white p-5 xl:col-span-4">
            <div className="flex items-start gap-3">
              <IconBubble name="transaction-list" tone="pink" />
              <div className="min-w-0 flex-1"><h3 className="text-[17px] font-[850] tracking-[-.025em] text-[#171230]">Transaction History</h3><p className="mt-1 text-[10px] leading-5 text-[#70687d]">Review wallet top-ups, order payments and refunds in a compact activity view.</p></div>
              <span className="hidden rounded-[10px] border border-[#e6deee] bg-[#fbf9ff] px-3 py-2 text-[8px] font-bold text-[#5f5770] sm:inline-flex">All transactions</span>
            </div>

            <div className="mt-5 overflow-hidden rounded-[16px] border border-[#e6dfed]">
              <div className="grid grid-cols-[.9fr_.7fr_1.35fr_.8fr_.8fr] bg-[#f4f0ff] px-3 py-2.5 text-[7px] font-black uppercase tracking-[.05em] text-[#625978]">
                <span>Date</span><span>Type</span><span>Description</span><span>Amount</span><span>Status</span>
              </div>
              {transactions.map(([date, type, description, amount, state]) => (
                <div key={`${date}-${description}`} className="grid min-h-[54px] grid-cols-[.9fr_.7fr_1.35fr_.8fr_.8fr] items-center border-t border-[#eee9f3] px-3 py-2 text-[7.5px] text-[#4f4860]">
                  <span>{date}</span><span className="font-bold">{type}</span><span className="pr-2 leading-3">{description}</span><span className={`font-black ${state === 'positive' ? 'text-[#159455]' : 'text-[#e63b5f]'}`}>{amount}</span><span className="rounded-md bg-[#e4f9ec] px-1.5 py-1 text-center text-[7px] font-bold text-[#16854d]">Completed</span>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between rounded-[14px] border border-[#e9e2f1] bg-[#fcfbff] px-3 py-3 text-[9px] text-[#6f687a]">
              <span>5 recent transactions</span><span className="font-extrabold text-[#6d28d9]">View wallet activity →</span>
            </div>
          </article>
        </div>

        <div className="mt-4 grid gap-3 rounded-[22px] border border-[#e7def2] bg-white p-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['lightning-bolt', 'Fast & flexible', 'Keep common wallet actions close at hand.', 'violet'],
            ['automatic', 'Order deductions', 'Connect wallet activity with processed orders.', 'green'],
            ['transaction-list', 'Complete history', 'Review top-ups, payments and refunds.', 'orange'],
            ['security-checked', 'Stay in control', 'Keep balance and transaction context visible.', 'blue'],
          ].map(([icon, title, text, tone]) => (
            <div key={title} className="flex items-center gap-3 rounded-[15px] bg-[#fcfbff] px-3 py-3">
              <IconBubble name={icon} tone={tone as any} size={27} />
              <div><div className="text-[10px] font-extrabold text-[#171230]">{title}</div><div className="mt-1 text-[8px] leading-4 text-[#736b80]">{text}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
