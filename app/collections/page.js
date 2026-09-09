export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { supabase } from '@/lib/supabase';
import CollectionsClient from './CollectionsClient';

export default async function CollectionsPage() {
  const { data: allProducts } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  return <CollectionsClient allProducts={allProducts || []} />;
}
