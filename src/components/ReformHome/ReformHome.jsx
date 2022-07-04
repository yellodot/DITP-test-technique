import React from 'react'
import ReformContent from './ReformContent/ReformContent'
import ReformIndicators from './ReformIndicators/ReformIndicators'
import Accordion from './Accordion/Accordion';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function ReformHome() {
  return (
    <div>
      <Header />
      <ReformContent />
      <ReformIndicators />
      <Accordion />
      <Footer />
    </div>
  )
}

export default ReformHome