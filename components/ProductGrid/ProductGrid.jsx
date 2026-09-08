'use client';

import Link from 'next/link';
import { PRODUCTS } from '@/lib/data';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ title = 'Latest', titleAccent = 'Arrivals', limit = 8, showViewAll = true }) {
  const displayProducts = PRODUCTS.slice(0, limit);

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
