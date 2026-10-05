import HomepagePdfInspired from './HomepagePdfInspired';
import HomepageHeroCompact from './HomepageHeroCompact';
import styles from './HomepageHeroSwap.module.css';

export default function HomePage() {
  return (
    <>
      <HomepageHeroCompact />
      <div className={styles.rest}>
        <HomepagePdfInspired />
      </div>
    </>
  );
}
