'use client';

import Link from 'next/link';
import { formatPrice, getWhatsAppLink } from '@/lib/data';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const whatsappMsg = `Hi! I'm interested in "${product.name}" (${formatPrice(product.price)}). Can I order this?`;

  return (
    <div className={styles.card}>
      <Link href={`/product/${product.id}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <img src={product.image} alt={product.name} className={styles.image} />
          <div className={styles.badges}>
            {product.badges.includes('bestseller') && (
              <span className="badge badge-bestseller">BESTSELLER</span>
            )}
            {product.badges.includes('sale') && product.salePercent && (
              <span className="badge badge-sale">{product.salePercent}% OFF</span>
            )}
          </div>
        </div>
      </Link>

      <div className={styles.info}>
        <span className={styles.category}>{product.categoryLabel}</span>
        <Link href={`/product/${product.id}`} className={styles.nameLink}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>

        <div className={styles.priceRow}>
          <div className={styles.prices}>
            <span className={styles.price}>{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <a
            href={getWhatsAppLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.addBtn}
            aria-label="Add to cart"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </a>
        </div>

        <a
          href={getWhatsAppLink(whatsappMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-buy ${styles.buyBtn}`}
        >
          🛒 BUY NOW
        </a>
      </div>
    </div>
  );
}
