'use client';
import { useEffect, useRef, useState } from "react";
import './style.scss';

type Props = {
  placeholder?: string;
  sampleInputs?: string[];
}

export default function MainInput({ placeholder, sampleInputs }: Props) {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);
  return (
    <textarea className={'main-input'}
              ref={textareaRef}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder={placeholder}
              rows={1}
    />
  )
}
