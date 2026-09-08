'use client';

import Link from 'next/link';
import { BRAND, getWhatsAppLink } from '@/lib/data';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img
          src="/images/hero-banner.jpg"
          alt="ASA Resin Arts — Premium gift hampers and resin art"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.labelWrapper}>
          <span className={styles.label}>✨ HANDCRAFTED WITH LOVE</span>
        </div>
        <h1 className={styles.title} style={{ fontFamily: "sans-serif" }}>
          Gifts That Speak <br />
          From The <em>Heart</em>
        </h1>
        <p className={styles.subtitle}>
          {BRAND.tagline}
        </p>
        <div className={styles.actions}>
          <Link href="/collections" className="btn btn-primary">
            EXPLORE COLLECTIONS
          </Link>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            💬 ORDER VIA WHATSAPP
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Happy Customers</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Unique Products</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>24hrs</span>
            <span className={styles.statLabel}>Fast Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
