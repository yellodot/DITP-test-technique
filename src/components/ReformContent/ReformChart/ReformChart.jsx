import React from "react";
import "./ReformChart.css";
import InfoIcon from "../../../icons/system/information-fill.svg";

function ReformChart() {
  return (
    <>
      <div className="reform_chart_main_container">
        <div className="reform_chart_title">
          Taux d'avancement de la réforme{" "}
          <img alt="info-icon" src={InfoIcon}></img>
        </div>
        <div className="reform_chart__chart">
          {/* <div class="gauge">
            <div class="gauge__body">
              <div class="gauge__fill"></div>
              <div class="gauge__cover"></div>
            </div>
          </div> */}
          {/* <div className="skill">
            <div className="outer">
              <div className="inner">
                <div className="percentage_median">•</div>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
          </svg> */}

          
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
                  stroke-width="2"
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
                  stroke-width="2"
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
                  stroke-width="2"
                />
              </marker>
            </defs>
            <path
              d="M20,60a35,35 0 1,1 60,0"
              stroke="#008000"
              stroke-width="5"
              pathLength="100"
              fill="none"
              stroke-linecap="round"
              stroke-dasharray="100 35"
              marker-end="url(#max)"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default ReformChart;
