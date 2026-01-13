import './style.scss';
import MainInput from "@/components/MainInput/MainInput";

export default function MainPage() {
  return (
    <div className={'main-container'}>
      <div className={'main-wrapper'}>
        <MainInput />
      </div>
    </div>
  )
}