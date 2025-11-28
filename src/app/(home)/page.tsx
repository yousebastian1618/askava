'use client'
import styles from './styles.module.scss';
import TypingText from "@/components/TypingText/TypingText";
import MainInput from "@/components/MainInput/MainInput";
import Sidebar from "@/app/(home)/_components/Sidebar/Sidebar";
import {sampleJobTitles} from "@/objects/objects";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.main}>
          <TypingText text={"Hi, I'm Ava, your interview assistant"} className={styles.mainTitle} />
          <MainInput label="What's the job title your looking to apply" sampleInputs={sampleJobTitles} />
        </div>
      </div>
    </div>
  )
}
