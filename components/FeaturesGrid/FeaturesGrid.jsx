import { FEATURES } from '@/lib/data';
import styles from './FeaturesGrid.module.css';

export default function FeaturesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.tagline}>
          We don&apos;t just deliver gifts — we deliver feelings, wrapped with care.
        </p>
        <div className={styles.grid}>
          {FEATURES.map((feature, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
