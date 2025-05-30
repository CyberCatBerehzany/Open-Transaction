import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/style.css';


function App() {
  return (
    <LanguageProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/subscriptions" element={<SubscriptionsPage />} />
        </Routes>
        <Footer />
        <div className="bg bg-secondary text-center text-light">&copy; OpenTransaction 2025</div>
      </Router>
    </LanguageProvider>  
  );
}

export default App;