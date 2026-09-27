import type { MetadataRoute } from 'next';
const paths = ['', '/features', '/features/product-hunting', '/features/auto-listing', '/features/stock-monitoring', '/features/price-monitoring', '/features/google-sheets', '/features/analytics', '/features/reports', '/pricing', '/about', '/contact', '/login', '/signup'];
export default function sitemap(): MetadataRoute.Sitemap { return paths.map((p) => ({ url: `https://autodropshipprime.example${p}`, lastModified: new Date(), changeFrequency: p === '' ? 'weekly' : 'monthly', priority: p === '' ? 1 : .7 })); }
