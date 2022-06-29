import React from 'react';
import './ReformDetails.css';
import Data from '../../../data/metadata_mesure.json';

function ReformDetails() {

  return (
    <>
      <div className='reform_details_container'>
        <div>Responsables</div>
        <table className='reform_details__table'>
          <tr className='table__headers'>
            <th>Ministère</th>
            <th>Directeur d'Administration Centrale</th>
            <th>Chef de projet national</th>
          </tr>
          <tr className='table__rows'>
            <td>{Data[0].ministere}</td>
            <td>{Data[0].dac}</td>
            <td>{Data[0].chef_proj_nat}</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default ReformDetails