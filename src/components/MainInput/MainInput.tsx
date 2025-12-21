import './style.scss';

type Props = {
  question?: string;
  sampleInputs?: string[];
}

export default function MainInput({ question, sampleInputs }: Props) {
  return (
    <div className={'main-input-container'}>
      {question && (
        <span className={'main-input-question'}>{question}</span>
      )}
      <input type={'text'}
             className={'main-input'}
       />
      {sampleInputs && (
        <div className={'sample-inputs'}>
          <label className={'sample-input-label'}>Sample Inputs: </label>
          {sampleInputs.map((item) => {
            return (
              <span key={item} className={'sampleInput'}>{item}</span>
            )
          })}
        </div>
      )}
    </div>
  )
}