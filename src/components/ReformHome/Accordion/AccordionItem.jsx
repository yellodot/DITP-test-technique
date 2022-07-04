import React, { useState } from "react";
import './AccordionItem.css';
import ArrowUp from '../../../icons/system/arrow-up-s-line.svg'
import ArrowDown from '../../../icons/system/arrow-down-s-line.svg'

function AccordionItem({...item}) {

  const [activeAccordion, setActiveAccordion] = useState(false);

  const toggleAccordion = () => {
    setActiveAccordion(!activeAccordion);
  };

  return (
    <div>
      <div className="accordion__questions-heading" onClick={toggleAccordion}>
        <div className={activeAccordion ? "active" : ""}>
          {item.question}
        </div>
        <div>
          {activeAccordion ? (
            <span className="vertical"><img src={ArrowUp} alt='icon-arrow'></img></span>
          ) : (
            <span className="horizontal"><img src={ArrowDown} alt='icon-arrow'></img></span>
          )}
        </div>
      </div>
      <div>
        <p className={activeAccordion ? "active" : "inactive"}>
          {item.answer}
        </p>
      </div>
    </div>
    
  );
}

export default AccordionItem;
