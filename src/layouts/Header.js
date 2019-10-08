import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <div className="navigation-div">
        <div id="branding">
          <Link to="/">
            <h1>React Redux Base</h1>
          </Link>
        </div>

        <nav className="menu">
          <ul className="navigation-items">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="/login">
                <Link to="/login">Login</Link>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
