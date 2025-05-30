import React, { useContext }from 'react';
import '../styles/style1.css';
import { LanguageContext } from '../context/LanguageContext';
import ua from '../translations/ua';
import en from '../translations/en';

function SubscriptionCard({ title, price, description }) {
  const { language } = useContext(LanguageContext); 
  const t = language === 'ua' ? ua : en; 
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3 className="text-center">{title}</h3>
      </div>
      <div className="card-body">
        <h1 className="text-center mt-3">${price}</h1>
        <hr className="my-4" />
        <h4 className="text-center fw-normal">{description}</h4>
      </div>
      <button
        type="button"
        className="buy-button mx-auto my-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {t.S1.subscribe}
      </button>
    </div>
  );
}
export default SubscriptionCard;