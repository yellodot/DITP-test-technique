import React from 'react'
import './Accordion.css'
import { useState } from 'react';
import Data from '../../data/accordion_faq_data.json';

function Accordion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return
    }
    setActiveAccordion(index);
  };

  return (
    <>
      <div className="container">
        <div>
          <span className="accordion__title">Commentaires de la réforme (maille nationale)</span>
        </div>
        <div className="accordion__questions">
          { Data.map((item, index) =>
              <div key={index} onClick={() => toggleAccordion(index)}>
                <div className="accordion__questions-heading">
                  <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                  <div>
                    {accordion === index ?
                      <span className="vertical">-</span> : <span className="horizontal">+</span>}
                  </div>
                </div>
                <div><p className={accordion === index ? "active" : "inactive"} >{item.answer}</p></div>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}

export default Accordion