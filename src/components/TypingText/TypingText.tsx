'use client';
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

type Props = {
  text: string;
  className?: string;
}

export default function TypingText({ text, className }: Props) {
  const speed = 30;
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i += 1;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`${styles.typewriting} ${className ?? ''}`}>
      {displayed}
    </span>
  )
}