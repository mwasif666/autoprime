import { HelpCircle } from 'lucide-react';

const items = [
  {
    question: 'What happens after the 3-day $1 trial?',
    answer: 'After 3 days, your account will automatically switch to the Starter Plan ($19/month) unless you upgrade to a higher plan or cancel before the trial ends.',
  },
  {
    question: 'How many eBay stores and listings are included in each plan?',
    answer: 'Trial: 1 store, 20 listings · Starter: 1 store, 400 listings · Professional: 5 stores, 3,000 listings · Enterprise: 12 stores, 10,000 listings · Custom: custom limits.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit/debit cards and other secure payment methods through our payment processor.',
  },
  {
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will apply to your next billing cycle.',
  },
  {
    question: 'Are there any setup fees?',
    answer: 'No, there are no setup fees. You can start immediately with just the plan price.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel your subscription at any time directly from your account. If you cancel during the trial period, you won’t be charged.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We do not offer refunds for monthly subscriptions, but you can cancel anytime and continue using the plan until the end of your billing period.',
  },
  {
    question: 'Can I use the add-on services with any plan?',
    answer: 'Yes, add-on services (Order Processing, Hand-Picked Products, and Sourcing Request) can be added to any plan as needed.',
  },
  {
    question: 'What platforms can I import products from?',
    answer: 'You can import products from eBay, Amazon, AliExpress, Etsy and other supported platforms, depending on your plan.',
  },
  {
    question: 'Is my data and account information safe?',
    answer: 'Yes, we use industry-standard security measures to keep your data, listings, and account information safe and secure.',
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes, all plans include 24/7 Customer Support. Trial and Starter plans get Live Chat support, Professional gets Priority Support, and Enterprise gets VIP Support.',
  },
  {
    question: 'Do you support custom plans?',
    answer: 'Yes. If you need higher limits, more eBay stores, or special features, contact our sales team for a custom plan tailored to your business needs.',
  },
];

const accents = [
  ['#6d28d9', '#f3edff'],
  ['#7c3aed', '#f4efff'],
  ['#8b3dff', '#f5efff'],
  ['#5b4bd8', '#f0efff'],
];

export default function Faq() {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => {
        const [accent, soft] = accents[index % accents.length];
        return (
          <article
            key={item.question}
            className="group relative min-h-[178px] overflow-hidden rounded-[18px] border border-[#e6dff0] bg-white p-5 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span
              className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full border opacity-60"
              style={{ borderColor: `${accent}24`, background: `${soft}88` }}
            />

            <div className="relative flex items-start gap-3.5">
              <span
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-[14px] font-black"
                style={{ color: accent, background: soft }}
              >
                {index + 1}
              </span>

              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="text-[14px] font-[850] leading-5 tracking-[-.02em] text-[#171230]">
                  {item.question}
                </h3>
                <p className="mt-2.5 text-[11px] leading-[1.65] text-[#6f687b]">
                  {item.answer}
                </p>
              </div>
            </div>

            <span
              className="absolute bottom-4 right-4 grid h-7 w-7 place-items-center rounded-full border"
              style={{ color: accent, borderColor: `${accent}22`, background: soft }}
              aria-hidden="true"
            >
              <HelpCircle size={14} strokeWidth={2.2} />
            </span>
          </article>
        );
      })}
    </div>
  );
}
