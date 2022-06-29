import React from 'react';
import ReformChart from './ReformChart/ReformChart';
import './ReformContent.css';
import ReformDetails from './ReformDetails/ReformDetails';

function ReformContent() {
  return (
    <>
    <div className='reform_content_container'>
      <ReformChart />
      <ReformDetails />
    </div>

    </>
  )
}

export default ReformContent