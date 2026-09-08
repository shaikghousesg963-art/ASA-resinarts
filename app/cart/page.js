'use client';

import Link from 'next/link';
import { getWhatsAppLink } from '@/lib/data';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './cart.module.css';

export default function CartPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>
            Your <em>Cart</em>
          </h1>

          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🛒</div>
            <h2 className={styles.emptyTitle}>Your cart is empty</h2>
            <p className={styles.emptyText}>
              Looks like you haven&apos;t added anything to your cart yet.
              Browse our beautiful collection of handcrafted gifts!
            </p>
            <div className={styles.emptyActions}>
              <Link href="/collections" className="btn btn-primary">
                BROWSE COLLECTIONS
              </Link>
              <a
                href={getWhatsAppLink('Hi! I would like to place an order.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                💬 ORDER VIA WHATSAPP
              </a>
            </div>

            <div className={styles.tip}>
              <div className={styles.tipIcon}>💡</div>
              <div>
                <h4 className={styles.tipTitle}>Quick Order</h4>
                <p className={styles.tipText}>
                  Want to order quickly? Just send us a WhatsApp message with your
                  requirements and we&apos;ll handle everything!
                </p>
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
