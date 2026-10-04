import HeroBannerMount from './HeroBannerMount';
import OriginalHomePage from './HomePageOriginal';
import ProductResearchShowcase from './ProductResearchShowcase';
import WalletPaymentsShowcase from './WalletPaymentsShowcase';
import styles from './HomePageHero.module.css';

export default function HomePage() {
  return (
    <div className={styles.homepageScope}>
      <OriginalHomePage />
      <WalletPaymentsShowcase />
      <ProductResearchShowcase />
      <HeroBannerMount />
    </div>
  );
}
