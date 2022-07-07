import React from "react";
import "./SelectReform.css";
import Select from "react-select";
import MetadataReforms from "../../data/metadata_mesure.json";

function SelectReform({ handleSelectReform }) {
  const selectOptions = MetadataReforms.map((el) => {
    return {
      value: el.mesure,
      label: el.mesure,
    };
  });

  return (
    <>
      <div className="selectreform-main-container">
        <div className="selectreform-main-container__dropdown">
          <Select
            name="reforms"
            className="basic-multi-select"
            classNamePrefix="select"
            options={selectOptions}
            placeholder="Sélectionner une réforme..."
            onChange={(e) => handleSelectReform(e)}
            defaultValue={selectOptions.filter(
              (option) => option.label === MetadataReforms[0].mesure
            )}
          />
        </div>
      </div>
    </>
  );
}

export default SelectReform;
