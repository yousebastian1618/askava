import './style.scss';
import MainPage from "@/components/MainPage/MainPage";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function HomePage() {
  return (
    <div className={'home-page'}>
      <div className={'sidebar-container'}>
        <Sidebar />
      </div>
      <div className={'main-page-container'}>
        <MainPage />
      </div>
    </div>
  );
}
