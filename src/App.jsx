import { Routes, Route } from 'react-router-dom';
import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './App.css';
import ScrollToTop from './components/global/ScrollToTop';

function App() {
  return (
    <>

      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;