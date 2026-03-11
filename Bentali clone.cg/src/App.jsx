import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Models from './pages/Models';
import Culture from './pages/Culture';
import Lifestyle from './pages/Lifestyle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/models" element={<Models />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
