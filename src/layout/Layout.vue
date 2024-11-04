<script setup>
import Header from "../components/header/Header.vue";
import AsteroidContainer from "../components/asteroid-container/AsteroidContainer.vue";
import Graph from "../components/graph/Graph.vue";
import StatsGrid from "../components/stats-grid/StatsGrid.vue";
import Footer from "../components/footer/Footer.vue";

defineProps({
  fetchedData: Object,
  loading: Boolean,
  index: Number,
});
</script>

<template>
  <Header :index="index" />
  <main class="main-wrapper">
    <AsteroidContainer
      :fetched-data="fetchedData"
      :loading="loading"
      :index="index"
    />
    <StatsGrid :fetched-data="fetchedData" :loading="loading" />
    <Graph :fetched-data="fetchedData" :loading="loading" />
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
@use "../assets/stylesheets/layout/main";
</style>
