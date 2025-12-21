import './style.scss';
import Sidebar from "@/components/Sidebar/Sidebar";
import TypingText from "@/components/TypingText/TypingText";
import MainInput from "@/components/MainInput/MainInput";
import {sampleJobTitles} from "@/objects/objects";

export default function Home() {
  return (
    <div className="container">
      <Sidebar />
      <main className="content">
        <TypingText text={"Hi, I'm Ava, your interview assistant"} fontSize={4}/>
        <MainInput question={"What's the job title your looking to apply?"} sampleInputs={sampleJobTitles}/>
      </main>
    </div>
  );
}
