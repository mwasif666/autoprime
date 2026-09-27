'use client';

import { ExternalLink, ImageIcon } from 'lucide-react';
import { TEMP_REFERENCE_ASSETS, type TemporaryReferenceAssetKey } from '@/data/referenceAssets';

export function ReferenceVisual({
  asset,
  title,
  caption,
  className = '',
}: {
  asset: TemporaryReferenceAssetKey;
  title?: string;
  caption?: string;
  className?: string;
}) {
  const item = TEMP_REFERENCE_ASSETS[asset];

  return (
    <figure className={`reference-media group ${className}`}>
      <div className="reference-media__bar">
        <span className="reference-media__dot" />
        <span className="reference-media__dot" />
        <span className="reference-media__dot" />
        <span className="ml-2 truncate text-[11px] font-bold tracking-[.02em] text-[#7a708c]">
          {title ?? 'Product interface reference'}
        </span>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-[#e9e1f5] bg-white px-2.5 py-1 text-[9px] font-black uppercase tracking-[.11em] text-[#7957bc]">
          <ImageIcon size={10} />
          Temporary
        </span>
      </div>
      <div className="reference-media__viewport">
        <img src={item.src} alt={item.alt} loading="lazy" referrerPolicy="no-referrer" />
        <div className="reference-media__fade" />
        <div className="reference-media__source">
          <span>Reference image: {item.source}</span>
          <ExternalLink size={12} />
        </div>
      </div>
      {caption && <figcaption className="reference-media__caption">{caption}</figcaption>}
    </figure>
  );
}

export function ReferenceGallery() {
  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <ReferenceVisual
        asset="productResearch"
        title="Product research workflow"
        caption="Temporary staging reference for the product-hunting visual direction."
        className="lg:col-span-7"
      />
      <div className="grid gap-5 lg:col-span-5">
        <ReferenceVisual asset="sellerListing" title="Listing workflow reference" />
        <ReferenceVisual asset="monitoring" title="Monitoring workflow reference" />
      </div>
    </div>
  );
}
