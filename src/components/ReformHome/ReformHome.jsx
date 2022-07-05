import React from "react";
import { useState, createContext } from "react";
import ReformContent from "./ReformContent/ReformContent";
import ReformIndicators from "./ReformIndicators/ReformIndicators";
import Accordion from "./Accordion/Accordion";
import SelectReform from "../SelectReform/SelectReform";

export const ReformContext = createContext();

function ReformHome() {

  const [selectedReform, setSelectedReform] = useState("Déployer le plan vélo");

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
