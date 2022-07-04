import React from "react";
import "./Accordion.css";
import Data from "../../../data/accordion_faq_data.json";
import InfoIcon from "../../../icons/system/information-fill.svg";
import AccordionItem from "./AccordionItem";

function Accordion() {

  return (
    <>
      <div className="accordion_container">
        <div className="accordion__title">
          Commentaires de la réforme (maille nationale)
          <img alt='info-icon' src={InfoIcon}></img>
        </div>
        <div className="accordion__questions">
          {Data.map((item) => (
            <AccordionItem {...item}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accordion;
