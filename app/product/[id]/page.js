import { supabase } from '@/lib/supabase';
import ProductClient from './ProductClient';

export default async function ProductPage({ params }) {
  const { id } = params;
  
  // Fetch the specific product
  const { data: product } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  let relatedProducts = [];
  if (product) {
    // Fetch related products based on category
    const { data } = await supabase
      .from('products')
      .select('*')
      .eq('category', product.category)
      .neq('id', product.id)
      .limit(4);
    relatedProducts = data || [];
  }

  return <ProductClient product={product} relatedProducts={relatedProducts} />;
}
