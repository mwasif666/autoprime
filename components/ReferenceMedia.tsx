'use client';

import { useState } from 'react';
import { TEMP_REFERENCE_ASSETS, type TemporaryReferenceAssetKey } from '@/data/referenceAssets';

export function ReferenceVisual({
  asset,
  className = '',
  imageClassName = '',
}: {
  asset: TemporaryReferenceAssetKey;
  className?: string;
  imageClassName?: string;
}) {
  const item = TEMP_REFERENCE_ASSETS[asset];
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`reference-media ${className}`}>
      {!failed ? (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          className={imageClassName}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="reference-fallback" aria-label={item.alt}>
          <div className="reference-fallback__sidebar">
            <span /><span /><span /><span /><span />
          </div>
          <div className="reference-fallback__main">
            <div className="reference-fallback__toolbar" />
            <div className="grid grid-cols-3 gap-3">
              <div className="reference-fallback__metric" />
              <div className="reference-fallback__metric" />
              <div className="reference-fallback__metric" />
            </div>
            <div className="reference-fallback__chart" />
          </div>
        </div>
      )}
    </figure>
  );
}

export function ReferenceGallery() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
      <ReferenceVisual asset="productResearch" className="md:col-span-2 lg:col-span-7 lg:row-span-2" imageClassName="h-full min-h-[360px] object-cover object-center" />
      <ReferenceVisual asset="listing" className="lg:col-span-5" imageClassName="h-[220px] object-cover object-center" />
      <ReferenceVisual asset="monitoring" className="lg:col-span-5" imageClassName="h-[220px] object-cover object-center" />
    </div>
  );
}
