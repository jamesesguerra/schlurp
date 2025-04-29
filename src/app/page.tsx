import LandingPage from "./pages/LandingPage";
import styles from '@/app/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <LandingPage />
    </div>
  );
}
