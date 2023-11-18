import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tariffs from './pages/Tariffs';
import Footer from './components/layouts/Footer';
import Faq from './pages/Faq';
import News from './pages/News';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tariffs" element={<Tariffs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
