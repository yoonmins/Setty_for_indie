import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import MainView from './features/mainVisitorPage/pages/MainView';
import GuestBookView from './features/guestBookPage/pages/GuestBookView';
import FooterComponents from './globalComponents/Footer';
import SecondView from './features/secondVisitorPage/pages/SecondVisitorView';
import NavBar from './globalComponents/Navbar';
import ScrollToTop from './globalComponents/ScrollToTop';
import ScrollToComponents from './globalComponents/ScrollToComponents';
import './assets/fonts/Pretendard/web/static/pretendard.css'

function App() {
  return (
      <div className="App">
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<SecondView />} />
          {/* 
          요구사항 변경으로 인한 원페이지 제작
          <Route path="/" element={<MainView />} />
          <Route path="/ui_design" element={<SecondView />} />
          <Route path="/visitor" element={<GuestBookView/>} /> 
          */}
        </Routes>
        <FooterComponents/>
        <ScrollToComponents />
        <ScrollToTop />
      </div>
  );
}

export default App;
