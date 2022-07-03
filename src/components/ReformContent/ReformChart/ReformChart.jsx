import React from 'react';
import './ReformChart.css';
import InfoIcon from "../../../icons/system/information-fill.svg";

function ReformChart() {
  return (
    <>
      <div className='reform_chart_main_container'>
        <div className='reform_chart_title'>Taux d'avancement de la réforme <img src={InfoIcon}></img></div>
        <div className='reform_chart__chart'>
            Graphique
        </div>
      </div>
    </>
  )
}

export default ReformChart