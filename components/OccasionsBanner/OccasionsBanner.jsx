import styles from './OccasionsBanner.module.css';

export default function OccasionsBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.icon}>🎁</div>
        <span className="section-label">OUR COLLECTIONS</span>
        <h2 className={styles.title}>
          Gifts for <em>Every Occasion</em>
        </h2>
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
          From birthdays to weddings, we craft the perfect hamper for every special moment.
        </p>
      </div>
    </section>
  );
}
