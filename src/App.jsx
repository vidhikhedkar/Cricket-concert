import { Routes, Route } from 'react-router-dom';
import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './App.css';
import ScrollToTop from './components/global/ScrollToTop';
import IcplPage from './pages/IcplPage';

function App() {
  return (
    <>

      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/icpl" element={<IcplPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;