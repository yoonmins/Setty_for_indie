import {Route, Routes} from 'react-router-dom';
import './App.css';
import MainView from './features/mainVisitorPage/pages/MainView';
import GuestBookView from './features/guestBookPage/pages/GuestBookView';
import FooterComponents from './globalComponents/Footer';
import SecondView from './features/secondVisitorPage/pages/SecondVisitorView';
import NavBar from './globalComponents/Navbar';
import ScrollToTop from './globalComponents/ScrollToTop';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/ui_design" element={<SecondView />} />
        <Route path="/visitor" element={<GuestBookView/>} />
      </Routes>
      <FooterComponents/>
      <ScrollToTop />
    </div>
  );
}

export default App;
