<script setup>
import Header from "../components/header/Header.vue";
import AsteroidContainer from "../components/asteroid-container/AsteroidContainer.vue";
import Graph from "../components/graph/Graph.vue";
import StatsGrid from "../components/stats-grid/StatsGrid.vue";
import Footer from "../components/footer/Footer.vue";
import { ref, onMounted, watch } from "vue";
import { mostRecentAsteroidArray } from "../functions/dataSort";

const fetchedData = ref([]);
const singleAsteroid = ref(null);
const loading = ref(true);
const error = ref(null);
const index = ref(0);
const showRandom = ref(true);

const getData = async () => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${
        import.meta.env.VITE_SOME_KEY
      }`
    );
    const data = await response.json();
    fetchedData.value = mostRecentAsteroidArray(data.near_earth_objects);
    singleAsteroid.value = fetchedData.value[index.value];
    loading.value = false;
  } catch (err) {
    error.value = err;
    console.error(err);
  }
};

const incrementIndex = () => {
  if (index.value !== fetchedData.value.length - 1) {
    return index.value++;
  }
};

const decreaseIndex = () => {
  if (index.value !== 0) {
    return index.value--;
  }
};

const randomise = () => {
  const tempIndex = setInterval(() => {
    showRandom.value = false;
    index.value = Math.floor(Math.random() * fetchedData.value.length);
  }, 50);
  setTimeout(() => {
    clearInterval(tempIndex);
    showRandom.value = true;
  }, 3000);
};

watch(index, (newIndex) => {
  loading.value = true;
  index.value = newIndex;
  singleAsteroid.value = fetchedData.value[newIndex];
  //sodass es eine neue Ladung von Chartjs auslöst
  setTimeout(() => {
    loading.value = false;
  }, 0);
});

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="layout-grid">
    <header class="header-wrapper">
      <Header
        :index="index"
        :showRandom="showRandom"
        :loading="loading"
        :data-size="fetchedData?.length"
        @incrementIndex="incrementIndex"
        @decreaseIndex="decreaseIndex"
        @randomise="randomise"
      />
    </header>
    <aside class="asteroid">
      <AsteroidContainer
        :fetched-data="singleAsteroid"
        :loading="loading"
        :index="index"
      />
    </aside>
    <section class="stats-div">
      <StatsGrid :fetched-data="singleAsteroid" :loading="loading" />
    </section>
    <section class="graph-div">
      <Graph :fetched-data="singleAsteroid" :loading="loading" />
    </section>
    <footer class="footer-wrapper">
      <Footer />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/stylesheets/layout/main";
</style>
