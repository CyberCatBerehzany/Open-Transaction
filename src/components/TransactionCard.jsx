import React, {useContext} from 'react';
import { LanguageContext } from '../context/LanguageContext';
import ua from '../translations/ua';
import en from '../translations/en';

const TransactionCard = ({ transaction }) => {
    const { language } = useContext(LanguageContext); 
    const t = language === 'ua' ? ua : en; 
  return (
    <div className="col-sm-12 col-lg-4 mt-3">
      <div className="card-custom mb-4 rounded-3 shadow-sm">
        <div className="card-header-custom py-3">
          <h4 className="my-0 fw-normal text-center">{t.transactions.title}</h4>
        </div>
        <div className="card-body text-center">
          <p className="body-text">
            {t.transactions.sender}: <span>{transaction.sender}</span>
          </p>
          <p className="body-text">
            {t.transactions.recipient}: <span>{transaction.recipient}</span>
          </p>
          <p className="body-text">
            {t.transactions.sum}: <span>{transaction.sum}</span>
          </p>
          <p className="body-text">
            {t.transactions.currency}: <span>{transaction.currency}</span>
          </p>
          <p className="body-text">
            {t.transactions.number}: <span>{transaction.number}</span>
          </p>
          <p className="body-text">
            {t.transactions.date}: <span>{transaction.date}</span>
          </p>
          <hr className="m-3" />
          <div className="d-flex">
            <button
              className="ms-auto more my-3"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
