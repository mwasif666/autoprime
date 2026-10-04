import HeroBannerMount from './HeroBannerMount';
import OriginalHomePage from './HomePageOriginal';
import ProductResearchShowcase from './ProductResearchShowcase';
import WalletPaymentsShowcase from './WalletPaymentsShowcase';
import styles from './HomePageHero.module.css';
import walletStyles from './WalletPlacement.module.css';
import pricingStyles from './HomePricing.module.css';

export default function HomePage() {
  return (
    <div className={`${styles.homepageScope} ${walletStyles.walletPlacement} ${pricingStyles.pricingScope}`}>
      <OriginalHomePage />
      <WalletPaymentsShowcase />
      <ProductResearchShowcase />
      <HeroBannerMount />
    </div>
  );
}
