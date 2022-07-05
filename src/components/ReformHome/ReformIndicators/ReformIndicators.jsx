import React from "react";
import "./ReformIndicators.css";
import EvolutionChart from "./EvolutionChart/EvolutionChart";
import MapCharts from "./MapCharts/MapCharts";

function ReformIndicators() {
  return (
    <>
      <div className="reform_indicators_main_container">
        <MapCharts />
        <EvolutionChart />
      </div>
    </>
  );
}

export default ReformIndicators;
