'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { allFeatures } from '@/data/site';

const spans = [
  'lg:col-span-6 lg:row-span-2',
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-12',
];

export default function BentoFeatures() {
  return (
    <div className="grid auto-rows-[minmax(155px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-12">
      {allFeatures.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={feature.title}
            className={spans[index] || 'lg:col-span-4'}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .18 }}
            transition={{ duration: .28, delay: Math.min(index * .035, .18) }}
          >
            <Link href={feature.href} className="bento-card group relative flex h-full min-h-[155px] flex-col overflow-hidden p-5 sm:p-6">
              <div className="absolute right-[-36px] top-[-44px] h-28 w-28 rounded-full bg-[#f0e7ff] opacity-65 transition-transform duration-300 group-hover:scale-125" />
              <div className="relative flex items-start justify-between gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#e4daf2] bg-[#f8f4ff] text-[#6d28d9]">
                  <Icon size={18} />
                </span>
                <ArrowUpRight size={16} className="text-[#9788aa] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#6d28d9]" />
              </div>
              <div className="relative mt-auto pt-8">
                <h3 className="text-[16px] font-extrabold tracking-[-.015em]">{feature.title}</h3>
                <p className="muted mt-2 max-w-lg text-[12px] leading-5">{feature.text}</p>
              </div>
              {(index === 0 || index === 8) && (
                <div className="relative mt-5 grid grid-cols-3 gap-2 border-t border-[#eee8f4] pt-4">
                  {['Input','Automation','Output'].map((item, i) => (
                    <div key={item} className="rounded-lg border border-[#ece6f3] bg-[#fcfbff] px-3 py-2">
                      <div className="text-[9px] font-black uppercase tracking-[.08em] text-[#9388a2]">{item}</div>
                      <div className="mt-2 h-1.5 rounded-full bg-[#eee7f6]">
                        <motion.div
                          className="h-full rounded-full bg-[#7b3fe2]"
                          initial={{ width: 0 }}
                          whileInView={{ width: String(52 + i * 18) + '%' }}
                          viewport={{ once: true }}
                          transition={{ duration: .5, delay: .1 + i * .08 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
