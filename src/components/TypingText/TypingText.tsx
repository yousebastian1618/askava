'use client'
import {useEffect, useState} from "react";
import './style.scss';

type Props = {
  text: string;
  fontSize: number;
  className?: string;
}

export default function TypingText({ text, fontSize=1, className }: Props) {

  const speed = 30;
  const [streaming, setStreaming] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setStreaming(text.slice(0, i));
      i += 1
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => {
      clearInterval(interval);
    }
  }, [text]);

  return (
    <div className={`typing-text-container`} style={{ fontSize: `${fontSize}ex`}}>
      {streaming}
    </div>
  )
}