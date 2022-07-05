import React from "react";
import "./MapCharts.css";
import MapElement from "./MapElement";
import Map from '../../../../data/mapchart.png'


function MapCharts() {
    
  return (
    <>
      <div className="mapcharts-indicators-main-container">
        <img alt='mapchart' src={Map}></img>
        <img alt='mapchart' src={Map}></img>
      </div>
      {/* <MapElement /> */}
    </>
  );
}

export default MapCharts;
