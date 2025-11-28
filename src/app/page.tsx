import styles from './styles.module.scss';
import HomeClient from "@/app/client";

export default function App() {
  return (
    <div className={styles.container}>
      <HomeClient />
    </div>
  );
}
