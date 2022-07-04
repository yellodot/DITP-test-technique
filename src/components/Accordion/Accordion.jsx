import React from "react";
import "./Accordion.css";
import { useState } from "react";
import Data from "../../data/accordion_faq_data.json";
import InfoIcon from "../../icons/system/information-fill.svg";
import AccordionItem from "./AccordionItem";

function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(false);
  const [activeMult, setActiveMult] = useState([]);

  const toggleAccordion = (id) => {
    if (id === activeAccordion) {
      return setActiveAccordion(null);
    }
    setActiveAccordion(id);
  };

  // const toggleDisplay = () => {
  //   setActiveAccordion(!activeAccordion)
  // }

  

  return (
    <>
      <div className="accordion_container">
        <div className="accordion__title">
          Commentaires de la réforme (maille nationale)
          <img src={InfoIcon}></img>
        </div>
        <div className="accordion__questions">
          {Data.map((item, index) => (
            <AccordionItem toggleAccordion={toggleAccordion} index={index} activeAccordion={activeAccordion} item={item}/>
            // <AccordionItem toggleDisplay={toggleDisplay} index={index} activeAccordion={activeAccordion} item={item}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accordion;
