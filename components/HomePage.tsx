import HomepagePdfInspired from './HomepagePdfInspired';
import HomepageHeroCompact from './HomepageHeroCompact';
import BulkImportShowcase from './BulkImportShowcase';
import SimpleSourcingSection from './SimpleSourcingSection';
import SimpleSupportSection from './SimpleSupportSection';
import styles from './HomepageHeroSwap.module.css';

export default function HomePage() {
  return (
    <>
      <HomepageHeroCompact />
      <div className={styles.rest}>
        <HomepagePdfInspired />
        <BulkImportShowcase />
        <SimpleSourcingSection />
        <SimpleSupportSection />
      </div>
    </>
  );
}
