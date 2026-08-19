import { Routes, Route } from 'react-router-dom';
import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './App.css';
import ScrollToTop from './components/global/ScrollToTop';
import IcplPage from './pages/IcplPage';
import Partnerpage from './pages/Partnerpage';
import ContactusPage from './pages/ContactusPage';
import CricketPage from './pages/CricketPage';
import DomesticPage from './pages/DomesticPage';
import InternationalPage from './pages/InternationalPage';
import WomensCricketpage from './pages/WomensCricketpage';
import YouthPage from './pages/YouthPage';
import SponsorsPage from './pages/SponsorsPage';
import SubPartnerPage from './pages/SubPartnerPage';
import InvestorsPage from './pages/InvestorsPage';
import MediaPage from './pages/MediaPage';

function App() {
  return (
    <>

      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/icpl" element={<IcplPage />} />
        <Route path="/partner" element={<Partnerpage />} />
        <Route path="/contact" element={<ContactusPage />} />
        <Route path="/cricket" element={<CricketPage />} />
        <Route path="/domestic" element={<DomesticPage />} />
        <Route path="/international" element={<InternationalPage />} />
        <Route path="/womens-cricket" element={<WomensCricketpage />} />
        <Route path="/youth" element={<YouthPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/subpartner" element={<SubPartnerPage />} />
        <Route path="/investors" element={<InvestorsPage />} />
        <Route path="/media" element={<MediaPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;