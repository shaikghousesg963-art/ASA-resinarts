import Link from 'next/link';
import { CATEGORIES } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import styles from './CategorySlider.module.css';

export default async function CategorySlider() {
  const { data: products } = await supabase
    .from('products')
    .select('category, image');

  const dynamicCategories = CATEGORIES.map(cat => {
    const catProducts = (products || []).filter(p => p.category === cat.id);
    const count = catProducts.length;
    // Use the first uploaded product's image if available, otherwise use a fallback
    const image = count > 0 ? catProducts[0].image : '/images/placeholder.jpg'; 
    return { ...cat, count, image };
  }).filter(cat => cat.count > 0);

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
          {dynamicCategories.map((cat) => (
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
