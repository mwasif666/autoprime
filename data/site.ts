import { BarChart3, Boxes, ClipboardList, FileSpreadsheet, PackageSearch, ReceiptText, RefreshCcw, Tags, WandSparkles, type LucideIcon } from 'lucide-react';

export type FeatureConfig = {
  slug: string;
  title: string;
  eyebrow: string;
  hero: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  metricLabel: string;
};

export const featureConfigs: Record<string, FeatureConfig> = {
  'product-hunting': {
    slug: 'product-hunting', title: 'Auto Product Hunting', eyebrow: 'Product research', hero: 'Find products worth listing.',
    description: 'Review product, supplier, pricing, stock and margin information from one focused research view before a listing is created.',
    icon: PackageSearch,
    bullets: ['Search and filter product opportunities', 'Compare source price and estimated selling price', 'Review stock and category context', 'Move selected products into the listing workflow'],
    metricLabel: 'Potential margin',
  },
  'auto-listing': {
    slug: 'auto-listing', title: 'Auto Listing', eyebrow: 'Listing workflow', hero: 'From product to listing without the repetitive work.',
    description: 'Prepare titles, images, pricing, quantities and listing details in a structured publishing workflow built for repeatable operations.',
    icon: ClipboardList,
    bullets: ['Import selected product details', 'Edit titles, descriptions and images', 'Review cost, price and profit before publishing', 'Save drafts or move listings forward'],
    metricLabel: 'Draft readiness',
  },
  'stock-monitoring': {
    slug: 'stock-monitoring', title: 'Stock Monitoring', eyebrow: 'Monitoring', hero: 'Know when supplier stock changes.',
    description: 'Keep active, low-stock and out-of-stock products visible in one monitoring center with clear operational status.',
    icon: RefreshCcw,
    bullets: ['Filter products by stock state', 'See recent supplier changes', 'Surface low-stock attention items', 'Track monitoring status from one view'],
    metricLabel: 'Products monitored',
  },
  'price-monitoring': {
    slug: 'price-monitoring', title: 'Price Monitoring', eyebrow: 'Monitoring', hero: 'Stay aware of supplier price changes.',
    description: 'Compare supplier price changes with store pricing and margin context so important changes are easier to review.',
    icon: Tags,
    bullets: ['See old and new supplier prices', 'Review margin impact', 'Inspect product price history', 'Filter recently changed items'],
    metricLabel: 'Price changes',
  },
  'google-sheets': {
    slug: 'google-sheets', title: 'Google Sheets Automation', eyebrow: 'Finance workflow', hero: 'Keep orders and profit data organized automatically.',
    description: 'Structure order, cost, fee, profit and status data into a spreadsheet-ready flow designed to keep operational records in sync.',
    icon: FileSpreadsheet,
    bullets: ['Map order fields to structured columns', 'Calculate cost and profit fields', 'Surface sync status and last update', 'Keep finance data easy to review outside the dashboard'],
    metricLabel: 'Sheet sync status',
  },
  analytics: {
    slug: 'analytics', title: 'Profit Dashboard', eyebrow: 'Analytics', hero: 'See the numbers behind your store.',
    description: 'Understand revenue, costs, marketplace fees, product performance and net margin from one analytics area.',
    icon: BarChart3,
    bullets: ['Review revenue and cost trends', 'Track profit margin over time', 'Compare product-level profitability', 'Filter by useful reporting periods'],
    metricLabel: 'Net profit',
  },
  reports: {
    slug: 'reports', title: 'Reports & Insights', eyebrow: 'Reporting', hero: 'Reports built around the questions sellers actually ask.',
    description: 'Review sales, profit, orders, inventory, product performance and price-change reporting with consistent filters and export controls.',
    icon: ReceiptText,
    bullets: ['Sales and profit reporting', 'Order and inventory reporting', 'Product performance summaries', 'Date-range and export controls'],
    metricLabel: 'Reports ready',
  },
};

export const allFeatures = [
  { title: 'Auto Product Hunting', text: 'Research products with supplier, price, margin and stock context.', icon: PackageSearch, href: '/features/product-hunting' },
  { title: 'Auto Listing', text: 'Move selected products into a structured listing workflow.', icon: ClipboardList, href: '/features/auto-listing' },
  { title: 'Stock Monitoring', text: 'Keep stock states and supplier changes visible.', icon: RefreshCcw, href: '/features/stock-monitoring' },
  { title: 'Price Monitoring', text: 'Review supplier price changes and margin impact.', icon: Tags, href: '/features/price-monitoring' },
  { title: 'Google Sheets Automation', text: 'Keep orders, costs and profit data organized in a sheet-ready flow.', icon: FileSpreadsheet, href: '/features/google-sheets' },
  { title: 'Product Image Studio', text: 'Prepare cleaner product images for listings and marketplace use.', icon: WandSparkles, href: '/features/auto-listing' },
  { title: 'Profit Dashboard', text: 'Understand revenue, costs, fees and profit over time.', icon: BarChart3, href: '/features/analytics' },
  { title: 'Orders', text: 'Review order values, costs, profit and status in one place.', icon: Boxes, href: '/features' },
  { title: 'Reports', text: 'Turn operating data into reusable reports and exports.', icon: ReceiptText, href: '/features/reports' },
];
