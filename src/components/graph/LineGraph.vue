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
import { getCloseApproachYears, getMissDistance } from "../../functions/graph";
import { computed } from "vue";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const props = defineProps({
  fetchedData: Object,
  loading: Boolean,
});

const xAxis = computed(() => getCloseApproachYears(props.fetchedData));
const yAxis = computed(() => getMissDistance(props.fetchedData));

const asteroidName = computed(() => props?.fetchedData?.name);

const data = {
  labels: xAxis?.value,
  datasets: [
    {
      label: `${asteroidName.value}`,
      color: "#FFFFFF",
      backgroundColor: "#FFFFFF",
      data: yAxis?.value,
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
          const year = xAxis?.value[context.dataIndex];
          const missDistance = yAxis?.value[context.dataIndex];
          return `Jahr ${year}: ${parseFloat(missDistance).toFixed(3)} AE `;
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
