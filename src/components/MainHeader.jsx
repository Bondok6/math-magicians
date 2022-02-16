import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainHeader.css';

const MainHeader = () => (
  <nav className="nav">
    <h1 className="nav__title">Math Magicians</h1>
    <ul className="nav__links">
      <li>
        <Link to="/home" className="nav__link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/calculator" className="nav__link">
          Calculator
        </Link>
      </li>
      <li>
        <Link to="/quote" className="nav__link">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default MainHeader;
