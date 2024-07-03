import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { FirmPage } from './pages/Firm';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import NotFound from './pages/NotFound';
import SatoshiRazor from './pages/SatoshiRazor';

const App = () => (
  <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/firm/:id" element={<FirmPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/satoshi-razor" element={<SatoshiRazor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;