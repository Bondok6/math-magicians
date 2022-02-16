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
        <Route path="/math-magicians/" element={<Home />} />
        <Route path="/math-magicians/calculator" element={<CalculatorPage />} />
        <Route path="/math-magicians/quote" element={<Quote />} />
      </Routes>
    </main>
  </>
);

export default App;
