import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FeaturePage from '@/components/FeaturePage';
import { featureConfigs } from '@/data/site';

export function generateStaticParams(){ return Object.keys(featureConfigs).map(slug=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata>{ const {slug}=await params; const c=featureConfigs[slug]; return c?{title:c.title,description:c.description}:{}; }
export default async function Page({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const c=featureConfigs[slug]; if(!c) notFound(); return <FeaturePage config={c}/>; }
