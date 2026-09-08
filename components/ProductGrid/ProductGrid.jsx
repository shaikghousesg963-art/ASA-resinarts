import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

export default async function ProductGrid({ title = 'Latest', titleAccent = 'Arrivals', limit = 8, showViewAll = true }) {
  const { data: displayProducts } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (!displayProducts || displayProducts.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {title} <em>{titleAccent}</em>
          </h2>
          {showViewAll && (
            <Link href="/collections" className={styles.viewAll}>
              VIEW ALL PRODUCTS →
            </Link>
          )}
        </div>

        <div className={styles.grid}>
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
