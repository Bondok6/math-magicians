import React from 'react';
import Calculator from '../components/Calculator';
import '../styles/CalculatorPage.css';

const CalculatorPage = () => (
  <section className=" container calculator-section">
    <h2> Let&#39;s do some math ! </h2>
    <div className="calculator">
      <Calculator />
    </div>
  </section>
);

export default CalculatorPage;
