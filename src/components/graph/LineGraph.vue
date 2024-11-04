<script setup>
import { Line } from "vue-chartjs";
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
import { dataJson } from "../../functions/dataJson.js";
import { getCloseApproachYears, getMissDistance } from "../../functions/graph";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const xAxis = getCloseApproachYears(dataJson);
const yAxis = getMissDistance(dataJson);

const asteroidName = dataJson.name;

const data = {
  labels: xAxis,
  datasets: [
    {
      label: `${asteroidName}`,
      color: "#FFFFFF",
      backgroundColor: "#FFFFFF",
      data: yAxis,
      borderColor: "#d36dde",
      tension: 0.5,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: "#FFFFFF",
      },
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const year = xAxis[context.dataIndex];
          const missDistance = yAxis[context.dataIndex];
          return `Jahr ${year}: ${missDistance} AE `;
        },
      },
    },
  },
  scales: {
    y: {
      title: {
        text: "AE - 150 Mio Km",
        color: "#FFFFFF",
        display: true,
        font: {
          size: 16,
          family: "Space Grotesk",
        },
      },
    },
    x: {
      title: {
        text: "Jahr (Vergangenheit und Zukunft)",
        color: "#FFFFFF",
        display: true,
        font: {
          size: 16,
          family: "Space Grotesk",
        },
      },
    },
  },
};
</script>

<template>
  <div class="lineGraph">
    <Line :data="data" :options="options" />
  </div>
</template>

<style scoped lang="scss">
@use "../../assets/stylesheets/components/linegraph";
</style>
