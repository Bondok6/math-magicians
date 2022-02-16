import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import MainHeader from './components/MainHeader';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <>
    <header>
      <MainHeader />
    </header>
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </main>
  </>
);

export default App;
