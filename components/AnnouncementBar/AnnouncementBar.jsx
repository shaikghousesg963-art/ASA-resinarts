'use client';

import { MARQUEE_ITEMS, BRAND } from '@/lib/data';
import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className={styles.bar}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {items.map((item, i) => (
            <span key={i} className={styles.item}>
              {item}
              <span className={styles.separator}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
