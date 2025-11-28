'use client'
import styles from './styles.module.scss';
import Home from "@/app/(home)/page";

export default function AppClient() {

  return (
    <div className={styles.container}>
      <Home />
    </div>
  )
}