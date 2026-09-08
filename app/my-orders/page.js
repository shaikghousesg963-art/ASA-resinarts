'use client';

import Link from 'next/link';
import { getWhatsAppLink } from '@/lib/data';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './orders.module.css';

export default function MyOrdersPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>
            My <em>Orders</em>
          </h1>

          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📦</div>
            <h2 className={styles.emptyTitle}>No orders yet</h2>
            <p className={styles.emptyText}>
              You haven&apos;t placed any orders yet. Start exploring our
              beautiful collection and place your first order!
            </p>
            <div className={styles.emptyActions}>
              <Link href="/collections" className="btn btn-primary">
                START SHOPPING
              </Link>
              <a
                href={getWhatsAppLink('Hi! I would like to check my order status.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                📞 TRACK ORDER
              </a>
            </div>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>💬</span>
                <h4>Order via WhatsApp</h4>
                <p>Send us a message and we&apos;ll handle your order personally.</p>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>🚚</span>
                <h4>Track Delivery</h4>
                <p>Contact us to get real-time updates on your order status.</p>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>🔄</span>
                <h4>Easy Returns</h4>
                <p>Not satisfied? We offer hassle-free returns & exchanges.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
