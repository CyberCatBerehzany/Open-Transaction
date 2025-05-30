import React, { useState, useContext } from 'react';
import TransactionCard from '../components/TransactionCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { LanguageContext } from '../context/LanguageContext';
import ua from '../translations/ua';
import en from '../translations/en';

const transactionsCaritas = [
  {
    sender: 'Fund',
    recipient: 'Production',
    sum: '1000.00',
    currency: 'USD',
    number: '123456',
    date: '30.05.2025',
  },
  {
    sender: 'Fund',
    recipient: 'Production',
    sum: '1000.00',
    currency: 'USD',
    number: '123456',
    date: '30.05.2025',
  },
  {
    sender: 'Fund',
    recipient: 'Production',
    sum: '1000.00',
    currency: 'USD',
    number: '123456',
    date: '30.05.2025',
  },
];

const MainPage = () => {
  const [selectedFund, setSelectedFund] = useState('none');
  const [showTransactions, setShowTransactions] = useState(false);

  const handleSelectChange = (e) => {
    setSelectedFund(e.target.value);
    setShowTransactions(false);
  };

  const handleShowClick = () => {
    if (selectedFund !== 'none') {
      setShowTransactions(true);
    } else {
      setShowTransactions(false);
    }
  };

  const { language } = useContext(LanguageContext); 
  const t = language === 'ua' ? ua : en; 

  return (
    <main className="container mt-4">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                {t.modal.title}
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрити"
              ></button>
            </div>
            <div className="modal-body">{t.modal.body}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
              >
                {t.modal.close}
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="selector-funds mt-3">
        <select
          className="form-select"
          name="selectFund"
          id="fundsSelector"
          aria-expanded="false"
          value={selectedFund}
          onChange={handleSelectChange}
        >
          <option value="none">{t.selector.selectFund}</option>
          <option value="caritas">{t.selector.caritas}</option>
        </select>
        <button
          className="btn btn-primary mt-3"
          id="showFundBtn"
          onClick={handleShowClick}
        >
          {t.button.ShowInformation}
        </button>
      </section>

      {showTransactions && selectedFund === 'caritas' && (
        <div className="mt-3" id="caritasBlock">
          <hr className="mb-5" />
          <div className="caritas-backround mx-auto">
            <h2 className="Caritas">{t.caritas.caritas}</h2>
          </div>
          <div className="cards">
            <div className="container">
              <div className="row">
                {transactionsCaritas.map((tx, i) => (
                  <TransactionCard key={i} transaction={tx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MainPage;
