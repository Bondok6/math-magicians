import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Home from './pages/Home';
import Quote from './pages/Quote';
import './styles/App.css';
import CalculatorPage from './pages/CalculatorPage';

const App = () => (
  <>
    <header>
      <MainHeader />
    </header>

    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </main>
  </>
);

export default App;
