"use client";

import { useEffect } from "react";

export default function HeroBannerMount() {
  useEffect(() => {
    const frame = document.querySelector(
      "main section:first-child .product-frame",
    ) as HTMLElement | null;
    if (!frame) return;

    const existing = frame.querySelector(".hero-banner-mounted");
    if (existing) return;

    const image = document.createElement("img");
    image.src = "/hero-banner.png";
    image.alt = "AutoDropshipPrime automation dashboard";
    image.className = "hero-banner-mounted";
    image.loading = "eager";
    image.decoding = "async";
    image.setAttribute("fetchpriority", "high");

    frame.appendChild(image);

    return () => {
      image.remove();
    };
  }, []);

  return null;
}
