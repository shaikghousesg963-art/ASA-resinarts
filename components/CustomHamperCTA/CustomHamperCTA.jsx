'use client';

import { OCCASIONS, getWhatsAppLink } from '@/lib/data';
import styles from './CustomHamperCTA.module.css';

export default function CustomHamperCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.badge}>🎉 SPECIAL OFFER</span>
          <h2 className={styles.title}>
            Create Your Own<br />
            <em>Custom Resin  Arts</em>
          </h2>
          <p className={styles.description}>
            Tell us the occasion, the budget, and the recipient — we&apos;ll handcraft
            something truly unforgettable. Perfect for weddings, corporate gifts, and more.
          </p>
          <a
            href={getWhatsAppLink('Hi! I would like to create a custom hamper.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            💬 ORDER VIA WHATSAPP
          </a>
        </div>

        <div className={styles.right}>
          {OCCASIONS.slice(0, 3).map((occasion, i) => (
            <div key={i} className={styles.occasionCard}>
              <div className={styles.occasionIcon}>{occasion.icon}</div>
              <div className={styles.occasionInfo}>
                <h4 className={styles.occasionTitle}>{occasion.title}</h4>
                <p className={styles.occasionDesc}>{occasion.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
