import HeroBannerMount from './HeroBannerMount';
import OriginalHomePage from './HomePageOriginal';
import ProductResearchShowcase from './ProductResearchShowcase';
import styles from './HomePageHero.module.css';

export default function HomePage() {
  return (
    <div className={styles.homepageScope}>
      <OriginalHomePage />
      {/* Product research bento showcase — single marketplace logos */}
      <ProductResearchShowcase />
      <HeroBannerMount />
    </div>
  );
}
