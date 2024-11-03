<script setup>
import Header from "../components/header/Header.vue";
import AsteroidContainer from "../components/asteroid-container/AsteroidContainer.vue";
import Graph from "../components/graph/Graph.vue";
import StatsGrid from "../components/stats-grid/StatsGrid.vue";
import Footer from "../components/footer/Footer.vue";

defineProps({
  fetchedData: Array,
  loading: Boolean,
});
</script>

<template>
  <Header :fetched-data="fetchedData" :loading="loading" />
  <main class="main-wrapper">
    <AsteroidContainer :fetched-data="fetchedData" :loading="loading" />
    <StatsGrid :fetched-data="fetchedData" :loading="loading" />
    <Graph :fetched-data="fetchedData" :loading="loading" />
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
@use "../assets/stylesheets/layout/main";
</style>
