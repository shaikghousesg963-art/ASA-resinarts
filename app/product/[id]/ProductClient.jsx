'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatPrice, getWhatsAppLink } from '@/lib/data';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import Navbar from '@/components/Navbar/Navbar';
import ProductCard from '@/components/ProductCard/ProductCard';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './product.module.css';

export default function ProductClient({ product, relatedProducts }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <>
        <AnnouncementBar />
        <Navbar />
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.notFound}>
              <span className={styles.notFoundIcon}>😕</span>
              <h2>Product not found</h2>
              <p>The product you&apos;re looking for doesn&apos;t exist.</p>
              <Link href="/collections" className="btn btn-primary">
                BROWSE COLLECTIONS
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const whatsappMsg = `Hi! I'd like to order "${product.name}" (${formatPrice(product.price)}) x ${quantity}. Total: ${formatPrice(product.price * quantity)}.`;

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/collections">Collections</Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>{product.name}</span>
          </nav>

          <div className={styles.productLayout}>
            {/* Image */}
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.name} className={styles.image} />
                <div className={styles.badges}>
                  {product?.badges?.includes('bestseller') && (
                    <span className="badge badge-bestseller">BESTSELLER</span>
                  )}
                  {product?.badges?.includes('sale') && product.salePercent && (
                    <span className="badge badge-sale">{product.salePercent}% OFF</span>
                  )}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className={styles.infoSection}>
              <span className={styles.category}>{product.categoryLabel}</span>
              <h1 className={styles.name}>{product.name}</h1>

              <div className={styles.priceBlock}>
                <span className={styles.price}>{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <>
                    <span className={styles.originalPrice}>{formatPrice(product.originalPrice)}</span>
                    <span className={styles.savings}>
                      You save {formatPrice(product.originalPrice - product.price)}
                    </span>
                  </>
                )}
              </div>

              <p className={styles.description}>{product.description}</p>

              <div className={styles.deliveryInfo}>
                <div className={styles.deliveryItem}>
                  <span>🚚</span>
                  <span>Same day delivery in Kadapa</span>
                </div>
                <div className={styles.deliveryItem}>
                  <span>🎁</span>
                  <span>Free delivery above ₹999</span>
                </div>
                <div className={styles.deliveryItem}>
                  <span>✨</span>
                  <span>Premium quality guaranteed</span>
                </div>
              </div>

              <div className={styles.quantityRow}>
                <span className={styles.quantityLabel}>Quantity</span>
                <div className={styles.quantityControl}>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    −
                  </button>
                  <span className={styles.quantityValue}>{quantity}</span>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <span className={styles.totalPrice}>{formatPrice(product.price * quantity)}</span>
              </div>

              <div className={styles.actions}>
                <a
                  href={getWhatsAppLink(whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  🛒 BUY NOW
                </a>
                <a
                  href={getWhatsAppLink(whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ flex: 1 }}
                >
                  💬 ORDER VIA WHATSAPP
                </a>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts && relatedProducts.length > 0 && (
            <div className={styles.related}>
              <h2 className={styles.relatedTitle}>
                You May Also <em>Like</em>
              </h2>
              <div className={styles.relatedGrid}>
                {relatedProducts.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
