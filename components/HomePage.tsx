import HomepagePdfInspired from './HomepagePdfInspired';
import HomepageHeroCompact from './HomepageHeroCompact';
import BulkImportShowcase from './BulkImportShowcase';
import styles from './HomepageHeroSwap.module.css';

export default function HomePage() {
  return (
    <>
      <HomepageHeroCompact />
      <div className={styles.rest}>
        <HomepagePdfInspired />
        <BulkImportShowcase />
      </div>
    </>
  );
}
