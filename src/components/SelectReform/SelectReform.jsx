import React, { useState } from 'react';
import './SelectReform.css';
import Select from "react-select";
import MetadataReforms from '../../data/metadata_mesure.json';
import { useNavigate } from "react-router-dom";

function SelectReform() {

  const [selectedReform, setSelectedReform] = useState("");
  const navigate = useNavigate();

  const selectOptions = MetadataReforms.map((el) => {
    return { value: el.mesure, label: el.mesure };
  })

  const handleSelectReform = (e) => {
    setSelectedReform(e.value)
    navigate(`${selectedReform}`)
  }

  return (
    <>
      <div className='selectreform-main-container'>
        <div className='selectreform-main-container__dropdown'>
          <Select
            name="reforms"
            className="basic-multi-select"
            classNamePrefix="select"
            options={selectOptions}
            placeholder='Sélectionner une réforme...'
            onChange={(e) => handleSelectReform(e)}
          />
        </div>
      </div>
    </>
  )
}

export default SelectReform