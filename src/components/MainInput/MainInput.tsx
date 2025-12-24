'use client'
import './style.scss';
import {useEffect, useRef, useState} from "react";

type Props = {
  question?: string;
  sampleInputs?: string[];
}

export default function MainInput({ question, sampleInputs }: Props) {

  const [mainInput, setMainInput] = useState('');

  const inputRef = useRef(mainInput);

  useEffect(() => {
    inputRef.current = mainInput;
  }, [mainInput]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (inputRef.current === '') return;
        console.log(inputRef.current);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={'main-input-container'}>
      {question && (
        <span className={'main-input-question'}>{question}</span>
      )}
      <input type={'text'}
             className={'main-input'}
             value={mainInput}
             onChange={(e) => setMainInput(e.target.value)}

       />
      {sampleInputs && (
        <>
          <i className={'sample-input-label'}>Sample Inputs: &nbsp;</i>
          <div className={'sample-inputs'}>
            {sampleInputs.map((item) => {
              return (
                <span key={item} className={'sample-input'} onClick={() => setMainInput(item)}>{item}</span>
              )
            })}
          </div>
        </>

      )}
    </div>
  )
}