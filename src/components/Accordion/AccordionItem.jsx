import React from 'react'

function AccordionItem({toggleAccordion, index, activeAccordion, item}) {
  return (
    <div key={index} onClick={() => toggleAccordion(index)}>
    <div className="accordion__questions-heading">
      <div className={activeAccordion === index ? "active" : ""}>
        {item.question}
      </div>
      <div>
        {activeAccordion === index ? (
          <span className="vertical">-</span>
        ) : (
          <span className="horizontal">+</span>
        )}
      </div>
    </div>
    <div>
      <p
        className={activeAccordion === index ? "active" : "inactive"}
      >
        {item.answer}
      </p>
    </div>
  </div>
  )
}

export default AccordionItem