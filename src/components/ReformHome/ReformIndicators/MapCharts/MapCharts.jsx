import React from "react";
import "./MapCharts.css";
import Map from '../../../../data/mapchart.png';

function MapCharts() {
  return (
    <>
      <div className="mapcharts-indicators-main-container">
        <img alt="mapchart" src={Map}></img>
        <img alt="mapchart" src={Map}></img>
      </div>
    </>
  );
}

export default MapCharts;
