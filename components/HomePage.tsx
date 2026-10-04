import OriginalHomePage from './HomePageOriginal';
import styles from './HomePageHero.module.css';

export default function HomePage() {
  return <div className={styles.homepageScope}><OriginalHomePage /></div>;
}
