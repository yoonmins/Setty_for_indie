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
        <Route path="/Setty_for_indie" element={<MainView />} />
        <Route path="/Setty_for_indie/ui_design" element={<SecondView />} />
        <Route path="/Setty_for_indie/visitor" element={<GuestBookView/>} />
      </Routes>
      <FooterComponents/>
      <ScrollToTop />
    </div>
  );
}

export default App;
