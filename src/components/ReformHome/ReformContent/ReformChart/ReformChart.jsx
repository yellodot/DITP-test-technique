import React, { useContext } from "react";
import "./ReformChart.css";
import InfoIcon from "../../../../icons/system/information-fill.svg";
import { ReformContext } from "../../ReformHome";
import Data from "../../../../data/metadata_mesure.json";

function ReformChart() {
  const reform = useContext(ReformContext);
  const reformMetadata = Data.filter((el) => el.mesure === reform);

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
          <div className="taux-avancement-container">
            {/* <div className="taux-avancement-title">Taux d'avancement :</div> */}
            <ul className="taux-avancement-list">
              <li>
                <span className="taux-avancement-list__taux">
                  {reform && reformMetadata[0].pourcentage_cible_min}
                </span>
                <div className="taux-avancement-list__labels">
                  <span class="dot-min"></span> minimum
                </div>
              </li>
              <li>
                <span className="taux-avancement-list__taux">
                  {reform && reformMetadata[0].pourcentage_cible_median}
                </span>
                <div>
                  <span class="dot-med"></span> médian
                </div>
              </li>
              <li>
                <span className="taux-avancement-list__taux">
                  {reform && reformMetadata[0].pourcentage_cible_max}
                </span>
                <div>
                  <span class="dot-max"></span> maximum
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReformChart;
