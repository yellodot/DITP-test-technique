import React, { useState } from "react";
import "./ReformIndicators.css";
import Select from 'react-select';
import DepartementalData from "../../data/barometre_resultats_detail_departemental.json";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// options du graphique d'évolution
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Evolution de l'indicateur",
    },
  },
};

function ReformIndicators() {

    // récupérer les labels + id des départements pour les mettre dans le dropdown
    const selectOptions = DepartementalData
    .map((item) => {return { value: item.code_departement, label: item.libelle_departement };})
    .filter((item, index, arr) => arr.findIndex(indexEl => (JSON.stringify(indexEl) === JSON.stringify(item))) === index)

    // toute la data du département 
  const dataJura = DepartementalData.filter((data) => {
    if (
      data.id_indicateur === "km-amenagement-cyclables-securises" &&
      data.code_departement === 39
    )
      return true;
  });

  const [dataEvolutionChart, setDataEvolutionChart] = useState({
    labels: dataJura.map((data) => {
      return data.date;
    }),
    // départements sélectionnés
    datasets: [
      {
        label: dataJura[0].libelle_departement,
        data: dataJura.map((data) => {
          return data.valeur;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });

  return (
    <>
      <div className="reform_indicators_main_container">
        <Select
            isMulti
            name="colors"
            className="basic-multi-select"
            classNamePrefix="select"
            options={selectOptions}
        />
        <Line options={options} data={dataEvolutionChart} />
      </div>
    </>
  );
}

export default ReformIndicators;
