import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import OTBrand from '../assets/OT.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import ua from '../translations/ua';
import en from '../translations/en';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const { language, setLanguage } = useContext(LanguageContext);
  const t = language === 'ua' ? ua : en;

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarScroll"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link to="/" className="navbar-brand">
          <img src={OTBrand} className="brand d-none d-lg-block" alt="Logo for large screens" />
          <img src={OTBrand} className="brand d-block d-lg-none ms-auto" alt="Logo for small screens" />
        </Link>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeNavbar}>
                {t.nav.main}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/subscriptions" className="nav-link" onClick={closeNavbar}>
                {t.nav.subscriptions}
              </Link>
            </li>
          </ul>

          <div className="dropdown list-unstyled">
            {language === 'en' ? (
              <>
                <button onClick={() => setLanguage('en')} className="dropbtn">EN</button>
                <div className="dropdownContent">
                  <li>
                    <button onClick={() => setLanguage('ua')}>UA</button>
                  </li>
                </div>
              </>
            ) : (
              <>
                <button onClick={() => setLanguage('ua')} className="dropbtn">UA</button>
                <div className="dropdownContent">
                  <li>
                    <button onClick={() => setLanguage('en')}>EN</button>
                  </li>
                </div>
              </>
            )}
          </div>

          <button
            className="btn singIn"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-box-arrow-in-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
              />
              <path
                fillRule="evenodd"
                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
              />
            </svg>
          </button>

          <button
            className="btn singUp"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            {t.nav.signUp}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;