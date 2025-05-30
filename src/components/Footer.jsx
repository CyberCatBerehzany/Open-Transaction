import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { LanguageContext } from '../context/LanguageContext';
import ua from '../translations/ua';
import en from '../translations/en';

const Footer = () => {
  const { language } = useContext(LanguageContext); 
  const t = language === 'ua' ? ua : en; 
  return (
    <footer className="mt-5 py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-12 text-center d-none d-lg-block">
            {t.footer.contacts}
          </div>
          <div className="col-lg-6 col-sm-12 text-start contacts">
            <h4 className="mb-3">{t.footer.contacts}</h4>
            <div className="links">
              <p className="my-3">email: sasha_k@bfc.org.ua</p>
              <a
                className="colesseum"
                href="https://arena.colosseum.org/projects/explore/open-transaction"
              >
                Colesseum
              </a>
            </div>
            <hr />
            <div className="social-icons d-flex gap-2 mb-2">
              <a
                href="https://github.com/CyberCatBerehzany"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <svg
                  className="github-icon"
                  width="32"
                  height="32"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 
                      0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
                      0-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
                      0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.65 7.65 0 012.01-.27c.68 0 
                      1.36.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 
                      1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 
                      1.93-.01 2.2 0 .21.15.46.55.38A8.001 8.001 0 0016 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/CyberCat45701"
                style={{ display: 'flex', alignItems: 'center', fontSize: '32px' }}
              >
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
