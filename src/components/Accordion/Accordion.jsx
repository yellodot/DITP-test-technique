import React from 'react'
import './Accordion.css'
import { useState } from 'react';
import Data from '../../data/accordion_faq_data.json';

function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  function toggleAccordion(id) {
    if (id === activeAccordion) {
      return setActiveAccordion(null);
    }
    setActiveAccordion(id);
  };

  return (
    <>
      <div className="accordion_container">
        <div className='accordion__title'>
          Commentaires de la réforme (maille nationale)
        </div>
        <div className="accordion__questions">
          { Data.map((item, index) =>
              <div key={index} onClick={() => toggleAccordion(index)}>
                <div className="accordion__questions-heading">
                  <h3 className={activeAccordion === index ? "active" : ""}>{item.question}</h3>
                  <div>
                    {activeAccordion === index ?
                      <span className="vertical">-</span> : <span className="horizontal">+</span>}
                  </div>
                </div>
                <div><p className={activeAccordion === index ? "active" : "inactive"} >{item.answer}</p></div>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}

export default Accordion