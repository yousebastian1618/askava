'use client';
import styles from './styles.module.scss';
import React, {useEffect, useRef, useState} from "react";

type Props = {
  label: string;
  sampleInputs: string[]
}

export default function MainInput({ label, sampleInputs }: Props) {

  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = '0px';
    el.style.height = el.scrollHeight + 'px';
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!value.trim()) return;
    }
  }

  return (
    <>
      <label className={styles.label}>{label}</label>
      <div className={styles.container}>
        <textarea
          ref={textareaRef}
          className={styles.chat}
          rows={1}
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      {sampleInputs && sampleInputs.length > 0 && (
        <div className={styles.sampleInputsContainer}>
          <label className={styles.sampleInputsLabel}>Sample Inputs: </label>
          <div className={styles.sampleInputs}>
            {sampleInputs.map((item, i) => {
              return (
                <span key={i} className={styles.sampleInput} onClick={() => setValue(item)}>{item}</span>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}