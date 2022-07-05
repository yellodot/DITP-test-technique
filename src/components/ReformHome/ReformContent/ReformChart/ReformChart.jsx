import React from "react";
import "./ReformChart.css";
import InfoIcon from "../../../../icons/system/information-fill.svg";

function ReformChart() {
  return (
    <>
      <div className="reform_chart_main_container">
        <div className="reform_chart_title">
          <p className="reform_chart_title__text">
          Taux d'avancement de la réforme
          </p>
          <img alt="info-icon" src={InfoIcon}></img>
        </div>
        <div className="reform_chart__chart">
        </div>
        <div >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker
                id="min"
                viewBox="0 0 10 10"
                refX="4"
                refY="4"
                markerWidth="4"
                markerHeight="4"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  strokeWidth="2"
                />
              </marker>
              <marker
                id="median"
                viewBox="0 0 10 10"
                refX="4"
                refY="4"
                markerWidth="4"
                markerHeight="4"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  strokeWidth="2"
                />
              </marker>
              <marker
                id="max"
                viewBox="0 0 10 10"
                refX="4"
                refY="4"
                markerWidth="4"
                markerHeight="4"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  strokeWidth="2"
                />
              </marker>
            </defs>
            <path
              d="M20,60a35,35 0 1,1 60,0"
              stroke="#008000"
              strokeWidth="5"
              pathLength="100"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="100 35"
              markerEnd="url(#max)"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default ReformChart;
