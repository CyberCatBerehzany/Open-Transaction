import React, { useContext }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/style1.css';
import SubscriptionCard from '../components/SubscriptionCard'; 
import { LanguageContext } from '../context/LanguageContext';
import ua from '../translations/ua';
import en from '../translations/en';

const SubscriptionsPage = () => {
  const { language } = useContext(LanguageContext); 
  const t = language === 'ua' ? ua : en; 
  return (
    <div className="container">
      <div className="row">
        <div className="cards mt-5">
          <SubscriptionCard
            title="Ukrainian"
            price="99"
            description="This subscription provides the ability to integrate with Ukrainian banks"
          />
          <SubscriptionCard
            title="European"
            price="129"
            description="This subscription provides the ability to integrate with European banks."
          />
          <SubscriptionCard
            title="International"
            price="200"
            description="This subscription provides the ability to integrate with International Banks."
          />
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog">
        <div className="modal-content">
         <div className="modal-header">
          <h3 className="modal-title" id="exampleModalLabel">{t.modal.title}</h3>
           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div className="modal-body">
          {t.modal.body}
         </div>
         <div className="modal-footer">
          <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">{t.modal.close}</button>
         </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
