// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Gallery from './components/ArtGallery/Gallery.jsx';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Bottom from './components/Bottom/Bottom.jsx';
import Works from './components/Works/Works.jsx';
import About from './components/About/About.jsx';
import MyImage from './components/Image/MyImage.jsx';
import WorkDetail from './components/WorkDetail/WorkDetail.jsx';  // Import WorkDetail component
import ScrollToTop from './components/ScrollToTop.jsx'; // Import the ScrollToTop component
import './App.css';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const altColor = location.pathname.startsWith('/works') || location.pathname === '/about';

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><Gallery /></>} />
        <Route path="/works" element={<Works />} />
        {/* Dynamic route for each artwork */}
        <Route path="/works/:title" element={<WorkDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Bottom altColor={altColor} />
    </>
  );
}

export default App;