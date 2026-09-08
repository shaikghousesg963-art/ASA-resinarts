import { supabase } from '@/lib/supabase';

export async function generateStaticParams() {
  const { data: products } = await supabase.from('products').select('id');
  return (products || []).map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductLayout({ children }) {
  return children;
}
