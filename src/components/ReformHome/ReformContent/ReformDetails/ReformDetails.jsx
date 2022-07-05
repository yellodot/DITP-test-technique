import React, { useContext } from "react";
import "./ReformDetails.css";
import Data from "../../../../data/metadata_mesure.json";
import InfoIcon from "../../../../icons/system/information-fill.svg";
import { ReformContext } from "../../ReformHome";

function ReformDetails() {
  const reform = useContext(ReformContext);
  const reformMetadata = Data.filter((el) => el.mesure === reform);

  return (
    <>
      <div className="reform_details_container">
        <div className="reform__main_title">
          Responsables <img alt="icon" src={InfoIcon}></img>
        </div>
        <table className="reform_details__table">
          <tr className="table__headers">
            <th>Ministère</th>
            <th>Directeur d'Administration Centrale</th>
            <th>Chef de projet national</th>
          </tr>
          <tr className="table__rows">
            <td className="table__ministere">
              {reform ? reformMetadata[0].ministere : ""}
            </td>
            <td className="table__dac">
              {reform ? reformMetadata[0].dac : ""}
            </td>
            <td className="table__cpn">
              {reform ? reformMetadata[0].chef_proj_nat : ""}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default ReformDetails;
