'use client';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] grid min-h-screen place-items-center bg-[rgba(251,248,255,0.94)] backdrop-blur-[2px]">
      <div className="flex min-w-[190px] flex-col items-center rounded-[22px] border border-[#e6dcf2] bg-white px-8 py-7 text-center">
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 42, color: '#6D28D9' }} spin />}
          size="large"
        />
        <div className="mt-4 text-[13px] font-extrabold tracking-[-.01em] text-[#171230]">Loading workspace</div>
        <div className="mt-1 text-[10px] font-medium text-[#746c80]">Preparing your AutoDropshipPrime view…</div>
      </div>
    </div>
  );
}
