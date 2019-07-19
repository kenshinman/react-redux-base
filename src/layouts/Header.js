import React from 'react';


const Header = () => {
  return (
    <header>
      <div className="navigation-div">
        <div id="branding">
          <a id="brand-name" href='/'>
            <h1>Branding</h1>
          </a>
        </div>

        <nav className="menu">
          <ul className="navigation-items">
            <li>
              <a className="home" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="about" href="/about">
                About
              </a>
            </li>
            <li>
              <a href="/login">
                <button id="sign_in" className="button">
                  Login
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
