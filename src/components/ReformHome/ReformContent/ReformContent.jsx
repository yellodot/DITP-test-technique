import React, { useContext } from "react";
import ReformChart from './ReformChart/ReformChart';
import './ReformContent.css';
import ReformDetails from './ReformDetails/ReformDetails';
import { ReformContext } from "../ReformHome";

function ReformContent() {

  const reform = useContext(ReformContext);

  console.log('reform', reform);

  return (
    <>
    <div className='reform-content-container'>
      <p className='reform-content-container__reformtitle'>{reform}</p>
      <div className='reform-content-container__chartdetailsblock'>
        <ReformChart />
        <ReformDetails />
      </div>

    </div>

    </>
  )
}

export default ReformContent