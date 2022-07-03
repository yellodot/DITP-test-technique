import React, { useState } from "react";
import "./EvolutionChart.css";
import Select from "react-select";
import DepartementalData from "../../../data/barometre_resultats_detail_departemental.json";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  TimeScale,
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
  scales: {
    x: {
      type: "time",
    },
  },
};

function EvolutionChart() {
  const [selectedDepartements, setSelectedDepartements] = useState([]);

  // fill the dropdown options with the departements
  const selectOptions = DepartementalData.map((el) => {
    return { value: el.code_departement, label: el.libelle_departement };
  }).filter(
    (item, index, arr) =>
      arr.findIndex(
        (indexEl) => JSON.stringify(indexEl) === JSON.stringify(item)
      ) === index
  );

  // get the ids of the selected departements
  const handleSelectDepartement = (e) => {
    const idDepartements = e.map((el) => parseInt(el.value));
    setSelectedDepartements(idDepartements);
  };

  // creating random colors for datasets
  const randomColors = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  // get the data of the selected departements from the json file
  const dataSelectedDepartements = DepartementalData.filter((el) => {
    if (
      el.id_indicateur === "km-amenagement-cyclables-securises" &&
      selectedDepartements.includes(parseInt(el.code_departement))
    )
      return true;
  });

  const labels = dataSelectedDepartements.map((el) => el.date);

  const preStructuredData = dataSelectedDepartements.map((el) => {
    return { label: el.libelle_departement, data: el.valeur };
  });

  const datasets = Object.values(
    preStructuredData.reduce((acc, cur) => {
      const key = cur.label;
      acc[key] = acc[key] || {
        label: cur.label,
        data: [],
        backgroundColor: randomColors(),
      };
      acc[key].data.push(cur.data);
      return acc;
    }, {})
  );

  const dataEvolutionChart = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <>
    <div className="evolution_chart_main_container">
      <Select
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          options={selectOptions}
          placeholder='Sélectionner un département...'
          onChange={(e) => handleSelectDepartement(e)}
        />
        <Line options={options} data={dataEvolutionChart} />
    </div>

    </>
  );
}

export default EvolutionChart;
