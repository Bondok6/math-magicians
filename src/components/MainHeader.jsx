import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainHeader.css';

const MainHeader = () => (
  <nav className="nav">
    <h1 className="nav__title">Math Magicians</h1>
    <ul className="nav__links">
      <li>
        <Link to="/math-magicians/" className="nav__link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/math-magicians/calculator" className="nav__link">
          Calculator
        </Link>
      </li>
      <li>
        <Link to="/math-magicians/quote" className="nav__link">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default MainHeader;
