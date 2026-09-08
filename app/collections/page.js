'use client';

import { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import Navbar from '@/components/Navbar/Navbar';
import ProductCard from '@/components/ProductCard/ProductCard';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './collections.module.css';

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = useMemo(() => {
    let products = activeCategory === 'all'
      ? [...PRODUCTS]
      : PRODUCTS.filter(p => p.category === activeCategory);

    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return products;
  }, [activeCategory, sortBy]);

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>
              Our <em>Collections</em>
            </h1>
            <p className={styles.pageSubtitle}>
              Browse our handcrafted collection of premium gifts, hampers, and resin art pieces.
            </p>
          </div>

          <div className={styles.filters}>
            <div className={styles.categoryFilters}>
              <button
                className={`${styles.filterBtn} ${activeCategory === 'all' ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Products
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <select
              className={styles.sortSelect}
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              <option value="default">Sort by: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A - Z</option>
            </select>
          </div>

          <p className={styles.resultCount}>
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>

          <div className={styles.grid}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>🔍</span>
              <h3>No products found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
