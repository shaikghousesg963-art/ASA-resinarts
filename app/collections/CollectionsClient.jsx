'use client';

import { useState, useMemo } from 'react';
import { CATEGORIES } from '@/lib/data';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import Navbar from '@/components/Navbar/Navbar';
import ProductCard from '@/components/ProductCard/ProductCard';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './collections.module.css';

export default function CollectionsClient({ allProducts }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let products = activeCategory === 'all'
      ? [...allProducts]
      : allProducts.filter(p => p.category === activeCategory);

    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return products;
  }, [allProducts, activeCategory, sortBy]);

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      
      <main className={styles.main}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              Our <em>Collections</em>
            </h1>
            <p className={styles.subtitle}>
              Browse through our handpicked selection of premium resin art, elegant bouquets, and thoughtfully curated gift hampers.
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.layout}>
            {/* Sidebar / Filters */}
            <aside className={styles.sidebar}>
              <div className={styles.filterGroup}>
                <h3 className={styles.filterTitle}>Categories</h3>
                <div className={styles.categoryList}>
                  <button
                    className={`${styles.categoryBtn} ${activeCategory === 'all' ? styles.active : ''}`}
                    onClick={() => setActiveCategory('all')}
                  >
                    All Products
                  </button>
                  {CATEGORIES.map(category => (
                    <button
                      key={category.id}
                      className={`${styles.categoryBtn} ${activeCategory === category.id ? styles.active : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className={styles.content}>
              {/* Toolbar */}
              <div className={styles.toolbar}>
                <div className={styles.resultsCount}>
                  Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </div>
                
                <div className={styles.sortWrapper}>
                  <select 
                    className={styles.sortSelect}
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                  </select>
                </div>
              </div>

              {/* Grid */}
              <div className={styles.grid}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}>📦</div>
                  <h3>No products found</h3>
                  <p>Try selecting a different category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
