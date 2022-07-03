import React from "react";
import Vue from 'https://unpkg.com/vue@3';
import "./MapCharts.css";


function MapCharts() {
    
  return (
    <>
      <div>MapCharts</div>
      <map-chart title='Map widget' indicateur="cas_positifs"></map-chart>
    </>
  );
}

export default MapCharts;
