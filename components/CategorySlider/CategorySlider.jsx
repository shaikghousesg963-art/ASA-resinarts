'use client';

import Link from 'next/link';
import { CATEGORIES } from '@/lib/data';
import styles from './CategorySlider.module.css';

export default function CategorySlider() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <em>Shop by</em> Category
          </h2>
          <Link href="/collections" className={styles.viewAll}>
            VIEW ALL →
          </Link>
        </div>

        <div className={styles.slider}>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/collections?category=${cat.id}`}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img src={cat.image} alt={cat.name} className={styles.image} />
                <div className={styles.cardOverlay}>
                  <span className={styles.count}>{cat.count} Products</span>
                </div>
              </div>
              <h3 className={styles.cardTitle}>{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
