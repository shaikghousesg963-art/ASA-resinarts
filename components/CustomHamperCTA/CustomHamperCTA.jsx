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
            Tell us your vision, budget, and the occasion — we'll handcraft
            stunning resin art tailored just for you. Perfect for weddings, home decor, and personalized gifting.
          </p>
          <a
            href={getWhatsAppLink('Hi! I would like to create a custom resin art piece.')}
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
