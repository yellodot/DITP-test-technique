import React from "react";
import { useState, createContext } from "react";
import ReformContent from "./ReformContent/ReformContent";
import ReformIndicators from "./ReformIndicators/ReformIndicators";
import Accordion from "./Accordion/Accordion";
import SelectReform from "../SelectReform/SelectReform";
import Data from "../../data/metadata_mesure.json";

export const ReformContext = createContext();

function ReformHome() {

  const [selectedReform, setSelectedReform] = useState(Data[0].mesure);

  const handleSelectReform = (e) => {
    setSelectedReform(e.value);
  };

  return (
    <div className="reformhome-main-container">
      <ReformContext.Provider value={selectedReform}>
        <SelectReform handleSelectReform={handleSelectReform} />
        <ReformContent />
        <ReformIndicators />
        <Accordion />
      </ReformContext.Provider>
    </div>
  );
}

export default ReformHome;
