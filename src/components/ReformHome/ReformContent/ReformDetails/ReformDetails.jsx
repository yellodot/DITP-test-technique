import React from 'react';
import './ReformDetails.css';
import Data from '../../../../data/metadata_mesure.json';
import InfoIcon from "../../../../icons/system/information-fill.svg";

function ReformDetails() {

  return (
    <>
      <div className='reform_details_container'>
        <div className='reform__main_title'>Responsables <img src={InfoIcon}></img></div>
        <table className='reform_details__table'>
          <tr className='table__headers'>
            <th>Ministère</th>
            <th>Directeur d'Administration Centrale</th>
            <th>Chef de projet national</th>
          </tr>
          <tr className='table__rows'>
            <td className='table__ministere'>{Data[0].ministere}</td>
            <td className='table__dac'>{Data[0].dac}</td>
            <td className='table__cpn'>{Data[0].chef_proj_nat}</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default ReformDetails