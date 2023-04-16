import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import dataItems from "../data/data.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type infoProp = {
  dataSelected: number;
};

export function BarrasApiladas({ dataSelected }: infoProp) {
  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = dataItems.Meses;

  const data0 = {
    labels,
    datasets: dataItems.VentasPorMayor,
  };

  const data1 = {
    labels,
    datasets: dataItems.VentasPorMenor,
  };

  const data2 = {
    labels,
    datasets: dataItems.UsuarioPorCiudad,
  };

  if (dataSelected === 1) {
    return <Bar options={options} data={data1} />;
  }

  if (dataSelected === 2) {
    return <Bar options={options} data={data2} />;
  }

  return <Bar options={options} data={data0} />;
}
